import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  console.log('🚀 Starting NestJS application...');
  console.log('Environment:', process.env.NODE_ENV);
  
  // Validate required environment variables
  const requiredEnvVars = ['DATABASE_URL'];
  const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingEnvVars.length > 0) {
    console.error('❌ Missing required environment variables:', missingEnvVars);
    console.error('Please ensure these are set in your Vercel environment variables');
    process.exit(1);
  }
  
  console.log('Database URL configured:', !!process.env.DATABASE_URL);
  console.log('Database URL preview:', process.env.DATABASE_URL?.substring(0, 50) + '...');
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static files only in development
  if (process.env.VERCEL !== '1') {
    app.useStaticAssets(join(__dirname, '..', 'uploads'), {
      prefix: '/uploads/',
    });
  }

  // Global prefix
  const apiPrefix = process.env.API_PREFIX || 'api';
  app.setGlobalPrefix(apiPrefix);
  console.log('API Prefix:', apiPrefix);

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Enable CORS for web and mobile clients
  app.enableCors({
    origin: [
      'http://localhost:3000', // Local web frontend
      'https://sfa-web.vercel.app', // Deployed web frontend (change to your actual domain)
      '*', // Allow all origins for mobile apps (native apps ignore CORS, but this is safe for API)
    ],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  });

  // Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Smartrix Mobile API')
    .setDescription('NestJS backend API for Smartrix Mobile App')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  
  // Custom Swagger HTML with CDN assets
  const customOptions = {
    customSiteTitle: 'Smartrix Mobile API Documentation',
    customfavIcon: '/favicon.ico',
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      filter: true,
      showExtensions: true,
      showCommonExtensions: true,
    },
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    ],
  };
  
  SwaggerModule.setup('docs', app, document, customOptions);
  console.log('📚 Swagger documentation configured at /docs');

  const port = process.env.PORT || 8080;
  await app.listen(port);
  
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📚 Swagger documentation: http://localhost:${port}/docs`);
  console.log(`🏥 Health check: http://localhost:${port}/${apiPrefix}/health`);
}

bootstrap().catch(error => {
  console.error('❌ Failed to start application:', error);
  process.exit(1);
}); 