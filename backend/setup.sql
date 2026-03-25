-- Copy and paste this entire script into MySQL Workbench and run it!

-- 1. Create the database
CREATE DATABASE IF NOT EXISTS cognitivehealth_db;
USE cognitivehealth_db;

-- 2. Create the "downloadcomplete_result_package" table (For Results Package)
CREATE TABLE IF NOT EXISTS downloadcomplete_result_package (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create the "readiness_assessment" table (For RCM Assessments)
CREATE TABLE IF NOT EXISTS readiness_assessment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    score INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 3. Create the "contacts" table (For the Contact Us Form)
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) DEFAULT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create the "solutions" table (For dynamic Solutions tab data)
CREATE TABLE IF NOT EXISTS solutions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tab_name VARCHAR(100) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(100) DEFAULT NULL
);

-- 5. Insert some initial data into the solutions table so the frontend has something to display
INSERT INTO solutions (tab_name, title, description, icon) VALUES 
('Tab 1', 'Solution Feature 1', 'This is the first dynamic solution feature pulled from the MySQL database.', 'StarIcon'),
('Tab 1', 'Solution Feature 2', 'Another great feature for Tab 1.', 'CheckIcon'),
('Tab 2', 'Solution Feature 3', 'Information dynamically loaded for Tab 2.', 'LightningIcon');
