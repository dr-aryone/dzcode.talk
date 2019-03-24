SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+01:00";

CREATE DATABASE findfriends;
USE findfriends;

DROP TABLE IF EXISTS `utilisateur`;

CREATE TABLE IF NOT EXISTS `utilisateur` (
`id` int(11) NOT NULL AUTO_INCREMENT ,
`email` varchar(255) NOT NULL ,
`password` varchar(32) NOT NULL ,
`username` varchar(255) NOT NULL ,
`first_name` varchar(255) NOT NULL ,
`last_name` varchar(255) NOT NULL ,
`sign_up_date` date NOT NULL ,
`activated` enum('0','1') NOT NULL ,
PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8_general_ci AUTO_INCREMENT=1;
