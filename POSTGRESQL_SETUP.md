# PostgreSQL Setup Guide

This guide will help you set up PostgreSQL for the Smartrix Mobile API.

## Installation

### macOS (using Homebrew)
```bash
# Install PostgreSQL
brew install postgresql

# Start PostgreSQL service
brew services start postgresql

# Create a database user (optional)
createuser -s postgres
```

### Ubuntu/Debian
```bash
# Update package list
sudo apt update

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Switch to postgres user
sudo -i -u postgres
```

### Windows
1. Download PostgreSQL from https://www.postgresql.org/download/windows/
2. Run the installer and follow the setup wizard
3. Remember the password you set for the postgres user

## Database Setup

### 1. Create Database
```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE smartrixdb;

# Verify database creation
\l

# Exit psql
\q
```

### 2. Alternative: Using createdb command
```bash
createdb -U postgres smartrixdb
```

## Environment Configuration

### 1. Copy environment file
```bash
cp env.example .env
```

### 2. Update DATABASE_URL in .env
```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/smartrixdb?schema=public"
```

Replace `your_password` with the password you set during PostgreSQL installation.

### 3. For different user/database names
```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
```

## Database Operations

### Run Migrations
```bash
npm run prisma:migrate
```

### Generate Prisma Client
```bash
npm run prisma:generate
```

### Seed Database
```bash
npm run prisma:seed
```

### Open Prisma Studio
```bash
npm run prisma:studio
```

## Troubleshooting

### Connection Issues
1. **Check if PostgreSQL is running:**
   ```bash
   # macOS
   brew services list | grep postgresql
   
   # Ubuntu/Debian
   sudo systemctl status postgresql
   
   # Windows
   # Check Services app for PostgreSQL service
   ```

2. **Check connection:**
   ```bash
   psql -U postgres -d smartrixdb
   ```

3. **Reset password (if needed):**
   ```bash
   # Connect as postgres user
   sudo -u postgres psql
   
   # Change password
   ALTER USER postgres PASSWORD 'new_password';
   \q
   ```

### Permission Issues
```bash
# Grant all privileges to user
GRANT ALL PRIVILEGES ON DATABASE smartrixdb TO postgres;
```

### Port Issues
- Default PostgreSQL port is 5432
- If using a different port, update the DATABASE_URL accordingly

## Useful Commands

### PostgreSQL CLI
```bash
# Connect to database
psql -U postgres -d smartrixdb

# List all databases
\l

# List all tables
\dt

# Describe table structure
\d table_name

# Exit
\q
```

### Backup and Restore
```bash
# Backup database
pg_dump -U postgres smartrixdb > backup.sql

# Restore database
psql -U postgres smartrixdb < backup.sql
```

## Production Considerations

1. **Use environment variables for sensitive data**
2. **Set up proper user permissions**
3. **Configure connection pooling**
4. **Set up regular backups**
5. **Use SSL connections in production**

## Next Steps

After setting up PostgreSQL:
1. Run `npm run prisma:migrate` to create tables
2. Run `npm run prisma:seed` to add sample data
3. Start the API with `npm run start:dev`
4. Test the API at `http://localhost:3000/docs` 