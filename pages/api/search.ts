import type { NextApiRequest, NextApiResponse } from 'next';

import { getSearchResults } from 'lib/getSearchResults';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { query } = req.query;
		if (query && typeof query === 'string') {
			const searchResults = await getSearchResults(query);
			res.status(200).json(searchResults);
		} else {
			res.status(404);
		}
	} catch (error) {
		res.status(404);
	}
}
