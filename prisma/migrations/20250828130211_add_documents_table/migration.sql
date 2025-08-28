-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "exeId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "username" TEXT,
    "password" TEXT,
    "userType" TEXT NOT NULL DEFAULT 'mobile',
    "androidId" TEXT,
    "leader" TEXT,
    "areaCode" TEXT,
    "exeName" TEXT,
    "exeNameOrig" TEXT,
    "role" TEXT,
    "areaName" TEXT,
    "region" TEXT,
    "subdivisionCode" TEXT,
    "imageLocation" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLoginAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "exeId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "addr1" TEXT,
    "addr2" TEXT,
    "addr3" TEXT,
    "city" TEXT,
    "route" TEXT,
    "phone1" TEXT,
    "phone2" TEXT,
    "phone3" TEXT,
    "additional" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "grade" TEXT,
    "contactName" TEXT,
    "contactPhone" TEXT,
    "nicNumber" TEXT,
    "startDate" TIMESTAMP(3),
    "creditLimit" DECIMAL(15,2),
    "creditPeriod" INTEGER,
    "comments" TEXT,
    "lastInvoiceDate" TIMESTAMP(3),
    "lastInvoiceAmt" DECIMAL(15,2),
    "lastPaymentDate" TIMESTAMP(3),
    "lastPaymentAmt" DECIMAL(15,2),
    "isInactive" BOOLEAN NOT NULL DEFAULT false,
    "isHold" BOOLEAN NOT NULL DEFAULT false,
    "followupStatus" TEXT,
    "location" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "itemCode" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT,
    "subCategory" TEXT,
    "categoryCode" TEXT,
    "uom" TEXT,
    "price" DECIMAL(15,2) NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 0,
    "imageUrl" TEXT,
    "discountAmount" DECIMAL(15,2) NOT NULL DEFAULT 0,
    "discountPercentage" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "salespersonId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Draft',
    "isDraft" BOOLEAN NOT NULL DEFAULT true,
    "errorMessage" TEXT,
    "jsonPayload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL(15,2) NOT NULL,
    "discount" DECIMAL(15,2) NOT NULL DEFAULT 0,
    "totalAmount" DECIMAL(15,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "documentNo" TEXT NOT NULL,
    "docDate" TIMESTAMP(3) NOT NULL,
    "docAmount" DECIMAL(15,2) NOT NULL,
    "daysDue" INTEGER,
    "docType" TEXT NOT NULL,
    "dueAmount" DECIMAL(15,2) NOT NULL,
    "exeId" TEXT,
    "refNo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "transNo" TEXT NOT NULL,
    "transDate" TIMESTAMP(3) NOT NULL,
    "amtBc" DECIMAL(15,2) NOT NULL,
    "remUnappl" DECIMAL(15,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_numbering" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "salespersonId" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "currentNumber" INTEGER NOT NULL DEFAULT 1,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document_numbering_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_locations" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "userCode" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL DEFAULT 'login',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales_reports" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "customerId" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "city" TEXT,
    "province" TEXT,
    "productId" TEXT,
    "productName" TEXT,
    "category" TEXT,
    "subCategory" TEXT,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL(15,2) NOT NULL,
    "totalSales" DECIMAL(15,2) NOT NULL,
    "discount" DECIMAL(15,2) NOT NULL DEFAULT 0,
    "netSales" DECIMAL(15,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sales_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "uploadedBy" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_exeId_key" ON "users"("exeId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_companyId_exeId_key" ON "users"("companyId", "exeId");

-- CreateIndex
CREATE UNIQUE INDEX "customers_customerId_key" ON "customers"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "products_itemCode_companyId_key" ON "products"("itemCode", "companyId");

-- CreateIndex
CREATE UNIQUE INDEX "orders_orderNumber_key" ON "orders"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "invoices_documentNo_key" ON "invoices"("documentNo");

-- CreateIndex
CREATE UNIQUE INDEX "payments_transNo_key" ON "payments"("transNo");

-- CreateIndex
CREATE UNIQUE INDEX "document_numbering_salespersonId_key" ON "document_numbering"("salespersonId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_exeId_fkey" FOREIGN KEY ("exeId") REFERENCES "users"("exeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_salespersonId_fkey" FOREIGN KEY ("salespersonId") REFERENCES "users"("exeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_numbering" ADD CONSTRAINT "document_numbering_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_numbering" ADD CONSTRAINT "document_numbering_salespersonId_fkey" FOREIGN KEY ("salespersonId") REFERENCES "users"("exeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_locations" ADD CONSTRAINT "user_locations_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_reports" ADD CONSTRAINT "sales_reports_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_uploadedBy_fkey" FOREIGN KEY ("uploadedBy") REFERENCES "users"("exeId") ON DELETE RESTRICT ON UPDATE CASCADE;
