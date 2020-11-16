CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- tables

CREATE TABLE recipes (
  "recipe_id" uuid primary key NOT NULL DEFAULT uuid_generate_v4 (),
  "title" TEXT NOT NULL,
  "servings" INTEGER NOT NULL DEFAULT 1,
  "prep_time" INTEGER,
  "cook_time" INTEGER
);

CREATE TABLE units(
  "name" TEXT PRIMARY KEY NOT NULL,
  "symbol" TEXT NOT NULL
);

CREATE TABLE ingredients(
  "ingredient_id" uuid primary key NOT NULL DEFAULT uuid_generate_v4 (),
  "name" TEXT NOT NULL,
  "unit" TEXT NOT NULL REFERENCES units(name),
  "quantity" TEXT NOT NULL,
  "recipe_id" uuid NOT NULL REFERENCES recipes(recipe_id) ON DELETE CASCADE
);

CREATE TABLE methods(
  "method_id" uuid primary key NOT NULL DEFAULT uuid_generate_v4 (),
  "content" TEXT NOT NULL,
  "recipe_id" uuid NOT NULL REFERENCES recipes(recipe_id) ON DELETE CASCADE
);

-- data

INSERT INTO units ("name", "symbol") VALUES
  ('grammes', 'g'),
  ('kilogrammes', 'kg'),
  ('millilitres', 'ml'),
  ('centilitres', 'cl'),
  ('litres', 'l'),
  ('cuillères à café', 'c-à-c'),
  ('cuillères à soupe', 'c-à-p'),
  ('pincée', 'pincée');
