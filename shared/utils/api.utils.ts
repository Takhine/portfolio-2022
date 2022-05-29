import type { NextApiRequest, NextApiResponse } from "next";

const routeNotFound = (res: NextApiResponse) =>
  res.status(404).end("NOT FOUND");

const requestHandlerGenerator =
  (method: string, handler: any) =>
  (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === method) {
      return handler(req, res);
    }
    // throw error
    routeNotFound(res);
  };

export const getRequestHandlerGenerator = (
  handler: (req: NextApiRequest, res: NextApiResponse) => any
) => requestHandlerGenerator("GET", handler);

export const sendResponse = ({
  res,
  response,
}: {
  res: NextApiResponse;
  response: any;
}) => {
  if (response.success) res.status(200).json(response.data);
  else res.status(response.error.status).json({ error: response.error });
  res.end();
};
