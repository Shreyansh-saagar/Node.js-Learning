import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(body);

      // TODO: Store user query in "query.txt"
      fs.appendFileSync('query.txt',body)
      // TODO: Use Nodemailer to send confirmation email
      const mailOption = {
        from:'shreyanshsaagar@gmail.com',
        to: email,
        text:`Mail received with query: ${message}`
      }

      try {
        const result = transporter.sendMail(mailOption);
          // successNotifier.emit('mailSent')
        customEvent.emit('mailSent',email)
      } catch (error) {
          console.log(error);
      }
      // TODO: Emit "mailSent" event

      res.end("Query received");
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log(`custom event "mailSent" emitted`);
    console.log(
      `confirming that the email has been sent successfully to ${email}`
    );
  });
};

export default server;
export { server, CustomEvent, Solution };
