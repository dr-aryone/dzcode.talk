CREATE TABLE students (
	id 		INT(10) PRIMARY KEY AUTO_INCREMENT,
    first_name	varchar (10),
    last_name	varchar (10),
    email 	varchar (20),
    phone	TEXT (20),
    birthday  TEXT (10)
)engine=InnoDB;
    
INSERT INTO students (first_name,last_name,email,phone,birthday) VALUES
("Amine","HAMMOU","amine@mail.com","0673835525","1998-28-09");
INSERT INTO students (first_name,last_name,email,phone,birthday) VALUES
("ILYES","OUSSAID","verai@outlook.com","0675489725","1995-08-10");


CREATE TABLE students_grades (id INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
student_id INT (9),
test TEXT(10),
grade INTEGER (10) )ENGINE=InnoDB;

select * from students;

INSERT INTO students_grades (student_id,test,grade) values (1,"Nutrition",95);
INSERT INTO students_grades (student_id,test,grade) values (2,"Nutrition",92);
INSERT INTO students_grades (student_id,test,grade) values (1,"Chemistry",85);
INSERT INTO students_grades (student_id,test,grade) values (2,"Chemistry",95);


/* cross join */

select * from students_grades , students;

/* implicit inner join */

select * from students_grades , students
where students_grades.student_id = students.id;

/* explicit inner join - JOIN */

select * from students
join students_grades
	ON students.id = students_grades.student_id;




select students.first_name , students.last_name, students.email,students_grades.test, students_grades.grade from students
join students_grades
	ON students.id = students_grades.student_id
    where grade > 90;

/* outer join */


Create table students_projects (id integer primary key auto_increment,
student_id integer,
title text); 

INSERT INTO students_projects (student_id,title) values (1,"corropault");


select students.first_name,students.last_name,students_projects.student_id,students_projects.title
from students
left outer join students_projects
ON students.id = students_projects.student_id;





