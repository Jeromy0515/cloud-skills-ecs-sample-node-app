ALTER user 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'Xptmxm1212!@';

CREATE DATABASE IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS `test`.`user` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`))
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;