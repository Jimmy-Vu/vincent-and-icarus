CREATE TABLE "public.vincent" (
	"id" serial NOT NULL,
	"message" TEXT NOT NULL,
	CONSTRAINT "vincent_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.icarus" (
	"id" serial NOT NULL,
	"message" TEXT NOT NULL,
	CONSTRAINT "icarus_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
