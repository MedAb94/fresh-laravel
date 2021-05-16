-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 30, 2021 at 03:56 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `giz`
--

-- --------------------------------------------------------

--
-- Table structure for table `cds`
--

CREATE TABLE `cds` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cds`
--

INSERT INTO `cds` (`id`, `libelle`, `created_at`, `updated_at`) VALUES
(1, ' Promotion d’une croissance plus diversifiée des secteurs porteurs', '2021-03-30 13:44:59', '2021-03-30 13:44:59'),
(2, ' Promotion du secteur privé et amélioration de la pratique des affaires', '2021-03-30 13:44:59', '2021-03-30 13:44:59'),
(3, ' Renforcement des infrastructures de soutien à la croissance économique', '2021-03-30 13:44:59', '2021-03-30 13:44:59'),
(4, ' Relèvement de l’accès et de la qualité de l’éducation et de la formation professionnelle', '2021-03-30 13:44:59', '2021-03-30 13:44:59'),
(5, ' Amélioration des conditions d’accès aux services de santé', '2021-03-30 13:44:59', '2021-03-30 13:44:59'),
(6, ' Promotion de l’Emploi, de la jeunesse, de la culture, résilience des couches les plus vulnérables et genre', '2021-03-30 13:44:59', '2021-03-30 13:44:59'),
(7, ' Gouvernance Politique, Sécurité, Etat de droit et Décentralisation', '2021-03-30 13:44:59', '2021-03-30 13:44:59'),
(8, ' Gouvernance administrative, économique et financière ', '2021-03-30 13:44:59', '2021-03-30 13:44:59'),
(9, ' Gouvernance environnementale et réduction des catastrophes', '2021-03-30 13:44:59', '2021-03-30 13:44:59');

-- --------------------------------------------------------

--
-- Table structure for table `chantiers`
--

CREATE TABLE `chantiers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `levier_id` int(11) NOT NULL,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chantiers`
--

INSERT INTO `chantiers` (`id`, `levier_id`, `libelle`, `created_at`, `updated_at`) VALUES
(1, 1, 'Promotion d’une croissance plus diversifiée des secteurs porteurs', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(2, 1, 'Promotion du secteur privé et de l’amélioration de la pratique des affaires', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(3, 1, 'Renforcement des infrastructures de soutien à la croissance', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(4, 2, 'Relèvement de l’accès et de la qualité de l’éducation et de la formation professionnelle', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(5, 2, 'Amélioration des conditions d’accès aux services de santé', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(6, 2, 'Emploi pour tous et de promotion de la jeunesse, de la culture et du sport', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(7, 2, 'Meilleure résilience des couches les plus vulnérables', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(8, 3, 'Gouvernance Politique, la cohésion sociale, la paix et la sécurité', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(9, 3, 'Consolidation de l’Etat de droit, des droits humains et de la justice', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(10, 3, 'Capture du dividende démographique', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(11, 3, 'Promotion de la participation citoyenne des femmes et la lutte contre les discriminations basées sur le genre', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(12, 3, 'Transformation de l’administration publique', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(13, 3, 'Meilleure gouvernance économique et financière ', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(14, 3, 'Développement local et de la décentralisation', '2021-03-30 13:44:55', '2021-03-30 13:44:55'),
(15, 3, 'Meilleure gouvernance environnementale, de gestion rationnelle des ressources naturelles et de réduction des risques de désastres', '2021-03-30 13:44:56', '2021-03-30 13:44:56');

-- --------------------------------------------------------

--
-- Table structure for table `communes`
--

CREATE TABLE `communes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `moughataa_id` int(11) NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `indicateurs`
--

