DROP DATABASE IF EXISTS strangerFriend;

CREATE DATABASE strangerFriend;

USE strangerFriend;

CREATE TABLE IF NOT EXISTS users (
  id int(11) NOT NULL AUTO_INCREMENT,
  email      varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  password   varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE chatRoom(
 id int NOT NULL AUTO_INCREMENT,
 description text(100) NOT NULL,
 description2 text(600) NOT NULL,
 PRIMARY KEY (ID)
);

INSERT INTO users (email, password) VALUES ('pancho@gmail.com', 'rancho');
INSERT INTO users (email, password) VALUES ('jack@gmail.com', 'pirate');

INSERT INTO chatRoom (description, description2) VALUES ('jester','Hello , from the Underground');
INSERT INTO chatRoom (description, description2) VALUES ('lover','who are you?');
INSERT INTO chatRoom (description, description2) VALUES ('jester','I am that of what dreams are felt');



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
