  -- * A query which returns all data for songs sung 
  -- by a specific artist
  SELECT * FROM top5000 WHERE artist = "Billy Joel";
  
  -- * A query which returns all artists who appear 
  -- within the top 5000 more than once
-- COUNT FUNCTION (AGGREGATE FUNCTION)
SELECT COUNT(*), artist FROM top5000 
GROUP BY artist
HAVING COUNT(*) > 3
;

SELECT COUNT(*), artist, GROUP_CONCAT(song_title separator '|') FROM top5000 
GROUP BY artist
HAVING COUNT(*) > 3;

SELECT original.*, counter.*
FROM top5000 AS original
INNER JOIN (
	SELECT COUNT(*) number_of_songs, artist FROM top5000 
	GROUP BY artist
) AS counter ON original.artist = counter.artist
ORDER BY original.artist;

  -- * A query which returns all data contained 
  -- within a specific range
SELECT * FROM top5000 WHERE id > 1 AND id < 1000;
SELECT * FROM top5000 WHERE release_year > 1997 LIMIT 0, 25;
SELECT * FROM top5000 WHERE release_year BETWEEN 1997 AND 2001;

  -- * A query which searches for a specific song 
  -- in the top 5000 and returns the data for it
SELECT * FROM top5000 WHERE song_title = "venus";
SELECT * FROM top5000 WHERE song_title REGEXP "ever";