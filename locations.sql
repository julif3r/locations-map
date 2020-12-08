-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 08, 2020 at 10:24 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `locations`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`name`) VALUES
('Amsterdam'),
('Belgrade'),
('Istanbul'),
('Ljubljana'),
('Madrid'),
('Moscow'),
('Paris'),
('Prishtina'),
('Rome'),
('Sarajevo'),
('Stockholm'),
('Zagreb');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` varchar(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `address` varchar(512) NOT NULL,
  `city` varchar(32) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `name`, `address`, `city`, `latitude`, `longitude`) VALUES
('0897bd55-e9bf-4d21-a3ca-49d754fa7363', 'test', 'test', 'Ljubljana', 132, 123),
('b562bf37-9d83-45c3-a819-ef48277fd0ca', 'Customer Service', 'In palace of westminster', 'Paris', 48.856, 2.3522),
('ce4a6ae1-c452-417a-99ae-4fe1a46f7c1a', 'Kosova', 'Kosova', 'Prishtina', 42.6026, 20.903),
('e791e7bb-bc34-4949-b57c-ba5e7d17258f', 'Doc Archive', 'Near the Arch of Constantine', 'Rome', 41.9028, 12.4964);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `city` (`city`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`city`) REFERENCES `cities` (`name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
