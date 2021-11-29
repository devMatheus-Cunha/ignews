/* eslint-disable no-alert */
import { useSession, signIn } from "next-auth/client";

// api
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

// types
import { SubscribeButtonProps } from "./types";

// sytles
import styles from "./style.module.scss";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
	const [session] = useSession();

	// functions
	const handleSubcribe = async () => {
		if (!session) {
			signIn("github");
			return true;
		}
		// create checkout session
		try {
			const response = await api.post("/subscribe");

			const { sessionId } = response.data;

			const stripe = await getStripeJs();

			await stripe.redirectToCheckout({ sessionId });
		} catch (error) {
			alert(error.message);
		}
		return true;
	};

	// -------------------------------------------------
	// Render
	// ------------------------------------ -------------
	return (
		<button
			type="button"
			className={styles.subscribeButton}
			onClick={handleSubcribe}
		>
			Subscribe now
		</button>
	);
}
