-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Авг 25 2017 г., 13:07
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
-- База данных: `database`
--

-- --------------------------------------------------------

--
-- Структура таблицы `begin`
--

CREATE TABLE `begin` (
  `id` int(11) NOT NULL,
  `nominal` varchar(8) NOT NULL,
  `price` smallint(6) NOT NULL,
  `vol` smallint(6) NOT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `begin`
--

INSERT INTO `begin` (`id`, `nominal`, `price`, `vol`, `data`) VALUES
(1, '5000 р.', 5000, 1, '2017-08-06'),
(2, '1000 р.', 1000, 0, '2017-08-06'),
(3, '500 р.', 500, 6, '2017-08-06'),
(4, '100 р.', 100, 1, '2017-08-06'),
(5, '50 р.', 50, 1, '2017-08-06'),
(6, 'мелочь', 1, 89, '2017-08-06');

-- --------------------------------------------------------

--
-- Структура таблицы `end`
--

CREATE TABLE `end` (
  `id` int(11) NOT NULL,
  `nominal` varchar(8) NOT NULL,
  `price` smallint(6) NOT NULL,
  `vol` smallint(6) NOT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `end`
--

INSERT INTO `end` (`id`, `nominal`, `price`, `vol`, `data`) VALUES
(1, '5000 р.', 5000, 0, '2017-08-06'),
(2, '1000 р.', 1000, 0, '2017-08-06'),
(3, '500 р.', 500, 5, '2017-08-06'),
(4, '100 р.', 100, 4, '2017-08-06'),
(5, '50 р.', 50, 1, '2017-08-06'),
(6, 'мелочь', 1, 0, '2017-08-06');

-- --------------------------------------------------------

--
-- Структура таблицы `intrans`
--

CREATE TABLE `intrans` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` smallint(6) DEFAULT NULL,
  `vol` smallint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `intrans`
--

INSERT INTO `intrans` (`id`, `date`, `name`, `price`, `vol`) VALUES
(1, '2017-08-06', 'подкрепление разменной д/с', 1745, 1),
(2, '2017-08-18', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `oper`
--

CREATE TABLE `oper` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `modul` mediumint(9) DEFAULT NULL,
  `incass` mediumint(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `oper`
--

INSERT INTO `oper` (`id`, `date`, `modul`, `incass`) VALUES
(1, '2017-08-17', 558, 478);

-- --------------------------------------------------------

--
-- Структура таблицы `outtrans`
--

CREATE TABLE `outtrans` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` smallint(6) DEFAULT NULL,
  `vol` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `outtrans`
--

INSERT INTO `outtrans` (`id`, `date`, `name`, `price`, `vol`) VALUES
(1, '2017-08-06', 'оплата груза по ТБ №123/2345, КБ 456', 240, 3),
(2, '2017-08-06', 'аренда помещения ', 2400, 2),
(3, '2017-08-18', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `sale`
--

CREATE TABLE `sale` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` smallint(6) DEFAULT NULL,
  `vol` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sale`
--

INSERT INTO `sale` (`id`, `date`, `name`, `price`, `vol`) VALUES
(1, '2017-08-06', 'Батарейка ААА', 250, 1),
(2, '2017-08-06', 'Элемент ск20', 46, 6),
(4, '2017-08-06', 'Спинер', 80, 5),
(6, '2017-08-18', 'Чехол2', 85, 3),
(13, '2017-08-18', 'чехол2', 85, 10),
(14, '2017-08-18', 'проверка', 50, 5),
(19, '2017-08-18', 'uuакб', 78, 2),
(20, '2017-08-18', 'jggf', 7, 9),
(36, '2017-08-18', 'tgdg', 47, 2),
(37, '2017-08-18', 'jhjh', 789, 1),
(38, '2017-08-18', NULL, 455, 54),
(39, '2017-08-18', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `setting`
--

CREATE TABLE `setting` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `profil` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `head` varchar(255) NOT NULL,
  `caption` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `setting`
--

INSERT INTO `setting` (`id`, `name`, `profil`, `type`, `head`, `caption`) VALUES
(1, 'sale', '0,0,1,1,1,0', 'id,number,text,number,number,number', '№,Наименование,Цена,Кол-во,Сумма', 'Продажи'),
(2, 'begin', '0,0,1,0', 'id,number,number,number', 'Номинал,Количество,Сумма', 'Начало дня'),
(3, 'outtrans', '0,0,1,1,1,0', 'id,number,text,number,number,number', '№,Расходная операция,Цена,Кол-во,Сумма', 'Расход (возврат) ден.средств'),
(4, 'intrans', '0,0,1,1,1,0', 'id,number,text,number,number,number', '№,Доходная операция,Цена,Кол-во,Сумма', 'Доход (приход), не связанные с розницей'),
(5, 'end', '0,0,1,0', 'id,number,number,number', 'Номинал,Количество,Сумма', 'Конец дня');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `begin`
--
ALTER TABLE `begin`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `end`
--
ALTER TABLE `end`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `intrans`
--
ALTER TABLE `intrans`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `oper`
--
ALTER TABLE `oper`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `outtrans`
--
ALTER TABLE `outtrans`
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
-- AUTO_INCREMENT для таблицы `end`
--
ALTER TABLE `end`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `intrans`
--
ALTER TABLE `intrans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `oper`
--
ALTER TABLE `oper`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `outtrans`
--
ALTER TABLE `outtrans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `sale`
--
ALTER TABLE `sale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT для таблицы `setting`
--
ALTER TABLE `setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
