CREATE TABLE directors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  born TEXT,
  movie TEXT,
  upcoming TEXT,
  image TEXT -- url to a photo a butterfly
);

INSERT INTO directors (name, born, movie, upcoming) VALUES ('James Cameron', ' 16 August 1954 (age 63)', 'Avatar', 'Alita: Battle Angel, Avatar 4, Avatar 3');
