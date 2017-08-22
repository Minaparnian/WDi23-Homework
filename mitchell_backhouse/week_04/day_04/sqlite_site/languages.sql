CREATE TABLE languages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    creator TEXT,
    year_developed INTEGER,
    year_abandoned INTEGER,
    current_version TEXT,
    description STRING,
    logo TEXT -- image used in advertising
);

INSERT INTO languages (name, creator, year_developed, current_version, description) VALUES ('Ruby', 'Yukihiro Matsumoto', 1993, "2.4.1", "Ruby was created on February 24th, 1993");
