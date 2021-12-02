import { AppProps } from "next/app";

// providers
import { Provider as NextAuthProvider } from "next-auth/client";

// components
import { Header } from "../components/Header";

// styles
import "../styles/global.scss";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextAuthProvider session={pageProps.session}>
			<Header />
			<Component {...pageProps} />
		</NextAuthProvider>
	);
}

export default MyApp;
