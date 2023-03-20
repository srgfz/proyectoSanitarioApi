-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-03-2023 a las 20:08:25
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sanitariabd`
--
CREATE DATABASE IF NOT EXISTS `sanitariabd` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sanitariabd`;

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
  `organo` varchar(255) NOT NULL,
  `tecnicoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cassettes`
--

INSERT INTO `cassettes` (`id`, `fecha`, `caracteristicas`, `codigoQR`, `observaciones`, `organo`, `tecnicoId`) VALUES
(1, '2022-12-24 00:00:00', 'Características Cassette 1', 'QRCODE~http://localhost:3000/sanitaria/cassettes/muestras/1', 'Observaciones Cassette 1', 'CORAZÓN', 1),
(2, '2022-12-26 00:00:00', 'Características Cassette 2', 'QRCODE~http://localhost:3000/sanitaria/cassettes/muestras/2', 'Observaciones Cassette 2', 'CORAZÓN', 1),
(3, '2022-12-27 00:00:00', 'Características Cassette 3', 'QRCODE~http://localhost:3000/sanitaria/cassettes/muestras/3', 'Observaciones Cassette 3', 'CORAZÓN', 1),
(4, '2023-01-27 00:00:00', 'Características Cassette 4', 'QRCODE~http://localhost:3000/sanitaria/cassettes/muestras/4', 'Observaciones Cassette 4', 'RIÑÓN', 4),
(5, '2023-01-29 00:00:00', 'Características Cassette 5', 'QRCODE~http://localhost:3000/sanitaria/cassettes/muestras/5', 'Observaciones Cassette 5', 'RIÑÓN', 4),
(6, '2023-01-10 00:00:00', 'Características Cassette 6', 'QRCODE~http://localhost:3000/sanitaria/cassettes/muestras/6', 'Observaciones Cassette 6', 'TRÁQUEA', 3),
(7, '2023-01-19 00:00:00', 'Características Cassette 7', 'QRCODE~http://localhost:3000/sanitaria/cassettes/muestras/7', 'Observaciones Cassette 7', 'HUESO', 2),
(8, '2023-01-21 00:00:00', 'Características Cassette 8', 'QRCODE~http://localhost:3000/sanitaria/cassettes/muestras/8', 'Observaciones Cassette 8', 'HUESO', 2),
(9, '2023-02-20 00:00:00', 'Características Cassette 9', 'QRCODE~http://localhost:3000/sanitaria/cassettes/muestras/9', 'Observaciones Cassette 9', 'TRÁQUEA', 3),
(10, '2023-02-26 00:00:00', 'Características Cassette 10', 'QRCODE~http://localhost:3000/sanitaria/cassettes/muestras/10', 'Observaciones Cassette 10', 'RIÑÓN', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagens`
--

CREATE TABLE `imagens` (
  `id` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `muestraId` int(11) DEFAULT NULL,
  `cassetteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestras`
--

CREATE TABLE `muestras` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `observaciones` mediumtext DEFAULT NULL,
  `codigoQR` varchar(255) NOT NULL,
  `tincion` varchar(255) NOT NULL,
  `tecnicoId` int(11) DEFAULT NULL,
  `cassetteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `muestras`
--

INSERT INTO `muestras` (`id`, `fecha`, `observaciones`, `codigoQR`, `tincion`, `tecnicoId`, `cassetteId`) VALUES
(1, '2022-03-09 00:00:00', 'Observaciones Muestra 3', 'QRCODE~http://localhost:3000/sanitaria/muestras/1', 'Tipo A', 1, 1),
(2, '2022-03-09 00:00:00', 'Observaciones Muestra 4', 'QRCODE~http://localhost:3000/sanitaria/muestras/2', 'Tipo A', 1, 2),
(3, '2022-03-09 00:00:00', 'Observaciones Muestra 5', 'QRCODE~http://localhost:3000/sanitaria/muestras/3', 'Tipo B', 1, 3);

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
(1, 'NombreTec4', 'Apellidos Técnico4', '1º DAM', 'Ribera', 'emailtecnico4@gmail.com', '$2a$10$7yKIlUse4YB7CkqyjQ1c5.8HPiwHyYgfptJe6CTROUdXtAa25eYra'),
(2, 'NombreTec2', 'Apellidos Técnico2', '1º DAW', 'Ribera', 'emailtecnico2@gmail.com', '$2a$10$HDPuqsnaTagFeRNzMSiSzuUrf7ZLLLAkzvK7HvqeqGgdu7wjFmc/6'),
(3, 'NombreTec3', 'Apellidos Técnico3', '2º DAM', 'Ribera', 'emailtecnico3@gmail.com', '$2a$10$mqHjImppJ/aO4itKREu6t.HP51P1giE09Q05aGG6lw9Yo3NPIa17e'),
(4, 'NombreTec4', 'Apellidos Técnico4', '1º DAM', 'Ribera', 'emailtecnico1@gmail.com', '$2a$10$mBhOh1Svfnq/usflJxOvKe4lFZ4amveO9RwI5mrPwO/4jnIZJbXl.');

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
-- Indices de la tabla `imagens`
--
ALTER TABLE `imagens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `muestraId` (`muestraId`),
  ADD KEY `cassetteId` (`cassetteId`);

--
-- Indices de la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tecnicoId` (`tecnicoId`),
  ADD KEY `cassetteId` (`cassetteId`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `imagens`
--
ALTER TABLE `imagens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
-- Filtros para la tabla `imagens`
--
ALTER TABLE `imagens`
  ADD CONSTRAINT `imagens_ibfk_1` FOREIGN KEY (`muestraId`) REFERENCES `muestras` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `imagens_ibfk_2` FOREIGN KEY (`cassetteId`) REFERENCES `cassettes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD CONSTRAINT `muestras_ibfk_1` FOREIGN KEY (`tecnicoId`) REFERENCES `tecnicos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `muestras_ibfk_2` FOREIGN KEY (`cassetteId`) REFERENCES `cassettes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
