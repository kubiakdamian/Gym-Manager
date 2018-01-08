-- MySQL Script generated by MySQL Workbench
-- nie, 7 sty 2018, 22:48:02
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`cwiczenie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cwiczenie` (
  `idcwiczenie` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nazwa_cwiczenia` VARCHAR(45) NULL DEFAULT NULL,
  `powtorzenia` INT UNSIGNED NULL DEFAULT NULL,
  `serie` INT UNSIGNED NULL DEFAULT NULL,
  `przerwa` INT UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`idcwiczenie`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `idusers` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(60) NULL DEFAULT NULL,
  `password` VARCHAR(45) NULL DEFAULT NULL,
  `creation_time` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`trening`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`trening` (
  `idtrening` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nazwa_treningu` VARCHAR(70) NULL DEFAULT NULL,
  `cwiczenie_idcwiczenie` INT UNSIGNED NOT NULL,
  `users_idusers` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idtrening`, `cwiczenie_idcwiczenie`, `users_idusers`),
  INDEX `fk_trening_cwiczenie1_idx` (`cwiczenie_idcwiczenie` ASC),
  INDEX `fk_trening_users1_idx` (`users_idusers` ASC),
  CONSTRAINT `fk_trening_cwiczenie1`
    FOREIGN KEY (`cwiczenie_idcwiczenie`)
    REFERENCES `mydb`.`cwiczenie` (`idcwiczenie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_trening_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mydb`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`wymiary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`wymiary` (
  `idwymiary` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `wzrost` FLOAT UNSIGNED NULL DEFAULT NULL,
  `waga` FLOAT UNSIGNED NULL DEFAULT NULL,
  `ramie` FLOAT UNSIGNED NULL DEFAULT NULL,
  `udo` FLOAT UNSIGNED NULL DEFAULT NULL,
  `pas` FLOAT UNSIGNED NULL DEFAULT NULL,
  `nadgarstek` FLOAT UNSIGNED NULL DEFAULT NULL,
  `kostka` FLOAT UNSIGNED NULL DEFAULT NULL,
  `przedramie` FLOAT UNSIGNED NULL DEFAULT NULL,
  `lydka` FLOAT UNSIGNED NULL DEFAULT NULL,
  `data` DATE NULL DEFAULT NULL,
  `users_idusers` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idwymiary`, `users_idusers`),
  INDEX `fk_wymiary_users_idx` (`users_idusers` ASC),
  CONSTRAINT `fk_wymiary_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mydb`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`zapotrzebowanie_kaloryczne`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`zapotrzebowanie_kaloryczne` (
  `idzapotrzebowanie_kaloryczne` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `chudniecie` INT UNSIGNED NULL DEFAULT NULL,
  `utrzymanie` INT UNSIGNED NULL DEFAULT NULL,
  `tycie` INT UNSIGNED NULL DEFAULT NULL,
  `users_idusers` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idzapotrzebowanie_kaloryczne`, `users_idusers`),
  INDEX `fk_zapotrzebowanie_kaloryczne_users1_idx` (`users_idusers` ASC),
  CONSTRAINT `fk_zapotrzebowanie_kaloryczne_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mydb`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`posilek`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`posilek` (
  `idposilek` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `kalorie` INT UNSIGNED NULL DEFAULT NULL,
  `bialko` INT UNSIGNED NULL DEFAULT NULL,
  `weglowodany` INT UNSIGNED NULL DEFAULT NULL,
  `tluszcze` INT UNSIGNED NULL DEFAULT NULL,
  `users_idusers` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idposilek`, `users_idusers`),
  INDEX `fk_posilek_users1_idx` (`users_idusers` ASC),
  CONSTRAINT `fk_posilek_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mydb`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;