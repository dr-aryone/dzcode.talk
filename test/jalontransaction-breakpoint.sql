use openclassroom;

set autocommit = 1;

start transaction;

INSERT INTO Animal (nom, espece_id, date_naissance, sexe) 
VALUES ('Popi', 5, '2007-03-11 12:45:00', 'M');

savepoint jalon1;
 -- the jalon starts from down here

INSERT INTO Animal (nom, espece_id, date_naissance, sexe) 
VALUES ('moMO', 5, '2007-03-11 12:45:00', 'F');

-- this will cancel the upper request jalon
ROLLBACK to SAVEPOINT jalon1;


INSERT INTO Animal (nom, espece_id, date_naissance, sexe) 
VALUES ('mimi', 5, '2007-03-11 13:45:00', 'F');

commit;

SELECT id, sexe, date_naissance, nom, espece_id, mere_id, pere_id
FROM Animal
WHERE espece_id = 5;