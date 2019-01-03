#mode non-autocommit
set autocommit = 0;

INSERT INTO Animal(nom,espece_id, date_naissance, sexe) 
VALUES ('baba',5,'2012-02-13 12:22:11', 'M'),
('mama',5,'2012-02-13 14:22:11', 'F');


#this rollback will cancel the upper requests
ROLLBACK;

INSERT INTO Animal(nom,espece_id, date_naissance, sexe) 
VALUES ('baba',5,'2012-02-13 12:22:11', 'M'),
('mama',5,'2012-02-13 14:22:11', 'F');

#this commit will validate and send  the upper request
COMMIT;

update espece set prix = 20 where id = 5;

#same this wont do nothing for the upper reqst
rollback;


SELECT * FROM Animal;
