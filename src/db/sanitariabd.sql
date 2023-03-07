-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-03-2023 a las 13:32:10
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.19



SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE DATABASE IF NOT EXISTS `sanitariabd` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sanitariabd`;

--
-- Base de datos: `sanitariabd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cassettes`
--

CREATE TABLE `cassettes` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `caracteristicas` varchar(255) DEFAULT NULL,
  `codigoQR` varchar(255) NOT NULL,
  `observaciones` mediumtext DEFAULT NULL,
  `imagenes` varchar(255) DEFAULT NULL,
  `tecnicoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cassettes`
--

INSERT INTO `cassettes` (`id`, `fecha`, `caracteristicas`, `codigoQR`, `observaciones`, `imagenes`, `tecnicoId`) VALUES
(1, '2022-12-24 00:00:00', 'Características Cassette 1', 'CódigoQR1', 'Observaciones Cassette 1', 'Imagen Cassete 1', 1),
(2, '2022-12-26 00:00:00', 'Características Cassette 2', 'CódigoQR2', 'Observaciones Cassette 2', 'Imagen Cassete 2', 1),
(3, '2022-12-27 00:00:00', 'Características Cassette 3', 'CódigoQR3', 'Observaciones Cassette 3', 'Imagen Cassete 3', 1),
(4, '2023-01-27 00:00:00', 'Características Cassette 4', 'CódigoQR4', 'Observaciones Cassette 4', 'Imagen Cassete 4', 4),
(5, '2023-01-29 00:00:00', 'Características Cassette 5', 'CódigoQR5', 'Observaciones Cassette 5', 'Imagen Cassete 5', 4),
(6, '2023-01-10 00:00:00', 'Características Cassette 6', 'CódigoQR6', 'Observaciones Cassette 6', 'Imagen Cassete 6', 3),
(7, '2023-01-19 00:00:00', 'Características Cassette 7', 'CódigoQR7', 'Observaciones Cassette 7', 'Imagen Cassete 7', 2),
(8, '2023-01-21 00:00:00', 'Características Cassette 8', 'CódigoQR8', 'Observaciones Cassette 8', 'Imagen Cassete 8', 2),
(9, '2023-02-20 00:00:00', 'Características Cassette 9', 'CódigoQR9', 'Observaciones Cassette 9', 'Imagen Cassete 9', 3),
(10, '2023-02-26 00:00:00', 'Características Cassette 10', 'CódigoQR10', 'Observaciones Cassette 10', 'Imagen Cassete 10', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cortes`
--

CREATE TABLE `cortes` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `observaciones` mediumtext DEFAULT NULL,
  `codigoQR` varchar(255) NOT NULL,
  `tecnicoId` int(11) DEFAULT NULL,
  `cassetteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cortes`
--

