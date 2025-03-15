-- CreateTable
CREATE TABLE "TableColumn" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "width" INTEGER DEFAULT 30,
    "isShow" BOOLEAN DEFAULT false,
    "isFixed" BOOLEAN DEFAULT false,
    "cellType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT NOT NULL,
    "isTrash" BOOLEAN NOT NULL DEFAULT false,
    "dateAddingToTrash" TIMESTAMP(3),

    CONSTRAINT "TableColumn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableColumnChild" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tooltipInfo" TEXT,
    "widthPercent" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT NOT NULL,
    "isTrash" BOOLEAN NOT NULL DEFAULT false,
    "dateAddingToTrash" TIMESTAMP(3),
    "tableColumnId" TEXT NOT NULL,

    CONSTRAINT "TableColumnChild_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableColumnGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tableColumnId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT NOT NULL,
    "isTrash" BOOLEAN NOT NULL DEFAULT false,
    "dateAddingToTrash" TIMESTAMP(3),

    CONSTRAINT "TableColumnGroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TableColumn_key_key" ON "TableColumn"("key");

-- CreateIndex
CREATE INDEX "TableColumn_key_idx" ON "TableColumn"("key");

-- CreateIndex
CREATE UNIQUE INDEX "TableColumnChild_key_key" ON "TableColumnChild"("key");

-- CreateIndex
CREATE INDEX "TableColumnChild_key_idx" ON "TableColumnChild"("key");

-- AddForeignKey
ALTER TABLE "TableColumnChild" ADD CONSTRAINT "TableColumnChild_tableColumnId_fkey" FOREIGN KEY ("tableColumnId") REFERENCES "TableColumn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TableColumnGroup" ADD CONSTRAINT "TableColumnGroup_tableColumnId_fkey" FOREIGN KEY ("tableColumnId") REFERENCES "TableColumn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
