CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(20) NOT NULL,
	"firstName" varchar(35) NOT NULL,
	"lastName" varchar(35) NOT NULL,
	"email" text NOT NULL,
	"password" varchar(25) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
