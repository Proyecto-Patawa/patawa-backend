/*
  Warnings:

  - You are about to drop the column `date` on the `walks` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `walks` table. All the data in the column will be lost.
  - Added the required column `date_time` to the `walks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `walks` DROP COLUMN `date`,
    DROP COLUMN `time`,
    ADD COLUMN `date_time` DATETIME(3) NOT NULL;
