import * as http from 'http';
import * as fs from 'fs';
import * as mail from 'nodemailer'
import * as Events from 'events';

const successNotifier  = new Events.EventEmitter();
successNotifier.on('mailSent',()=>{
    console.log('Notification: Email successfully sent!');
})

const server = http.createServer((req,res)=>{
    // console.log('welcome to server');

    if(req.method == 'POST'){
        let body = ''
        req.on('data',(chunk)=>{
            body += chunk.toString();
        })

        req.on('end',()=>{
            fs.appendFileSync('queries.txt',body)
            async function sendMail(){
                const transporter = mail.createTransport({
                    service:'gmail',
                    auth:{
                        user:'shreyanshsaagar@gmail.com',
                        pass:"xodnmhvmjiuifozw"
                    }
                })

                const fileData = fs.readFileSync('queries.txt',"utf8")
                const jsonData = JSON.parse(fileData)

                // console.log(jsonData.email);
                const mailOption = {
                    from:'shreyanshsaagar@gmail.com',
                    to: jsonData.email,
                    text:`Mail received with query: ${jsonData.query}`
                }

                try {
                    const result = await transporter.sendMail(mailOption);
                    successNotifier.emit('mailSent')
                } catch (error) {
                    console.log(error);
                }
            }

            sendMail()
        })
    }
})

server.listen(5500,()=>{
    console.log('listening on port 5500');
})