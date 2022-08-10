DROP SCHEMA IF EXISTS MedievalStore;
CREATE SCHEMA IF NOT EXISTS MedievalStore;

CREATE TABLE MedievalStore.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  classe TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE MedievalStore.Orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  FOREIGN KEY (userId) REFERENCES MedievalStore.Users (id)
);

CREATE TABLE MedievalStore.Products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  orderId INTEGER,
  FOREIGN KEY (orderId) REFERENCES MedievalStore.Orders (id)
);

INSERT INTO
  MedievalStore.Users (username, classe, level, password)
VALUES
  ("reigal", "Guerreiro", 10, "1dragaonoceu");

INSERT INTO
  MedievalStore.Users (username, classe, level, password)
VALUES
  ("vyrion", "Inventor", 8, "pagandodividas");

INSERT INTO
  MedievalStore.Users (username, classe, level, password)
VALUES
  ("yraa", "Ladina", 5, "valarmorg");

INSERT INTO
  MedievalStore.Orders (userId)
VALUES
  (1);

INSERT INTO
  MedievalStore.Orders (userId)
VALUES
  (3);

INSERT INTO
  MedievalStore.Orders (userId)
VALUES
  (2);

INSERT INTO
  MedievalStore.Products (name, amount)
VALUES
  ("Espada curta", "10 peças de ouro");

INSERT INTO
  MedievalStore.Products (name, amount, orderId)
VALUES
  (
    "Escudo desnecessariamente grande",
    "20 peças de ouro",
    1
  );

INSERT INTO
  MedievalStore.Products (name, amount, orderId)
VALUES
  ("Adaga de Aço Valírico", "1 peça de ouro", 2);

INSERT INTO
  MedievalStore.Products (name, amount, orderId)
VALUES
  ("Colar de fogo", "1 peça de ouro", 2);

INSERT INTO
  MedievalStore.Products (name, amount, orderId)
VALUES
  ("Engenhoca aleatória", "15 peças de ouro", 3);
