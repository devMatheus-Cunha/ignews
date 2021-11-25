import { signIn, signOut, useSession } from "next-auth/client"

// icons
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"

// style
import styles from "./style.module.scss"

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export function SignInButton() {
	const [session] = useSession()
	// -------------------------------------------------
	// Render
	// ------------------------------------ -------------
	return session ? (
		<button
			type="button"
			className={styles.signInButton}
			onClick={() => signOut()}
		>
			<FaGithub color="#04d361" />
			{session.user.name}
			<FiX color="#737380" className={styles.closeIcon} />
		</button>
	) : (
		<button
			type="button"
			className={styles.signInButton}
			onClick={() => signIn("github")}
		>
			<FaGithub color="#eba417" />
			Sign in with Github
		</button>
	)
}
