/*
  Warnings:

  - You are about to drop the column `favoriteId` on the `favoriteproduct` table. All the data in the column will be lost.
  - You are about to drop the `favorite` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,productId]` on the table `FavoriteProduct` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `FavoriteProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ddd` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `Favorite_userId_fkey`;

-- DropForeignKey
ALTER TABLE `favoriteproduct` DROP FOREIGN KEY `FavoriteProduct_favoriteId_fkey`;

-- DropIndex
DROP INDEX `FavoriteProduct_favoriteId_productId_key` ON `favoriteproduct`;

-- AlterTable
ALTER TABLE `favoriteproduct` DROP COLUMN `favoriteId`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `stock` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `ddd` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `favorite`;

-- CreateIndex
CREATE UNIQUE INDEX `FavoriteProduct_userId_productId_key` ON `FavoriteProduct`(`userId`, `productId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_phone_key` ON `User`(`phone`);

-- AddForeignKey
ALTER TABLE `FavoriteProduct` ADD CONSTRAINT `FavoriteProduct_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
