require("dotenv").config();

const prod = () => ({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const test = () => ({
  host: process.env.EMAIL_TEST_HOST,
  port: process.env.EMAIL_TEST_PORT,
  secure: process.env.EMAIL_TEST_SECURE === "true",
  auth: {
    user: process.env.EMAIL_TEST_USER,
    pass: process.env.EMAIL_TEST_PASSWORD,
  },
});

const emProducao = process.env.NODE_ENV === "production";

const config = emProducao ? prod() : test();

module.exports = config;
