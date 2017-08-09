-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Авг 09 2017 г., 12:53
-- Версия сервера: 10.2.7-MariaDB
-- Версия PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `mybasedata`
--

-- --------------------------------------------------------

--
-- Структура таблицы `begin`
--

CREATE TABLE `begin` (
  `id` int(11) NOT NULL,
  `nominal` varchar(8) NOT NULL,
  `ru` smallint(6) NOT NULL,
  `vol` tinyint(4) NOT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `begin`
--

INSERT INTO `begin` (`id`, `nominal`, `ru`, `vol`, `data`) VALUES
(1, '5000 р.', 5000, 0, '2017-08-06'),
(2, '1000 р.', 1000, 0, '2017-08-06'),
(3, '500 р.', 500, 1, '2017-08-06'),
(4, '100 р.', 100, 0, '2017-08-06'),
(5, '50 р.', 50, 0, '2017-08-06'),
(6, 'мелочь', 1, 0, '2017-08-06'),
(19, '5000 р.', 5000, 0, '2017-08-09'),
(20, '1000 р.', 1000, 0, '2017-08-09'),
(21, '500 р.', 500, 0, '2017-08-09'),
(22, '100 р.', 100, 0, '2017-08-09'),
(23, '50 р.', 50, 0, '2017-08-09'),
(24, 'мелочь', 1, 0, '2017-08-09');

-- --------------------------------------------------------

--
-- Структура таблицы `sale`
--

CREATE TABLE `sale` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `enum` tinyint(4) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` smallint(6) NOT NULL,
  `vol` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sale`
--

INSERT INTO `sale` (`id`, `date`, `enum`, `name`, `price`, `vol`) VALUES
(1, '2017-08-06', 1, 'Батарейка ААА', 25, 2),
(2, '2017-08-06', 2, 'Элемент ск2025', 47, 5);

-- --------------------------------------------------------

--
-- Структура таблицы `setting`
--

CREATE TABLE `setting` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `profil` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `head` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `setting`
--

INSERT INTO `setting` (`id`, `name`, `profil`, `type`, `head`) VALUES
(1, 'sale', '0,1,1,1,0', 'number,string,number,number,number', '№,Наименование,Цена,Кол-во,Сумма'),
(2, 'begin', '0,1,0', 'number,number,number', 'Номинал,Количество,Сумма');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `begin`
--
ALTER TABLE `begin`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `setting`
--
ALTER TABLE `setting`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `begin`
--
ALTER TABLE `begin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT для таблицы `sale`
--
ALTER TABLE `sale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `setting`
--
ALTER TABLE `setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
