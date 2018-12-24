client (id_client, nom, prenom)
voiture (matr,model)
possed(#id_client, #matr, date )
Donc la table possed devienne comme suit :

CREATE TABLE possed (
       id_client   INT,
       matr         VARCHAR(20),
       date         DATETIME,
    CONSTRAINT pk_possed    primary key  (id_client,matr) ,
    CONSTRAINT fk_idClient  foreign  key   id_client   references  client(id_client), 
­    CONSTRAINT fk_idmatr    foreign  key   matr         references  voiture(matr) 
)
 
Et les autres tables :
CREATE TABLE client (
       id_client   INT,
       nom         VARCHAR(20),
       prenom   VARCHAR(20),
    CONSTRAINT pk_possed    primary key  id_client
)
CREATE TABLE voiture (
       matr         VARCHAR(20) primary key,
       model       VARCHAR(20)
)


 CREATE TABLE Congression(
  NCong int(255) not null,
  adr VARCHAR(128) not null,
  DateIns DATE not null,
  NomCong VARCHAR(255) not null,
     PrenomCong VARCHAR(255) not null,
     NumT int(255) not null,
     constraint PK_NumH foreign key (NumH) references Hotel(NumH),
     constraint PK_NumO foreign key (NumO) references Organisme(NumO),
     constraint PK_NCong primary key clustered (NCong)
   
),

check work like a where in a creting a database

constraint ck-salaire check (salaire>= 60),


create database tp;
use tp;



Il est facile de supprimer cette contrainte de clé secondaire par la suite. Ce serait beaucoup plus difficile
si on avait utilisé la paire (nom, prenom) comme clé primaire puisqu’elle serait alors utilisée pour
référencer un artiste dans d’autres tables.
Voici un autre exemple d’utilisation d’une clé secondaire : on indique ci-dessous qu’on ne peut pas
trouver deux cinémas à la même adresse. Ce deuxième exemple montre que l’on peut placer une contrainte
comme UNIQUE sur la ligne de l’attribut auquel elle se rapporte. Ce n’est bien entendu possible que quand
cette contrainte ne concerne qu’un seul attribut.

CREATE TABLE Cinema
(nom
VARCHAR (30) NOT NULL,
adresse
VARCHAR(50) UNIQUE,
PRIMARY KEY (nomCinema))

La clause UNIQUE ne s’applique pas aux valeurs NULL : il peut y avoir plusieurs cinémas d’adresse
inconnue. En revanche le nom du cinéma est obligatoire (clause NOT NULL) et il est unique (clause
PRIMARY KEY).



Modification des attributs

Voici quelques exemples d’ajout et de modification d’attributs. On peut ajouter un attribut region à
la table Internaute avec la commande :

ALTER TABLE Internaute ADD region VARCHAR(10);

S’il existe déjà des données dans la table, la valeur sera à NULL ou à la valeur par défaut. La taille de
region étant certainement insuffisante, on peut l’agrandir avec MODIFY, et la déclarer NOT NULL par
la même occasion :

ALTER TABLE Internaute MODIFY region VARCHAR(30) NOT NULL;

Il est également possible de diminuer la taille d’une colonne, avec le risque d’une perte d’information
pour les données existantes. On peut même changer son type, pour passer par exemple de VARCHAR à
INTEGER, avec un résultat imprévisible.
L’option ALTER TABLE permet d’ajouter une valeur par défaut.

ALTER TABLE Internaute ALTER region SET DEFAULT ’PACA’;

Enfin on peut détruire un attribut avec DROP.

ALTER TABLE Internaute DROP region;



