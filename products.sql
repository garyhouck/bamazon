DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT,
    product_name VARCHAR(200),
    department_name VARCHAR(200),
    price INT,
    stock_quantity INT
);