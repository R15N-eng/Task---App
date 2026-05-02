-- Execute esse script no seu banco PostgreSQL antes de rodar a aplicação

CREATE DATABASE taskapp;

\c taskapp;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Dados iniciais para testar
INSERT INTO tasks (title) VALUES
  ('Estudar Node.js'),
  ('Criar projeto no GitHub'),
  ('Fazer deploy no Render');
