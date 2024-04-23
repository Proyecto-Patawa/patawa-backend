-- AlterTable
ALTER TABLE `users` MODIFY `password_hash` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `password_salt` VARCHAR(191) NOT NULL DEFAULT '';
