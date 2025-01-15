export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to BloodLine</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            line-height: 1.6;
            color: #666;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999;
            text-align: center;
        }
        .footer a {
            color: #007BFF;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to BloodLine, [User's Name]!</h1>
        <p>We're excited to have you join our community at <strong>BloodLine</strong>. BloodLine is a platform dedicated to saving lives by facilitating seamless connections between blood recipients and donors, especially during critical emergencies. It ensures timely access to lifesaving resources while promoting a collaborative and efficient blood donation system.</p>
        <p>We hope you have a great time with us. If you need any assistance, feel free to reach out to our support team. We're here to help you every step of the way!</p>
        <p>Happy to have U!</p>
        <p>Best Regards,<br>The BloodLine Team</p>
        <p class="footer">
            If you did not create this account, please ignore this email or <a href="[Support URL]">contact us</a> for assistance.
            <br><br>
            &copy; 2025 BloodLine. All rights reserved.
        </p>
    </div>
</body>
</html>

`;
// export const PASSWORD_RESET_REQUEST_TEMPLATE = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Reset Your Password</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
//     <h1 style="color: white; margin: 0;">Password Reset</h1>
//   </div>
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello,</p>
//     <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
//     <p>To reset your password, click the button below:</p>
//     <div style="text-align: center; margin: 30px 0;">
//       <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
//     </div>
//     <p>This link will expire in 1 hour for security reasons.</p>
//     <p>Best regards,<br>Your App Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;
export const Notification_Email_Template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blood Request Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #d32f2f;
            text-align: center;
        }
        p {
            line-height: 1.6;
            color: #555;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999;
            text-align: center;
        }
        .footer a {
            color: #007BFF;
            text-decoration: none;
        }
        .cta-button {
            display: inline-block;
            background-color: #d32f2f;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Notification: Save a Life!</h1>
        <p>Hi Mr./Mrs. <strong>[Donor Name]</strong>,</p>
        <p>This message is to notify you that one of your citymates, <strong>Mr./Mrs. [Requester Name]</strong>, has a blood request for <strong>[Blood Group]</strong> blood, which matches your eligibility as an active donor on the BloodLine platform.</p>
        <p>We kindly request you to check your notifications on the BloodLine website and get in touch with <strong>[accepter]</strong> using the contact number <strong>[Requester Number]</strong>. Your timely action could save a life.</p>
        <p><strong>Here is another opportunity to be a hero!</strong></p>
        <p>Thank you for being a part of this life-saving journey.</p>
        <p>Best Regards,<br>The BloodLine Team</p>
        <a href="[BloodLine Website URL]" class="cta-button">Visit BloodLine Now</a>
        <p class="footer">
            If you have received this email in error, please ignore it or <a href="[Support URL]">contact support</a> for assistance.
            <br><br>
            &copy; 2025 BloodLine. All rights reserved.
        </p>
    </div>
</body>
</html>
`;
export const Request_Submission_Email_Template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blood Request Submitted</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #d9534f;
            text-align: center;
        }
        p {
            line-height: 1.6;
            color: #555;
        }
        .donor-list {
            margin: 20px 0;
            padding: 0;
            list-style: none;
        }
        .donor-list li {
            background-color: #f9f9f9;
            margin: 10px 0;
            padding: 10px;
            border-left: 4px solid #d9534f;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999;
            text-align: center;
        }
        .footer a {
            color: #007BFF;
            text-decoration: none;
        }
        .cta-button {
            display: inline-block;
            background-color: #d32f2f;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Blood Request Submitted</h1>
        <p>Dear Mr./Mrs. [Requester Name],</p>
        <p>Thank you for submitting your blood request. We are committed to helping you during this critical time. Below are the details of the some donors who have been notified to help with your blood request:</p>
        <ul class="donor-list">
            <li><strong>Name:</strong> [Donor 1]<br><strong>Phone:</strong> [phone 1]</li>
        </ul>
        <p>These donors have been informed about your request and can contact you directly. Please feel free to reach out to them if necessary.</p>
        <p>We wish you all the best and hope this brings you closer to receiving the help you need.</p>
        <p>Best Regards,<br>The BloodLine Team</p>
        <a href="[BloodLine Website URL]" class="cta-button">Visit BloodLine Now</a>
        <p class="footer">
            If you did not submit this request, please <a href="[Support URL]">contact us</a> immediately.
            <br><br>
            &copy; 2025 BloodLine. All rights reserved.
        </p>
    </div>
</body>
</html>
`;