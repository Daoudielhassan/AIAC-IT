import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone } = req.body;

    const filePath = path.join(process.cwd(), 'public', 'users.csv');
    const userData = `${firstName},${lastName},${email},${phone}\n`;

    fs.appendFile(filePath, userData, (err) => {
      if (err) {
        console.error('Error saving data:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      res.status(200).json({ message: 'User saved successfully' });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
