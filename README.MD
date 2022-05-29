# Storefront Backend Project

this project aims to meet the Udacity requirement for compeleting the Nano degree in Full stack javascript development and exactly in build a store front backend application. However, this is an API build in Nodejs for an online store. It exposes a RESTful API that will be used by the frontend developer on the frontend. The database schema and and API route information included in the REQUIREMENT.MD

# Create User
CREATE USER postgres WITH PASSWORD 'QWER';

# Create the following databases
CREATE DATABASE store_dev; CREATE DATABASE store_test;

# Grant privileges to databases
GRANT ALL PRIVILEGES ON DATABASE store_dev TO Noot;
GRANT ALL PRIVILEGES ON DATABASE store_test TO Noot;

# Add env file
.env file contains the following information: 
NODE_ENV
PORT
- database connection information 
DB_HOST
DB_PORT
DB_DATABASE
DB_DATABASE_TEST
DB_USER
DB_PASSWORD
- User
BCRYPT_PASSWORD
SALT_ROUNDS
TOKEN_SCRET
user_token
SECRET_TOKEN
bcrypt_code
Authorization

# Run migrations to create the tables of the database
- db-migrate up

# Testing
- npm run test

# Running the server
- npm run start


