import type { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';

export const mockRequestResponse = (method: RequestMethod = 'GET') => {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks({ method });
  req.headers = {
    'Content-Type': 'application/json',
  };
  return { req, res };
};
