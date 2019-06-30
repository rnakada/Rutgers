-- DROP DATABASE IF EXISTS movies_planner_db;
CREATE DATABASE movies_planner_db;

USE movies_planner_db;

CREATE TABLE movies (
	id INT NOT NULL AUTO_INCREMENT,
    movie VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);