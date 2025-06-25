# Smartrix Mobile API

A NestJS backend API for the Smartrix Mobile App, providing comprehensive functionality for customer management, product catalog, order processing, and sales analytics.

## Features

- **Authentication**: JWT-based authentication system
- **Customer Management**: Customer lists, details, due lists, and aging reports
- **Product Catalog**: Product listing, search, and category management
- **Order Management**: Create, view, and manage orders
- **Sales Analytics**: Comprehensive reporting and analytics
- **Database**: PostgreSQL with Prisma ORM

## Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT with Passport
- **Documentation**: Swagger/OpenAPI
- **Validation**: class-validator
- **Language**: TypeScript

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SmatrixNodeAPI
```

2. Install dependencies:
```bash
npm install
```

3. Set up PostgreSQL database:
```bash
# Create database
createdb smartrixdb

# Or using psql
psql -U postgres
CREATE DATABASE smartrixdb;
\q
```

4. Set up environment variables:
```bash
cp env.example .env
```

Edit the `.env` file with your database configuration:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/smartrixdb?schema=public"
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-secure
JWT_EXPIRES_IN=24h
PORT=3000
NODE_ENV=development
```

5. Set up the database:
```bash
# Generate Prisma client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# Seed the database with sample data
npm run prisma:seed
```

6. Start the development server:
```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`
Swagger documentation: `http://localhost:3000/docs`

## API Endpoints

### Authentication
- `POST /api/login/basic` - User login

### Customers (AR)
- `GET /api/ar/list/:exeId` - Get customer list by executive
- `GET /api/ar/info/:customerId` - Get customer details
- `GET /api/ar/due/list/:exeId` - Get due list by executive

### Products (IC)
- `GET /api/ic/items/list` - Get all products
- `GET /api/ic/items/search?q=query` - Search products
- `GET /api/ic/items/category/:category` - Get products by category
- `GET /api/ic/items/:itemCode` - Get product by item code
- `GET /api/ic/categories` - Get all categories
- `GET /api/ic/subcategories?category=category` - Get subcategories

### Orders
- `POST /api/orders/create-order` - Create new order
- `GET /api/orders/salesperson/:salespersonId` - Get orders by salesperson
- `GET /api/orders/:orderId` - Get order details
- `PUT /api/orders/:orderId/status` - Update order status

### Reports
- `GET /api/reports/sales` - Get sales report
- `GET /api/reports/top-customers` - Get top customers
- `GET /api/reports/top-products` - Get top products
- `GET /api/reports/category-sales` - Get sales by category
- `GET /api/reports/city-sales` - Get sales by city
- `GET /api/reports/product/:productId/customers` - Get customer sales for product
- `GET /api/reports/category/:category/customers` - Get customer sales for category

## Database Schema

The application uses the following main entities:

- **User**: Executive/salesperson information
- **Customer**: Customer details and relationships
- **Product**: Product catalog with pricing and inventory
- **Order**: Order management with items
- **Invoice**: Customer invoice tracking
- **Payment**: Customer payment tracking
- **SalesReport**: Sales analytics data
- **DocumentNumbering**: Order number generation

## Development

### Available Scripts

- `npm run build` - Build the application
- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot reload
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start in production mode
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:cov` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Prisma Commands

- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio
- `npm run prisma:seed` - Seed database with sample data

## Sample Data

The seed script creates sample data including:
- 2 users (executives)
- 2 customers with invoices and payments
- 4 products (hardware, building materials, lighting, electrical)
- Sample sales reports

## Authentication

The API uses JWT tokens for authentication. To access protected endpoints:

1. Login using `POST /api/login/basic` with:
   ```json
   {
     "companyId": "LGLMKT",
     "exeId": "EXE001",
     "password": "LGLMKT"
   }
   ```
2. Include the JWT token in the Authorization header:
   ```
   Authorization: Bearer <your-jwt-token>
   ```

## Error Handling

The API returns consistent error responses:

```json
{
  "statusCode": 400,
  "message": "Error description",
  "error": "Bad Request"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License. 