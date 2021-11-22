// types
import { SubscribeButtonProps } from "./types"

// sytles
import styles from "./style.module.scss"

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
