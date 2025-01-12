export default function handler(req, res) {
    const mockSponsers = [
        {name:"Sponser1"},
        {name:"Sponder2"}
    ]
    if (req.method === 'GET') {
      res.status(200).json(mockSponsers);
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }