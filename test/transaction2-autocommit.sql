use openclassroom;

set autocommit = 1;
#start transaction explicitement en mode autocommit par default 

INSERT INTO Animal (nom, espece_id, date_naissance, sexe) VALUES 
('momy', 5, '2008-02-01 02:25:00', 'F');

-- Ouverture d'une transaction
START TRANSACTION;

UPDATE Animal SET mere_id = last_insert_id() WHERE espece_id = 5 AND nom IN ('baba','buba');

-- On annule les requêtes de la transaction, ce qui termine celle-ci
ROLLBACK;

UPDATE Animal SET mere_id = LAST_INSERT_ID() WHERE espece_id = 5 AND nom = 'bibo';

-- Nouvelle transaction
START TRANSACTION;

DELETE FROM Animal WHERE espece_id = 5 AND nom = 'Buba';

-- On valide les requêtes de la transaction, ce qui termine celle-ci
COMMIT;

SELECT id, nom, espece_id, mere_id FROM Animal WHERE espece_id = 5;
