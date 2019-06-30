CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
	id INT NOT NULL auto_increment,
    author VARCHAR(100) NOT NULL,
    chirp VARCHAR(100) NOT NULL,
    time_created timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

INSERT INTO chirps (
author,
chirp,
time_created
)
VALUES (
"Kimani",
"J. K. Rowley"
);

SELECT * FROM chirps;