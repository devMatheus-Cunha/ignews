// faunadb
import { query } from "faunadb";

// next
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

// fauna
import { fauna } from "../../../services/fauna";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export default NextAuth({
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
			scope: "read:user",
		}),
	],
	callbacks: {
		async session(session) {
			try {
				const userActiveSubscription = await fauna.query(
					query.Get(
						query.Intersection([
							query.Match(
								query.Index("subscription_by_user_ref"),
								query.Select(
									"ref",
									query.Get(
										query.Match(
											query.Index("user_by_email"),
											query.Casefold(session.user.email),
										),
									),
								),
							),
							query.Match(
								query.Index("subscription_by_status"),
								"active",
							),
						]),
					),
				)
				return {
					...session,
					activeSubscription: userActiveSubscription,
				}
			} catch (err) {
				return {
					...session,
					activeSubscription: null,
				}
			}
		},
		async signIn({ email }) {
			try {
				await fauna.query(
					query.If(
						query.Not(
							query.Exists(
								query.Match(query.Index("user_by_email"), query.Casefold(email)),
							),
						),
						query.Create(query.Collection("users"), { data: { email } }),
						query.Get(
							query.Match(query.Index("user_by_email"), query.Casefold(email)),
						),
					),
				);
				return true;
			} catch {
				return false;
			}
		},
	},
});
