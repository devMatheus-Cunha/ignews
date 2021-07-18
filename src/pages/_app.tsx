import { AppProps } from "next/app"

// style
import "../styles/global.scss"

// -------------------------------------------------
// Export Function
// -------------------------------------------------
function MyApp({
	Component, pageProps,
}: AppProps) {
	return <Component {...pageProps} />
}

export default MyApp
