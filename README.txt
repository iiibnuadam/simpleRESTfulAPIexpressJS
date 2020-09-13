#This is Simple RESTful API

Guide :
1. Clone this repo
2. NPM install
3. create table
    CREATE TABLE IF NOT EXISTS `person` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `first_name` varchar(50) NOT NULL DEFAULT '0',
        `last_name` varchar(50) NOT NULL DEFAULT '0',
        PRIMARY KEY (`id`)
    )
4. run this server with 'node server.js'