DROP DATABASE IF EXISTS quiz_db; -- only for testing/development
CREATE DATABASE quiz_db;

USE quiz_db;

CREATE TABLE question(
	id INTEGER AUTO_INCREMENT NOT NULL,
    answer VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO question (answer)
VALUES ("mushroom");

INSERT INTO question 
SET answer = "3";

INSERT INTO question (answer)
VALUES 
("pizza"),
("bird"),
("car");

