
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




<!--Pour ajouter une colone a une table existant:-->
ALTER TABLE programmediffusion  ADD lien_youtube VARCHAR(100);

<!--Modifie la table programmediffusion -->
 UPDATE programmediffusion SET lien_youtube = "https://www.youtube.com/embed/HAMCQJ6CTGE" WHERE id = 1;

 UPDATE programmediffusion SET lien_youtube = "https://www.youtube.com/embed/YgZ2cnj22M0" WHERE id = 2

 UPDATE programmediffusion SET lien_youtube = "https://www.youtube.com/embed/GsKt9kon8GE" WHERE id = 3;

 UPDATE programmediffusion SET lien_youtube = "https://www.youtube.com/embed/BwKIIC7U6HQ" WHERE id = 4;

 UPDATE programmediffusion SET lien_youtube = "https://www.youtube.com/embed/EhZQHLLQRWg" WHERE id = 5;


<!--Creer une nouvelle table utilisateur-->
 CREATE TABLE utilisateur(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(100), prenom VARCHAR(100), email VARCHAR(100), mot_de_passe VARCHAR(100));

INSERT INTO utilisateur (nom, prenom, email,mot_de_passe) VALUES ("MOUHAMED","Youssouf","mouhamedyoussouf73@gmail.com","Mou73You976");
INSERT INTO utilisateur (nom, prenom, email,mot_de_passe) VALUES ("HACHHIM","Mayra","mayrahachim@gmail.com","mamangu245");
INSERT INTO utilisateur (nom, prenom, email,mot_de_passe) VALUES ("DJANGO","Devdas","djangodev23@gmail.com","django773@");
INSERT INTO utilisateur (nom, prenom, email,mot_de_passe) VALUES ("SEID","Morenne","seidmorenne@gmail.com","morezza.66");

<!--Pour ajouter une colone a ma table utilisateur-->
ALTER TABLE utilisateur ADD date_de_naissance DATE;

UPDATE utilisateur SET date_de_naissance = "2000-04_07" WHERE id = 2;
UPDATE utilisateur SET date_de_naissance = "2002-08_03" WHERE id = 3;
UPDATE utilisateur SET date_de_naissance = "2004-10_16" WHERE id = 4;