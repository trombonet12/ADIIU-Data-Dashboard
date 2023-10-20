SELECT count AS conteo, COUNT(*) AS cantidad_developers
FROM (
    SELECT developer, COUNT(*) AS count
    FROM applicationdevelopers
    GROUP BY developer
) AS subconsulta
GROUP BY count;


SELECT developer, COUNT(*) AS count
FROM applicationdevelopers
GROUP BY developer;


SELECT type, COUNT(type) AS conteo
FROM applicationinformation
WHERE type IN ('game', 'advertising', 'dlc', 'mod')
GROUP BY type;


SELECT genre, COUNT(*) AS count
FROM (
  SELECT genre1 AS genre FROM applicationgenres
  UNION ALL
  SELECT genre2 AS genre FROM applicationgenres
  UNION ALL
  SELECT genre3 AS genre FROM applicationgenres
  UNION ALL
  SELECT genre4 AS genre FROM applicationgenres
  UNION ALL
  SELECT genre5 AS genre FROM applicationgenres
  UNION ALL
  SELECT genre6 AS genre FROM applicationgenres
) AS subquery
WHERE genre IS NOT NULL
GROUP BY genre;