import Head from "next/head"

// components
import { SubscribeButton } from "../components/SubscribeButton"

// style
import styles from "../styles/home.module.scss"

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export default function Home() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------
	return (
		<>
			<Head>
				<title>Home | ig.news</title>
			</Head>
			<main className={styles.contentContainer}>
				<section className={styles.hero}>
					<span>Hey, welcome</span>
					<h1>
						News about the
						{" "}
						<span>React</span>
						{" "}
						world.
					</h1>
					<p>
						Get acess to all the publications
						{" "}
						<br />
						<span>for $9.90 month</span>
					</p>
					<SubscribeButton />
				</section>
				<img src="/images/avatar.svg" alt="Girl coding" />
			</main>
		</>
	);
}
