CREATE DATABASE userspg;

CREATE TABLE usuarios  (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (name, email) VALUES
 ('Juan', 'juan.perez@example.com'),
 ('Carlos', 'carlos.ramirez@example.com');
