const nodemailer = require("nodemailer");

async function sendEmail(name, email, subject, message) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "asgezmek@gmail.com",
      pass: "jmzt usvs orxj qdpx", // Use your Gmail app password here
    },
  });

  const mailOptions = {
    from: "asgezmek@gmail.com",
    to: "secovvv@gmail.com", // Change this to your desired recipient
    subject: subject,
    text: `Adı: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-posta gönderildi:", info.response);
    return true;
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);
    return false;
  }
}

module.exports = sendEmail;