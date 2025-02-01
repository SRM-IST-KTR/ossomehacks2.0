import Sponsor from "@/utils/models/sponser.model";
import DBInstance from "@/utils/db";
export default async function handler(req, res) {
  await DBInstance();
  if (req.method === 'GET') {
    try {
      const sponsers = await Sponsor.find();
      res.status(200).json({ success: true, data: sponsers });
    } catch (e) {
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}