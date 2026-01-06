USE printing_press_db;

SHOW TABLES;

INSERT INTO users (name, email, phone, password)
VALUES
('Amit Sharma', 'amit@gmail.com', '9999999999', 'hashed_pwd_1'),
('Riya Verma', 'riya@gmail.com', '8888888888', 'hashed_pwd_2');

INSERT INTO categories (name, description)
VALUES
('Wedding Cards', 'Custom wedding invitation cards'),
('Flex', 'Flex printing'),
('Banner', 'Banner printing'),
('Stamp', 'Rubber stamps');

INSERT INTO products (category_id, name, description, base_price, is_customizable)
VALUES
(1, 'Royal Wedding Card', 'Premium wedding card', 25.00, TRUE),
(1, 'Classic Wedding Card', 'Simple wedding card', 15.00, TRUE),
(2, 'Outdoor Flex', 'Flex for outdoor use', 120.00, TRUE),
(3, 'Event Banner', 'Large event banner', 200.00, TRUE),
(4, 'Office Stamp', 'Self ink stamp', 350.00, FALSE);


INSERT INTO product_images (product_id, image_url)
VALUES
(1, 'https://img.com/wed1.png'),
(1, 'https://img.com/wed2.png'),
(2, 'https://img.com/wed3.png'),
(3, 'https://img.com/flex1.png'),
(4, 'https://img.com/banner1.png');


INSERT INTO addresses (user_id, address_line, city, state, pincode)
VALUES
(1, '12 MG Road', 'Delhi', 'Delhi', '110001'),
(2, '45 Park Street', 'Mumbai', 'Maharashtra', '400001');

INSERT INTO cart (user_id)
VALUES
(1),
(2);

INSERT INTO cart_items (cart_id, product_id, quantity, price)
VALUES
(1, 1, 100, 2500.00),
(1, 3, 2, 240.00),
(2, 2, 50, 750.00);

INSERT INTO customizations
(cart_item_id, groom_name, bride_name, wedding_date, venue, language, uploaded_file_url)
VALUES
(1, 'Amit', 'Riya', '2026-02-15', 'Delhi Banquet Hall', 'Hindi', NULL),
(3, 'Rahul', 'Neha', '2026-03-10', 'Mumbai Resort', 'English', 'https://upload.com/design.pdf');

INSERT INTO orders (user_id, address_id, total_amount, status)
VALUES
(1, 1, 2740.00, 'PLACED'),
(2, 2, 750.00, 'PLACED');

INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES
(1, 1, 100, 2500.00),
(1, 3, 2, 240.00),
(2, 2, 50, 750.00);

INSERT INTO payments (order_id, payment_method, payment_status, transaction_id, paid_at)
VALUES
(1, 'UPI', 'SUCCESS', 'TXN12345', NOW()),
(2, 'CARD', 'SUCCESS', 'TXN67890', NOW());


INSERT INTO order_status_history (order_id, status)
VALUES
(1, 'PLACED'),
(1, 'PRINTING'),
(1, 'SHIPPED'),
(2, 'PLACED'),
(2, 'PRINTING');

SELECT * FROM users;
SELECT * FROM products;
SELECT * FROM orders;
SELECT * FROM order_status_history;