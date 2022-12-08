const express = require('express');
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

const app = express();

app.use(express.json())

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});

app.post('/send', (req, res) => {
    
    
    try {
        const { text, number} = req.body
        console.log(text, number)
        
        client.on('ready', () => {
            console.log('Client is ready!');

            const chatId = number.substring(1) + "@c.us";
            client.sendMessage(chatId, text);

            console.log('Client send');
        });
        res.status(200).send("message sended")
    } catch (err) {
        console.log(err)
    }

})



client.initialize();


app.listen(3333, () => console.log('listening on'));