CREATE TABLE `indicateurs` (
  `id` varchar(3) DEFAULT NULL,
  `intitule` varchar(358) DEFAULT NULL,
  `periodicite` varchar(11) DEFAULT NULL,
  `source` varchar(68) DEFAULT NULL,
  `support` varchar(66) DEFAULT NULL,
  `valeur_cible` varchar(12) DEFAULT NULL,
  `instance` varchar(66) DEFAULT NULL,
  `theme_id` varchar(8) DEFAULT NULL,
  `levier_id` varchar(9) DEFAULT NULL,
  `chantier_id` varchar(11) DEFAULT NULL,
  `intervention_id` varchar(15) DEFAULT NULL,
  `region_id` varchar(9) DEFAULT NULL,
  `activite_id` varchar(11) DEFAULT NULL,
  `cible_id` varchar(8) DEFAULT NULL,
  `created_at` varchar(10) DEFAULT NULL,
  `updated_at` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `indicateurs`
--

INSERT INTO `indicateurs` (`id`, `intitule`, `periodicite`, `source`, `support`, `valeur_cible`, `instance`, `theme_id`, `levier_id`, `chantier_id`, `intervention_id`, `region_id`, `activite_id`, `cible_id`, `created_at`, `updated_at`) VALUES
('1', 'Proportion de la population vivant au-dessous du seuil national de pauvreté, par sexe et âge', '', '', '', '100', 'ONS/DSDS', '', '', '', '28', '', '', '2', '', ''),
('2', 'Taux de pauvreté en milieu rural', '4 ans', 'EPCV', 'Profil de pauvreté ', '100', 'ONS/DSCV', '', '', '', '1', '', '', '2', '', ''),
('3', 'Proportion de femmes bénéficiant de socles ou systèmes de protection sociale', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', '3', '', ''),
('4', 'Proportion de la population vivant dans des ménages ayant accès aux services de base', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', '4', '', ''),
('5', 'Proportion de personnes vivant avec moins de la moitié du revenu médian, par sexe, âge et situation au regard du handicap', '', 'EPCV', 'EPCV/Profil de la pauvreté', '100', 'ONS', '', '', '', NULL, '', '', '81', '', ''),
('6', 'Proportion de ménages vivant dans des habitats précaires (Tente, Case/hutte, Baraque et M’bar)', '4 ans', 'EPCV', 'Profil de pauvreté ', '100', 'ONS/DSCV', '', '', '', '31', '', '', '91', '', ''),
('7', 'Proportion de la population carcérale en instance de jugement', 'annuel', 'M. de la Justice ', 'M. de la Justice ', '100', 'M. de la Justice ', '', '', '', '38', '', '', '141', '', ''),
('8', 'Proportion d’enfants de moins de 5 ans ayant été enregistrés par une autorité d’état civil', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '36', '', '', '147', '', ''),
('9', 'Prévalence d’une insécurité alimentaire modérée ou grave, évaluée selon l’échelle de mesure du sentiment d’insécurité alimentaire', 'Annuelle', 'Note FSMS – CSA et PAM', 'Note FSMS', '100', 'CSA et PAM', '', '', '', NULL, '', '', '8', '', ''),
('10', 'Prévalence du retard de croissance chez les enfants de moins de 5 ans', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '28', '', '', '9', '', ''),
('11', 'Prévalence de l\'insuffisance ponderale', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '28', '', '', '9', '', ''),
('12', 'Proportion d’accouchements assistés par du personnel de santé qualifié', 'Annuelle', 'ERSIP, EDSM, SNIS', 'ERSIP, EDSM, Annuaire Statistiques Sanitaires', '100', 'ONS/DSDS, MS/SNIS', '', '', '', NULL, '', '', '16', '', ''),
('13', 'Incidence du paludisme (pour 1 000 habitants) ', '', 'SNIS', 'Annuaire Statistiques sanitaires', '100', 'MS/SNIS', '', '', '', NULL, '', '', '18', '', ''),
('14', 'Prévalence contraceptifs (%)', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '25', '', '', '22', '', ''),
('15', 'Couverture sanitaire (%)', 'annuel', 'Données internes', 'CARTE SANITAIRE NATIONALE DE LA MAURITANIE', '100', 'M. Santé', '', '', '', '25', '', '', '23', '', ''),
('16', 'Pourcentage d’enfants âgés de 12-23 mois ayant reçu toutes les vaccinations recommandées dans le programme national de vaccination avant leur premier anniversaire.', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '25', '', '', '26', '', ''),
('17', ' Proportion d’enfants et de jeunes : a) en cours élémentaire; b) en fin de cycle primaire; c) en fin de premier cycle du secondaire qui maîtrisent au moins les normes d’aptitudes minimales en i) lecture et ii) mathématiques, par sexe', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', '29', '', ''),
('18', 'Nombre d’élèves de 5 ans inscrit au pré-scolaire', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', '30', '', ''),
('19', 'Taux de participation des jeunes et des adultes à un programme d’éducation et de formation formelle ou non formelle au cours des 12 derniers mois par sexe (nombre de bénéficiaires)', '', 'MENFTR', 'MENFTR', '100', 'MENFTR', '', '', '', NULL, '', '', '31', '', ''),
('20', 'Rapport fille/garçon - Secondaire 1er cycle', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', '33', '', ''),
('21', 'Rapport fille/garçon - primaire', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', '33', '', ''),
('22', 'Rapport fille/garçon - Secondaire 2ème cycle', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '19', '', '', '33', '', ''),
('23', 'Taux d’alphabétisation des jeunes', 'annuel', 'MICS/EPCV', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS/DSCV', '', '', '', '23', '', '', '34', '', ''),
('24', 'Indice infrastructure - primaire', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', '36', '', ''),
('25', 'Indice infrastructure - Collège', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', '36', '', ''),
('26', 'Indice infrastructure - Lycée', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '19', '', '', '36', '', ''),
('27', 'Nombre de jeunes filles âgées de 15-19 ans actuellement mariées', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '28', '', '', '41', '', ''),
('28', 'Prévalence de la mutilation génitale féminine/excision (MGF/E) chez les filles/femmes', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '28', '', '', '41', '', ''),
('29', 'Proportion de sièges occupés par des femmes dans les administrations locales : élus dans les conseils municipaux', 'annuel', 'CENI', '', '100', 'CENI', '', '', '', '42', '', '', '43', '', ''),
('30', 'Proportion de la population ayant accès à une source d’eau potable', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '29', '', '', '48', '', ''),
('31', 'Pourcentage de membres des ménages utilisant des installations sanitaires améliorées non partagées', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '29', '', '', '49', '', ''),
('32', 'Proportion de la population utilisant des équipements pour se laver les mains avec de l’eau et du savon', '4 ans', 'MICS', 'Rapport MICS-Mauritanie 2016', '100', 'ONS/DSDS', '', '', '', NULL, '', '', '49', '', ''),
('33', 'Taux de couverture de l’électricité', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '30', '', '', '56', '', ''),
('34', 'Taux de bancarisation des ménages', '4 ans', 'EPCV', 'Profil de pauvreté ', '100', 'ONS/DSCV', '', '', '', '11', '', '', '61', '', ''),
('35', 'Taux de chômage  (15 ans et plus)', '5 ans', 'ENESI 2017', 'Situation de l\'emploi et du secteur informel en Mauritanie en 2017', '100', 'ONS/DSDS', '', '', '', '26', '', '', '65', '', ''),
('36', 'Taux de chômage (15-24 ans)', '5 ans', 'ENESI 2017', 'Situation de l\'emploi et du secteur informel en Mauritanie en 2017', '100', 'ONS/DSDS', '', '', '', '26', '', '', '65', '', ''),
('37', 'Proportion de jeunes (15-24 ans) non scolarisé et sans emploi', '5 ans', 'ENESI 2017', 'Situation de l\'emploi et du secteur informel en Mauritanie en 2017', '100', 'ONS/DSDS', '', '', '', '26', '', '', '66', '', ''),
('38', 'Proportion de la population ayant accès à un reseau mobile par type de technologie', 'Annuel', 'ARNP', 'ARNP', '100', 'ARNP', '', '', '', '17', '', '', '80', '', ''),
('39', 'Nombre de linéaire de routes bitumées (KM)', 'annuel', 'M. de l’Équipement et Transports', 'M. de l’Équipement et Transports', '100', 'M. Equipements et Transport/DGIT/DE', '', '', '', '15', '', '', 'null', '', ''),
('40', 'Nombre de linéaire de routes réhabilitées (KM)', 'annuel', 'M. de l’Équipement et Transports', 'M. de l’Équipement et Transports', '100', 'M. Equipements et Transport/DGIT/DE', '', '', '', '15', '', '', 'null', '', ''),
('41', 'Proportion de la population utilisant l\'internet.', '3 ans', 'MICS', 'Rapport MICS-Mauritanie', '100', 'ONS/DSDS', '', '', '', '17', '', '', 'null', '', ''),
('42', 'Proportion des élèves allant dans une école privée - primaire', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', 'null', '', ''),
('43', 'Taux net de scolarisation - Secondaire 1er cycle', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', 'null', '', ''),
('44', 'Taux d’achèvement - Secondaire 1er cycle', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '18', '', '', 'null', '', ''),
('45', '% d’élèves ayant obtenu au moins 50% du score global au BEPC', 'annuel', 'M. EducNat', 'M. EducNat', '100', 'M. EducNat', '', '', '', '18', '', '', 'null', '', ''),
('46', 'Taux de transition au 1er Cycle secondaire', 'annuel', 'M. EducNat', 'M. EducNat', '100', 'M. EducNat', '', '', '', '18', '', '', 'null', '', ''),
('47', 'Nombre d’élèves par classe - Secondaire 1er cycle', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', 'null', '', ''),
('48', 'Taux brut de scolarisation - Secondaire 1er cycle', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', 'null', '', ''),
('49', 'Proportion des élèves allant dans un collège privé', '', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', 'null', '', ''),
('50', 'Taux de retention au 1er cycle du secondaire', '', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', 'null', '', ''),
('51', 'Taux net de scolarisation - primaire', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '18', '', '', 'null', '', ''),
('52', 'Taux d’achèvement - primaire', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '18', '', '', 'null', '', ''),
('53', '% d’élèves ayant obtenu au moins 50% du score global aux examens de fin d’études fondamentales (CEP)', 'annuel', 'M. EducNat', 'M. EducNat', '100', 'M. EducNat', '', '', '', '18', '', '', 'null', '', ''),
('54', 'Nombre d’élèves par classe - primaire', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', 'null', '', ''),
('55', 'Taux net de scolarisation - Secondaire 2ème cycle', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '19', '', '', 'null', '', ''),
('56', 'Taux de reussite au bac', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '19', '', '', 'null', '', ''),
('57', 'Taux d’achèvement - Secondaire 2ème cycle', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '19', '', '', 'null', '', ''),
('58', 'Nombre d’élèves par classe - Secondaire 2ème cycle', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '19', '', '', 'null', '', ''),
('59', 'Proportion des élèves allant dans un lycée privé', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '19', '', '', 'null', '', ''),
('60', 'Nombre d\'étudiants dans les écoles et centres de FTP', 'annuel', 'M. de la Formation Professionnelle et des TIC', 'M. de la Formation Professionnelle et des TIC', '100', 'M. de la Formation Professionnelle et des TIC', '', '', '', '22', '', '', 'null', '', ''),
('61', 'Nombre d\'étudiants dans les écoles et centres de FTP - STEM', 'annuel', 'M. de la Formation Professionnelle et des TIC', 'M. de la Formation Professionnelle et des TIC', '100', 'M. de la Formation Professionnelle et des TIC', '', '', '', '22', '', '', 'null', '', ''),
('62', 'Taux d\'activité', '5 ans', 'ENESI 2017', 'Situation de l\'emploi et du secteur informel en Mauritanie en 2017', '100', 'ONS/DSDS', '', '', '', '26', '', '', 'null', '', ''),
('63', 'Couverture en station service ', '', 'M. du Pétrole, Mines et Energie', 'M. du Pétrole, Mines et Energie', '100', 'M. du Pétrole, Mines et Energie', '', '', '', '30', '', '', 'null', '', ''),
('64', 'Taux de dépendance démographique', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSD', '', '', '', '41', '', '', 'null', '', ''),
('65', 'Taux de satisfaction des usagers de l\'administration', 'annuel', 'M. de la Fonction Publique ', 'M. de la Fonction Publique ', '100', 'M. de la Fonction Publique ', '', '', '', '44', '', '', 'null', '', ''),
('66', 'Taux de réalisation des SCRAPP', 'annuel', 'DSP', 'DSP', '100', 'DSP', '', '', '', '47', '', '', 'null', '', ''),
('67', 'proportion des menages utilisant des combustibles autres que le bois et le charbon pour la cuisson des aliments', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '56', '', '', 'null', '', ''),
('68', 'Nombre de structures', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', 'null', '', ''),
('69', 'Personnel médical', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', 'null', '', ''),
('70', '%structures fonctionnlles', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', 'null', '', ''),
('71', '% structures disposant d\'équipements', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', 'null', '', ''),
('72', 'Nombre d\'écoles', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', 'null', '', ''),
('73', 'Nombre d\'enseigants', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', 'null', '', ''),
('74', '% écoles fonctionnelles ', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', 'null', '', ''),
('75', 'Nombre écoles complètes', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', 'null', '', ''),
('76', '% écoles disposant d\'équipements', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', 'null', '', ''),
('77', '% écoles disposant de matériel didactique', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', 'null', '', ''),
('78', 'Proportion de la population possédant un téléphone portable, par sexe', 'Annuelle', 'ERSIP', 'ERSIP', '100', 'ONS/DSDS', '', '', '', NULL, '', '', 'null', '', ''),
('79', 'Proportion de la population adulte totale qui dispose de la sécurité des droits fonciers et de documents légalement authentifiés et qui considère que ses droits sur la terre sont sûrs', '', 'M. de l’Habitat, de l’Urbanisme et de l’Aménagement du Territoire ', 'M. de l’Habitat, de l’Urbanisme et de l’Aménagement du Territoire ', '100', 'M. de l’Habitat, de l’Urbanisme et de l’Aménagement du Territoire ', '', '', '', '31', '', '', '4', '', ''),
('80', 'Proportion des ressources nationales directement allouées par l’État à des programmes de réduction de la pauvreté', 'annuel', 'Loi des Finances Initiale', 'LFI', '100', 'MF/DGB', '', '', '', NULL, '', '', '6', '', ''),
('81', 'Proportion des dépenses publiques totales affectées aux services essentiels (éducation, santé et protection sociale)', 'annuel', 'MF et MAEPSP', '', '100', 'MAEPSP', '', '', '', NULL, '', '', '6', '', ''),
('82', 'Taux de croissance des dépenses des ménages ou du revenu par habitant pour les 40 pour cent de la population les plus pauvres et pour l’ensemble de la population', '', '', '', '100', '', '', '', '', NULL, '', '', 'null', '', ''),
('83', 'Proportion de femmes ayant signalé avoir personnellement fait l’objet de discrimination ou de harcèlement au cours des 12 mois précédents', 'annuel', 'MASEF', 'MASEF', '100', 'MASEF', '', '', '', '43', '', '', '83', '', ''),
('84', 'Montant des subventions aux combustibles fossiles par unité de PIB (production et consommation) et en proportion des dépenses nationales totales consacrées à ces combustibles', '', 'Min.Pétrole, Energie et Mines', '', '100', '', '', '', '', NULL, '', '', '111', '', ''),
('85', 'Nombre de pays ayant déclaré avoir mis en place ou mis en œuvre une politique/une stratégie/un plan intégré visant à améliorer leur aptitude à s’adapter aux incidences négatives des changements climatiques, à renforcer leur résilience face à ces changements et à favoriser de faibles émissions de gaz à effet de serre, sans menacer la production alimentaire ', '', 'MEDD', 'MEDD', '100', 'MEDD', '', '', '', NULL, '', '', 'null', '', ''),
('86', 'Acidité moyenne des mers (pH) mesurée à plusieurs points de prélèvement représentatifs', '', 'IMROP-Laboratoire Environnement', 'Laboratoire Environnement/ IMROP', '100', 'Laboratoire Environnement/ IMROP', '', '', '', NULL, '', '', '119', '', ''),
('87', 'Proportion de stock de poisson se situant à un niveau biologiquement viable', 'annuel', 'IMROP et FAO', 'IMROP et FAO', '100', 'IMROP', '', '', '', '55', '', '', '120', '', ''),
('88', 'Proportion de surfaces protegées et preservées: Surface des aires marines protégées, en proportion de la surface totale', 'annuel', 'GT IMROP', 'GT IMROP', '100', 'IMROP', '', '', '', '55', '', '', '121', '', ''),
('89', 'Surface des zones forestières, en proportion de la surface terrestre', '', '', '', '100', '', '', '', '', NULL, '', '', '127', '', ''),
('90', 'Surface des terres dégradées, en proportion de la surface terrestre', '', '', '', '100', '', '', '', '', NULL, '', '', '129', '', ''),
('91', 'Proportion de personnes impliquées dans des affaires de corruption d\'un agent public au cours des 12 derniers mois pour obtenir un service', '', 'ONS', 'ONS', '100', 'ONS', '', '', '', '50', '', '', '143', '', ''),
('92', 'Total des recettes publiques en proportion du PIB, par source', '', 'MF', 'Loi de Finances', '100', 'MF/DGB', '', '', '', NULL, '', '', '151', '', ''),
('93', 'Proportion du budget national financé par les impôts nationaux', '', 'MF', 'Loi de Finances', '100', 'MF/DGB', '', '', '', NULL, '', '', '151', '', ''),
('94', 'Part des PPP dans l\'investissement total', 'annuel', 'http://www.ppp.gov.mr/projets/', 'http://www.ppp.gov.mr/projets/', '100', 'MEF', '', '', '', '10', '', '', '151', '', ''),
('95', ' Service de la dette en pourcentage des exportations de biens et services', 'Annuel', 'Budget', 'LOI DE FINANCES RECTIFICATIVE 2015', '100', 'M. Finances/DGB', '', '', '', '48', '', '', '154', '', ''),
('96', 'Taux de mortalité maternelle', '10 ans', 'RGPH', 'Rapport RGPH 2013-Ch.5 Mortalité', '100', 'ONS/DSDS', '', '', '', '25', '', '', '16', '', ''),
('97', 'Taux de mortalité infantile', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '25', '', '', '17', '', ''),
('98', 'Taux de mortalité néonatale', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '25', '', '', '17', '', ''),
('99', 'Prévalence du VIH/Sida (%) ', '', 'Enquête SPECTRUM Onusida', 'Enquête SPECTRUM Onusida', '100', 'SENLS et Onusida', '', '', '', NULL, '', '', '18', '', ''),
('100', 'Proportion enseignants qualifiés - Secondaire 1er cycle', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', '38', '', ''),
('101', 'Proportion enseignants qualifiés - primaire', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '18', '', '', '38', '', ''),
('102', 'Proportion enseignants qualifiés - Secondaire 2ème cycle', 'annuel', 'M. EducNat', 'Annuaire des Statistiques Scolaires', '100', 'M. EducNat/DSPC', '', '', '', '19', '', '', '38', '', ''),
('103', 'Proportion de sièges occupés par des femmes à l\'Assemblée Nationale ', 'annuel', 'CENI', 'http://archive.ipu.org/parline-f/reports/1207_A.htm ', '100', 'CENI', '', '', '', '42', '', '', '43', '', ''),
('104', 'Part des EnR dans le Mix (interconnecté de la SOMELEC)', 'annuel', 'SOMELEC', 'http://www.somelec.mr/?Production ', '100', 'SOMELEC', '', '', '', '56', '', '', '57', '', ''),
('105', 'Valeur ajoutée dans l’industrie manufacturière, en proportion du PIB et par habitant', '', 'Comptes nationaux', 'Comptes nationaux', '100', 'ONS/DCN', '', '', '', NULL, '', '', '74', '', ''),
('106', 'Emplois dans le secteur industriel (% de l\'emploi total)', '5 ans', 'ENESI', 'Rapport ENESI', '100', 'ONS/DSDS', '', '', '', '5', '', '', '74', '', ''),
('107', 'Proportion des petites entreprises industrielles ayant contracté un prêt ou une ligne de crédit', '4 ans', 'ENESI', 'Situation de l\'emploi et du secteur informel en Mauritanie', '100', 'ONS/DSDS', '', '', '', '13', '', '', '75', '', ''),
('108', 'Rendement du riz (tonne/hectare)', 'annuel', 'Enquête EMEA', 'Rapport EMEA ', '100', 'M. Agriculture/DSIA', '', '', '', '1', '', '', 'null', '', ''),
('109', 'Rendement des céréales traditionnelles (tonne/hectare)', 'annuel', 'Enquête EMEA', 'Rapport EMEA', '100', 'M. Agriculture/DSIA', '', '', '', '1', '', '', 'null', '', ''),
('110', 'Taux de couverture des besoins de toutes céréales confondues (%)', 'annuel', 'EPCV & EMEA', '..', '100', 'M. Agriculture/DSCSE', '', '', '', '1', '', '', 'null', '', ''),
('111', 'Emplois dans le secteur de l\'agriculture (% de l\'emploi total)', '5 ans', 'ENESI', 'Situation de l\'emploi et du secteur informel en Mauritanie', '100', 'ONS/DSDS', '', '', '', '1', '', '', 'null', '', ''),
('112', 'Rendement du blé (tonne/hectare)', 'annuel', 'Enquête EMEA', 'Rapport EMEA', '100', 'M. Agriculture/DSIA', '', '', '', '1', '', '', 'null', '', ''),
('113', 'Superficie agricole mise en valeure (en ha)', 'annuel', 'Enquête EMEA', 'Rapport EMEA', '100', 'M. Agriculture/DSIA', '', '', '', '1', '', '', 'null', '', ''),
('114', 'Importation des produits agricole', 'annuel', 'SIDONIA/M. du Commerce, de l’Industrie et du Tourisme', 'SIDONIA/M. du Commerce, de l’Industrie et du Tourisme', '100', 'SIDONIA/M. du Commerce, de l’Industrie et du Tourisme', '', '', '', '1', '', '', 'null', '', ''),
('115', 'Exportation de produits agricoles (en tonne)', 'annuel', 'SIDONIA/M. du Commerce, de l’Industrie et du Tourisme', 'SIDONIA/M. du Commerce, de l’Industrie et du Tourisme', '100', 'SIDONIA/M. du Commerce, de l’Industrie et du Tourisme', '', '', '', '1', '', '', 'null', '', ''),
('116', 'Emplois dans le secteur de l\'elevage (% emploi total)', '5 ans', 'ENESI', 'Situation de l\'emploi et du secteur informel en Mauritanie', '100', 'ONS/DSDS', '', '', '', '2', '', '', 'null', '', ''),
('117', 'Production usinée de lait (tonne)', '', 'M. Elevage', 'M. Elevage', '100', 'M. Elevage/DPCSE', '', '', '', '2', '', '', 'null', '', ''),
('118', 'Production contrôlée de viandes rouges (tonnes)', 'Annuel', 'M. Elevage', 'Site Internet du M. Elevage', '100', 'M. Élevage/DPCSE', '', '', '', '2', '', '', 'null', '', ''),
('119', 'Production de peaux et cuirs (millions de pièces)', 'Annuel', 'M. Elevage', 'Site Internet du M. Elevage', '100', 'M. Élevage/DPCSE', '', '', '', '2', '', '', 'null', '', ''),
('120', 'Emplois dans le secteur de la pêche (% de l\'emploi total)', '5 ans', 'ENESI', 'Situation de l\'emploi et du secteur informel en Mauritanie', '100', 'ONS/DSDS', '', '', '', '3', '', '', 'null', '', ''),
('121', 'Proportions de stocks commerciaux exploités durablement (en dessous du seuil permissible)', 'annuel', 'M. Pêche et Economie Maritime', 'M. Pêche et Economie Maritime', '100', 'M. Pêche et Economie Maritime', '', '', '', '3', '', '', 'null', '', ''),
('122', 'Emplois dans le secteur extractif (% de l\'emploi total)', '5 ans', 'ENESI', 'Situation de l\'emploi et du secteur informel en Mauritanie', '100', 'ONS/DSDS', '', '', '', '4', '', '', 'null', '', ''),
('123', 'Emplois dans le secteur du commerce (% de l\'emploi total)', '5 ans', 'ENESI', 'Situation de l\'emploi et du secteur informel en Mauritanie', '100', 'ONS/DSDS', '', '', '', '6', '', '', 'null', '', ''),
('124', 'Emplois dans le secteur du tourisme (% de l\'emploi total)', '5 ans', 'ENESI', 'Situation de l\'emploi et du secteur informel en Mauritanie', '100', 'ONS/DSDS', '', '', '', '7', '', '', 'null', '', ''),
('125', 'Emplois dans le secteur de l\'artisanat', '5 ans', 'ENESI', 'Situation de l\'emploi et du secteur informel en Mauritanie', '100', 'ONS/DSDS', '', '', '', '8', '', '', 'null', '', ''),
('126', 'Nombre d\'infrastructures disponibles et fonctionnelles pour la promotion d’un artisanat créatif, conservateur de mémoire et générateur de revenus et d’emplois décents', '', 'M. de la Culture et de l’Artisanat ', 'M. de la Culture et de l’Artisanat ', '100', 'M. de la Culture et de l’Artisanat ', '', '', '', '8', '', '', 'null', '', ''),
('127', 'Délais (en jours) pour la création d’entreprise', '', 'Guichet-Unique/MEF', 'Guichet-Unique/MEF', '100', 'Guichet-Unique/MEF', '', '', '', '9', '', '', 'null', '', ''),
('128', 'Délais et coûts liés à l’exécution de toutes les\nformalités requises d’obtention d’un permis de construire', '', 'M. de l’Habitat, de l’Urbanisme et de l’Aménagement du Territoire ', 'M. de l’Habitat, de l’Urbanisme et de l’Aménagement du Territoire ', '100', 'M. de l’Habitat, de l’Urbanisme et de l’Aménagement du Territoire ', '', '', '', '9', '', '', 'null', '', ''),
('129', 'Délais et coûts de raccordement au réseau électrique', '', 'M. du Pétrole, Mines et Energie', 'M. du Pétrole, Mines et Energie', '100', 'M. du Pétrole, Mines et Energie', '', '', '', '9', '', '', 'null', '', ''),
('130', 'Indicateur Doing Business (adapté aux données nationales)', 'annuel', 'Doing Business Report', 'Doing Business Report', '100', 'Banque mondiale', '', '', '', '9', '', '', 'null', '', ''),
('131', 'Volume du financement privé garanti par l\'Etat', 'annuel', 'MEF', 'MEF', '100', 'MEF', '', '', '', '10', '', '', 'null', '', ''),
('132', 'accès aux sources de financement : credit interieur accordé par les banques (en% du PIB)', 'annuel', 'BCM/MEF', 'BCM/MEF', '100', 'BCM/MEF', '', '', '', '11', '', '', 'null', '', ''),
('133', 'Taux d\'intermediation bancaire', 'annuel', 'BCM/MEF', 'BCM/MEF', '100', 'BCM/MEF', '', '', '', '11', '', '', 'null', '', ''),
('134', 'Nombre de structures de micro-finances créées au cours de l\'année', 'annuel', 'BCM/MEF', 'BCM/MEF', '100', 'BCM/MEF', '', '', '', '11', '', '', 'null', '', ''),
('135', 'Volume des IDE/PIB', 'annuel', 'World Economic Forum (WEF)', 'The Global Competitiveness Report', '100', 'World Economic Forum (WEF)', '', '', '', '12', '', '', 'null', '', ''),
('136', 'Coût de raccordement au réseau pour les entreprises', 'annuel', 'données internes de la somelec', 'http://www.somelec.mr/?Tarification', '100', 'SOMELEC', '', '', '', '14', '', '', 'null', '', ''),
('137', 'Nombre de pannes sur le réseau Moyenne Tension enregistrées par ans', 'annuel', 'M. de l’Équipement et Transports', 'M. de l’Équipement et Transports', '100', 'M. de l’Équipement et Transports', '', '', '', '14', '', '', 'null', '', ''),
('138', 'Nombre d\'infrastructures portuaires réalisées', 'annuel', 'M. de l’Équipement et Transports', 'M. de l’Équipement et Transports', '100', 'M. Equipements et Transport/DGIT/DE', '', '', '', '15', '', '', 'null', '', ''),
('139', 'Nombre PMI-PME installées dans les parcs industriels créés', 'annuel', 'M. de l’Équipement et Transports', 'M. de l’Équipement et Transports', '100', 'M. Equipements et Transport/DGIT/DE', '', '', '', '15', '', '', 'null', '', ''),
('140', 'Coût de l\'eau pour les entreprises', 'annuel', 'SNDE', 'SNDE', '100', 'M. de l\'Hydraulique et de l\'Assainissement', '', '', '', '16', '', '', 'null', '', ''),
('141', 'Cout de service d\'assainissement pour les entreprises', 'annuel', 'ONAS/SNDE', 'ONAS/SNDE', '100', 'M. de l\'Hydraulique et de l\'Assainissement', '', '', '', '16', '', '', 'null', '', ''),
('142', 'Nombre d\'étudiants au niveau supérieur pour 100 000 habitants', 'annuel', 'M. EnsSup', '', '100', 'M. EnsSup', '', '', '', '21', '', '', 'null', '', ''),
('143', 'Nombre d\'étudiants au niveau supérieur - STEM  pour 100 000 habitants', 'annuel', 'M. EnsSup', '', '100', 'M. EnsSup', '', '', '', '21', '', '', 'null', '', ''),
('144', 'Budget de recherche des Universités', 'annuel', '', '', '100', '', '', '', '', '21', '', '', 'null', '', ''),
('145', '% du budget alloué au secteur ', 'annuel', 'Budget', 'LOI DE FINANCES RECTIFICATIVE 2015', '100', 'M. Finances/DGB', '', '', '', '24', '', '', 'null', '', ''),
('146', 'Total des dépenses en santé en pourcentage du PIB ', 'annuel', 'Budget', 'LOI DE FINANCES RECTIFICATIVE 2015', '100', 'M. Finances/DGB', '', '', '', '24', '', '', 'null', '', ''),
('147', 'Espérance de vie à la naissance', '10 ans', 'RGPH', 'Rapport RGPH 2013-Ch.5 Mortalité', '100', 'ONS/DSDS', '', '', '', '25', '', '', 'null', '', ''),
('148', 'Nombre de professionnels de nutrition formés pour 100 000 habitants', 'annuel', 'M, Santé', 'M, Santé', '100', 'M, Santé', '', '', '', '25', '', '', 'null', '', ''),
('149', 'Existence d\'une législation/réglementation donnant pleinement effet au code international de commercialisation des subtituts du lait maternel (résolution WH 34.22) et aux résolutions pertinentes adoptées portérieurement par par l\'Assemblée de la Santé', 'annuel', 'M, Santé', 'M, Santé', '100', 'M, Santé', '', '', '', '25', '', '', 'null', '', ''),
('150', 'Proportion d\'emplois informels dans le secteur non agricole', '5 ans', 'ENESI 2017', 'Situation de l\'emploi et du secteur informel en Mauritanie en 2017', '100', 'ONS/DSDS', '', '', '', '26', '', '', 'null', '', ''),
('151', 'Proportion de jeunes (15-35 ans) pratiquant le sport', 'annuel', 'M. de la Jeunesse et des Sports', 'M. de la Jeunesse et des Sports', '100', 'M. de la Jeunesse et des Sports', '', '', '', '27', '', '', 'null', '', ''),
('152', 'Nombre d\'infrastructures (culturelles et sportives) mises en place', 'annuel', 'M. de la Jeunesse et des Sports', 'M. de la Jeunesse et des Sports', '100', 'M. de la Jeunesse et des Sports', '', '', '', '27', '', '', 'null', '', ''),
('153', 'nbre de menages pauvres beneficiant de programmes d\'assistance sociale ', '4 ans', 'EPCV', 'Profil de pauvreté ', '100', 'ONS/DSCV', '', '', '', '28', '', '', 'null', '', ''),
('154', 'Indice de developpement du jeune enfant (voir MICS)', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '28', '', '', 'null', '', ''),
('155', 'Nombre de cas declarés de violence  basés sur le genre.', '3 ans', 'MICS', 'Rapport MICS-Mauritanie 2015', '100', 'ONS/DSDS', '', '', '', '28', '', '', 'null', '', ''),
('156', 'Taux de prévalence des violences physiques, sexuelles et psychologiques (les 3 formes confondues) au cours des 12 mois précédant', 'annuel', 'Enquête Nationale sur la Violence à l’Egard des Femmes en Mauritanie', 'ENVEF', '100', 'MASEF/ONS', '', '', '', '43', '', '', 'null', '', ''),
('157', 'Nombre de scrutins organisés', 'annuel', 'M. de l’Intérieur et de la Décentralisation', 'M. de l’Intérieur et de la Décentralisation', '100', 'M. de l’Intérieur et de la Décentralisation', '', '', '', '32', '', '', 'null', '', ''),
('158', 'Part des dépenses alouées aux forces de défense et de sécutité dans le budget de l\'Etat', 'annuel', 'Budget', 'LOI DE FINANCES RECTIFICATIVE 2015', '100', 'M. Finances/DGB', '', '', '', '33', '', '', 'null', '', ''),
('159', 'Nombre de conflits sociaux reglés', 'Annuel', 'Observatoire de la compétitivité durable (OCD)', 'https://competitivite.ferdi.fr/indicateurs/gouvernance-economique', '100', 'Observatoire de la compétitivité durable (OCD)', '', '', '', '34', '', '', 'null', '', ''),
('160', '% de jeunes declarant avoir une connaissance sur le danger de l\'extremisme violent', '3 ans', 'MJ', 'MJ', '100', 'MJ', '', '', '', '35', '', '', 'null', '', ''),
('161', 'le nombre d\'institutions prenant en charge les jeunes radicalisés', 'annuel', 'MJ', 'MJ', '100', 'MJ', '', '', '', '35', '', '', 'null', '', ''),
('162', 'Nombre d\'immigrants refoulés à la frontière par an', 'annuel', 'MJ', 'MJ', '100', 'MJ', '', '', '', '37', '', '', 'null', '', ''),
('163', 'Nombre de OSC membre des instances de suivi des politiques nationales', 'annuel', 'M. des Relations avec le Parlement et la Société Civile ', 'M. des Relations avec le Parlement et la Société Civile ', '100', 'M. des Relations avec le Parlement et la Société Civile ', '', '', '', '37', '', '', 'null', '', ''),
('164', 'Nombre de radios et TV privés autorisés', 'annuel', 'M. de l’Intérieur et de la Décentralisation', 'M. de l’Intérieur et de la Décentralisation', '100', 'M. de l’Intérieur et de la Décentralisation', '', '', '', '37', '', '', 'null', '', ''),
('165', 'Proportion de la population ayant une connaissance d\'une initiative (OSCL, OSC) de protection des droits humains', '3 ans', 'MICS/EPCV', 'MICS/EPCV', '100', 'ONS', '', '', '', '39', '', '', 'null', '', ''),
('166', '% du budget de l\'Etat alloué aux collectivités territoriales (Fonds régional de développement)', 'annuel', 'Budget', 'LOI DE FINANCES RECTIFICATIVE 2015', '100', 'M. Finances/DGB', '', '', '', '53', '', '', 'null', '', ''),
('167', 'Adoption d\'un nouvel echelon de decentralisation correspondant aux régions.', 'annuel', 'M. de l’Intérieur et de la Décentralisation', 'M. de l’Intérieur et de la Décentralisation', '100', 'M. de l’Intérieur et de la Décentralisation', '', '', '', '53', '', '', 'null', '', ''),
('168', 'Nombre de pôles régionaux de développement mis en place', 'annuel', 'M. de l’Intérieur et de la Décentralisation', 'M. de l’Intérieur et de la Décentralisation', '100', 'M. de l’Intérieur et de la Décentralisation', '', '', '', '54', '', '', 'null', '', ''),
('169', 'Nombre de monographies régionales', 'annuel', 'M. de l’Intérieur et de la Décentralisation', 'M. de l’Intérieur et de la Décentralisation', '100', 'M. de l’Intérieur et de la Décentralisation', '', '', '', '54', '', '', 'null', '', ''),
('170', 'Taux de dépendance économique', '5 ans', 'ENESI', 'Situation de l\'emploi et du secteur informel en Mauritanie', '100', 'ONS/DSD', '', '', '', '41', '', '', 'null', '', ''),
('171', 'Indicateur synthétique du Dividende Démographique', 'Annuel', 'MEF', 'MEF', '100', 'MEF', '', '', '', '41', '', '', 'null', '', ''),
('172', 'Budget de l\'observatoire national du dividende demographique ', 'Annuel', 'MEF', 'MEF', '100', 'MEF', '', '', '', NULL, '', '', 'null', '', ''),
('173', ' l\'Observatoire National du Dividende Démographique opérationnel', 'annuel', 'MEF', 'MEF', '100', 'MEF', '', '', '', NULL, '', '', 'null', '', ''),
('174', 'Nombre de projet de l\'Etat intégrant les principes de gestion axée sur les résultats', 'annuel', 'M. de la Fonction Publique ', 'M. de la Fonction Publique ', '100', 'M. de la Fonction Publique ', '', '', '', '44', '', '', 'null', '', ''),
('175', '% des employés de l\'État ayant un statut précaire', 'annuel', 'M. de la Fonction Publique ', 'M. de la Fonction Publique ', '100', 'M. de la Fonction Publique ', '', '', '', '45', '', '', 'null', '', ''),
('176', 'Nombre de visiteurs sur les sites internet de l\'État', 'annuel', 'M. de la Fonction Publique ', 'M. de la Fonction Publique ', '100', 'M. de la Fonction Publique ', '', '', '', '46', '', '', 'null', '', ''),
('177', 'Nombre de services de securité informatique, de centre de lutte contre la cybercriminalité', 'annuel', 'M. de la Fonction Publique ', 'M. de la Fonction Publique ', '100', 'M. de la Fonction Publique ', '', '', '', '46', '', '', 'null', '', ''),
('178', 'Dimension de l\'intranet du gouvernement (en Km)', 'annuel', 'M. de la Fonction Publique ', 'M. de la Fonction Publique ', '100', 'M. de la Fonction Publique ', '', '', '', '46', '', '', 'null', '', ''),
('179', 'nombre de sites integrés dans l\'intranet', 'annuel', 'M. de la Fonction Publique ', 'M. de la Fonction Publique ', '100', 'M. de la Fonction Publique ', '', '', '', '46', '', '', 'null', '', ''),
('180', 'Proportion d\'indicateurs SCAPP  regulièrement renseignés', 'annuel', 'DC-SCAPP', 'RAMO-SCAPP', '100', 'DC-SCAPP', '', '', '', '47', '', '', 'null', '', ''),
('181', 'Nombre d\'instances de coordination de la scapp fonctionnelles', 'annuel', 'DC-SCAPP', 'RAMO-SCAPP', '100', 'DC-SCAPP', '', '', '', '47', '', '', 'null', '', ''),
('182', 'Pourcentage des dépenses publiques agrégées réalisées en fonction des dépenses budgétées', 'Annuel', 'Budget', 'Evaluation PEFA', '100', 'MEF/DGB', '', '', '', '49', '', '', 'null', '', ''),
('183', 'Composition du budget public réalisé en fonction du budget prévu (variance)', 'Annuel', 'Budget', 'Evaluation PEFA', '100', 'MEF/DGB', '', '', '', '49', '', '', 'null', '', ''),
('184', 'Solde Global du TOFE', 'Annuel', 'Budget', 'MEF', '100', 'MEF/DGB', '', '', '', '49', '', '', 'null', '', ''),
('185', 'Gouvernance économique', 'Annuel', 'Observatoire de la compétitivité durable (OCD)', 'https://competitivite.ferdi.fr/indicateurs/gouvernance-economique', '100', 'Observatoire de la compétitivité durable (OCD)', '', '', '', '51', '', '', 'null', '', ''),
('186', 'Indicateur Doing Business (adapté aux données nationales)', 'annuel', 'Banque Mondiale', 'Doing Business Report', '100', 'Banque mondiale', '', '', '', '52', '', '', 'null', '', ''),
('187', 'superficie ensemencée de facon aerienne', 'annuel', 'M. de l’Environnement et du Développement Durable ', 'M. de l’Environnement et du Développement Durable ', '100', 'M. de l’Environnement et du Développement Durable ', '', '', '', '56', '', '', 'null', '', ''),
('188', '% du budget alloué à la protection des communautés cotières et fluviales contre l\'érosion des berges et les inondations', 'annuel', 'M. de l’Environnement et du Développement Durable ', 'M. de l’Environnement et du Développement Durable ', '100', 'M. de l’Environnement et du Développement Durable ', '', '', '', '57', '', '', 'null', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `indicateur_cibles`
--

CREATE TABLE `indicateur_cibles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `objectf_id` int(11) NOT NULL,
  `cible` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `indicateur_cibles`
--

INSERT INTO `indicateur_cibles` (`id`, `objectf_id`, `cible`, `created_at`, `updated_at`) VALUES
(1, 1, 'D’ici à 2030, éliminer complètement l’extrême pauvreté dans le monde entier (s’entend actuellement du fait de vivre avec moins de 1,25 dollar US par jour)', '2021-03-30 13:45:03', '2021-03-30 13:45:03'),
(2, 1, 'D’ici à 2030, réduire de moitié au moins la proportion d’hommes, de femmes et d’enfants de tous âges souffrant d’une forme ou l’autre de pauvreté, telle que définie par chaque pays', '2021-03-30 13:45:03', '2021-03-30 13:45:03'),
(3, 1, 'Mettre en place des systèmes et mesures de protection sociale pour tous, adaptés au contexte national, y compris des socles de protection sociale, et faire en sorte que, d’ici à 2030, une part importante des pauvres et des personnes vulnérables en bénéficient\n            ', '2021-03-30 13:45:03', '2021-03-30 13:45:03'),
(4, 1, ' D’ici à 2030, faire en sorte que tous les hommes et les femmes, en particulier les pauvres et les personnes vulnérables, aient les mêmes droits aux ressources économiques et qu’ils aient accès aux services de base, à la propriété foncière, au contrôle des terres et à d’autres formes de propriété, à l’héritage, aux ressources naturelles et à des nouvelles technologies et des services financiers adaptés à leurs besoins, y compris la microfinance\n            ', '2021-03-30 13:45:03', '2021-03-30 13:45:03'),
(5, 1, 'D’ici à 2030, renforcer la résilience des pauvres et des personnes en situation vulnérable et réduire leur exposition aux phénomènes climatiques extrêmes et à d’autres chocs et catastrophes d’ordre économique, social ou environnemental et leur vulnérabilité\n            ', '2021-03-30 13:45:03', '2021-03-30 13:45:03'),
(6, 1, 'Garantir une mobilisation importante de ressources provenant de sources multiples, y compris par le renforcement de la coopération pour le développement, afin de doter les pays en développement, en particulier les pays les moins avancés, de moyens adéquats et prévisibles de mettre en œuvre des programmes et politiques visant à mettre fin à la pauvreté sous toutes ses formes\n            ', '2021-03-30 13:45:03', '2021-03-30 13:45:03'),
(7, 1, 'Mettre en place aux niveaux national, régional et international des cadres d’action viables, fondés sur des stratégies de développement favorables aux pauvres et soucieuses de la problématique hommes -femmes, afin d’accélérer l’investissement dans des mesures d’élimination de la pauvreté\n', '2021-03-30 13:45:03', '2021-03-30 13:45:03'),
(8, 2, 'D’ici à 2030, éliminer la faim et faire en sorte que chacun, en particulier les pauvres et les personnes en situation vulnérable, y compris les nourrissons, ait accès toute l’année à une alimentation saine, nutritive et suffisante\n            ', '2021-03-30 13:45:03', '2021-03-30 13:45:03'),
(9, 2, ' D’ici à 2030, mettre fin à toutes les formes de malnutrition, y compris en atteignant d’ici à 2025 les objectifs arrêtés à l’échelle internationale relatifs aux retards de croissance et à l’émaciation chez les enfants de moins de 5 ans, et répondre aux besoins nutritionnels des adolescentes, des femmes enceintes ou allaitantes et des personnes âgées\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(10, 2, 'D’ici à 2030, doubler la productivité agricole et les revenus des petits producteurs alimentaires, en particulier des femmes, des autochtones, des exploitants familiaux, des éleveurs et des pêcheurs, y compris en assurant l’égalité d’accès aux terres, aux autres ressources productives et facteurs de production, au savoir, aux services financiers, aux marchés et aux possibilités d’ajout de valeur et d’emplois autres qu’agricoles\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(11, 2, 'D’ici à 2030, assurer la viabilité des systèmes de production alimentaire et mettre en œuvre des pratiques agricoles résilientes qui permettent d’accroître la productivité et la production, contribuent à la préservation des écosystèmes, renforcent la capacité d’adaptation aux changements climatiques, aux phénomènes météorologiques extrêmes, à la sécheresse, aux inondations et à d’autres catastrophes et améliorent progressivement la qualité des terres et des sols\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(12, 2, 'D’ici à 2020, préserver la diversité génétique des semences, des cultures et des animaux d ’élevage ou domestiqués et des espèces sauvages apparentées, y compris au moyen de banques de semences et de plantes bien gérées et diversifiées aux niveaux national, régional et international, et favoriser l’accès aux avantages que présentent l’utilisation des ressources génétiques et du savoir traditionnel associé ainsi que le partage juste et équitable de ces avantages, comme convenu à l’échelle internationale\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(13, 2, 'ccroître, notamment grâce au renforcement de la coopération internationale, l’investissement dans l’infrastructure rurale, les services de recherche et de vulgarisation agricoles et la mise au point de technologies et de banques de plantes et de gènes d’animaux d’élevage, afin de renforcer les capacités productives agricoles des pays en développement, en particulier des pays les moins avancés\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(14, 2, 'Corriger et prévenir les restrictions et distorsions entravant le fonctionnement des marchés agricoles mondiaux, y compris par l’élimination parallèle de toutes les formes de subventions aux exportations agricoles et de toutes les mesures à l ’exportation ayant un effet équivalent, conformément au mandat du Cycle de négociations de Doha pour le développement\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(15, 2, 'Adopter des mesures visant à assurer le bon fonctionnement des marchés de denrées alimentaires et de produits dérivés et à faciliter l ’accès rapide aux informations relatives à ces marchés, y compris le niveau des réserves alimentaires, afin de contribuer à limiter l’extrême volatilité des prix alimentaires\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(16, 3, 'D’ici à 2030, faire passer le taux mondial de mortalité maternelle au-dessous de 70 pour 100 000 naissances vivantes\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(17, 3, 'D’ici à 2030, éliminer les décès évitables de nouveau-nés et d’enfants de moins de 5 ans, tous les pays devant chercher à ramener la mortalité néonatale à 12 pour 1000 naissances vivantes au plus et la mortalité des enfants de moins de 5 ans à 25 pour 1000 naissances vivantes au plus\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(18, 3, 'D’ici à 2030, mettre fin à l’épidémie de sida, à la tuberculose, au paludisme et aux maladies tropicales négligées et combattre l’hépatite, les maladies transmises par l’eau et autres maladies transmissibles\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(19, 3, 'D’ici à 2030, réduire d’un tiers, par la prévention et le traitement, le taux de mortalité prématurée due à des maladies non transmissibles et promouvoir la santé mentale et le bien-être\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(20, 3, 'Renforcer la prévention et le traitement de l’abus de substances psychoactives, notamment de stupéfiants et d’alcool\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(21, 3, ' D’ici à 2020, diminuer de moitié à l’échelle mondiale le nombre de décès et de blessures dus à des accidents de la route\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(22, 3, 'D’ici à 2030, assurer l’accès de tous à des services de soins de santé sexuelle et procréative, y compris à des fins de planification familiale, d’information et d’éducation, et veiller à la prise en compte de la santé procréative dans les stratégies et programmes nationaux\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(23, 3, 'Faire en sorte que chacun bénéficie d ’une couverture sanitaire universelle, comprenant une protection contre les risques financiers et donnant accès à des services de santé essentiels de qualité et à des médicaments et vaccins essentiels sûrs, efficaces, de qualité et d’un coût abordable\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(24, 3, 'D’ici à 2030, réduire nettement le nombre de décès et de maladies dus à des substances chimiques dangereuses et à la pollution et à la contamination de l’air, de l’eau et du sol\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(25, 3, 'Renforcer dans tous les pays, selon qu’il convient, l’application de la Convention-cadre de l’Organisation mondiale de la Santé pour la lutte antitabac\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(26, 3, 'Appuyer la recherche et le développement de vaccins et de médicaments contre les maladies, transmissibles ou non, qui touchent principalement les habitants des pays en développement, donner accès, à un coût abordable, aux médicaments et vaccins essentiels, conformément à la Déclaration de Doha sur l’accord sur les aspects des droits de propriété intellectuelle qui touchent au commerce (ADPIC) et la santé publique, qui réaffirme le droit qu’ont les pays en développement de tirer pleinement parti des dispositions de cet accord qui ménagent une flexibilité lorsqu’il s’agit de protéger la santé publique et, en particulier,\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(27, 3, 'Accroître considérablement le budget de la santé et le recrutement, le perfectionnement, la formation et le maintien en poste du personnel de santé dans les pays en développement, notamment dans les pays les moins avancés et les petits États insulaires en développement\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(28, 3, 'Renforcer les moyens dont disposent tous les pays, en particulier les pays en développement, en matière d’alerte rapide, de réduction des risques et de gestion des risques sanitaires nationaux et mondiaux\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(29, 4, 'D’ici à 2030, faire en sorte que toutes les filles et tous les garçons suivent, sur un pied d’égalité, un cycle complet d’enseignement primaire et secondaire gratuit et de qualité, les dotant d’acquis véritablement utiles\n            ', '2021-03-30 13:45:04', '2021-03-30 13:45:04'),
(30, 4, ' D’ici à 2030, faire en sorte que toutes les filles et tous les garçons aient accès à des services de développement et de prise en charge de la petite enfance et à une éducation préscolaire de qualité qui les préparent à suivre un enseignement primaire\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(31, 4, ' D’ici à 2030, faire en sorte que toutes les femmes et tous les hommes aient accès dans des conditions d’égalité à un enseignement technique, professionnel ou tertiaire, y compris universitaire, de qualité et d’un coût abordable\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(32, 4, ' D’ici à 2030, augmenter nettement le nombre de jeunes et d’adultes disposant des compétences, notamment techniques et professionnelles, nécessaires à l’emploi, à l’obtention d’un travail décent et à l’entrepreneuriat\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(33, 4, ' D’ici à 2030, éliminer les inégalités entre les sexes dans le domaine de l’éducation et assurer l’égalité d’accès des personnes vulnérables, y compris les personnes handicapées, les autochtones et les enfants en situation vulnérable, à tous les niveaux d ’enseignement et de formation professionnelle\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(34, 4, 'D’ici à 2030, faire en sorte que tous les jeunes et une proportion considérable d’adultes, hommes et femmes, sachent lire, écrire et compter\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(35, 4, ' D’ici à 2030, faire en sorte que tous les élèves acquièrent les connaissances et compétences nécessaires pour promouvoir le développement durable, notamment par l’éducation en faveur du développement et de modes de vie durables, des droits de l’homme, de l’égalité des sexes, de la promotion d’une culture de paix et de non-violence, de la citoyenneté mondiale et de l’appréciation de la diversité culturelle et de la contribution de la culture au développement durable\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(36, 4, ' Construire des établissements scolaires qui soient adaptés aux enfants, aux personnes handicapées et aux deux sexes ou adapter les établissements existants à cette fin et fournir à tous un cadre d’apprentissage sûr, non violent, inclusif et efficace\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(37, 4, 'D’ici à 2020, augmenter nettement à l’échelle mondiale le nombre de bourses d’études offertes à des étudiants des pays en développement, en particulier des pays les moins avancés, des petits États insulaires en développement et des pays d’Afrique, pour leur permettre de suivre des études supérieures, y compris une formation professionnelle, des cursus informatiques, techniques et scientifiques et des études d’ingénieur, dans des pays développés et d’autres pays en développement\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(38, 4, 'D’ici à 2030, accroître nettement le nombre d’enseignants qualifiés, notamment au moyen de la coopération internationale pour la formation d’enseignants dans les pays en développement, surtout dans les pays les moins avancés et les petits États insulaires en développement\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(39, 5, ' Mettre fin, partout dans le monde, à toutes les formes de discrimination à l’égard des femmes et des filles\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(40, 5, 'Éliminer de la vie publique et de la vie privée toutes les formes de violence faite aux femmes et aux filles, y compris la traite et l’exploitation sexuelle et d’autres types d’exploitation\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(41, 5, 'Éliminer toutes les pratiques préjudiciables, telles que le mariage des enfants, le mariage précoce ou forcé et la mutilation génitale féminine\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(42, 5, 'Prendre en compte et valoriser les soins et travaux domestiques non rémunérés, par la mise en place de services publics, d’infrastructures et de politiques de protection sociale et par la promotion du partage des responsabilités dans le ménage et la famille, en fonction du contexte national\n            ', '2021-03-30 13:45:05', '2021-03-30 13:45:05'),
(43, 5, 'Veiller à ce que les femmes participent pleinement et effectivement aux fonctions de direction à tous les niveaux de décision, dans la vie politique, économique et publique, et y accèdent sur un pied d’égalité\n            ', '2021-03-30 13:45:06', '2021-03-30 13:45:06'),
(44, 5, 'Assurer l’accès de tous aux soins de santé sexuelle et procréative et faire en sorte que chacun puisse exercer ses droits en matière de procréation, ainsi qu ’il a été décidé dans le Programme d’action de la Conférence internationale sur la population et le développement et le programme d’action de Beijing et les documents finals des conférences d’examen qui ont suivi\n            ', '2021-03-30 13:45:06', '2021-03-30 13:45:06'),
(45, 5, 'Entreprendre des réformes visant à donner aux femmes les mêmes droits aux ressources économiques, ainsi que l’accès à la propriété et au contrôle des terres et d’autres formes de propriété, aux services financiers, à l’héritage et aux ressources naturelles, dans le respect de la législation interne\n            ', '2021-03-30 13:45:06', '2021-03-30 13:45:06'),
(46, 6, 'D’ici à 2030, assurer l’accès universel et équitable à l’eau potable, à un coût abordable\n            ', '2021-03-30 13:45:06', '2021-03-30 13:45:06'),
(47, 6, ' D’ici à 2030, assurer l’accès de tous, dans des conditions équitables, à des services d’assainissement et d’hygiène adéquats et mettre fin à la défécation en plein air, en accordant une attention particulière aux besoins des femmes et des filles et des personnes en situation vulnérable\n            ', '2021-03-30 13:45:06', '2021-03-30 13:45:06'),
(48, 6, 'D’ici à 2030, améliorer la qualité de l’eau en réduisant la pollution, en éliminant l’immersion de déchets et en réduisant au minimum les émissions de produits chimiques et de matières dangereuses, en diminuant de moitié la proportion d’eaux usées non traitées et en augmentant nettement à l’échelle mondiale le recyclage et la réutilisation sans danger de l’eau\n            ', '2021-03-30 13:45:06', '2021-03-30 13:45:06'),
(49, 6, 'D’ici à 2030, faire en sorte que les ressources en eau soient utilisées beaucoup plus efficacement dans tous les secteurs et garantir la viabilité des prélèvements et de l’approvisionnement en eau douce afin de remédier à la pénurie d’eau et de réduire nettement le nombre de personnes qui manquent d’eau\n            ', '2021-03-30 13:45:06', '2021-03-30 13:45:06'),
(50, 6, ' D’ici à 2030, assurer la gestion intégrée des  ressources en eau à tous les niveaux, y compris au moyen de la coopération transfrontière selon qu’il convient\n            ', '2021-03-30 13:45:06', '2021-03-30 13:45:06'),
(51, 6, 'D’ici à 2020, protéger et restaurer les écosystèmes liés à l’eau, notamment les montagnes, les forêts, les zones humides, les rivières, les aquifères et les lacs\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(52, 6, ' D’ici à 2030, développer la coopération internationale et l’appui au renforcement des capacités des pays en développement en ce qui concerne les activités et programmes relatifs à l’eau et à l’assainissement, y compris la collecte, la désalinisation et l’utilisation rationnelle de l’eau, le traitement des eaux usées, le recyclage et les techniques de réutilisation\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(53, 6, 'Appuyer et renforcer la participation de la population locale à l’amélioration de la gestion de l’eau et de l’assainissement\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(54, 7, 'D’ici à 2030, garantir l’accès de tous à des services énergétiques fiables et modernes, à un coût abordable\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(55, 7, ' D’ici à 2030, accroître nettement la part de l’énergie renouvelable dans le bouquet énergétique mondial\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(56, 7, 'D’ici à 2030, multiplier par deux le taux mondial d’amélioration de l’efficacité énergétique\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(57, 7, 'D’ici à 2030, renforcer la coopération internationale en vue de faciliter l’accès aux sciences et technologies de l’énergie propre, notamment les énergies renouvelables, l’efficacité énergétique et les nouvelles technologies de combustion propre des combustibles fossiles, et encourager l’investissement dans l’infrastructure énergétique et les technologies propres dans le domaine de l’énergie\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(58, 7, 'D’ici à 2030, développer l’infrastructure et améliorer la technologie afin de fournir des services énergétiques modernes et durables à tous les habitants des pays en développement, en particulier des pays les moins avancés, des petits États insulaires en développement et des pays en développement sans littoral, dans le respect des programmes d’aide qui les concernent\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(59, 8, ' Maintenir un taux de croissance économique par habitant adapté au contexte national et, en particulier, un taux de croissance annuelle du produit intérieur brut d’au moins 7 % dans les pays les moins avancés\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(60, 8, 'Parvenir à un niveau élevé de productivité économique par la diversification, la modernisation technologique et l’innovation, notamment en mettant l’accent sur les secteurs à forte valeur ajoutée et à forte intensité de main-d’œuvre\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(61, 8, 'Promouvoir des politiques axées sur le développement qui favorisent les activités productives, la création d’emplois décents, l’entrepreneuriat, la créativité et l’innovation et stimulent la croissance des microentreprises et des petites et moyennes entreprises et facilitent leur intégration dans le secteur formel, y compris par l’accès aux services financiers\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(62, 8, ' Améliorer progressivement, jusqu’en 2030, l’efficacité de l’utilisation des ressources mondiales dans les modes de consommation et de production et s’attacher à dissocier croissance économique et dégradation de l’environnement, comme prévu dans le Cadre décennal de programmation concernant les modes de consommation et de production durables, les pays développés montrant l’exemple en la matière\n            ', '2021-03-30 13:45:07', '2021-03-30 13:45:07'),
(63, 8, ' D’ici à 2030, parvenir au plein emploi productif et garantir à toutes les femmes et à tous les hommes, y compris les jeunes et les personnes handicapées, un travail décent et un salaire égal pour un travail de valeur égale\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(64, 8, 'D’ici à 2020, réduire nettement la proportion de jeunes non scolarisés et sans emploi ni formation\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(65, 8, ' Prendre des mesures immédiates et efficaces pour supprimer le travail forcé, mettre fin à l’esclavage moderne et à la traite d’êtres humains, interdire et éliminer les pires formes de travail des enfants, y compris le recrutement et l’utilisation d’enfants soldats, et, d’ici à 2025, mettre fin au travail des enfants sous toutes ses formes\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(66, 8, ' Défendre les droits des travailleurs, promouvoir la sécurité sur le lieu de travail et assurer la protection de tous les travailleurs, y compris les migrants, en particulier les femmes, et ceux qui ont un emploi précaire\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(67, 8, 'D’ici à 2030, élaborer et mettre en œuvre des politiques visant à développer un tourisme durable qui crée des emplois et met en valeur la culture et les produits locaux\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(68, 8, ' Renforcer la capacité des institutions financières nationales de favoriser et généraliser l\'accès de tous aux services bancaires et financiers et aux services d’assurance\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(69, 8, 'Accroître l’appui apporté dans le cadre de l’initiative Aide pour le commerce aux pays en développement, en particulier aux pays les moins avancés, y compris par l’intermédiaire du Cadre intégré renforcé pour l’assistance technique liée au commerce en faveur des pays les moins avancés\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(70, 8, 'D’ici à 2020, élaborer et mettre en œuvre une stratégie mondiale en faveur de l’emploi des jeunes et appliquer le pacte mondial pour l’emploi de l’Organisation internationale du Travail\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(71, 9, 'Mettre en place une infrastructure de qualité, fiable, durable et résiliente, y compris une infrastructure régionale et transfrontière, pour favoriser le développement économique et le bien-être de l’être humain, en privilégiant un accès universel, financièrement abordable et équitable\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(72, 9, 'Promouvoir une industrialisation durable qui profite à tous et, d’ici à 2030, augmenter nettement la contribution de l’industrie à l’emploi et au produit intérieur brut, en fonction du contexte national, et la multiplier par deux dans les pays les moins avancés\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(73, 9, 'Accroître, en particulier dans les pays en développement, l’accès des entreprises, notamment des petites entreprises industrielles, aux services financiers, y compris aux prêts consentis à des conditions abordables, et leur intégration aux chaînes de valeur et aux marchés\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(74, 9, 'D’ici à 2030, moderniser l’infrastructure et adapter les industries afin de les rendre durables, par une utilisation plus rationnelle des ressources et un recours accru aux technologies et procédés industriels propres et respectueux de l’environnement, chaque pays agissant dans la mesure de ses moyens\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(75, 9, 'Renforcer la recherche scientifique, perfectionner les capacités technologiques des secteurs industriels de tous les pays, en particulier des pays en développement, notamment en encourageant l’innovation et en augmentant nettement le nombre de personnes travaillant dans le secteur de la recherche - développement pour 1 million d’habitants et en accroissant les dépenses publiques et privées consacrées à la recherche-développement d’ici à 2030\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(76, 9, 'Faciliter la mise en place d’une infrastructure durable et résiliente dans les pays en développement en renforçant l’appui financier, technologique et technique apporté aux pays d’Afrique, aux pays les moins avancés, aux pays en développement sans littoral et aux petits États insulaires en développement\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(77, 9, 'Soutenir les activités de recherche-développement et d’innovation des pays en développement dans le secteur technologique, notamment en instaurant des conditions propices, entre autres, à la diversification industrielle et à l’ajout de valeur aux marchandises\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(78, 9, ' Accroître nettement l’accès aux technologies de l’information et des communications et faire en sorte que tous les habitants des pays les moins avancés aient accès à Internet à un coût abordable d’ici à 2020\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(79, 10, ' D’ici à 2030, assurer progressivement et durablement une croissance des revenus des 40% de la population les plus pauvres à un rythme plus rapide que le revenu moyen national\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(80, 10, 'D’ici à 2030, autonomiser toutes les personnes et favoriser leur intégration sociale, économique et politique, indépendamment de leur âge, de leur sexe, de leur handicap, de leur race, de leur appartenance ethnique, de leurs origines, de leur religion ou de leur statut économique ou autre\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(81, 10, 'Assurer l’égalité des chances et réduire l’inégalité des résultats, notamment en éliminant les lois, politiques et pratiques discriminatoires et en encourageant l’adoption de lois, politiques et mesures adéquates en la matière\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(82, 10, ' Adopter des politiques, notamment sur les plans budgétaire, salarial et dans le domaine de la protection sociale, afin de parvenir progressivement à une plus grande égalité\n            ', '2021-03-30 13:45:08', '2021-03-30 13:45:08'),
(83, 10, ' Améliorer la réglementation et la surveillance des institutions et marchés financiers mondiaux et renforcer l’application des règles\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(84, 10, 'Faire en sorte que les pays en développement soient davantage représentés et entendus lors de la prise de décisions dans les institutions économiques et financières internationales, afin que celles-ci soient plus efficaces, crédibles, transparentes et légitimes\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(85, 10, ' Faciliter la migration et la mobilité de façon ordonnée, sûre, régulière et responsable, notamment par la mise en œuvre de politiques migratoires planifiées et bien gérées\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(86, 10, 'Mettre en œuvre le principe d’un traitement spécial et différencié pour les pays en développement, en particulier les pays les moins avancés, conformément aux accords de l’Organisation mondiale du commerce\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(87, 10, 'Stimuler l’aide publique au développement et les flux financiers, y compris les investissements étrangers directs, en faveur des États qui en ont le plus besoin, en particulier les pays les moins avancés, les pays d’Afrique, les petits États insulaires en développement et les pays en développement sans littoral, conformément à leurs plans et programmes nationaux\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(88, 10, ' D’ici à 2030, faire baisser au-dessous de 3 % les coûts de transaction des envois de fonds effectués par les migrants et éliminer les circuits d’envois de fonds dont les coûts sont supérieurs à 5 %\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(89, 11, 'D’ici à 2030, assurer l’accès de tous à un logement et des services de base adéquats et sûrs, à un coût abordable, et assainir les quartiers de taudis\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(90, 11, 'D’ici à 2030, assurer l’accès de tous à des systèmes de transport sûrs, accessibles et viables, à un coût abordable, en améliorant la sécurité routière, notamment en développant les transports publics, une attention particulière devant être accordée aux besoins des personnes en situation vulnérable, des femmes, des enfants, des personnes handicapées et des personnes âgées\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(91, 11, ' D’ici à 2030, renforcer l’urbanisation durable pour tous et les capacités de planification et de gestion participatives, intégrées et durables des établissements humains dans tous les pays\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(92, 11, 'Redoubler d’efforts pour protéger et préserver le patrimoine culturel et naturel mondial\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(93, 11, 'D’ici à 2030, réduire nettement le nombre de personnes tuées et le nombre de personnes touchées par les catastrophes, y compris celles qui sont liées à l’eau, et réduire nettement la part du produit intérieur brut mondial représentée par les pertes économiques directement imputables à ces catastrophes, l’accent étant mis sur la protection des pauvres et des personnes en situation vulnérable\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(94, 11, 'D’ici à 2030, réduire l’impact environnemental négatif des villes par habitant, y compris en accordant une attention particulière à la qualité de l’air et à la gestion, notamment municipale, des déchets\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(95, 11, ' D’ici à 2030, assurer l’accès de tous, en particulier des femmes et des enfants, des personnes âgées et des personnes handicapées, à des espaces verts et des espaces publics sûrs\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(96, 11, 'Favoriser l’établissement de liens économiques, sociaux et environnementaux positifs entre zones urbaines, périurbaines et rurales en renforçant la planification du développement à l’échelle nationale et régionale\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(97, 11, 'D’ici à 2020, accroître nettement le nombre de villes et d’établissements humains qui adoptent et mettent en œuvre des politiques et plans d’action intégrés en faveur de l’insertion de tous, de l’utilisation rationnelle des ressources, de l’adaptation aux effets des changements climatiques et de leur atténuation et de la résilience face aux catastrophes, et élaborer et mettre en œuvre, conformément au Cadre de Sendai pour la réduction des risques de catastrophe (2015-2030), une gestion globale des risques de catastrophe à tous les niveaux\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(98, 11, 'Aider les pays les moins avancés, y compris par une assistance financière et technique, à construire des bâtiments durables et résilients en utilisant des matériaux locaux\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(99, 12, ' Mettre en œuvre le Cadre décennal de programmation concernant les modes de consommation et de production durables avec la participation de tous les pays, les pays développés montrant l’exemple en la matière, compte tenu du degré de développement et des capacités des pays en développement\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(100, 12, ' D’ici à 2030, parvenir à une gestion durable et à une utilisation rationnelle des ressources naturelles\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(101, 12, 'D’ici à 2030, réduire de moitié à l’échelle mondiale le volume de déchets alimentaires par habitant, au niveau de la distribution comme de la consommation, et diminuer les pertes de produits alimentaires tout au long des chaînes de production et d’approvisionnement, y compris les pertes après récolte\n            ', '2021-03-30 13:45:09', '2021-03-30 13:45:09'),
(102, 12, 'D’ici à 2020, parvenir à une gestion écologiquement rationnelle des produits chimiques et de tous les déchets tout au long de leur cycle de vie, conformément aux principes directeurs arrêtés à l’échelle internationale, et réduire nettement leur déversement dans l’air, l’eau et le sol, afin de minimiser leurs effets négatifs sur la santé et l ’environnement\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(103, 12, ' D’ici à 2030, réduire nettement la production de déchets par la prévention, la réduction, le recyclage et la réutilisation\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(104, 12, ' Encourager les entreprises, en particulier les grandes entreprises et les sociétés transnationales, à adopter des pratiques viables et à intégrer dans les rapports qu’elles établissent des informations sur la viabilité\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(105, 12, 'Promouvoir des pratiques durables dans le cadre de la passation des marchés publics, conformément aux politiques et priorités nationales\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(106, 12, ' D’ici à 2030, faire en sorte que toutes les personnes, partout dans le monde, aient les informations et connaissances nécessaires au développement durable et à un style de vie en harmonie avec la nature\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(107, 12, 'Aider les pays en développement à se doter des moyens scientifiques et technologiques qui leur permettent de s’orienter vers des modes de consommation et de production plus durables\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(108, 12, 'Mettre au point et utiliser des outils de contrôle de l’impact sur le développement durable d’un tourisme durable créateur d’emplois et valorisant la culture et les produits locaux\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(109, 12, 'Rationaliser les subventions aux combustibles fossiles qui sont source de gaspillage, grâce à l’élimination des distorsions du marché, eu égard au contexte national, y compris au moyen de la restructuration de la fiscalité et de la suppression progressive des subventions préjudiciables qui sont en place, en mettant en évidence leur impact sur l’environnement, en tenant pleinement compte des besoins et de la situation propres aux pays en développement et en réduisant au minimum les éventuels effets négatifs sur le développement de ces pays tout en protégeant les pauvres et les populations concernées\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(110, 13, 'Renforcer, dans tous les pays, la résilience et les capacités d’adaptation face aux aléas climatiques et aux catastrophes naturelles liées au climat\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(111, 13, 'Incorporer des mesures relatives aux changements climatiques dans les politiques, les stratégies et la planification nationales\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(112, 13, 'Améliorer l’éducation, la sensibilisation et les capacités individuelles et institutionnelles en ce qui concerne l’adaptation aux changements climatiques, l’atténuation de leurs effets et la réduction de leur impact et les systèmes d’alerte rapide\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(113, 13, 'Mettre en œuvre l’engagement que les pays développés parties à la Convention-cadre des Nations Unies sur les changements climatiques ont pris de mobiliser ensemble auprès de multiples sources 100 milliards de dollars par an d’ici à 2020 pour répondre aux besoins des pays en développement en ce qui concerne les mesures concrètes d’atténuation et la transparence de leur mise en œuvre et rendre le Fonds vert pour le climat pleinement opérationnel en le dotant dans les plus brefs délais des moyens financiers nécessaires\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(114, 13, 'Promouvoir des mécanismes de renforcement des capacités afin que les pays les moins avancés et les petits États insulaires en développement se dotent de moyens efficaces de planification et de gestion pour faire face aux changements climatiques, l’accent étant mis, notamment, sur les femmes, les jeunes, la population locale et les groupes marginalisés\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(115, 14, ' D’ici à 2025, prévenir et réduire nettement la pollution marine de tous types, en particulier celle résultant des activités terrestres, y compris les déchets en mer et la pollution par les nutriments\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(116, 14, 'D’ici à 2020, gérer et protéger durablement les écosystèmes marins et côtiers, notamment en renforçant leur résilience, afin d’éviter les graves conséquences de leur dégradation et prendre des mesures en faveur de leur restauration pour rétablir la santé et la productivité des océans\n            ', '2021-03-30 13:45:10', '2021-03-30 13:45:10'),
(117, 14, ' Réduire au maximum l’acidification des océans et lutter contre ses effets, notamment en renforçant la coopération scientifique à tous les niveaux\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(118, 14, 'D’ici à 2020, réglementer efficacement la pêche, mettre un terme à la surpêche, à la pêche illicite, non déclarée et non réglementée et aux pratiques de pêche destructrices et exécuter des plans de gestion fondés sur des données scientifiques, l’objectif étant de rétablir les stocks de poissons le plus rapidement possible, au moins à des niveaux permettant d’obtenir un rendement constant maximal compte tenu des caractéristiques biologiques\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(119, 14, 'D’ici à 2020, préserver au moins 10 % des zones marines et côtières, conformément au droit national et international et compte tenu des meilleures informations scientifiques disponibles\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(120, 14, 'D’ici à 2020, interdire les subventions à la pêche qui contribuent à la surcapacité et à la surpêche, supprimer celles qui favorisent la pêche illicite, non déclarée et non réglementée et s’abstenir d’en accorder de nouvelles, sachant que l’octroi d’un traitement spécial et différencié efficace et approprié aux pays en développement et aux pays les moins avancés doit faire partie intégrante des négociations sur les subventions à la pêche menées dans le cadre de l’Organisation mondiale du commerce\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(121, 14, 'D’ici à 2030, faire bénéficier plus largement les petits États insulaires en développement et les pays les moins avancés des retombées économiques de l’exploitation durable des ressources marines, notamment grâce à une gestion durable des pêches, de l’aquaculture et du tourisme\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(122, 14, 'Approfondir les connaissances scientifiques, renforcer les moyens de recherche et transférer les techniques marines, conformément aux critères et principes directeurs de la Commission océanographique intergouvernementale concernant le transfert de techniques marines, l’objectif étant d’améliorer la santé des océans et de renforcer la contribution de la biodiversité marine au développement des pays en développement, en particulier des petits États insulaires en développement et des pays les moins avancés\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(123, 14, 'Garantir aux petits pêcheurs l’accès aux ressources marines et aux marchés\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(124, 14, 'Améliorer la conservation et l’utilisation durable des océans et de leurs ressources en application des dispositions du droit international, énoncées dans la Convention des Nations Unies sur le droit de la mer, qui fournit le cadre juridique requis pour la conservation et l’utilisation durable des océans et de leurs ressources, comme il est rappelé au paragraphe 158 de « L’avenir que nous voulons »\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(125, 15, ' D’ici à 2030, lutter contre la désertification, restaurer les terres et sols dégradés, notamment les terres touchées par la désertification, la sécheresse et les inondations, et s’efforcer de parvenir à un monde sans dégradation des terres\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(126, 15, ' D’ici à 2020, promouvoir la gestion durable de tous les types de forêt, mettre un terme à la déforestation, restaurer les forêts dégradées et accroître nettement le boisement et le reboisement au niveau mondial\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(127, 15, 'D’ici à 2030, lutter contre la désertification, restaurer les terres et sols dégradés, notamment les terres touchées par la désertification, la sécheresse et les inondations, et s’efforcer de parvenir à un monde sans dégradation des terres\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(128, 15, 'D’ici à 2030, assurer la préservation des écosystèmes montagneux, notamment de leur biodiversité, afin de mieux tirer parti de leurs bienfaits essentiels pour le développement durable\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(129, 15, ' Prendre d’urgence des mesures énergiques pour réduire la dégradation du milieu naturel, mettre un terme à l’appauvrissement de la biodiversité et, d’ici à 2020, protéger les espèces menacées et prévenir leur extinction\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(130, 15, ' Favoriser le partage juste et équitable des bénéfices découlant de l’utilisation des ressources génétiques et promouvoir un accès approprié à celles-ci, ainsi que cela a été décidé à l’échelle internationale\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(131, 15, 'Prendre d’urgence des mesures pour mettre un terme au braconnage et au trafic d ’espèces végétales et animales protégées et s’attaquer au problème sous l’angle de l’offre et de la demande\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(132, 15, 'D’ici à 2020, prendre des mesures pour empêcher l’introduction d’espèces exotiques envahissantes, atténuer sensiblement les effets que ces espèces ont sur les écosystèmes terrestres et aquatiques et contrôler ou éradiquer les espèces prioritaires\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(133, 15, 'D’ici à 2020, intégrer la protection des écosystèmes et de la biodiversité dans la planification nationale, dans les mécanismes de développement, dans les stratégies de réduction de la pauvreté et dans la comptabilité\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(134, 15, 'Mobiliser des ressources financières de toutes provenances et les augmenter nettement pour préserver la biodiversité et les écosystèmes et les exploiter durablement\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(135, 15, 'Mobiliser d’importantes ressources de toutes provenances et à tous les niveaux pour financer la gestion durable des forêts et inciter les pays en développement à privilégier ce type de gestion, notamment aux fins de la préservation des forêts et du reboisement\n            ', '2021-03-30 13:45:11', '2021-03-30 13:45:11'),
(136, 15, 'Apporter, à l’échelon mondial, un soutien accru à l’action menée pour lutter contre le braconnage et le trafic d’espèces protégées, notamment en donnant aux populations locales d’autres moyens d’assurer durablement leur subsistance\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(137, 16, 'Réduire nettement, partout dans le monde, toutes les formes de violence et les taux de mortalité qui y sont associés\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(138, 16, 'Mettre un terme à la maltraitance, à l’exploitation et à la traite, et à toutes les formes de violence et de torture dont sont victimes les enfants\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(139, 16, 'Promouvoir l’état de droit dans l’ordre interne et international et garantir à tous un égal accès à la justice\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(140, 16, 'D’ici à 2030, réduire nettement les flux financiers illicites et le trafic d’armes, renforcer les activités de récupération et de restitution des biens volés et lutter contre toutes les formes de criminalité organisée\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(141, 16, 'Réduire nettement la corruption et la pratique des pots-de-vin sous toutes leurs formes\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(142, 16, 'Mettre en place des institutions efficaces, responsables et transparentes à tous les niveaux\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(143, 16, ' Faire en sorte que le dynamisme, l’ouverture, la participation et la représentation à tous les niveaux caractérisent la prise de décisions\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(144, 16, 'Élargir et renforcer la participation des pays en développement aux institutions chargées de la gouvernance au niveau mondial\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(145, 16, 'D’ici à 2030, garantir à tous une identité juridique, notamment grâce à l’enregistrement des naissances\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(146, 16, 'Garantir l’accès public à l’information et protéger les libertés fondamentales, conformément à la législation nationale et aux accords internationaux\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(147, 16, 'Appuyer, notamment dans le cadre de la coopération internationale, les institutions nationales chargées de renforcer, à tous les niveaux, les moyens de prévenir la violence et de lutter contre le terrorisme et la criminalité, en particulier dans les pays en développement\n            ', '2021-03-30 13:45:12', '2021-03-30 13:45:12'),
(148, 16, 'Promouvoir et appliquer des lois et politiques non discriminatoires pour le développement durable\n            ', '2021-03-30 13:45:13', '2021-03-30 13:45:13'),
(149, 17, ' Améliorer, notamment grâce à l’aide internationale aux pays en développement, la mobilisation de ressources nationales en vue de renforcer les capacités nationales de collecte de l’impôt et d’autres recettes\n            ', '2021-03-30 13:45:13', '2021-03-30 13:45:13'),
(150, 17, 'Faire en sorte que les pays développés honorent tous leurs engagements en matière d’aide publique au développement, notamment celui pris par nombre d’entre eux de consacrer 0,7 % de leur revenu national brut à l’aide aux pays en développement et entre 0,15 % et 0,20 % à l’aide aux pays les moins avancés, les bailleurs de fonds étant encouragés à envisager de se fixer pour objectif de consacrer au moins 0,20 % de leur revenu national brut à l’aide aux pays les moins avancés\n            ', '2021-03-30 13:45:13', '2021-03-30 13:45:13'),
(151, 17, ' Mobiliser des ressources financières supplémentaires de diverses provenances en faveur des pays en développement\n            ', '2021-03-30 13:45:14', '2021-03-30 13:45:14'),
(152, 17, 'Aider les pays en développement à assurer la viabilité à long terme de leur dette au moyen de politiques concertées visant à favoriser le financement de la dette, son allègement ou sa restructuration, selon le cas, et réduire le surendettement en réglant le problème de la dette extérieure des pays pauvres très endettés\n            ', '2021-03-30 13:45:14', '2021-03-30 13:45:14'),
(153, 17, ' Adopter et mettre en œuvre des dispositifs visant à encourager l’investissement en faveur des pays les moins avancés\n            ', '2021-03-30 13:45:14', '2021-03-30 13:45:14'),
(154, 17, 'Renforcer l’accès à la science, à la technologie et à l’innovation et la coopération Nord-Sud et Sud-Sud et la coopération triangulaire régionale et internationale dans ces domaines et améliorer le partage des savoirs selon des modalités arrêtées d’un commun accord, notamment en coordonnant mieux les mécanismes existants, en particulier au niveau des organismes des Nations Unies, et dans le cadre d ’un mécanisme mondial de facilitation des technologies\n            ', '2021-03-30 13:45:14', '2021-03-30 13:45:14'),
(155, 17, 'Promouvoir la mise au point, le transfert et la diffusion de technologies respectueuses de l’environnement en faveur des pays en développement, à des conditions favorables, y compris privilégiées et préférentielles, arrêtées d’un commun accord\n            ', '2021-03-30 13:45:14', '2021-03-30 13:45:14');
INSERT INTO `indicateur_cibles` (`id`, `objectf_id`, `cible`, `created_at`, `updated_at`) VALUES
(156, 17, 'Faire en sorte que la banque de technologies et le mécanisme de renforcement des capacités scientifiques et technologiques et des capacités d’innovation des pays les moins avancés soient pleinement opérationnels d’ici à 2017 et renforcer l’utilisation des technologies clefs, en particulier de l’informatique et des communications\n            ', '2021-03-30 13:45:14', '2021-03-30 13:45:14'),
(157, 17, 'Apporter, à l’échelon international, un soutien accru pour assurer le renforcement efficace et ciblé des capacités des pays en développement et appuyer ainsi les plans nationaux visant à atteindre tous les objectifs de développement durable, notamment dans le cadre de la coopération Nord-Sud et Sud-Sud et de la coopération triangulaire\n            ', '2021-03-30 13:45:14', '2021-03-30 13:45:14'),
(158, 17, 'Promouvoir un système commercial multilatéral universel, réglementé, ouvert, non discriminatoire et équitable sous l’égide de l’Organisation mondiale du commerce, notamment grâce à la tenue de négociations dans le cadre du Programme de Doha pour le développement\n            ', '2021-03-30 13:45:15', '2021-03-30 13:45:15'),
(159, 17, 'Accroître nettement les exportations des pays en développement, en particulier en vue de doubler la part des pays les moins avancés dans les exportations mondiales d’ici à 2020\n            ', '2021-03-30 13:45:15', '2021-03-30 13:45:15'),
(160, 17, 'Permettre l’accès rapide de tous les pays les moins avancés aux marchés en franchise de droits et sans contingent, conformément aux décisions de l’Organisation mondiale du commerce, notamment en veillant à ce que les règles préférentielles applicables aux importations provenant des pays les moins avancés soient transparentes et simples et facilitent l’accès aux marchés\n            ', '2021-03-30 13:45:15', '2021-03-30 13:45:15'),
(161, 17, ' Renforcer la stabilité macroéconomique mondiale, notamment en favorisant la coordination et la cohérence des politiques\n            ', '2021-03-30 13:45:15', '2021-03-30 13:45:15'),
(162, 17, 'Renforcer la cohérence des politiques de développement durable\n            ', '2021-03-30 13:45:15', '2021-03-30 13:45:15'),
(163, 17, ' Respecter la marge de manœuvre et l’autorité de chaque pays en ce qui concerne l’élaboration et l’application des politiques d’élimination de la pauvreté et de développement durable\n            ', '2021-03-30 13:45:15', '2021-03-30 13:45:15'),
(164, 17, ' Renforcer le Partenariat mondial pour le développement durable, associé à des partenariats multipartites permettant de mobiliser et de partager des savoirs, des connaissances spécialisées, des technologies et des ressources financières, afin d ’aider tous les pays, en particulier les pays en développement, atteindre les objectifs de développement durable\n            ', '2021-03-30 13:45:15', '2021-03-30 13:45:15'),
(165, 17, 'Encourager et promouvoir les partenariats publics, les partenariats public-privé et les partenariats avec la société civile, en faisant fond sur l’expérience acquise et les stratégies de financement appliquées en la matière\n            ', '2021-03-30 13:45:15', '2021-03-30 13:45:15'),
(166, 17, 'D’ici à 2020, apporter un soutien accru au renforcement des capacités des pays en développement, notamment des pays les moins avancés et des petits États insulaires en développement, l’objectif étant de disposer d’un beaucoup plus grand nombre de données de qualité, actualisées et exactes, ventilées par niveau de revenu, sexe, âge, race, appartenance ethnique, statut migratoire, handicap et emplacement géographique, et selon d ’autres caractéristiques propres à chaque pays\n            ', '2021-03-30 13:45:15', '2021-03-30 13:45:15'),
(167, 17, 'D’ici à 2030, tirer parti des initiatives existantes pour établir des indicateurs de progrès en matière de développement durable qui viendraient compléter le produit intérieur brut, et appuyer le renforcement des capacités statistiques des pays en développement', '2021-03-30 13:45:15', '2021-03-30 13:45:15');

-- --------------------------------------------------------

--
-- Table structure for table `indicateur_valeurs`
--

CREATE TABLE `indicateur_valeurs` (
  `id` varchar(2) DEFAULT NULL,
  `indicateur_id` varchar(13) DEFAULT NULL,
  `valeur` varchar(6) DEFAULT NULL,
  `masculin` varchar(8) DEFAULT NULL,
  `feminin` varchar(7) DEFAULT NULL,
  `rural` varchar(5) DEFAULT NULL,
  `urbain` varchar(6) DEFAULT NULL,
  `wilaya_1` varchar(8) DEFAULT NULL,
  `wilaya_2` varchar(8) DEFAULT NULL,
  `wilaya_3` varchar(8) DEFAULT NULL,
  `wilaya_4` varchar(8) DEFAULT NULL,
  `wilaya_5` varchar(8) DEFAULT NULL,
  `wilaya_6` varchar(8) DEFAULT NULL,
  `wilaya_7` varchar(8) DEFAULT NULL,
  `wilaya_8` varchar(8) DEFAULT NULL,
  `wilaya_9` varchar(8) DEFAULT NULL,
  `wilaya_10` varchar(9) DEFAULT NULL,
  `wilaya_11` varchar(9) DEFAULT NULL,
  `wilaya_12` varchar(9) DEFAULT NULL,
  `wilaya_13` varchar(9) DEFAULT NULL,
  `wilaya_14` varchar(9) DEFAULT NULL,
  `wilaya_15` varchar(9) DEFAULT NULL,
  `source` varchar(6) DEFAULT NULL,
  `refrence` varchar(8) DEFAULT NULL,
  `created_at` varchar(10) DEFAULT NULL,
  `updated_at` varchar(10) DEFAULT NULL,
  `date` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `indicateur_valeurs`
--

INSERT INTO `indicateur_valeurs` (`id`, `indicateur_id`, `valeur`, `masculin`, `feminin`, `rural`, `urbain`, `wilaya_1`, `wilaya_2`, `wilaya_3`, `wilaya_4`, `wilaya_5`, `wilaya_6`, `wilaya_7`, `wilaya_8`, `wilaya_9`, `wilaya_10`, `wilaya_11`, `wilaya_12`, `wilaya_13`, `wilaya_14`, `wilaya_15`, `source`, `refrence`, `created_at`, `updated_at`, `date`) VALUES
('', '83', '29.96', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2015'),
('', '83', '29.51', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2018'),
('', '82', '41.07', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2016'),
('', '82', '53.83', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2019'),
('', '9', '27', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2015'),
('', '9', '28', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2017'),
('', '29', '66', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2015'),
('', '103', '21.08', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2013'),
('', '103', '19.74', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/1/2018'),
('', '31', '35.11', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2014'),
('', '31', '31.06', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2018'),
('', '30', '62.1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2015'),
('', '30', '70', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2018'),
('', '34', '56', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2015'),
('', '82', '41.07', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2016'),
('', '82', '53.83', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2019'),
('', '35', '42', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2018'),
('', '104', '42', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/1/2018'),
('', '37', '12.85', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2014'),
('', '37', '11.8', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2017'),
('', '38', '20', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2017'),
('', '105', '-9.6', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2016'),
('', '105', '6.3', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2017'),
('', '6', '35.9', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2014'),
('', '85', '1.86', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2012'),
('', '85', '0.92', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/1/2018'),
('', '88', '70', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2015'),
('', '88', '90', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/1/2018'),
('', '87', '7.96', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/1/2018'),
('', '89', '5', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2015'),
('', '89', '12.4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/1/2018'),
('', '90', '0.12', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2014'),
('', '90', '0.3', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2017'),
('', '12', '67.8', '', '', '', '', '44', '28.9', '63.7', '53.9', '75.3', '86.1', '78.1', '100', '59', '39', '100', '100', '97.1', '', '', '', '', '', '', '2014'),
('', '16', '75', '', '', '71.3', '79.2', '62.9', '64', '60.5', '68.5', '89.4', '87.2', '72.9', '78.5', '65.3', '87.1', '75.4', '100', '78.7', '', '', '', '', '', '', '2014'),
('', '50', '45.4', '45', '30.84', '', '', '18.9', '32.6', '28.3', '28.5', '44.4', '61.2', '66', '62.7', '40', '30.1', '71.1', '36', '71.5', '', '', '', '', '', '', '2014'),
('', '45', '30.84', '42.3', '28.6', '', '', '15.39', '24.28', '23.1', '23.48', '33.7', '38.33', '47.36', '40.53', '30.32', '20.05', '48.12', '17.73', '43.43', '', '', '', '', '', '', '2014'),
('', '23', '69.7', '74.8', '65.2', '57.9', '84.6', '62', '64', '55', '39', '65.9', '84.9', '84.6', '83.3', '78.1', '48.7', '86', '90', '88.1', '', '', '', '', '', '', '2004'),
('', '23', '58.1', '63', '56.1', '52', '65.2', '64', '58.2', '58.9', '26.6', '49.2', '67.7', '69.8', '68.3', '58', '29.7', '63.3', '81.3', '66.3', '', '', '', '', '', '', '2007'),
('', '23', '77.5', '80.9', '71.1', '66.4', '84.6', '75.8', '79.8', '69.5', '57.6', '57.4', '89.7', '91.2', '85.2', '76.7', '40.6', '94.9', '87.5', '84.1', '', '', '', '', '', '', '2008'),
('', '23', '80.1', '83.2', '77.4', '72', '86.8', '75.2', '71.1', '79.2', '63.3', '81.8', '94.3', '93.4', '86.8', '90.1', '55.6', '94.5', '89.7', '87.5', '', '', '', '', '', '', '2014'),
('', '13', '1.13', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '12/31/2017'),
('', '133', '30', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/1/2018'),
('', '133', '25', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/2/2015'),
('', '2', '44.4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/3/2014'),
('', '108', '5', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/4/2016'),
('', '109', '0.494', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/5/2014'),
('', '116', '14.6', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/6/2016'),
('', '114', '25000', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/7/2015'),
('', '40', '459', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/8/2015'),
('', '138', '5', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/9/2015'),
('', '38', '90.4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2014'),
('', '18', '9.3', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2015'),
('', '51', ' 75', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '51', '84.4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '51', '86', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '20', ' 1,07', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '20', '1.02', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '20', '1.02', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '52', ' 80', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '52', '91.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '52', '90.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '53', '36.6', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '53', '37.4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '53', '47.4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '54', '39', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '54', '44', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '54', '44', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '101', '79', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '101', '85', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '101', '87', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '43', '26.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '43', '24.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '43', '24.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '48', '42', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '48', '44', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '48', '46', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '47', '54', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '47', '63', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '47', '60', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '45', ' 28', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '45', '29', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '45', '33.2', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '49', ' 26', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '49', '24.4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '49', '24', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '22', '0.82', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '22', '0.92', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '22', '0.97', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '56', ' 12,19', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '56', '14.7', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '56', '23.64', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '19', '7942', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '19', '8667', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '145', ' 5', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '145', ' 7', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '145', ' 6', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '146', ' 3', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2016'),
('', '146', ' 4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2017'),
('', '146', ' 3', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2018'),
('', '146', '5.2', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/10/2020'),
('', '147', '60.3', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/11/2020'),
('', '147', '65', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/12/2013'),
('', '15', '79', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/13/2016'),
('', '15', '83', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/14/2017'),
('', '15', '90', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/15/2018'),
('', '99', '0.23', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/16/2018'),
('', '13', '3.64', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/17/2018'),
('', '62', '44.1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/18/2013'),
('', '62', '41.2', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/19/2017'),
('', '107', '1.13', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/20/2017'),
('', '135', '10.4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/21/2015'),
('', '135', '16.6', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/22/2018'),
('', '110', '336327', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/23/2015'),
('', '189', '1.19', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1/24/2018');

-- --------------------------------------------------------

--
-- Table structure for table `instances`
--

CREATE TABLE `instances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titulle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `interventions`
--

CREATE TABLE `interventions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `theme_id` int(11) DEFAULT NULL,
  `chantier_id` int(11) DEFAULT NULL,
  `cds_id` int(11) DEFAULT NULL,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `interventions`
--

INSERT INTO `interventions` (`id`, `theme_id`, `chantier_id`, `cds_id`, `libelle`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 'Promotion d’une agriculture à la fois productive, compétitive et durable', NULL, NULL),
(2, 1, 1, 1, 'Accroissement des retombées du secteur de l’élevage', NULL, NULL),
(3, 1, 1, 2, 'Préservation du patrimoine halieutique et environnemental marin et intégration accrue du secteur de la pêche dans l’économie nationale et mondiale', NULL, NULL),
(4, 1, 1, 2, 'Impulsion au secteur industriel', NULL, NULL),
(5, 1, 1, 2, 'Promotion du commerce et consolidation des conditions d\'un fonctionnement équilibré et transparent des marchés', NULL, NULL),
(6, 1, 1, 3, 'Promotion d’un artisanat créatif, conservateur de mémoire et générateur de revenus et d’emplois décents', NULL, NULL),
(7, 1, 2, 3, 'Accélération des réformes engagées pour l’amélioration du climat et de la pratique des affaires', NULL, NULL),
(8, 1, 2, 3, 'Renforcement du partenariat public-privé', NULL, NULL),
(9, 1, 2, 4, 'Promotion d’un secteur financier solide et inclusif', NULL, NULL),
(10, 1, 2, 4, 'Développement de l’investissement privé et des investissements directs étrangers', NULL, NULL),
(11, 1, 2, 5, 'Promotion de la création des PME', NULL, NULL),
(12, 1, 2, 5, 'Promotion de la création des PME', NULL, NULL),
(13, 1, 3, 6, 'Garantir la disponibilité de services énergétiques notamment les énergies propres à un coût abordable aux unités économiques', NULL, NULL),
(14, 1, 3, 6, 'Renforcement des investissements en infrastructures des secteurs de l’équipement et des transports', NULL, NULL),
(15, 1, 3, 6, 'Développement du secteur de l’hydraulique (AEP)', NULL, NULL),
(16, 1, 3, 7, 'Promotion de l\'innovation et des Tic', NULL, NULL),
(17, 1, 1, 7, 'Garantir à tous une éducation de base, d’au moins 10 ans, assise sur un enseignement préscolaire élargi et de qualité', NULL, NULL),
(18, 1, 1, 7, 'Développer l’accès et la qualité du second cycle du secondaire', NULL, NULL),
(19, 1, 1, 7, 'Améliorer la gouvernance du secteur éducatif', NULL, NULL),
(20, 1, 1, 7, 'Améliorer l’accès, la qualité et la pertinence de l’enseignement supérieur et de la recherche scientifique', NULL, NULL),
(21, 1, 1, 8, 'Développer la formation technique et professionnelle', NULL, NULL),
(22, 1, 1, 6, 'Promouvoir l’enseignement originel et lutter contre l’analphabétisme', NULL, NULL),
(23, 1, 2, 6, 'Améliorer la Gouvernance du secteur de la santé', NULL, NULL),
(24, 1, 2, 8, 'Améliorer les prestations du secteur de la santé', NULL, NULL),
(25, 1, 3, 8, 'Promotion de l’emploi productif et du travail décent pour tous', NULL, NULL),
(26, 1, 3, 8, 'Promotion de la culture, de la jeunesse et des sports', NULL, NULL),
(27, 1, 4, 8, 'Protection sociale, égalité genre, enfance et famille', NULL, NULL),
(28, 1, 4, 8, 'Approvisionnement en eau potable et accès aux services d’assainissement', NULL, NULL),
(29, 1, 4, 8, 'Garantir l’accès à l’électricité et un approvisionnement en hydrocarbures, notamment à travers la promotion des Energies renouvelables et le développement de l’hybridation pour couvrir les besoins énergétiques des zones isolées', NULL, NULL),
(30, 1, 4, 8, 'Développement des secteurs des bâtiments et de l’habitat', NULL, NULL),
(31, 1, 1, 8, 'Amélioration de la gouvernance politique', NULL, NULL),
(32, 1, 1, 7, 'Renforcement des moyens des forces de défense et de sécurité', NULL, NULL),
(33, 1, 1, 7, 'Construction durable de la paix et de la cohésion sociale', NULL, NULL),
(34, 1, 1, 9, 'Protection des jeunes contre la radicalisation et l’extrémisme violent', NULL, NULL),
(35, 1, 1, 3, 'Gestion des migrations', NULL, NULL),
(36, 1, 2, 9, 'Contrôle citoyen de l’action publique', NULL, NULL),
(37, 1, 2, 9, 'Renforcement de la justice', NULL, NULL),
(38, 1, 2, 8, 'Développement des droits humains', NULL, NULL),
(39, 1, 3, 8, 'Engagement politique en faveur du dividende démographique', NULL, NULL),
(40, 1, 3, 8, 'Accélération des politiques pro dividende démographique', NULL, NULL),
(41, 1, 4, 8, 'Promotion de la participation citoyenne des femmes', NULL, NULL),
(42, 1, 4, 8, 'Lutte contre les discriminations basées sur le genre', NULL, NULL),
(43, 1, 5, 7, 'Optimisation de l\'administration publique', NULL, NULL),
(44, 1, 5, 7, 'Amélioration de la gestion du personnel de l’Etat', NULL, NULL),
(45, 1, 5, 9, 'Développement de l’Administration et des services électroniques', NULL, NULL),
(46, 1, 5, 3, 'Coordination de l’action de l’administration (Planification, coordination, suivi-évaluation de la SCAPP)', NULL, NULL),
(47, 1, 6, 9, 'Renforcement des processus institutionnels et de la gouvernance du secteur public en vue de réduire le risque de surendettement', NULL, NULL),
(48, 1, 6, 9, 'Gestion des finances publiques', NULL, NULL),
(49, 1, 6, 4, 'Gestion des finances publiques', NULL, NULL),
(50, 1, 6, 4, 'Lutte contre la corruption et renforcement de la transparence', NULL, NULL),
(51, 1, 6, 4, 'Gouvernance économique', NULL, NULL),
(52, 1, 6, 7, 'Environnement des affaires', NULL, NULL),
(53, 1, 7, 8, 'Renforcement de la politique de décentralisation', NULL, NULL),
(54, 1, 7, NULL, 'Réactualisation de la politique de l’aménagement du territoire', NULL, NULL),
(55, 1, 8, NULL, 'Politique intégrée d’exploitation durable des écosystèmes', NULL, NULL),
(56, 1, 8, NULL, 'Préservation et valorisation des ressources naturelles', NULL, NULL),
(57, 1, 8, NULL, 'Protection des villes côtières contre les risques d’incursion marine et les inondations', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `leviers`
--

CREATE TABLE `leviers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `strategie_id` int(11) NOT NULL,
  `libelle` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `objectif` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `leviers`
--

INSERT INTO `leviers` (`id`, `strategie_id`, `libelle`, `objectif`, `created_at`, `updated_at`) VALUES
(1, 2, 'CROISSANCE FORTE ET INCLUSIVE', 'Promouvoir une croissance économique forte, partagée et durable, participant au plein emploi productif et au travail décent pour tous', '2021-03-30 13:44:53', '2021-03-30 13:44:53'),
(2, 2, 'Developper le capital humain et l\'accès aux services sociaux de base', 'Promouvoir le developpement d\'un capital humain ayant les caracteristiques quantitatives et qualitatives à meme de faciliter la croissance économique', '2021-03-30 13:44:53', '2021-03-30 13:44:53'),
(3, 2, 'Renforcement de la gouvernance dans toutes ses dimensions', 'Assurer au pays et aux citoyens , notamment les groupes les plus touchés par la pauvreté et l’exclusion, la paix et la sécurité dans le cadre d’un Etat de droit fort, respectueux, protecteur et réalisateur des droits humains et de garantir une gouvernance économique, financière et environnementale efficace et équitable des ressources publiques.', '2021-03-30 13:44:53', '2021-03-30 13:44:53');

-- --------------------------------------------------------

--
-- Table structure for table `levier_specific_objectifs`
--

CREATE TABLE `levier_specific_objectifs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `levier_id` int(11) NOT NULL,
  `objectif` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `levier_specific_objectifs`
--

INSERT INTO `levier_specific_objectifs` (`id`, `levier_id`, `objectif`, `created_at`, `updated_at`) VALUES
(1, 1, 'Promouvoir la diversification et la transformation économiques', '2021-03-30 13:44:53', '2021-03-30 13:44:53'),
(2, 2, 'Ameliorer l\'accés, la qualité et la pertinence de l\'education et de la formation professionnelle', '2021-03-30 13:44:53', '2021-03-30 13:44:53'),
(3, 3, 'créer un cadre insitutionnel efficace pour le suivi de la mise en œuvre des politiques publiques', '2021-03-30 13:44:53', '2021-03-30 13:44:53'),
(4, 3, 'developper les synergies  dans la concption et la mise en œuvre des programmes', '2021-03-30 13:44:53', '2021-03-30 13:44:53'),
(5, 3, 'réformer l’appareil de l’Etat  pour faire de l’administration un moteur de développement et la rendre en mesure d’offrir à l’usager des services de qualité dans de bonnes conditions de transparence, d’équité et de célérité', '2021-03-30 13:44:53', '2021-03-30 13:44:53'),
(6, 3, 'emergence de collectivités viables territorialement et financièrement', '2021-03-30 13:44:53', '2021-03-30 13:44:53');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_12_04_133652_create_failed_jobs_table', 1),
(2, '2020_12_04_133652_create_password_resets_table', 1),
(3, '2020_12_04_133652_create_users_table', 1),
(4, '2020_12_13_190202_create_permission_tables', 1),
(5, '2020_12_14_230713_create_user_types_table', 1),
(6, '2021_01_21_142558_create_strategies_table', 1),
(7, '2021_01_21_142754_create_objectfs_table', 1),
(8, '2021_01_21_142816_create_leviers_table', 1),
(9, '2021_01_21_142834_create_chantiers_table', 1),
(10, '2021_01_21_142904_create_instances_table', 1),
(11, '2021_01_21_142919_create_indicateurs_table', 1),
(12, '2021_01_21_142951_create_themes_table', 1),
(13, '2021_01_21_143016_create_point_focals_table', 1),
(14, '2021_01_22_082742_create_sources_table', 1),
(15, '2021_01_22_085840_create_wilayas_table', 1),
(16, '2021_01_22_085854_create_moughataas_table', 1),
(17, '2021_01_22_085919_create_communes_table', 1),
(18, '2021_01_26_120155_create_levier_specific_objectifs_table', 1),
(19, '2021_01_27_083030_create_indicateur_valeurs_table', 1),
(20, '2021_02_02_080111_create_interventions_table', 1),
(21, '2021_02_02_080856_create_cds_table', 1),
(22, '2021_03_02_155947_create_indicateur_cibles_table', 1),
(23, '2021_03_25_123926_add_description_and_name_to_strategies', 1),
(24, '2021_03_29_095622_add_date_to_valeur_indicateur', 1);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_permissions`
--

INSERT INTO `model_has_permissions` (`permission_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 2);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 2);

-- --------------------------------------------------------

--
-- Table structure for table `moughataas`
--

CREATE TABLE `moughataas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `wilaya_id` int(11) NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `moughataas`
--

INSERT INTO `moughataas` (`id`, `wilaya_id`, `nom`, `created_at`, `updated_at`) VALUES
(1, 1, 'Amourj', NULL, NULL),
(2, 1, 'Basseknou', NULL, NULL),
(3, 1, 'Djiguenni', NULL, NULL),
(4, 1, 'Tembedgha', NULL, NULL),
(5, 2, 'Aïoun El Atrouss', NULL, NULL),
(6, 2, 'Koubenni', NULL, NULL),
(7, 2, 'Tamchekett', NULL, NULL),
(8, 2, 'Tintane', NULL, NULL),
(9, 3, 'Barkeiwel', NULL, NULL),
(10, 3, 'Boumdeid', NULL, NULL),
(11, 3, 'Guerou', NULL, NULL),
(12, 3, 'Kankoussa', NULL, NULL),
(13, 3, 'Kiffa', NULL, NULL),
(14, 4, 'Kaedi', NULL, NULL),
(15, 4, 'Maghama', NULL, NULL),
(16, 4, 'M’Boud', NULL, NULL),
(17, 4, 'Mounguel', NULL, NULL),
(18, 5, 'Aleg', NULL, NULL),
(19, 5, 'Bababé', NULL, NULL),
(20, 5, 'Boghé', NULL, NULL),
(21, 5, 'Magtalahjar', NULL, NULL),
(22, 5, 'M’Bagne', NULL, NULL),
(23, 6, 'Boutilimit', NULL, NULL),
(24, 6, 'Keurmacen', NULL, NULL),
(25, 6, 'Mederdra', NULL, NULL),
(26, 6, 'Ouad Naga', NULL, NULL),
(27, 6, 'R’Kiz', NULL, NULL),
(28, 6, 'Rosso', NULL, NULL),
(29, 7, 'Aoujeft', NULL, NULL),
(30, 7, 'Atar', NULL, NULL),
(31, 7, 'Chinguitti', NULL, NULL),
(32, 7, 'Ouadane', NULL, NULL),
(33, 9, 'Moudjeria', NULL, NULL),
(34, 9, 'Tichit', NULL, NULL),
(35, 9, 'Tidjikdja', NULL, NULL),
(36, 10, 'Ould Yengé', NULL, NULL),
(37, 10, 'Sélibabi', NULL, NULL),
(38, 11, 'Birmoughrein', NULL, NULL),
(39, 11, 'F’Deirick', NULL, NULL),
(40, 11, 'Zoueirat', NULL, NULL),
(41, 1, 'Néma', NULL, NULL),
(42, 1, 'N’Beikett Lehouach', NULL, NULL),
(43, 1, 'Oualata', NULL, NULL),
(44, 12, 'Akjoujet', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `objectfs`
--

CREATE TABLE `objectfs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `strategie_id` int(11) NOT NULL,
  `objectif` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `objectif_specifique` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `couleur` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `objectfs`
--

INSERT INTO `objectfs` (`id`, `strategie_id`, `objectif`, `objectif_specifique`, `couleur`, `icon`, `created_at`, `updated_at`) VALUES
(1, 1, 'Éradication de la pauvreté', 'Éliminer la pauvreté sous toutes ses formes et partout dans le monde', '#e5233d', 'mdi-account-group', '2021-03-30 13:45:00', '2021-03-30 13:45:00'),
(2, 1, ' Sécurité alimentaire et agriculture durable', 'Éliminer la faim, assurer la sécurité alimentaire, améliorer la nutrition et promouvoir l’agriculture durable', '#dda73a', 'mdi-food ', '2021-03-30 13:45:00', '2021-03-30 13:45:00'),
(3, 1, 'Santé et bien-être', 'Permettre à tous de vivre en bonne santé et promouvoir le bien-être de tous à tout âge', '#4ca146', 'mdi-airballoon ', '2021-03-30 13:45:00', '2021-03-30 13:45:00'),
(4, 1, 'Education de qualité', 'Assurer à tous une éducation équitable, inclusive et de qualité et des possibilités d’apprentissage tout au long de la vie', '#c7212f', 'mdi-adjust ', '2021-03-30 13:45:00', '2021-03-30 13:45:00'),
(5, 1, 'Égalité entre les femmes et les hommes', 'Parvenir à l’égalité des sexes et autonomiser toutes les femmes et les filles', '#ee402d', 'mdi-google-circles-extended ', '2021-03-30 13:45:00', '2021-03-30 13:45:00'),
(6, 1, 'Gestion durable de l\'eau pour tous', 'Garantir l’accès de tous à des services d’alimentation en eau et d’assainissement gérés de façon durable', '#28bfe6', 'mdi-face', '2021-03-30 13:45:00', '2021-03-30 13:45:00'),
(7, 1, ' Énergies propres et d\'un coût abordable', 'Garantir l’accès de tous à des services énergétiques fiables, durables et modernes, à un coût abordable', '#fbc412', 'mdi-ev-station', '2021-03-30 13:45:00', '2021-03-30 13:45:00'),
(8, 1, 'Travail décent et croissance durable', 'promouvoir une croissance économique soutenue, partagée et durable, le plein emploi productif et un travail décent pour tous', '#a31d44', 'mdi-facebook-workplace ', '2021-03-30 13:45:00', '2021-03-30 13:45:00'),
(9, 1, ' Infrastructures résilientes et innovation', 'Bâtir une infrastructure résiliente, promouvoir une industrialisation durable qui profite à tous et encourager l’innovation', '#f26a2e', 'mdi-electron-framework ', '2021-03-30 13:45:00', '2021-03-30 13:45:00'),
(10, 1, 'Réduction des inégalités ', 'Réduire les inégalités dans les pays et d’un pays à l’autre', '#df1a83', 'mdi-account-switch ', '2021-03-30 13:45:00', '2021-03-30 13:45:00'),
(11, 1, 'Villes et communautés durables', 'Faire en sorte que les villes et les établissements humains soient ouverts à tous, sûrs, résilients et durables', '#f89d2a', 'mdi-nfc-tap ', '2021-03-30 13:45:00', '2021-03-30 13:45:00'),
(12, 1, 'Consommation et production responsables', 'Établir des modes de consommation et de production durables', '#bf8d2c', 'mdi-abacus ', '2021-03-30 13:45:01', '2021-03-30 13:45:01'),
(13, 1, 'Lutte contre les changements climatiques', 'Prendre d’urgence des mesures pour lutter contre les changements climatiques et leurs répercussions', '#407f46', 'mdi-air-purifier ', '2021-03-30 13:45:01', '2021-03-30 13:45:01'),
(14, 1, 'Vie aquatique marine', 'Conserver et exploiter de manière durable les océans, les mers et les ressources marines aux fins du développement durable', '#1f97d4', 'mdi-alpha-m', '2021-03-30 13:45:01', '2021-03-30 13:45:01'),
(15, 1, 'Vie terrestre', 'Préserver et restaurer les écosystèmes terrestres, en veillant à les exploiter de façon durable, gérer durablement les forêts, lutter contre la désertification, enrayer et inverser le processus de dégradation des terres et mettre fin à l’appauvrissement de la biodiversité', '#59ba47', 'mdi-alpha-t', '2021-03-30 13:45:01', '2021-03-30 13:45:01'),
(16, 1, 'Paix, justice et institutions efficaces', 'Promouvoir l’avènement de sociétés pacifiques et inclusives aux fins du développement durable, assurer l’accès de tous à la justice et mettre en place, à tous les niveaux, des institutions efficaces, responsables et ouvertes à tous', '#136a9f', 'mdi-format-align-justify ', '2021-03-30 13:45:01', '2021-03-30 13:45:01'),
(17, 1, 'Partenariats pour la réalisation des objectifs', 'Renforcer les moyens de mettre en œuvre le partenariat mondial pour le développement durable et le revitaliser', '#14496b', 'mdi-ufo', '2021-03-30 13:45:01', '2021-03-30 13:45:01');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'FullAccess', 'api', NULL, NULL),
(2, 'limited', 'api', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `point_focals`
--

CREATE TABLE `point_focals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `instance_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'api', '2021-03-30 13:44:49', '2021-03-30 13:44:49'),
(2, 'user', 'api', '2021-03-30 13:44:49', '2021-03-30 13:44:49');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sources`
--

CREATE TABLE `sources` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `strategies`
--

CREATE TABLE `strategies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `strategies`
--

INSERT INTO `strategies` (`id`, `libelle`, `created_at`, `updated_at`, `description`, `name`) VALUES
(1, 'ODD', '2021-03-30 13:44:51', '2021-03-30 13:44:51', NULL, NULL),
(2, 'SCAPP', '2021-03-30 13:44:51', '2021-03-30 13:44:51', 'L’Assemblée Générale de l’ONU a adopté en septembre 2015 l\'Agenda 2030 instaurant 17 objectifs de développement durable (ODD) et 169 cibles pour la période 2015-2030. Ces objectifs et ces cibles ne sont pas juridiquement contraignants pour les États mais constituent une feuille de route commune de la transition vers un développement durable. Trois buts essentiels sont poursuivis : lutter contre les inégalités, l\'exclusion et les injustices ; faire face au défi climatique ; mettre fin à l\'extrême pauvreté. La commission statistique des Nations Unies de mars 2017 a validé une liste de 232 indicateurs qui constituent le cadre de référence pour le suivi de la mise en oeuvre des ODD au niveau international ; cette liste sera révisée en 2020. Chaque année, le Secrétaire général de l’ONU établit un rapport annuel de suivi et d’examen des ODD au niveau mondial. Les États membres sont également invités à réaliser des rapports nationaux. En reconnaissant explicitement l’importance de l’appropriation nationale des ODD, les Nations Unies encouragent les pays à élaborer leur propre jeu d’indicateurs en se basant sur le cadre mondial des indicateurs de suivi des ODD. La Mauritanie a intégré en 2016 les cibles ODD jugées pertinentes pour le pays dans sa Stratégie Nationale de Croissance Accélérée et de Prospérité Partagée (SCAPP) 2016-2030. Le pays a aussi conduit une revue nationale volontaire (RNV) en 2018-2019, présentée à New York au Forum de Haut Niveau des Nations-Unies pour le Développment Durable en juillet 2019. La présente base de données inclut les indicateurs retenus, y compris ceux ODD, pour le suivi de la mise en oeuvre du Plan d\'action 2016-2020 de la SCAPP ainsi qie', 'Stratégie de Croissance Accélérée et de la Prospérité Partagée'),
(3, 'SCRAPP', '2021-03-30 13:44:52', '2021-03-30 13:44:52', 'L’Assemblée Générale de l’ONU a adopté en septembre 2015 l\'Agenda 2030 instaurant 17 objectifs de développement durable (ODD) et 169 cibles pour la période 2015-2030. Ces objectifs et ces cibles ne sont pas juridiquement contraignants pour les États mais constituent une feuille de route commune de la transition vers un développement durable. Trois buts essentiels sont poursuivis : lutter contre les inégalités, l\'exclusion et les injustices ; faire face au défi climatique ; mettre fin à l\'extrême pauvreté. La commission statistique des Nations Unies de mars 2017 a validé une liste de 232 indicateurs qui constituent le cadre de référence pour le suivi de la mise en oeuvre des ODD au niveau international ; cette liste sera révisée en 2020. Chaque année, le Secrétaire général de l’ONU établit un rapport annuel de suivi et d’examen des ODD au niveau mondial. Les États membres sont également invités à réaliser des rapports nationaux. En reconnaissant explicitement l’importance de l’appropriation nationale des ODD, les Nations Unies encouragent les pays à élaborer leur propre jeu d’indicateurs en se basant sur le cadre mondial des indicateurs de suivi des ODD. La Mauritanie a intégré en 2016 les cibles ODD jugées pertinentes pour le pays dans sa Stratégie Nationale de Croissance Accélérée et de Prospérité Partagée (SCAPP) 2016-2030. Le pays a aussi conduit une revue nationale volontaire (RNV) en 2018-2019, présentée à New York au Forum de Haut Niveau des Nations-Unies pour le Développment Durable en juillet 2019. La présente base de données inclut les indicateurs retenus, y compris ceux ODD, pour le suivi de la mise en oeuvre du Plan d\'action 2016-2020 de la SCAPP ainsi qie', 'Stratégie de Croissance Régionale Accélérée et de Prospérité Partagée');

-- --------------------------------------------------------

--
-- Table structure for table `themes`
--

CREATE TABLE `themes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `themes`
--

INSERT INTO `themes` (`id`, `libelle`, `created_at`, `updated_at`) VALUES
(1, 'Education', '2021-03-30 13:44:54', '2021-03-30 13:44:54'),
(2, 'Santé', '2021-03-30 13:44:54', '2021-03-30 13:44:54');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Faui.atlassian.com%2Faui%2F8.6%2Fdocs%2Favatars.html&psig=AOvVaw10qGc8JlBIcKOcW8nBS_8P&ust=1608837518504000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCN0f3o5O0CFQAAAAAdAAAAABAD',
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `type_id`, `avatar`, `active`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'Mr', 1, 'https://image.flaticon.com/icons/svg/21/21104.svg', 0, 'admin@softconsult.mr', '2021-03-30 13:44:49', '$2y$10$8xjpmdwaQlYPAV9AMFoH3eRBQ2BMK.niyaK8BdScA7/iiwvHTLvRS', NULL, '2021-03-30 13:44:49', '2021-03-30 13:44:49'),
(2, 'user', NULL, 1, 'https://image.flaticon.com/icons/svg/21/21104.svg', 0, 'user@gmail.com', '2021-03-30 13:44:49', '$2y$10$6/SULEKviJ4R9OhSjBsdu.aRwSWbNxr4FA5tMq6SFpk8A2PT5WMfK', NULL, '2021-03-30 13:44:49', '2021-03-30 13:44:49');

-- --------------------------------------------------------

--
-- Table structure for table `user_types`
--

CREATE TABLE `user_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_types`
--

INSERT INTO `user_types` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `wilayas`
--

CREATE TABLE `wilayas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wilayas`
--

INSERT INTO `wilayas` (`id`, `libelle`, `created_at`, `updated_at`) VALUES
(1, 'Hodh El Chergui', NULL, NULL),
(2, 'Hodh El Gharbi', NULL, NULL),
(3, 'Assaba', NULL, NULL),
(4, 'Gorgol', NULL, NULL),
(5, 'Brakna', NULL, NULL),
(6, 'Trarza', NULL, NULL),
(7, 'Adrar', NULL, NULL),
(8, 'Dakhlet Nouadhibou', NULL, NULL),
(9, 'Tagant', NULL, NULL),
(10, 'Guidimagha', NULL, NULL),
(11, 'Tiris Zemour', NULL, NULL),
(12, 'Inchiri', NULL, NULL),
(13, 'Nouakchott', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cds`
--
ALTER TABLE `cds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chantiers`
--
ALTER TABLE `chantiers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `communes`
--
ALTER TABLE `communes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `indicateur_cibles`
--
ALTER TABLE `indicateur_cibles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `instances`
--
ALTER TABLE `instances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `interventions`
--
ALTER TABLE `interventions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leviers`
--
ALTER TABLE `leviers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levier_specific_objectifs`
--
ALTER TABLE `levier_specific_objectifs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `moughataas`
--
ALTER TABLE `moughataas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `objectfs`
--
ALTER TABLE `objectfs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `point_focals`
--
ALTER TABLE `point_focals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sources`
--
ALTER TABLE `sources`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `strategies`
--
ALTER TABLE `strategies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `themes`
--
ALTER TABLE `themes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_types`
--
ALTER TABLE `user_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wilayas`
--
ALTER TABLE `wilayas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cds`
--
ALTER TABLE `cds`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `chantiers`
--
ALTER TABLE `chantiers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `communes`
--
ALTER TABLE `communes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `indicateur_cibles`
--
ALTER TABLE `indicateur_cibles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT for table `instances`
--
ALTER TABLE `instances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `interventions`
--
ALTER TABLE `interventions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `leviers`
--
ALTER TABLE `leviers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `levier_specific_objectifs`
--
ALTER TABLE `levier_specific_objectifs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `moughataas`
--
ALTER TABLE `moughataas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `objectfs`
--
ALTER TABLE `objectfs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `point_focals`
--
ALTER TABLE `point_focals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sources`
--
ALTER TABLE `sources`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `strategies`
--
ALTER TABLE `strategies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `themes`
--
ALTER TABLE `themes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_types`
--
ALTER TABLE `user_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `wilayas`
--
ALTER TABLE `wilayas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
