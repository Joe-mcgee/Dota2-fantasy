New boilerplate for lighthouse final

## To init

May need nodemon global

`npm install -g nodemon`

fork and clone 

`npm install`

cd into client

`npm install`

to run server use command


## Setting up .env file

Create .env file and assign a <DB_USER>, <DB_PASS>, <DB_NAME> and get an <API_KEY>

# Getting an <API_KEY>

Make an account at:

https://www.sportradar.com/choose_region/

1000 API calls free as of March 13, 2018

# .example.env file format

DB_HOST=localhost
DB_USER=<DB_USER>
DB_PASS=<DB_PASS>
DB_NAME=<DB_NAME>
DB_SSL=true if heroku
DB_PORT=5432
NODE_ENV=development
SPORT_TRADER_KEY=<API_KEY>


## Setting up PSQL Database

To avoid issues with peer authentication

`sudo -u postgres psql postgres`

Create a new role, password and database name from .env paramaters

`CREATE ROLE <DB_USER> WITH LOGIN password '<DB_PASS>'`
`CREATE DATABASE <DB_NAME>;`
`ALTER DATABASE <DB_NAME> OWNER TO <DB_USER>;`

migrate knex db

`npm run knex migrate:latest`


## Run dev build

`npm run dev`


