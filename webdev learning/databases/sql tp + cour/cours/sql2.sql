             CREATE TABLE exercice (
		id 		 int (10) PRIMARY KEY Auto_Increment,
		type	 varchar (20),
        minutes	 int  (10),
        colories int  (10),
        heart	 int  (10)
)ENGINE=InnoDB;

INSERT INTO exercice (type,minutes,colories,heart) VALUES ("biking",30,100,110);
INSERT INTO exercice (type,minutes,colories,heart) VALUES ("biking",10,30,105);
INSERT INTO exercice (type,minutes,colories,heart) VALUES ("dancing",15,200,120);


SELECT * FROM exercice WHERE colories > 50 AND minutes < 30 ORDER BY colories;

SELECT * FROM exercice WHERE colories > 50 OR heart > 100 ORDER BY heart;

SELECT * from exercice WHERE type ="biking" OR type ="dancing";

SELECT * FROM exercice WHERE type IN("biking","dancing");

SELECT * FROM exercice WHERE type NOT IN("biking");


CREATE TABLE doctor (
		id INTEGER PRIMARY KEY Auto_Increment,
        type TEXT,
        reason TEXT
)ENGINE=InnoDB;

INSERT INTO doctor(type,reason) values("biking","improves endurance and flex");
INSERT INTO doctor(type,reason) values("hiking","improves cardio and health");

select type from doctor;

select * from exercice where type IN ( select type from doctor);

select * from exercice where type IN ( select type from doctor where reason="improves endurance and flex");

SELECT * FROM exercice WHERE type IN( SELECT type FROM doctor WHERE reason LIKE "%flex%");

select type , SUM(colories) as total_calo from exercice group by type;

select type, AVG(colories) as average_calo from exercice group by type having
average_calo > 70;

select type from exercice group by type having count(*) >= 2;


select count(*) FROM exercice where heart >= ROUND(0.50 * (220-30))
AND heart <= ROUND(0.90 * (220-30));


SELECT type , heart ,
	CASE
		when heart > 220-0 then "above max"
        when heart > ROUND(0.90 * (220-30)) THEN "above target"
        when heart > ROUND(0.50 * (220-30)) THEN "within target"
        ELSE "below target"
	END as hr_zone
FROM exercice;



SELECT COUNT(*) ,
	CASE
		when heart > 220-0 then "above max"
        when heart > ROUND(0.90 * (220-30)) THEN "above target"
        when heart > ROUND(0.50 * (220-30)) THEN "within target"
        ELSE "below target"
	END as hr_zone
FROM exercice
GROUP BY hr_zone;







select note from inscription where module = 'bd' order by Note DESC;
select mat from inscription where note is not null ;
select * from etudiant where nom like 'ben%'; //fin
'%ami%';
'_b%'; //2eme  ( __ 3eme)
'%b_';  //avant derniere





Select * from e where idclt in (select distinct idclt from c); ( distinct supp les  doublons)







