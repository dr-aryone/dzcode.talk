/*------------------------------------------------------------
*        Script SQLSERVER identity = auto_increment
------------------------------------------------------------*/

CREATE DATABASE facturation;
use facturation;

create table client (
id_clt char (10) NOT NULL ,
nom_clt char (30) NOT NULL ,
prenom_clt char (30) DEFAULT NULL ,
PRIMARY KEY (id_clt)
);

create table commande (
id_cmd int not null IDENTITY (1,1) ,  
date_cmd date default null ,
id_clt char (10) default null ,
constraint pk_idcmd primary key (id_cmd) ,
constraint pk_comande foreign key (id_clt) references client(id_clt)
);

create table produit (
id_prd varchar (6) not null primary key ,
lib_prd varchar (10) not null ,
qsk_prd int default null 
);

create table ligne_cmd (
id_cmd int not null ,
id_prd varchar (6) not null ,
qts_cmd int default null ,
primary key (id_cmd,id_prd) ,
constraint lignecmd_ibfk1 foreign key (id_cmd) references command(id_cmd) ,
constraint lignecmd_ibfk2 foreign key (id_prd) references produit(id_prd)
);

insert into client values(13213,'amine','hammou');
insert into commande (date_cmd,id_clt) values('2005-10-11',200115);

select * from commande;

update client set prenom_clt = "basbasa" where id_clt > 0;



