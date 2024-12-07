import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { name } = req.query;
    if (name) {
      res.status(200).json({ message: `Hello, ${name}` });
    } else {
      res.status(200).json({ message: "Hello, world!" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}