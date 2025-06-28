-- AlterTable
ALTER TABLE "expense_date_graph" ALTER COLUMN "endpoint" DROP NOT NULL;

-- AlterTable
ALTER TABLE "expense_day_graph" ALTER COLUMN "endpoint" DROP NOT NULL;

-- AlterTable
ALTER TABLE "task_date_graph" ALTER COLUMN "endpoint" DROP NOT NULL;

-- AlterTable
ALTER TABLE "task_day_graph" ALTER COLUMN "endpoint" DROP NOT NULL;
