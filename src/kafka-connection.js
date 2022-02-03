require("dotenv").config();
const { Kafka } = require("kafkajs");
const email = require("./email.js");

const parsePraEnviarEmail = async (data) => {
  let message = data.message.value.toString("utf8");
  message = JSON.parse(message);
  await email.enviarEmail(message);
};

async function run() {
  const url = process.env.KAFKA_URL;

  const kafka = new Kafka({ brokers: [url] });

  const consumer = kafka.consumer({ groupId: "1" });

  await consumer.connect();

  await consumer.subscribe({ topic: "cadastros", fromBeginning: true });

  await consumer.run({ eachMessage: parsePraEnviarEmail });
}

module.exports = { run };
