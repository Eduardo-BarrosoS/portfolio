const express = require('express');
const { Client } = require('whatsapp-web.js');
const cors = require('cors');
const qrcode = require('qrcode-terminal');

const client = new Client();

const app = express();

app.use(cors({
    origin: "*",
}))

app.use(express.json())

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');    
    console.log('Client send');
});

app.post("/", async (req, res) => {
    const myNumber = "+558798199329"
    
    try {
        const { name, lastName, subject, message, senderNumber, email} = req.body
        const sendMessage = `
        *${name} ${lastName}* 
        ------ ${subject} ------ 
        ${message} 
        *[ ${senderNumber} ]* / *[ ${email} ]*
        ` 
        console.log(req.body)
        const chatId = myNumber.substring(1) + "@c.us";
        client.sendMessage(chatId, sendMessage);
        console.log("foi")
        
        res.status(200).send("message sended")
    } catch (err) {
        console.log(err)
    }
    
})

client.initialize();

app.listen(3333, () => console.log('listening on'));
