
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "movies" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (80) NOT NULL,
	"year" INTEGER,
	"description" VARCHAR (400) NOT NULL,
	"length" INTEGER,
	"viewed" BOOLEAN DEFAULT FALSE,
	"video_url" VARCHAR,
	"image_url" VARCHAR
); 

INSERT INTO movies (title, description, "year", length, video_url, image_url)
VALUES ('Godzilla vs Megalon', 'The undersea nation of Seatopia sends the gigantic Megalon to destroy the world above - and its up to Godzilla and a size-shifting robot, Jet Jaguar, to defeat him.', '1964', '78', 'videos/Godzilla_vs_Megalon.mp4', 'images/godzillavsmegalon.jpg'),
('Ghidora, the Three-Headed Monster','After a meteorite unleashes a three-headed beast upon Tokyo, Mothra tries to unite with Godzilla and Rodan to battle the extraterrestrial threat.', '1964', '89', 'videos/ghidora.mp4', 'images/ghidora3.jpg')
;

