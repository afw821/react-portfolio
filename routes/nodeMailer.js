const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// function sendEmail(email, name) {
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'afw821@gmail.com',
//     pass: 'txkfnyxernzksbhq'
//   }
// });

// const mailOptions = {
//   from: 'afw821@gmail.com',
//   to: 'afw821@gmail.com',
//   subject: 'Thanks',
//   html: '<h1>react-portfolio test email</h1>'
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//     res.send({ status: true, data: info.response })
//   }
// });
// }

// module.exports = sendEmail;
