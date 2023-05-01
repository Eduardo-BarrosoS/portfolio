const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const nodemailer = require("nodemailer");

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const {
      name,
      lastName,
      subject,
      message,
      senderNumber,
      email,
      whatsAppCheck,
      emailCheck,
    } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASS, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const {} = await transporter.sendMail({
      from: '" Ei vagabundo 👻" <autoshine103@gmail.com>', // sender address
      to: "barrosoeduardo64@gmail.com", // list of receivers
      subject:
        "Vai trabalhar, mas antes deixe de ser morto e olhe o email (eduar...)  ", // Subject line
      text: "Hello world?", // plain text body
      html: `
            <strong> Name: </strong> <span> ${name} ${lastName} </span><br/>
            <strong> Email: </strong> <span> ${email} </span><br/>
            <strong> Number: </strong> <span> ${senderNumber} </span><br/>
            <strong> Subject: </strong> <span> ${subject} </span><br/>
            <strong> Message: </strong> <span> ${message} </span><br/>
            <strong> Contate-me por Whatsapp: </strong> <span> ${whatsAppCheck} </span><br/>
            <strong> Contate-me por email: </strong> <span> ${emailCheck} </span><br/>
            `, // html body
    });

    res.status(200).send("message sended");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3333, () => console.log("listening on"));
