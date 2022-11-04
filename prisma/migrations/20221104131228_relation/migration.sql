-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
