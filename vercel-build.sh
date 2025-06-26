#!/bin/bash

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

# Build the NestJS application
echo "Building NestJS application..."
npm run build

echo "Build completed successfully!" 