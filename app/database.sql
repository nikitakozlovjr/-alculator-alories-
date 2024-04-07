CREATE TABLE users (
    username VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE calculations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255),
    drop_result INT NOT NULL,
    keep_result INT NOT NULL,
    set_result INT NOT NULL,
    FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
);

CREATE TABLE users_posts (
    id SERIAL PRIMARY KEY,
    body text NOT NULL,
    username VARCHAR(255),
    FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
);

CREATE TABLE doctor_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body text NOT NULL
);