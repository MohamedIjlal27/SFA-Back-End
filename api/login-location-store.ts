import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client for serverless environment
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { userCode, latitude, longitude, description, timestamp, type } = req.body;
    
    if (!userCode || latitude == null || longitude == null) {
      return res.status(400).json({ error: 'Missing required fields: userCode, latitude, longitude' });
    }

    // Validate latitude and longitude
    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
      return res.status(400).json({ error: 'Latitude and longitude must be numbers' });
    }

    const location = await prisma.userLocation.create({
      data: {
        userCode: String(userCode),
        latitude: Number(latitude),
        longitude: Number(longitude),
        description: description || 'Login location',
        timestamp: timestamp ? new Date(timestamp) : new Date(),
        type: type || 'login',
      },
    });

    return res.status(201).json({ 
      success: true, 
      locationId: location.id,
      message: 'Location stored successfully'
    });
    
  } catch (error: any) {
    console.error('Error in login-location-store:', error);
    
    // Handle specific Prisma errors
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Duplicate entry' });
    }
    
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Record not found' });
    }

    return res.status(500).json({ 
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  } finally {
    // Don't disconnect in serverless environment
    // await prisma.$disconnect();
  }
} 