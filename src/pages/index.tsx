import Head from "next/head"

// style
import style from "../styles/home.module.scss";

export default function Home() {
	return (
		<>
			<Head>
				<title>Inicio | ig.news</title>
			</Head>
			<h1 className={style.title}>
				Hello Word
			</h1>
		</>
	);
}
