/*
  Warnings:

  - You are about to drop the column `abreviation` on the `document_types` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[abbreviation]` on the table `document_types` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `abbreviation` to the `document_types` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `document_types_abreviation_key` ON `document_types`;

-- AlterTable
ALTER TABLE `document_types` DROP COLUMN `abreviation`,
    ADD COLUMN `abbreviation` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `document_types_abbreviation_key` ON `document_types`(`abbreviation`);
