/*Creates the necessary tables for running the app*/

CREATE TABLE Reservations (
    email VARCHAR(255) NOT NULL,        
    activity VARCHAR(255) NOT NULL,    
    hour TIME NOT NULL,                
    num_people INT NOT NULL,           
    date DATE NOT NULL,                
    PRIMARY KEY (email, activity, date, hour) 
);

CREATE TABLE Accounts (
    username VARCHAR(255) NOT NULL PRIMARY KEY, 
    email VARCHAR(255) NOT NULL UNIQUE, 
    password VARCHAR(255) NOT NULL    
);