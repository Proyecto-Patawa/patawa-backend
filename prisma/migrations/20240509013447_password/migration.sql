/*
  Warnings:

  - You are about to drop the column `password_hash` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `walk_details` DROP FOREIGN KEY `walk_details_walk_id_fkey`;

-- AlterTable
ALTER TABLE `dogs` ADD COLUMN `enabled` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `password_hash`,
    ADD COLUMN `enabled` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `password` VARCHAR(191) NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE `walk_details` ADD CONSTRAINT `walk_details_walk_id_fkey` FOREIGN KEY (`walk_id`) REFERENCES `walks`(`walk_id`) ON DELETE CASCADE ON UPDATE CASCADE;
