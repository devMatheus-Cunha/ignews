import React from "react";

// next
import { useSession } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

// prismic
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../services/prismic";

// interfaces
import { IPostsProps } from "../../interfaces/posts";

// styles
import styles from "./styles.module.scss";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
const Posts = ({ posts }:IPostsProps) => {
	const [session] = useSession()
	return (
		<>
			<Head>
				<title>Posts | Ig.news</title>
			</Head>

			<main className={styles.container}>
				<div className={styles.posts}>
					{posts.map((data) =>	(
						<Link
							href={
								session?.activeSubscription ? `/posts/${data.slug}` : `/posts/preview/${data.slug}`
							}
							key={data.slug}
						>
							<a>
								<time>{data.updatedAt}</time>
								<strong>{data.title}</strong>
								<p>
									{data.excerpt}
								</p>
							</a>
						</Link>
					))}
				</div>
			</main>
		</>
	);
};

export default Posts;

// -------------------------------------------------
// Export Get Static Props
// -------------------------------------------------
export const getStaticProps: GetStaticProps = async () => {
	const prismic = getPrismicClient();

	const response = await prismic.query(
		[Prismic.predicates.at("document.type", "pos")],
		{
			fetch: ["title", "content"],
			pageSize: 100,
		},
	);

	const posts = response.results.map((post: any) => {
		return {
			slug: post.uid,
			title: RichText.asText(post.data.title),
			excerpt: post.data.content.find((content) => content.type === "paragraph")?.text ?? "",
			updatedAt: new Date(post.last_publication_date).toLocaleDateString("pt-BR", {
				day: "2-digit",
				month: "long",
				year: "numeric",
			}),
		}
	})

	return {
		props: { posts },
		redirect: 60 * 30, // 30 minutos
	};
};
