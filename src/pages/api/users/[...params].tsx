import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
	const id = req.query
	console.log(id);

	const users = [
		{ id: 1, name: "matheus" },
		{ id: 2, name: "pedro" },
		{ id: 3, name: "vitor" },
	]

	return res.json(users)
}
