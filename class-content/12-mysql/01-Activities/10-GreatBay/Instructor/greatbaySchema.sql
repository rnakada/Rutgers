DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE auction(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    bid DECIMAL(9,2) NOT NULL DEFAULT 0,
    category VARCHAR(100),
    PRIMARY KEY(id)
);
