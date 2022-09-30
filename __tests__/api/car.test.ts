/**
 * @jest-environment node
 */

import { describe, expect, it } from '@jest/globals';
import { mockRequestResponse } from '../../lib/mock-request-response';
import car from '../../pages/api/car';

describe('/api/car endpoint', () => {
  it('should return a succesful response', async () => {
    const { req, res } = mockRequestResponse();
    await car(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toEqual('OK');
  });
});
