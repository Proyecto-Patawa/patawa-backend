/*
  Warnings:

  - A unique constraint covering the columns `[document_type_name]` on the table `document_types` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[abreviation]` on the table `document_types` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `abreviation` to the `document_types` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `document_types` ADD COLUMN `abreviation` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `document_types_document_type_name_key` ON `document_types`(`document_type_name`);

-- CreateIndex
CREATE UNIQUE INDEX `document_types_abreviation_key` ON `document_types`(`abreviation`);
