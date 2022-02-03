const { run } = require("./kafka-connection.js");

(async () => {
  try {
    await run();
  } catch (error) {
    console.log(error);
  }
})();
