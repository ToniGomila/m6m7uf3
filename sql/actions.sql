create DATABASE realstate;

CREATE TABLE USER (
    ID int NOT NULL AUTO_INCREMENT,
    username varchar(20) NOT NULL,
    email varchar(30),
    salt char(1),
    pswd varchar(256) NOT NULL,
    pepper char(3),
    PRIMARY KEY (ID)
);

/*falta comprobar*/


CREATE TABLE CATEGORIA (
    ID int NOT NULL AUTO_INCREMENT,
    cName varchar(35) NOT NULL,
    cShortName varchar(30),
    PRIMARY KEY (ID)
);
CREATE TABLE SUBCATEGORIA (
    ID int NOT NULL AUTO_INCREMENT,
    sName varchar(35) NOT NULL,
    sShortName varchar(30),
    cID int,
    PRIMARY KEY (ID),
    FOREIGN KEY (cID)
        REFERENCES CATEGORIA(ID)
        ON DELETE CASCADE
);
insert into CATEGORIA(cName, cShortName) values ("pisos", "Pisos");
insert into CATEGORIA(cName, cShortName) values ("casas", "Casas");

insert into SUBCATEGORIA(sName, sShortName, cID) values ("atico", "Ático", 1);
insert into SUBCATEGORIA(sName, sShortName, cID) values ("entresuelo", "Entresuelo", 1);
insert into SUBCATEGORIA(sName, sShortName, cID) values ("apartamento", "Apartamento", 1);
insert into SUBCATEGORIA(sName, sShortName, cID) values ("duplex", "Duplex", 1);

insert into SUBCATEGORIA(sName, sShortName, cID) values ("rural", "Rural", 2);
insert into SUBCATEGORIA(sName, sShortName, cID) values ("finca rustica", "Finca rústica", 2);
insert into SUBCATEGORIA(sName, sShortName, cID) values ("casa adosada", "Casa adosada", 2);

CREATE TABLE PROPIERTY (
    ID int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    description text, /*¿texto bastante largo?*/
    action varchar(20),
    price varchar(255),
    cat int,
    subcat int,
    propPos varchar(250),
    headImg varchar(255),

    PRIMARY KEY (ID),
    FOREIGN KEY (cat) REFERENCES CATEGORIA(ID),
    FOREIGN KEY (subcat) REFERENCES SUBCATEGORIA(ID)  
);
CREATE TABLE IMAGES (
    ID int NOT NULL AUTO_INCREMENT,
    path varchar(255),
    propiertyID int,

    PRIMARY KEY (ID),
    FOREIGN KEY (propiertyID) REFERENCES PROPIERTY(ID)
);