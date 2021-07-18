/* eslint-disable max-len */
import Document, {
	Html, Head, Main, NextScript,
} from "next/document"

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
