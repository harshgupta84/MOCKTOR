/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://mocktor_owner:fJLsR7up2CDo@ep-damp-glade-a5oq65sp.us-east-2.aws.neon.tech/mocktor?sslmode=require",
  },
};
