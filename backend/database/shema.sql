create database booklist;

use booklist;

create table books(
    id int AUTO_INCREMENT PRIMARY KEY,
    title varchar(255),
    author varchar(255),
    max_page int,
    publisher varchar(255),
    asin int
);