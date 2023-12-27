-- CreateTable
CREATE TABLE "Tasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "completed_at" BOOLEAN,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
