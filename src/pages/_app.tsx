import { AppProps } from "next/app"

// Components
import { Header } from "../components/Header"

// style
import "../styles/global.scss"

// -------------------------------------------------
// Export Function
// -------------------------------------------------
function MyApp({
	Component, pageProps,
}: AppProps) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
