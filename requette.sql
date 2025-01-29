
CREATE DATABASE chainetv;

USE chainetv;

CREATE TABLE equipe (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(100), prenom VARCHAR(100), poste VARCHAR(100));

INSERT INTO equipe(nom,prenom,poste) VALUES ("HAMIDOU","Assyah",'directrice generale');
INSERT INTO equipe(nom,prenom,poste) VALUES ("DJADID","Rafion",'chef emission');
INSERT INTO equipe(nom,prenom,poste) VALUES ("RIDJAL","Fayddine","programmateur emission");
INSERT INTO equipe(nom,prenom,poste) VALUES ("DAVID","Nadhir","camera men");
 INSERT INTO equipe(nom,prenom,poste) VALUES ("HOUMADI","Chamssoune","camera men");
 INSERT INTO equipe(nom,prenom,poste) VALUES ("SAINDOU","Nael","ingenieur son");
 INSERT INTO equipe(nom,prenom,poste) VALUES ("ABDOUL","Boun-yamine","realisateur");




CREATE TABLE programmediffusion (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(100), type_programme VARCHAR(100), Date_diffusion DATE NOT NULL );
INSERT INTO programmediffusion(nom,type_programme,Date_diffusion) VALUES ("Chigoma","dance traditionnel",2025-02-06);
INSERT INTO programmediffusion(nom,type_programme,Date_diffusion) VALUES ("Mbiwi","dance traditionnel","2026-01-01");