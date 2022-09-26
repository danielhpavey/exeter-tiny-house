import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  // NOTE: Uncomment the below lines to make the code work

  try {
    await sendgrid.send({
      to: process.env.NEXT_PUBLIC_SENDGRID_TO, // Your email where you'll receive emails
      from: process.env.NEXT_PUBLIC_SENDGRID_FROM, // your website email address here
      reply_to: `${req.body.email}`,
      subject: `ETHC Website Contact Form`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      <body style="font-size:18px">
          <div class="container" style="">
          <p>
          New contact from: ${req.body.fullname}
          </p>
          <p>
          Their email is: ${req.body.email} 
          </p>
          <p>Message:</p>
          <p>${req.body.message}</p>
          </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
