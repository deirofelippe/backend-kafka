const { expect, describe, test } = require("@jest/globals");
const { enviarEmail } = require("../../src/email.js");

describe("Envio de email", () => {
  test("Deve conseguir enviar email", async () => {
    const email = "felippe@gmail.com";
    const res = await enviarEmail(email);
    expect(res).toBeTruthy();
  });
});
