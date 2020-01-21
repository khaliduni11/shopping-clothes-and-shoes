-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: market
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addcart`
--

DROP TABLE IF EXISTS `addcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `addcart` (
  `addcartId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `currentDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '1',
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`addcartId`),
  UNIQUE KEY `productId` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=195 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addcart`
--

LOCK TABLES `addcart` WRITE;
/*!40000 ALTER TABLE `addcart` DISABLE KEYS */;
/*!40000 ALTER TABLE `addcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordered`
--

DROP TABLE IF EXISTS `ordered`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ordered` (
  `orderedId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `currentDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '1',
  `country` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `houseNumber` varchar(255) NOT NULL,
  `delivered` int(11) DEFAULT '0',
  `username` varchar(100) NOT NULL,
  PRIMARY KEY (`orderedId`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordered`
--

LOCK TABLES `ordered` WRITE;
/*!40000 ALTER TABLE `ordered` DISABLE KEYS */;
INSERT INTO `ordered` VALUES (4,'polo','2019-06-09 09:29:30',26,'https://i.pinimg.com/564x/02/ae/b9/02aeb997717d628ffaf01442eca32139.jpg','xl','white','white outfit polo',6,'Somalia','banadir','mogadisho','618591113','mogadisho','6',1,''),(5,'polo','2019-06-10 10:48:22',19,'https://i.pinimg.com/564x/77/75/94/777594beb360ed6e47f3acc753672ea2.jpg','xl','black','good polo',6,'Somalia','banadir','mogadisho','618591113','mogadisho','8',1,''),(6,'polo','2019-06-10 10:53:36',19,'https://i.pinimg.com/564x/77/75/94/777594beb360ed6e47f3acc753672ea2.jpg','xl','black','good polo',5,'Somalia','banadir','mogadisho','618591113','mogadisho','5',1,'khaliduni111'),(7,'polo','2019-06-10 11:06:46',19,'https://i.pinimg.com/564x/77/75/94/777594beb360ed6e47f3acc753672ea2.jpg','xl','black','good polo',6,'Somalia','banadir','mogadisho','618591113','mogadisho','6',1,''),(8,'polo','2019-06-10 11:36:48',19,'https://i.pinimg.com/564x/77/75/94/777594beb360ed6e47f3acc753672ea2.jpg','xl','black','good polo',4,'Somalia','banadir','mogadisho','618591113','mogadisho','5',1,'khaliduni11'),(9,'polo','2019-06-10 11:41:53',26,'https://i.pinimg.com/564x/02/ae/b9/02aeb997717d628ffaf01442eca32139.jpg','xl','white','white outfit polo',6,'Somalia','banadir','mogadisho','618591113','mogadisho','1',1,'khaliduni111'),(10,'polo','2019-06-10 11:42:53',26,'https://i.pinimg.com/564x/02/ae/b9/02aeb997717d628ffaf01442eca32139.jpg','xl','white','white outfit polo',5,'Somalia','banadir','mogadisho','618591113','mogadisho','2',1,'khaliduni111'),(11,'suit','2019-06-12 11:00:03',100,'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80','44','black','good suit!!!',8,'Somalia','banadir','mogadisho','618591113','mogadisho','3',1,'khaliduni111'),(12,'casual trouser ','2019-06-12 11:03:36',11,'https://images.unsplash.com/photo-1463676403413-f2216651e8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','40','mixture white and black','good trouser',5,'Somalia','banadir','mogadisho','618591113','mogadisho','4',1,'khaliduni111'),(13,'casual trouser ','2019-06-12 11:07:01',11,'https://images.unsplash.com/photo-1463676403413-f2216651e8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','40','mixture white and black','good trouser',6,'Somalia','banadir','mogadisho','618591113','mogadisho','5',1,'khaliduni111'),(14,'suit','2019-06-12 11:09:08',100,'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80','40','black','good suit!!!',6,'Somalia','banadir','mogadisho','618591113','mogadisho','4',0,'khaliduni111'),(15,'casual trouser ','2019-06-12 11:21:55',11,'https://images.unsplash.com/photo-1463676403413-f2216651e8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','40','mixture white and black','good trouser',6,'Somalia','banadir','mogadisho','618591113','mogadisho','5',0,'khaliduni111'),(16,'suit','2019-06-12 11:23:38',100,'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80','40','black','good suit!!!',7,'Somalia','banadir','mogadisho','618591113','mogadisho','5',0,'khaliduni111'),(17,'casual trouser ','2019-06-12 11:27:31',11,'https://images.unsplash.com/photo-1463676403413-f2216651e8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','40','mixture white and black','good trouser',7,'Somalia','banadir','mogadisho','618591113','mogadisho','6',0,'khaliduni111'),(18,'casual trouser ','2019-06-12 11:31:04',11,'https://images.unsplash.com/photo-1463676403413-f2216651e8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','xl','mixture white and black','good trouser',6,'Somalia','banadir','mogadisho','618591113','mogadisho','19',0,'khaliduni111'),(19,'casual trouser ','2019-06-12 11:31:51',11,'https://images.unsplash.com/photo-1463676403413-f2216651e8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','40','mixture white and black','good trouser',5,'Somalia','banadir','mogadisho','618591113','mogadisho','7',0,'khaliduni111'),(20,'casual trouser ','2019-06-12 11:43:38',11,'https://images.unsplash.com/photo-1463676403413-f2216651e8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','40','mixture white and black','good trouser',5,'Somalia','banadir','mogadisho','618591113','mogadisho','5',0,'khaliduni111'),(21,'casual trouser ','2019-06-12 11:47:38',11,'https://images.unsplash.com/photo-1463676403413-f2216651e8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','40','mixture white and black','good trouser',14,'Somalia','banadir','mogadisho','618591113','mogadisho','12',0,'khaliduni111'),(22,'suit','2019-06-12 15:11:33',100,'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80','42','black','good suit!!!',6,'Somalia','banadir','mogadisho','618591113','mogadisho','10',0,'khaliduni111'),(23,'casual trouser ','2019-06-12 19:16:34',11,'https://images.unsplash.com/photo-1463676403413-f2216651e8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','40','mixture white and black','good trouser',3,'Somalia','banadir','mogadisho','618591113','mogadisho','2',0,'khaliduni111'),(24,'suit','2019-06-12 19:17:11',100,'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80','42','black','good suit!!!',4,'Somalia','banadir','mogadisho','618591113','mogadisho','5',0,'khaliduni111'),(25,'polo','2019-06-12 19:17:49',26,'https://i.pinimg.com/564x/02/ae/b9/02aeb997717d628ffaf01442eca32139.jpg','m','white','white outfit polo',6,'Somalia','banadir','mogadisho','618591113','mogadisho','6',0,'khaliduni111'),(26,'winter wear','2019-06-13 13:11:13',30,'https://images.unsplash.com/photo-1521060413616-2a0cf7c2b98a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80','40','green','good',6,'Somalia','banadir','mogadisho','618591113','mogadisho','7',0,'khaliduni111');
/*!40000 ALTER TABLE `ordered` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(900) NOT NULL,
  `size` varchar(200) NOT NULL,
  `color` varchar(200) NOT NULL,
  `typeOfGoods` varchar(200) NOT NULL,
  `typeOfWhere` varchar(200) NOT NULL,
  `typeOfPerson` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (26,'winter wear',30,30,'good','https://images.unsplash.com/photo-1521060413616-2a0cf7c2b98a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80','30-40','green','Clothes','Top wear','Women');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `isAdmin` varchar(2) DEFAULT '0',
  `editor` varchar(2) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'khalid','hussein','khaliduni111','khaliduni11@gmail.com','$2b$10$sRPYUesIRUxNvGdPhbr4BO8Os6s0ciRdLKz9Y.T3MbuRx9GrqzGNG','1','1'),(6,'sadam','hussein','sadam11','sadam11@gmail.com','$2b$10$xe53XNIN33w934JlSD3fCOqsVp509WFehU2tC5JnMw1.PEul3DyW.','0','0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-19  6:48:39
