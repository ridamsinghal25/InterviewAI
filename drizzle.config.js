import * as dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

if (!process.env.NEXT_PUBLIC_DRIZZLE_DB_URL) {
  throw new Error("Database url is not set in .env");
}

export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
  },
};
