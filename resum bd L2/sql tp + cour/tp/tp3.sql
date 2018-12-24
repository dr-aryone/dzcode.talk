INSERT INTO Client VALUES (213,'ilyes','oussaid');
INSERT INTO Client VALUES (21,'ahmed','brahimi');
INSERT INTO Client VALUES (32,'zaki','chiran');
INSERT INTO Client VALUES (3,'brahim','achour');
INSERT INTO Client VALUES (4,'rym','selhani');

select note from inscription where module = 'bd' order by Note DESC;
select mat from inscription where note is not null ;
select * from etudiant where nom like 'ben%'; //fin
'%ami%';
'_b%'; //2eme  ( __ 3eme)
'%b_';  //avant derniere




INSERT INTO Commande ('date_cmd','id_clt') VALUES ('2018-02-10','8'); 


use facturation;
select * from Commande;

update Client set prenom_clt = "basbasa" where id_clt > 0;


/*
CREATE TABLE animals (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(30) NOT NULL,
     PRIMARY KEY (id)
);

INSERT INTO animals (name) VALUES
    ('dog'),('cat'),('penguin'),
    ('lax'),('whale'),('ostrich');

SELECT * FROM animals;
*/

