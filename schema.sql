CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE IF NOT EXISTS `ProductCategory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));


  CREATE TABLE IF NOT EXISTS `VendorCategory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));

  CREATE TABLE IF NOT EXISTS `Vendor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `state` VARCHAR(255) NOT NULL,
  `zip` VARCHAR(255) NOT NULL,
  `country` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  `category_id` INT NULL DEFAULT NULL,
  `gst_number` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_Vendor_VendorCategory1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_Vendor_VendorCategory1`
    FOREIGN KEY (`category_id`)
    REFERENCES `VendorCategory` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


    CREATE TABLE IF NOT EXISTS `Product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `vendor_id` INT NULL DEFAULT NULL,
  `category_id` INT NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `variations` TEXT NULL,
  `attributes` TEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Product_Vendor1_idx` (`vendor_id` ASC) VISIBLE,
  INDEX `fk_Product_ProductCategory1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_Product_Vendor1`
    FOREIGN KEY (`vendor_id`)
    REFERENCES `Vendor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_ProductCategory1`
    FOREIGN KEY (`category_id`)
    REFERENCES `ProductCategory` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


    CREATE TABLE IF NOT EXISTS `Cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  `variation` INT NULL DEFAULT NULL,
  `discount` DECIMAL(10,2) NULL DEFAULT NULL,
  `grand_total` DECIMAL(10,2) NULL DEFAULT NULL,
  `sub_total` DECIMAL(10,2) NULL DEFAULT NULL,
  `tax_total` DECIMAL(10,2) NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cart_type` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Cart_Product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_Cart_Product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `Product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    
    CREATE TABLE IF NOT EXISTS `Wishlist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_Wishlist_Product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_Wishlist_Product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `Product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

