/* eslint-disable max-len */
import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

// prismic
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";

// styles
import styles from "./styles.module.scss";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
const Posts = () => {
	return (
		<>
			<Head>
				<title>Posts | Ig.news</title>
			</Head>

			<main className={styles.container}>
				<div className={styles.posts}>
					<a href="/">
						<time>12 de março de 2021</time>
						<strong>What is Lorem Ipsum?</strong>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industrys standard dummy
						</p>
					</a>

					<a href="/">
						<time>12 de março de 2021</time>
						<strong>What is Lorem Ipsum?</strong>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industrys standard dummy
						</p>
					</a>

					<a href="/">
						<time>12 de março de 2021</time>
						<strong>What is Lorem Ipsum?</strong>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industrys standard dummy
						</p>
					</a>
				</div>
			</main>
		</>
	);
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
	const prismic = getPrismicClient();

	const response = await prismic.query([
		Prismic.predicates.at("document.type", "post"),
	], {
		fetch: ["title", "content"],
		pageSize: 100,
	});

	console.log(response.results);

	return {
		props: {},
	};
};
