/*
  Warnings:

  - A unique constraint covering the columns `[breed_name]` on the table `breeds` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `breeds_breed_name_key` ON `breeds`(`breed_name`);
