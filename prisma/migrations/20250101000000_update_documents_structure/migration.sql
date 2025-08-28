-- Update documents table structure
-- Drop existing foreign key constraints
ALTER TABLE "documents" DROP CONSTRAINT IF EXISTS "documents_companyId_fkey";
ALTER TABLE "documents" DROP CONSTRAINT IF EXISTS "documents_customerId_fkey";

-- Add new columns
ALTER TABLE "documents" ADD COLUMN IF NOT EXISTS "fileName" TEXT;
ALTER TABLE "documents" ADD COLUMN IF NOT EXISTS "originalName" TEXT;
ALTER TABLE "documents" ADD COLUMN IF NOT EXISTS "fileType" TEXT;
ALTER TABLE "documents" ADD COLUMN IF NOT EXISTS "fileSize" INTEGER;
ALTER TABLE "documents" ADD COLUMN IF NOT EXISTS "fileUrl" TEXT;
ALTER TABLE "documents" ADD COLUMN IF NOT EXISTS "description" TEXT;

-- Update existing data to populate new columns
UPDATE "documents" SET 
  "fileName" = "name",
  "originalName" = "name",
  "fileType" = "type",
  "fileSize" = CAST("size" AS INTEGER),
  "fileUrl" = "url"
WHERE "fileName" IS NULL;

-- Make new columns NOT NULL after data migration
ALTER TABLE "documents" ALTER COLUMN "fileName" SET NOT NULL;
ALTER TABLE "documents" ALTER COLUMN "originalName" SET NOT NULL;
ALTER TABLE "documents" ALTER COLUMN "fileType" SET NOT NULL;
ALTER TABLE "documents" ALTER COLUMN "fileSize" SET NOT NULL;
ALTER TABLE "documents" ALTER COLUMN "fileUrl" SET NOT NULL;

-- Drop old columns
ALTER TABLE "documents" DROP COLUMN IF EXISTS "name";
ALTER TABLE "documents" DROP COLUMN IF EXISTS "type";
ALTER TABLE "documents" DROP COLUMN IF EXISTS "size";
ALTER TABLE "documents" DROP COLUMN IF EXISTS "url";

-- Re-add foreign key constraints
ALTER TABLE "documents" ADD CONSTRAINT "documents_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "documents" ADD CONSTRAINT "documents_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "documents" ADD CONSTRAINT "documents_uploadedBy_fkey" FOREIGN KEY ("uploadedBy") REFERENCES "users"("exeId") ON DELETE RESTRICT ON UPDATE CASCADE;
