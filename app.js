const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const db = require('./db');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/sendMail', (req, res) => {
    const { name, email, subject, message } = req.body;

    // E-posta gönderme işlemini burada gerçekleştirin (örneğin, nodemailer kullanarak).
    // Detaylı bir şekilde e-posta gönderme işlemini ele almak bu örneğin kapsamı dışındadır.

    // Örnek nodemailer kullanımı:
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'secovvv@gmail.com',
            pass: 'Asgsv7808...',
        },
    });

    const mailOptions = {
        from: 'secovvv@gmail.com',
        to: 'asgezmek@gmail.com',
        subject: subject,
        text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('E-posta gönderildi: ' + info.response);
        res.send('E-posta başarıyla gönderildi!');
    });
});

app.listen(port, () => {
    console.log(`Sunucu http://secovvv1.infinityfreeapp.com:${port} üzerinde çalışıyor`);
});