INSERT INTO `cortes` (`id`, `fecha`, `observaciones`, `codigoQR`, `tecnicoId`, `cassetteId`) VALUES
(1, '2022-02-27 00:00:00', 'Observaciones Corte 1', 'CódigoQR Corte 1', 1, 10),
(2, '2022-02-24 00:00:00', 'Observaciones Corte 2', 'CódigoQR Corte 2', 2, 10),
(3, '2022-02-24 00:00:00', 'Observaciones Corte 3', 'CódigoQR Corte 3', 2, 10),
(4, '2022-02-24 00:00:00', 'Observaciones Corte 4', 'CódigoQR Corte 4', 1, 10),
(5, '2022-02-28 00:00:00', 'Observaciones Corte 5', 'CódigoQR Corte 5', 4, 1),
(6, '2022-03-03 00:00:00', 'Observaciones Corte 6', 'CódigoQR Corte 6', 3, 3),
(7, '2022-03-03 00:00:00', 'Observaciones Corte 7', 'CódigoQR Corte 7', 4, 2),
(8, '2022-03-03 00:00:00', 'Observaciones Corte 8', 'CódigoQR Corte 8', 4, 2),
(9, '2022-03-03 00:00:00', 'Observaciones Corte 9', 'CódigoQR Corte 9', 4, 4),
(10, '2022-03-03 00:00:00', 'Observaciones Corte 10', 'CódigoQR Corte 10', 4, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestras`
--

CREATE TABLE `muestras` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `observaciones` mediumtext DEFAULT NULL,
  `codigoQR` varchar(255) NOT NULL,
  `imagenes` varchar(255) NOT NULL,
  `organo` varchar(255) NOT NULL,
  `tincion` varchar(255) NOT NULL,
  `tecnicoId` int(11) DEFAULT NULL,
  `corteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `muestras`
--

INSERT INTO `muestras` (`id`, `fecha`, `observaciones`, `codigoQR`, `imagenes`, `organo`, `tincion`, `tecnicoId`, `corteId`) VALUES
(4, '2022-03-09 00:00:00', 'Observaciones Muestra 3', 'CodigoQR Muestra3', 'Imgs Muestra3', 'Corazón', 'Tipo A', 1, 1),
(5, '2022-03-09 00:00:00', 'Observaciones Muestra 4', 'CodigoQR Muestra4', 'Imgs Muestra4', 'Corazón', 'Tipo A', 1, 1),
(6, '2022-03-09 00:00:00', 'Observaciones Muestra 5', 'CodigoQR Muestra5', 'Imgs Muestra5', 'Pulmón', 'Tipo B', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnicos`
--

CREATE TABLE `tecnicos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `curso` varchar(255) NOT NULL,
  `centro` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tecnicos`
--

INSERT INTO `tecnicos` (`id`, `nombre`, `apellidos`, `curso`, `centro`, `email`, `password`) VALUES
(1, 'NombreTec1', 'Apellidos Técnico1', '2º DAW', 'Ribera', 'emailtecnico1@gmail.com', '$2a$10$KRXJhTeyEHBhIX6KCSV/nuONd/PCqGq6eSptZ5pl1C6H6uXb5U5yW'),
(2, 'NombreTec2', 'Apellidos Técnico2', '1º DAW', 'Ribera', 'emailtecnico2@gmail.com', '$2a$10$HDPuqsnaTagFeRNzMSiSzuUrf7ZLLLAkzvK7HvqeqGgdu7wjFmc/6'),
(3, 'NombreTec3', 'Apellidos Técnico3', '2º DAM', 'Ribera', 'emailtecnico3@gmail.com', '$2a$10$mqHjImppJ/aO4itKREu6t.HP51P1giE09Q05aGG6lw9Yo3NPIa17e'),
(4, 'NombreTec4', 'Apellidos Técnico4', '1º DAM', 'Ribera', 'emailtecnico4@gmail.com', '$2a$10$mBhOh1Svfnq/usflJxOvKe4lFZ4amveO9RwI5mrPwO/4jnIZJbXl.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cassettes`
--
ALTER TABLE `cassettes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tecnicoId` (`tecnicoId`);

--
-- Indices de la tabla `cortes`
--
ALTER TABLE `cortes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tecnicoId` (`tecnicoId`),
  ADD KEY `cassetteId` (`cassetteId`);

--
-- Indices de la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tecnicoId` (`tecnicoId`),
  ADD KEY `corteId` (`corteId`);

--
-- Indices de la tabla `tecnicos`
--
ALTER TABLE `tecnicos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cassettes`
--
ALTER TABLE `cassettes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `cortes`
--
ALTER TABLE `cortes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `muestras`
--
ALTER TABLE `muestras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tecnicos`
--
ALTER TABLE `tecnicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cassettes`
--
ALTER TABLE `cassettes`
  ADD CONSTRAINT `cassettes_ibfk_1` FOREIGN KEY (`tecnicoId`) REFERENCES `tecnicos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `cortes`
--
ALTER TABLE `cortes`
  ADD CONSTRAINT `cortes_ibfk_1` FOREIGN KEY (`tecnicoId`) REFERENCES `tecnicos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `cortes_ibfk_2` FOREIGN KEY (`cassetteId`) REFERENCES `cassettes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD CONSTRAINT `muestras_ibfk_1` FOREIGN KEY (`tecnicoId`) REFERENCES `tecnicos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `muestras_ibfk_2` FOREIGN KEY (`corteId`) REFERENCES `cortes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
