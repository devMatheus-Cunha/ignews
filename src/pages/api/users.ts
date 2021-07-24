import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
	const users = [
		{ id: 1, name: "matheus" },
		{ id: 2, name: "pedro" },
		{ id: 3, name: "vitpr" },
	]

	return res.json(users)
}
