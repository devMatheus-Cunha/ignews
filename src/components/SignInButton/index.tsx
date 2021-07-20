// icons
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"

// style
import styles from "./style.module.scss"

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export function SignInButton() {
	const isUserLoggedIn = true
	// -------------------------------------------------
	// Render
	// ------------------------------------ -------------
	return isUserLoggedIn ? (
		<button
			type="button"
			className={styles.signInButton}
		>
			<FaGithub color="#04d361" />
			Matheus Cunha
			<FiX color="#737380" className={styles.closeIcon} />
		</button>
	) : (
		<button
			type="button"
			className={styles.signInButton}
		>
			<FaGithub color="#eba417" />
			Sign in with Github
		</button>
	)
}
