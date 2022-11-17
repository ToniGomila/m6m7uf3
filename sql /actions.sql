create DATABASE realstate;

CREATE TABLE USER (
    ID int NOT NULL AUTO_INCREMENT,
    username varchar(20) NOT NULL,
    email varchar(30),
    salt char(1),
    pswd varchar(255) NOT NULL,
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
INSERT INTO USER(username, email, salt, pswd, pepper) 
         VALUES ("admin", "admin@admin.com", "a", "pswd", "com");