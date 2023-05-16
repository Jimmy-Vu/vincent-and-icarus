SET client_min_messages TO warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
DROP SCHEMA "public" CASCADE;

CREATE SCHEMA "public";

CREATE TABLE "public"."vincent" (
	"id" serial NOT NULL,
	"message" TEXT NOT NULL,
	CONSTRAINT "vincent_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."icarus" (
	"id" serial NOT NULL,
	"message" TEXT NOT NULL,
	CONSTRAINT "icarus_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."neutral" (
	"id" serial NOT NULL,
	"message" TEXT NOT NULL,
	CONSTRAINT "neutral_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
