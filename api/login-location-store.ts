import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { userCode, latitude, longitude, description, timestamp, type } = req.body;
    if (!userCode || latitude == null || longitude == null) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const location = await prisma.userLocation.create({
      data: {
        userCode,
        latitude: Number(latitude),
        longitude: Number(longitude),
        description: description || 'Login location',
        timestamp: timestamp ? new Date(timestamp) : new Date(),
        type: type || 'login',
      },
    });
    return res.status(201).json({ success: true, locationId: location.id });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
} 