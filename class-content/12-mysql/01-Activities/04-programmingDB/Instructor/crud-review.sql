-- CREATE

CREATE TABLE movies_table;
CREATE DATABASE moviesDB;
INSERT INTO some_table (col1, col2) VALUES ("Value1", 2);

-- READ

SELECT * FROM movies_table;
SELECT movie_name FROM movies_table WHERE movie_id = 1;

-- UPDATE

UPDATE movies_table SET rating = "0" WHERE movie_name = "Taken";

-- DELETE

DROP TABLE movies_table;
DROP DATABASE IF EXISTS moviesDB;
DELETE FROM movies_table WHERE movie_name = "Taken"; 