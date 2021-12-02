/* eslint-disable react/no-danger */
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";

// interfaces
import { IPostProps } from "../../interfaces/post";

// styles
import styles from "./post.module.scss";

export default function Post({ post }: IPostProps) {
	console.log(post);

	return (
		<>
			<Head>
				<title>
					{post.title}
					{" "}
					| Ignews
				</title>
			</Head>

			<main className={styles.container}>
				<article className={styles.post}>
					<h1>{post.title}</h1>
					<time>{post.updatedAt}</time>
					<div
						className={styles.postContent}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</article>
			</main>
		</>
	);
}

// -------------------------------------------------
// Export Get Static Props
// -------------------------------------------------
export const getServerSideProps: GetServerSideProps = async ({
	req,
	params,
}) => {
	const session = getSession({ req });
	const { slug } = params;
	const prismic = getPrismicClient(req);

	const response = await prismic.getByUID("pos", String(slug), {});

	const post = {
		slug,
		title: RichText.asText(response.data.title),
		content: RichText.asHtml(response.data.content),
		updatedAt: new Date(response.last_publication_date).toLocaleDateString(
			"pt-BR",
			{
				day: "2-digit",
				month: "long",
				year: "numeric",
			},
		),
	};

	// if (!session) {}

	return {
		props: {
			post,
		},
	};
};
