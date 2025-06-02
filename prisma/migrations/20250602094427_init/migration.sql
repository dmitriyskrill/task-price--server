-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('TASK', 'EXPENSE', 'TASK_DAY_GRAPH', 'TASK_DATE_GRAPH', 'EXPENSE_DAY_GRAPH', 'EXPENSE_DATE_GRAPH', 'SUBTASK');

-- CreateEnum
CREATE TYPE "OperationType" AS ENUM ('CREATE', 'CREATE_Many', 'READ', 'PATCH', 'PATCH_Many', 'UPDATE', 'UPDATE_Many', 'DELETE', 'DELETE_Many');

-- CreateEnum
CREATE TYPE "Access" AS ENUM ('PROFILE', 'DASHBOARD', 'USER_CREATE', 'USER_DELETE', 'USER_UPDATE', 'USER_GET');

-- CreateTable
CREATE TABLE "expenses" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "isTrash" BOOLEAN NOT NULL,
    "isPlan" BOOLEAN NOT NULL,
    "taskId" TEXT NOT NULL,

    CONSTRAINT "expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense_date_graph" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "expenseId" TEXT NOT NULL,

    CONSTRAINT "expense_date_graph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense_day_graph" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "expenseId" TEXT NOT NULL,

    CONSTRAINT "expense_day_graph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableColumn" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "width" INTEGER DEFAULT 30,
    "sort" BIGINT DEFAULT 0,
    "is_show" BOOLEAN DEFAULT false,
    "is_fixed" BOOLEAN DEFAULT false,
    "is_editable" BOOLEAN DEFAULT false,
    "cell_type" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "updated_by_id" TEXT NOT NULL,
    "is_trash" BOOLEAN NOT NULL DEFAULT false,
    "date_adding_to_trash" TIMESTAMP(3),
    "tableColumnGroupId" TEXT,

    CONSTRAINT "TableColumn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableColumnChild" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sort" BIGINT,
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
    "sort" BIGINT DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT NOT NULL,
    "isTrash" BOOLEAN NOT NULL DEFAULT false,
    "dateAddingToTrash" TIMESTAMP(3),

    CONSTRAINT "TableColumnGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_date_graph" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "sort" BIGINT DEFAULT 0,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "isFact" BOOLEAN NOT NULL,
    "task_id" TEXT NOT NULL,

    CONSTRAINT "task_date_graph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_day_graph" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "sort" BIGINT DEFAULT 0,
    "day" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "isFact" BOOLEAN NOT NULL,
    "task_id" TEXT NOT NULL,

    CONSTRAINT "task_day_graph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_status" (
    "id" TEXT NOT NULL,
    "sort" BIGINT DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "updated_by_id" TEXT NOT NULL,
    "is_trash" BOOLEAN NOT NULL DEFAULT false,
    "date_adding_to_trash" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "task_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_workflow" (
    "id" TEXT NOT NULL,
    "sort" BIGINT DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "updated_by_id" TEXT NOT NULL,
    "is_trash" BOOLEAN NOT NULL DEFAULT false,
    "date_adding_to_trash" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "owner_id" TEXT,

    CONSTRAINT "task_workflow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_workflow_status" (
    "id" TEXT NOT NULL,
    "sort" BIGINT DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "updated_by_id" TEXT NOT NULL,
    "is_trash" BOOLEAN NOT NULL DEFAULT false,
    "date_adding_to_trash" TIMESTAMP(3),
    "task_workflow_id" TEXT NOT NULL,
    "task_status_id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "is_show_menu_btn_in_plan_expense_row " BOOLEAN,
    "is_show_delete_btn_in_task_row" BOOLEAN,
    "is_show_open_like_main_btn_in_task_row" BOOLEAN,
    "is_show_expense_create_menu_at_control_head" BOOLEAN,
    "is_show_task_create_menu_at_control_head" BOOLEAN,
    "is_show_plan_element_by_default" BOOLEAN,
    "is_show_fact_element_by_default" BOOLEAN,
    "is_create_fact_element_after_selected_this_status" BOOLEAN,

    CONSTRAINT "task_workflow_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_workflow_status_permission" (
    "id" TEXT NOT NULL,
    "entity" "EntityType" NOT NULL,
    "operation" "OperationType" NOT NULL,
    "is_plan" BOOLEAN NOT NULL,
    "task_workflow_status_id" TEXT NOT NULL,
    "owner_id" TEXT,

    CONSTRAINT "task_workflow_status_permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_workflow_status_transition" (
    "own_id" TEXT NOT NULL,
    "for_id" TEXT NOT NULL,

    CONSTRAINT "task_workflow_status_transition_pkey" PRIMARY KEY ("own_id","for_id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sort" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT NOT NULL,
    "isTrash" BOOLEAN NOT NULL DEFAULT false,
    "dateAddingToTrash" TIMESTAMP(3),
    "shortName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "codeId" TEXT NOT NULL,
    "isHourUnit" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "updated_by_id" TEXT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "patronymic" TEXT,
    "password" TEXT NOT NULL,
    "avatarPath" TEXT,
    "sort" BIGINT DEFAULT 0,
    "verification_token" TEXT,
    "accesses" "Access"[] DEFAULT ARRAY['PROFILE']::"Access"[],

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TableColumn_key_key" ON "TableColumn"("key");

-- CreateIndex
CREATE INDEX "TableColumn_key_idx" ON "TableColumn"("key");

-- CreateIndex
CREATE UNIQUE INDEX "TableColumnChild_key_key" ON "TableColumnChild"("key");

-- CreateIndex
CREATE INDEX "TableColumnChild_key_idx" ON "TableColumnChild"("key");

-- CreateIndex
CREATE UNIQUE INDEX "task_status_owner_id_name_key" ON "task_status"("owner_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "task_status_owner_id_short_name_key" ON "task_status"("owner_id", "short_name");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_owner_id_name_key" ON "task_workflow"("owner_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_owner_id_short_name_key" ON "task_workflow"("owner_id", "short_name");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_status_task_workflow_id_task_status_id_owner__key" ON "task_workflow_status"("task_workflow_id", "task_status_id", "owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_status_permission_task_workflow_status_id_ent_key" ON "task_workflow_status_permission"("task_workflow_status_id", "entity", "operation", "owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_key_key" ON "Unit"("key");

-- CreateIndex
CREATE INDEX "Unit_key_idx" ON "Unit"("key");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_date_graph" ADD CONSTRAINT "expense_date_graph_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_day_graph" ADD CONSTRAINT "expense_day_graph_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TableColumn" ADD CONSTRAINT "TableColumn_tableColumnGroupId_fkey" FOREIGN KEY ("tableColumnGroupId") REFERENCES "TableColumnGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TableColumnChild" ADD CONSTRAINT "TableColumnChild_tableColumnId_fkey" FOREIGN KEY ("tableColumnId") REFERENCES "TableColumn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_date_graph" ADD CONSTRAINT "task_date_graph_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_day_graph" ADD CONSTRAINT "task_day_graph_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_status" ADD CONSTRAINT "task_status_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow" ADD CONSTRAINT "task_workflow_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status" ADD CONSTRAINT "task_workflow_status_task_workflow_id_fkey" FOREIGN KEY ("task_workflow_id") REFERENCES "task_workflow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status" ADD CONSTRAINT "task_workflow_status_task_status_id_fkey" FOREIGN KEY ("task_status_id") REFERENCES "task_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status" ADD CONSTRAINT "task_workflow_status_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_permission" ADD CONSTRAINT "task_workflow_status_permission_task_workflow_status_id_fkey" FOREIGN KEY ("task_workflow_status_id") REFERENCES "task_workflow_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_permission" ADD CONSTRAINT "task_workflow_status_permission_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_transition" ADD CONSTRAINT "task_workflow_status_transition_own_id_fkey" FOREIGN KEY ("own_id") REFERENCES "task_workflow_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_transition" ADD CONSTRAINT "task_workflow_status_transition_for_id_fkey" FOREIGN KEY ("for_id") REFERENCES "task_workflow_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
