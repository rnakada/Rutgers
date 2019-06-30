-- DROP DATABASE IF EXISTS top_songsDB; -- not needed, we have data now to upload
CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000(
    id INTEGER AUTO_INCREMENT NOT NULL,
    artist VARCHAR(150) NOT NULL,
    song_title VARCHAR(150) NOT NULL,
    release_year INT NOT NULL,
    records_sold DECIMAL(6,3) NOT NULL,
    first_month_sales DECIMAL(6,3) NOT NULL,
    ratings DECIMAL(5,3),
    downloads DECIMAL(5,3),
    runtime DECIMAL(5,3),
    PRIMARY KEY(id)
);