CREATE TABLE users (
id INT primary key,
name TEXT (10)
);

CREATE TABLE diary (
id INTEGER PRIMARY KEY,
user_id INTEGER,
date TEXT,
content TEXT
);

insert into diary (user_id,date,content) values(1,"2008-22-11","i had a horrible flight tonight");
insert into diary (user_id,date,content) values (1,"2008-04-11","we made up and now we are best freinds for ever");

update diary set content ="hey bae" where id=1;

select * from diary; 

delete from diary where id=1;

alter table diary add emotion TEXT default "unkown";

/* drop table diary; */