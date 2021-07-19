// styles
import style from "./style.module.scss"

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
					<a href="/" className={style.active}>Home</a>
					<a href="/posts">Posts</a>
				</nav>
			</div>
		</header>
	)
}
