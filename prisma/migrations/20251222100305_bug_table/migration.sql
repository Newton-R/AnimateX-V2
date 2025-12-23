/*
  Warnings:

  - Added the required column `component` to the `bugs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `bugs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `bugs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bugs" ADD COLUMN     "component" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "username" TEXT NOT NULL;
