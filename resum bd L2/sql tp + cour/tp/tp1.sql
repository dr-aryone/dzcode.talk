create database tp1;
use tp1;

create table etudiant (

matricule INT PRIMARY KEY,
nom varchar (10),
prenom varchar (10),
date datetime,
constraint mil_date check (date between 1990 and 2000)
);

INSERT INTO etudiant (matricule, nom, prenom,date) VALUES (2, 'amine', 'hammou', '2018-04-03');
INSERT INTO etudiant (matricule, nom, prenom,date) VALUES (3, 'amine2', 'hammou2', '2008-14-03');
INSERT INTO etudiant (matricule, nom, prenom,date) VALUES (4, 'amine3', 'hammou3', '1998-04-01');


select * from etudiant;

