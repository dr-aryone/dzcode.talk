# Transactions

les transactions permettent de regrouper des requêtes dans des blocs, et de faire en sorte que tout le bloc soit exécuté en une seule fois, cela afin de préserver l'intégrité des données de la base.

## Principe

Une transaction, c'est un ensemble de requêtes qui sont exécutées en un seul bloc. Ainsi, si une des requêtes du bloc échoue, on peut décider d'annuler tout le bloc de requêtes (ou de quand même valider les requêtes qui ont réussi).

une table doit être transactionnelle, ce qui, avec MySQL, est défini par le moteur de stockage utilisé pour la table.
les tables InnoDB sont transactionnelles, donc supportent les transactions.

Lorsque l'on valide les requêtes d'une transaction, on dit aussi que l'on "commite" les changements. À l'inverse, l'annulation des requêtes s'appelle un "rollback".

MySQL ne travaille pas avec les transactions. Chaque requête effectuée est directement commitée (validée). MySQL est donc en mode "autocommit".
Pour quitter ce mode, il suffit de lancer la requête suivante :

#### non autocommit par default is 0

SET autocommit=0;

Le mode autocommit est de nouveau activé ! Le fait de faire SET autocommit = 0; n'est valable que pour la session courante. Or, en ouvrant une nouvelle connexion, vous avez créé une nouvelle session. Désactivez donc à nouveau ce mode.

COMMIT; -- pour valider les requêtes
ROLLBACK; -- pour annuler les requêtes

Les commentaires de Bibo sont toujours vides. Les changements non commités ne sont donc pas visibles à l'extérieur de la transaction qui les a faits. En particulier, une autre session n'a pas accès à ces changements.
Annulez la modification de Bibo dans la première session avec un ROLLBACK. Vous pouvez fermer la seconde session.

### Demmarer explicitement une transaction

En désactivant le mode autocommit, en réalité, on démarre une transaction. Et chaque fois que l'on fait un rollback ou un commit (ce qui met fin à la transaction), une nouvelle transaction est créée automatiquement, et ce tant que la session est ouverte.

Il est également possible de démarrer explicitement une transaction, auquel cas on peut laisser le mode autocommit activé, et décider au cas par cas des requêtes qui doivent être faites dans une transaction.

Repassons donc en mode autocommit :

#### autocommit par default is 1

SET autocommit=1;
Pour démarrer une transaction, il suffit de lancer la commande suivante :

START TRANSACTION;

## Jalon de transaction

Lorsque l'on travaille dans une transaction et que l'on constate que certaines requêtes posent problème, on n'a pas toujours envie de faire un rollback depuis le début de la transaction, annulant toutes les requêtes alors qu'une partie aurait pu être validée.
Il n'est pas possible de démarrer une transaction à l'intérieur d'une transaction. Par contre, on peut poser des jalons de transaction. Il s'agit de points de repère qui permettent d'annuler toutes les requêtes exécutées depuis ce jalon, et non toutes les requêtes de la transaction.

{
SAVEPOINT nom_jalon;
-- Crée un jalon avec comme nom "nom_jalon"

ROLLBACK TO nom_jalon;
-- Annule les requêtes exécutées depuis le jalon "nom_jalon"

RELEASE SAVEPOINT nom_jalon;
-- Retire le jalon "nom_jalon" (sans annuler, ni valider les requêtes faites depuis)
}

## remarque

Commandes DDL (data definition langague )
Toutes les commandes qui créent, modifient, suppriment des objets dans la base de données valident implicitement les transactions psq il touche la structure de la bd ( create alter drop rename ; index ; verrous de table ; load data)

#### ACID

Atomacité : Une transaction doit former une entité complète et indivisible. Chaque élément de la transaction, chaque requête effectuée, ne peut exister que dans la transaction.

Cohérance : Les données doivent rester cohérentes dans tous les cas : que la transaction se termine sans encombre, qu'une erreur survienne, ou que la transaction soit interrompue.
Tant que la totalité des étapes n'a pas été réalisée avec succès, les données restent dans leur état initial.

Isolation : Chaque transaction doit être isolée, donc ne pas interagir avec une autre transaction.

Durabilité : Une fois la transaction terminée, les données résultant de cette transaction doivent être stockées de manière durable et pouvoir être récupérées, en cas de crash du serveur

# \***\* En résumé \*\***

Les transactions permettent de grouper plusieurs requêtes, lesquelles seront validées (COMMIT) ou annulées (ROLLBACK) toutes en même temps.

Tous les changements de données (insertion, suppression, modification) faits par les requêtes à l'intérieur d'une transaction sont invisibles pour les autres sessions tant que la transaction n'est pas validée.

Les transactions permettent d'exécuter un traitement nécessitant plusieurs requêtes en une seule fois, ou de l'annuler complètement si une des requêtes pose problème ou si la transaction est interrompue.

Certaines commandes SQL provoquent une validation implicite des transactions, notamment toutes les commandes DDL, c'est-à-dire les commandes qui créent, modifient ou suppriment des objets dans la base de données (tables, index…).

Les critères ACID sont les critères qu'un système appliquant les transactions doit respecter pour être fiable : Atomicité, Cohérence, Isolation, Durabilité.
