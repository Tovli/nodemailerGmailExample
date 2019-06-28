var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'noreply@shoutoutlabs.com',
           pass: '*******'
       }
   });

   const mailOptions = {
    from: 'noreply@wowinfluence.com', // sender address
    to: 'dekel@shoutoutlabs.com', // list of receivers
    subject: 'Test mail', // Subject line
    html: '<p>This is my mail content</p>'// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });