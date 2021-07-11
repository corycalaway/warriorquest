DROP DATABASE IF EXISTS warriorquest_db;
CREATE DATABASE warriorquest_db;

USE warriorquest_db;



CREATE TABLE basicpower (
    basicpower_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    basicpower_name VARCHAR(30) NOT NULL,
    basicpower_level INT
);

CREATE TABLE specialpower (
    specialpower_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    specialpower_name VARCHAR(30) NOT NULL,
    specialpower_level INT
);

CREATE TABLE savedusers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    player_name VARCHAR(30),
    basicpower_id INT NOT NULL,
    INDEX idx_basicpower(basicpower_id),
    CONSTRAINT fk_user_basicpower FOREIGN KEY(basicpower_id) REFERENCES basicpower(basicpower_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    specialpower_id INT NOT NULL,
    INDEX idx_specialpower(specialpower_id),
    CONSTRAINT fk_user_specialpower FOREIGN KEY(specialpower_id) REFERENCES specialpower(specialpower_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    
);