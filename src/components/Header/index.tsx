// components
import { SignInButton } from "../SignInButton";
import { ActiveLink } from "../ActiveLink";
// styles
import styles from "./style.module.scss";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export function Header() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src="/images/logo.svg" alt="ig.news" />
				<nav>
					<ActiveLink href="/" activeClassName={styles.active}>
						<a>Home</a>
					</ActiveLink>
					<ActiveLink href="/posts" activeClassName={styles.active}>
						<a>Posts</a>
					</ActiveLink>
				</nav>
				<SignInButton />
			</div>
		</header>
	);
}
