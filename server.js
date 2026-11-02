const express = require("express");
const sendEmail = require("./sendEmail");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const result = await sendEmail(name, email, subject, message);

  if (result) {
    res.status(200).json({ success: true, message: "E-posta gönderildi." });
  } else {
    res.status(500).json({ success: false, message: "E-posta gönderme hatası." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});