-- CreateEnum
CREATE TYPE "Access" AS ENUM ('PROFILE', 'DASHBOARD', 'USER_CREATE', 'USER_DELETE', 'USER_UPDATE', 'USER_GET');

-- CreateTable
CREATE TABLE "task" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_date_graph" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "day" INTEGER NOT NULL,
    "amount" TEXT NOT NULL,
    "isFact" BOOLEAN NOT NULL,
    "task_id" TEXT NOT NULL,

    CONSTRAINT "task_date_graph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_day_graph" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "day" INTEGER NOT NULL,
    "amount" TEXT NOT NULL,
    "isFact" BOOLEAN NOT NULL,
    "task_id" TEXT NOT NULL,

    CONSTRAINT "task_day_graph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "avatarPath" TEXT,
    "work_interval" INTEGER DEFAULT 50,
    "break_interval" INTEGER DEFAULT 10,
    "intervals_count" INTEGER DEFAULT 7,
    "verification_token" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "task_date_graph" ADD CONSTRAINT "task_date_graph_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_day_graph" ADD CONSTRAINT "task_day_graph_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
