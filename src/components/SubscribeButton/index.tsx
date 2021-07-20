// sytles
import styles from "./style.module.scss"

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export function SubscribeButton() {
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
