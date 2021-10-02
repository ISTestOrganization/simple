// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: "John Doe",
    test_env: process.env.TEST_NEXT_APP,
    root_test_env: process.env.ROOT_TEST_NEXT_APP,
  });
}
