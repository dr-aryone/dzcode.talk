#CREATE TABLE food (
#		id 		int (10) PRIMARY KEY NOT NULL,
#		nom		varchar (20) NOT NULL
#)ENGINE=InnoDB;

#INSERT INTO food VALUES (1,"tchina");
#INSERT INTO food VALUES (2,"mandarin");

#SELECT nom FROM food;
#SELECT * FROM food ORDER BY nom;

#SELECT * FROM food WHERE id > 1 ORDER BY nom;

#SELECT aisle, SUM(quantite) FROM food GROUP BY aisle;

# (sum , min , max ....)

#cela cherche la somme des quantité dans chaque aisle et les regroupes dans un seul aisle
#c a d on as par expl 2 aisle de valeur 10 et la qauntite est 20 , 20 donc on regroupe ce aisle 10 avec une sum de quantite 40













