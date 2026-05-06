-- Copy and paste this entire script into MySQL Workbench and run it!

-- 1. Create the database
CREATE DATABASE IF NOT EXISTS CognitiveWebsite;
USE CognitiveWebsite;
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



-- 4. Create the "learn_about_our_implementation_process" table (For Results Package)
CREATE TABLE IF NOT EXISTS learn_about_our_implementation_process (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

