/* eslint-disable react/no-danger */
import { GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";
import Link from "next/link";
import { getPrismicClient } from "../../../services/prismic";

// interfaces
import { IPostProps } from "../../../interfaces/post";

// styles
import styles from "../post.module.scss";

export default function PostPreviw({ post }: IPostProps) {
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
						className={`${styles.postContent} ${styles.previewContent}`}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
					<div className={styles.continueReanding}>
						Wanna continue reading?
						<Link href="/">
							<a>Subscribe now</a>
						</Link>
					</div>
				</article>
			</main>
		</>
	);
}

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

// -------------------------------------------------
// Export Get Static Props
// -------------------------------------------------
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params;

	const prismic = getPrismicClient();
	const response = await prismic.getByUID("pos", String(slug), {});

	const post = {
		slug,
		title: RichText.asText(response.data.title),
		content: RichText.asHtml(response.data.content.splice(0, 3)),
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
