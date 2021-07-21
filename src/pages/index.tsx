import Head from "next/head"
import { GetStaticProps } from "next"
import { stripe } from "../services/stripe";

// components
import { SubscribeButton } from "../components/SubscribeButton"

// style
import styles from "../styles/home.module.scss"

interface HomeProps {
	product: {
		priceId: string,
		amount: number,
	}
}

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export default function Home({ product }: HomeProps) {
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
						<span>
							for
							{" "}
							{product.amount}
							{" "}
							month
						</span>
					</p>
					<SubscribeButton priceId={product.priceId} />
				</section>
				<img src="/images/avatar.svg" alt="Girl coding" />
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const price = await stripe.prices.retrieve("price_1JFjxKIQF5o15nSoSqRs0GV6", {
		expand: ["product"],
	})

	const product = {
		priceId: price.unit_amount,
		amount: new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(price.unit_amount / 100),
	}

	return {
		props: {
			product,
		},
		revalidate: 60 * 60 * 24, // 24 hours
	}
}
