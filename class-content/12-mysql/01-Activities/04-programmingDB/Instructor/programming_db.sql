-- never do this in production, only used for testing
DROP DATABASE IF EXISTS programming_db;
CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages(
	id INT AUTO_INCREMENT NOT NULL,
    lang VARCHAR(30) NOT NULL, -- not null has the same meaning as required
    rating DECIMAL(4,1), -- 4 digits all together, 1 digit after the decimal point
                         -- 123.1 <-- valid for (4,1)
	mastered BOOLEAN DEFAULT true NOT NULL,
    PRIMARY KEY(id) -- silly
);

INSERT INTO programming_languages 
(lang, rating, mastered) 
VALUES 
("Javascript", 54.2, true);

INSERT INTO programming_languages 
(lang, rating, mastered) 
VALUES 
("HTML", 9, true);

SELECT last_insert_id();

SELECT * FROM programming_languages;