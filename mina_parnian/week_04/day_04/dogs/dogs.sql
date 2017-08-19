CREATE TABLE dogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  color TEXT,
  breed TEXT,
  image TEXT -- url to a photo a dog
);

INSERT INTO dogs (color, breed) VALUES ('Tan', 'Pomeranian');
