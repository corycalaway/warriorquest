DROP DATABASE IF EXISTS warriorquest_db;
CREATE DATABASE warriorquest_db;

use warriorquest_db;



CREATE TABLE basicpower(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    basicpower_name VARCHAR(30) NOT NULL,
    basicpower_level INT
);

CREATE TABLE savedusers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    player_name VARCHAR(30),
    basicpowers INT,

    FOREIGN KEY (basicpowers)
    REFERENCES basicpower(id)
    ON DELETE SET NULL
    
);