/* eslint-disable no-alert */
import { useSession, signIn } from "next-auth/client";
import { useRouter } from "next/router";

// api
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

// sytles
import styles from "./style.module.scss";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export function SubscribeButton() {
	const [session] = useSession();
	const router = useRouter()

	// functions
	const handleSubcribe = async () => {
		if (!session) {
			signIn("github");
			return;
		}

		if (session.activeSubscription) {
			router.push("/posts")
			return
		}

		try {
			const response = await api.post("/subscribe");

			const { sessionId } = response.data;

			const stripe = await getStripeJs();

			await stripe.redirectToCheckout({ sessionId });
		} catch (error) {
			alert(error.message);
		}
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
