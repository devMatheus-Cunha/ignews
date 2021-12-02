import Link from "next/link";

// components
import { SignInButton } from "../SignInButton";

// styles
import style from "./style.module.scss";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export function Header() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------
	return (
		<header className={style.headerContainer}>
			<div className={style.headerContent}>
				<img src="/images/logo.svg" alt="ig.news" />
				<nav>
					<Link href="/">
						<a className={style.active}>
							Home
						</a>
					</Link>
					<Link href="/posts">
						<a>Posts</a>
					</Link>
				</nav>
				<SignInButton />
			</div>
		</header>
	);
}
