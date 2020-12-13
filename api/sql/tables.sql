CREATE EXTENSION "pgcrypto";

-- tables

CREATE TABLE recipes (
  "recipe_id" uuid primary key NOT NULL DEFAULT gen_random_uuid(),
  "title" TEXT NOT NULL,
  "servings" INTEGER NOT NULL DEFAULT 1,
  "prep_time" INTEGER,
  "cook_time" INTEGER,
  "picture" TEXT
);

CREATE TABLE units(
  "symbol" TEXT PRIMARY KEY NOT NULL,
  "name" TEXT NOT NULL
);

CREATE TABLE ingredients(
  "ingredient_id" uuid primary key NOT NULL DEFAULT gen_random_uuid(),
  "name" TEXT NOT NULL,
  "unit" TEXT NOT NULL REFERENCES units(symbol),
  "quantity" TEXT NOT NULL,
  "recipe_id" uuid NOT NULL REFERENCES recipes(recipe_id) ON DELETE CASCADE
);

CREATE TABLE methods(
  "method_id" uuid primary key NOT NULL DEFAULT gen_random_uuid(),
  "content" TEXT NOT NULL,
  "position" INTEGER NOT NULL,
  "recipe_id" uuid NOT NULL REFERENCES recipes(recipe_id) ON DELETE CASCADE,
  UNIQUE("recipe_id", "position")
);
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
  ('pincée', 'pincée'),
  ('', ''); -- Some ingredients don't have any units (e.g. eggs)
