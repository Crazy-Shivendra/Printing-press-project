# Printing Press E-Commerce Database

## Overview
This database is designed for an e-commerce printing press system
selling Wedding Cards, Flex, Banner, Stamp, etc.

## Tech Stack
- Database: MySQL
- Backend: Spring Boot + JPA
- Frontend: React

## Database Files
- schema.sql → Database structure
- sample_data.sql → Sample data for testing
- ER_Diagram.png → Entity Relationship Diagram

## Tables
users  
categories  
products  
product_images  
addresses  
cart  
cart_items  
customizations  
orders  
order_items  
payments  
order_status_history  

## Key Design Decisions
- Product is a master entity, customization is transactional
- Customization linked to cart_items
- Order status history maintained separately

## How to Run
1. Execute schema.sql
2. Execute sample_data.sql

## Author
Shivendra Sudhanshu
