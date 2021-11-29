import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { query } from "faunadb";
import { fauna } from "../../services/fauna";
import { stripe } from "../../services/stripe";

type IUser = {
  ref: {
    id: string
  }
  data: {
    stripe_cursmer_id: string
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const session = await getSession({ req });

		const user = await fauna.query<IUser>(
			query.Get(
				query.Match(
					query.Index("user_by_email"),
					query.Casefold("session.user.email"),
				),
			),
		)

		let customerId = user.data.stripe_cursmer_id

		if (!customerId) {
			const stripeCostumer = await stripe.customers.create({
				email: session.user.email,
				// metadata
			});

			await fauna.query(
				query.Update(
					query.Ref(query.Collection("users"), user.ref.id),
					{
						data: {
							stripe_cursmer_id: stripeCostumer.id,
						},
					},
				),
			)

			customerId = stripeCostumer.id
		}

		const stripeCheckoutSession = await stripe.checkout.sessions.create({
			customer: customerId,
			payment_method_types: ["card"],
			billing_address_collection: "required",
			line_items: [
				{ price: "price_1JFjxKIQF5o15nSoSqRs0GV6", quantity: 1 },
			],
			mode: "subscription",
			allow_promotion_codes: true,
			success_url: "https://localhost:3000/posts",
			cancel_url: "https://localhost:3000",
		});

		return res.status(200).json({ sessionId: stripeCheckoutSession.id });
	}
	res.setHeader("Allow", "POST");
	res.status(405).end("Method not allowed");
	return true
};
