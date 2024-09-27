const nodemailer = require('nodemailer');

const handler = async (event) => {
  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required.' }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.JESSE_EMAIL,
        pass: process.env.JESSE_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'jessechong@pursuit.org',
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: 'Message sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send the message.' }),
    };
  }
};

module.exports = { handler };