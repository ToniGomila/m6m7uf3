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
CREATE TABLE PROPIERTY (
    ID int NOT NULL,
    title varchar(255) NOT NULL,
    desc varchar(255), /*¿texto bastante largo?*/
    price float,
    imgHead varchar(255),
    imgs varchar(255),
    type varchar(255),
    /*pensar nom per categoria*/ varchar(255),
    /*pensar nom subcategoria*/ varchar(255),
    city varchar(255),
    street varchar(255),
    num varchar(255),
    cp int,
    lat varchar(255),
    long varchar(255),
    userID int,

    PRIMARY KEY (ID)
);

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
