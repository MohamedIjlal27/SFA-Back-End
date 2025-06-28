const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Vercel build process...');

try {
  // Step 1: Generate Prisma client
  console.log('📦 Generating Prisma client...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  // Step 2: Verify Prisma client was generated
  const prismaClientPath = path.join(__dirname, 'generated', 'prisma', 'index.js');
  if (!fs.existsSync(prismaClientPath)) {
    throw new Error('Prisma client was not generated properly');
  }
  console.log('✅ Prisma client generated successfully');
  
  // Step 3: Run migrations (if needed)
  console.log('🔄 Running database migrations...');
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
  console.log('✅ Database migrations completed');
  
  // Step 4: Build the NestJS application
  console.log('🏗️ Building NestJS application...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ NestJS application built successfully');
  
  console.log('🎉 Vercel build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 