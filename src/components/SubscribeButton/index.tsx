// sytles
import styles from "./style.module.scss"

interface SubscribeButtonProps{
	priceId: string,
}

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
	// -------------------------------------------------
	// Render
	// ------------------------------------ -------------
	return (
		<button
			type="button"
			className={styles.subscribeButton}
		>
			Subscribe now
		</button>
	)
}
