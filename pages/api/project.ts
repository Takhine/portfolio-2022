import { getRequestHandlerGenerator, sendResponse } from "@utils/api.utils";
import type { NextApiRequest, NextApiResponse } from 'next'

export default getRequestHandlerGenerator((_: NextApiRequest, res: NextApiResponse) => {
  return sendResponse({
    res,
    response: { success: true, data: "test" },
  });
});
