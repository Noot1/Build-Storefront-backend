# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## Data Shapes

### Product
id
name
price

#### User
id
firstname
lastname
password

#### Orders
id
user_id
status of order (pending or complete)

#### Product Orders
id
order_id
product_id
quantity

## Data Schema
### Product
id SERIAL PRIMARY KEY,
name VARCHAR(50),
price INTEGER
### User
id SERIAL PRIMARY KEY,
firstname VARCHAR(50),
lastname VARCHAR(50),
password VARCHAR
### Orders
id SERIAL PRIMARY KEY,
status VARCHAR(100),
user_id bigint REFERENCES users(id)
### order_products
id SERIAL PRIMARY KEY,
quantity integer,
order_id bigint REFERENCES orders(id),
product_id bigint REFERENCES products(id)

# API Endpoints
## Users
GET: /users - Return all users (Requires Token)
GET: /users/1 - Return user by id (Requires Token)
POST: /users - Creates user (Requires Token)
DELETE: /users - Deletes user (Requires Token)
PUT: /users - Updates user (Requires Token)

## Products
GET: /products - Return all products
GET: /products/1 - Return product by product id
POST: /products - Creates product (Requires Token)
DELETE: /products - Deletes product (Requires Token)
PUT: /products - Updates product (Requires Token)

## Orders
GET: /orders - Return all orders (Requires Token)
GET: /orders/1 - Return order by id (Requires Token)
GET: /orders/user/1 - Return orders by user id (Requires Token)
POST: /orders - Creates order (Requires Token)
DELETE: /orders - Deletes order (Requires Token)
PUT: /orders - Updates order (Requires Token)
POST: /orders/product - Creates Product order (Requires Token)
DELETE: /orders/product - Deletes Product order (Requires Token)
