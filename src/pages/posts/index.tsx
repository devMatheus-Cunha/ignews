/* eslint-disable max-len */
import React from "react";
import Head from "next/head";

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
