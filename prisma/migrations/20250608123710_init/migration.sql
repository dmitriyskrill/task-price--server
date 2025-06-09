-- CreateTable
CREATE TABLE "task_type" (
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
    "is_open_like_main" BOOLEAN NOT NULL DEFAULT true,
    "is_can_contain_expense" BOOLEAN NOT NULL DEFAULT true,
    "is_show_graph_info" BOOLEAN NOT NULL DEFAULT true,
    "is_top_level" BOOLEAN NOT NULL DEFAULT true,
    "default_day_additional_factor" INTEGER NOT NULL,
    "defaultDateAdditionalFactor" INTEGER NOT NULL,
    "default_unit_id" TEXT NOT NULL,
    "default_profit_percent" INTEGER NOT NULL,
    "default_general_business_expenses_percent" INTEGER NOT NULL,
    "default_unforeseen_expenses_percent" INTEGER NOT NULL,
    "default_additional_factor" INTEGER NOT NULL,
    "font_size" INTEGER NOT NULL DEFAULT 20,
    "font_width" INTEGER NOT NULL DEFAULT 500,
    "task_tree_is_show_child_btn" BOOLEAN NOT NULL DEFAULT true,
    "task_tree_is_show_add_btn" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "task_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_type_relation" (
    "own_id" TEXT NOT NULL,
    "for_id" TEXT NOT NULL,

    CONSTRAINT "task_type_relation_pkey" PRIMARY KEY ("own_id","for_id")
);

-- CreateTable
CREATE TABLE "_AdmissibleTaskTypeUnit" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdmissibleTaskTypeUnit_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "task_type_owner_id_name_key" ON "task_type"("owner_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "task_type_owner_id_short_name_key" ON "task_type"("owner_id", "short_name");

-- CreateIndex
CREATE INDEX "_AdmissibleTaskTypeUnit_B_index" ON "_AdmissibleTaskTypeUnit"("B");

-- AddForeignKey
ALTER TABLE "task_type" ADD CONSTRAINT "task_type_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_type" ADD CONSTRAINT "task_type_default_unit_id_fkey" FOREIGN KEY ("default_unit_id") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_type_relation" ADD CONSTRAINT "task_type_relation_own_id_fkey" FOREIGN KEY ("own_id") REFERENCES "task_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_type_relation" ADD CONSTRAINT "task_type_relation_for_id_fkey" FOREIGN KEY ("for_id") REFERENCES "task_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdmissibleTaskTypeUnit" ADD CONSTRAINT "_AdmissibleTaskTypeUnit_A_fkey" FOREIGN KEY ("A") REFERENCES "task_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdmissibleTaskTypeUnit" ADD CONSTRAINT "_AdmissibleTaskTypeUnit_B_fkey" FOREIGN KEY ("B") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
