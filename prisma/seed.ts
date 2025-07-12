/// <reference types="node" />
import { PrismaClient } from '../generated/prisma';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create a single company
  await prisma.company.upsert({
    where: { id: 'COMP001' },
    update: {},
    create: {
      id: 'COMP001',
      name: 'Demo Company',
    },
  });

  console.log('✅ Company created');

  // Create a single admin user
  const adminPassword = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { exeId: 'ADMIN001' },
    update: {},
    create: {
      exeId: 'ADMIN001',
      companyId: 'COMP001',
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@demo.com',
      phone: '+1234567890',
      username: 'admin',
      password: adminPassword,
      userType: 'both', // Can access both mobile and web
      role: 'Admin',
      isActive: true,
    },
  });

  console.log('✅ Admin user created');
  console.log('🎉 Database seeding completed successfully!');
  console.log('');
  console.log('📋 Login Credentials:');
  console.log('   Company ID: COMP001');
  console.log('   Username: admin');
  console.log('   Password: admin123');
  console.log('');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 