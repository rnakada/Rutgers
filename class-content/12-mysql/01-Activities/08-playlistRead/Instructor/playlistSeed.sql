DROP DATABASE IF EXISTS playlist_db;
CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
	id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    genre VARCHAR(100),
    PRIMARY KEY (id)
);



INSERT INTO `songs` (`title`, `artist`, `genre`) 
VALUES ('Toxic', 'Britney Spears', 'Pop');

INSERT INTO `songs` (`title`, `artist`, `genre`) 
VALUES ('Stellar', 'Incubus', 'Rock');

-- ROCK is my search query
SELECT id, title, artist, genre FROM songs
WHERE genre = 'Rock';

SELECT id, title, artist, genre FROM songs
WHERE genre = 'Rock' OR artist = 'Rock';

SELECT id, title, artist, genre FROM songs
WHERE 'Rock' IN (genre, artist);