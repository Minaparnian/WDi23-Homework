CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  genre TEXT,
  year TEXT,
  director TEXT,
  image TEXT -- url to a photo a butterfly
);

INSERT INTO movies (name, genre, year, director) VALUES ('Avatar', ' Fantasy/Science fiction', '2009', 'James Cameron');
