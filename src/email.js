const nodemailer = require("nodemailer");
const emailConfig = require("./emailConfig.js");

async function enviarEmail(data) {
  const transporter = nodemailer.createTransport(emailConfig);

  const message = gerarMessage(data);

  let res = {};

  try {
    res = await transporter.sendMail(message);
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
}

const gerarMessage = ({ email, nome }) => ({
  from: emailConfig.auth.user,
  to: `${nome} <${email}>`,
  subject: "Cadastrado!",
  text: `Obrigado ${nome}, por se cadastrar!`,
  html: "<p>Hello World!</p>",
});

module.exports = { enviarEmail };
