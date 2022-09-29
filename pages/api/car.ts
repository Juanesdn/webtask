// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../lib/database';
import { ResponseFuncs } from '../../lib/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  const errorCatcher = (error: Error) => res.status(400).json({ error });

  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Cars } = await connect(); // connect to database
      res.status(200).json(await Cars.find({}).catch(errorCatcher));
    },
    /* // RESPONSE POST REQUESTS
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Cars } = await connect(); // connect to database
      res.json(await Cars.create(req.body).catch(errorCatcher));
    }, */
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: 'No Response for This Request' });
};

export default handler;
