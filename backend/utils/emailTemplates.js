export const welcomeEmail = (username) => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Authenticate</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f2f4f7;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="margin:24px 0;background:#ffffff;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px;background:linear-gradient(90deg,#556ee6,#6f42c1);color:#fff;text-align:left;">
                <h1 style="margin:0;font-size:22px;line-height:26px;font-weight:700;">Welcome to Authenticate, ${username} 👋</h1>
                <p style="margin:6px 0 0;font-size:14px;opacity:0.95;">We're thrilled to have you onboard. Here's a quick guide to get started.</p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 32px;color:#333333;font-size:15px;line-height:22px;">
                <p style="margin:0 0 12px;">Hi ${username},</p>
                <p style="margin:0 0 12px;">Thanks for joining <strong>Authenticate</strong> — we're excited to help you get going. Here are a few resources to help you make the most out of your account:</p>
                <ul style="margin:0 0 12px;padding-left:18px;">
                  <li style="margin-bottom:6px;">Complete your profile to personalize your experience</li>
                  <li style="margin-bottom:6px;">Visit the dashboard to explore features</li>
                  <li style="margin-bottom:6px;">Contact support anytime at <a href="mailto:{{support_email}}">Support</a></li>
                </ul>

                <p style="margin:0;color:#666;font-size:13px;">If you didn't sign up for Authenticate, please ignore this email or contact us.</p>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 32px;background:#fafafa;color:#888;font-size:13px;text-align:center;">
                <p style="margin:0;">© 2025 Authenticate — <a href="mailto:{{support_email}}" style="color:#888;text-decoration:underline;">Support</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}


export const loginOTP = (username, otp) => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your login OTP</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f2f4f7;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="margin:24px 0;background:#ffffff;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:22px 28px;background:#111827;color:#fff;text-align:left;">
                <h2 style="margin:0;font-size:18px;">Login to Authenticate</h2>
              </td>
            </tr>

            <tr>
              <td style="padding:28px;color:#111827;font-size:15px;line-height:22px;">
                <p style="margin:0 0 12px;">Hello ${username},</p>
                <p style="margin:0 0 18px;">Use the One-Time Password (OTP) below to complete your login. This OTP is valid for <strong>10 minutes</strong>.</p>

                <div style="text-align:center;margin:10px 0 18px;">
                  <table cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;background:#f6f8fb;border-radius:8px;padding:18px 24px;">
                    <tr>
                      <td style="font-size:28px;letter-spacing:6px;font-weight:700;color:#111827;text-align:center;">${otp}</td>
                    </tr>
                  </table>
                </div>

                <p style="margin:0 0 12px;color:#6b7280;font-size:13px;">If you didn't request this, you can safely ignore this email. For help, contact <a href="mailto:{{support_email}}">Support</a>.</p>
              </td>
            </tr>

            <tr>
              <td style="padding:14px 28px;background:#fafafa;color:#888;font-size:13px;text-align:center;">
                <p style="margin:0;">Need more help? Reply to <a href="mailto:{{support_email}}">Support</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}


export const verifyEmailOTP = (username, otp) => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify your email</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f2f4f7;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="margin:24px 0;background:#ffffff;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:20px 26px;background:#0f766e;color:#fff;text-align:left;">
                <h2 style="margin:0;font-size:18px;">Verify your email address</h2>
              </td>
            </tr>

            <tr>
              <td style="padding:26px;color:#111827;font-size:15px;line-height:22px;">
                <p style="margin:0 0 12px;">Hi ${username},</p>
                <p style="margin:0 0 12px;">Please use the verification code below to confirm your email address.</p>

                <div style="text-align:center;margin:12px 0 18px;">
                  <table cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;background:#f9fafb;border-radius:8px;padding:16px 22px;">
                    <tr>
                      <td style="font-size:26px;letter-spacing:5px;font-weight:700;color:#0f766e;text-align:center;">${otp}</td>
                    </tr>
                  </table>
                </div>

                <p style="margin:0;color:#6b7280;font-size:13px;">If you did not create an account or didn't request verification, ignore this message or contact support at <a href="mailto:{{support_email}}">Support</a>.</p>
              </td>
            </tr>

            <tr>
              <td style="padding:14px 26px;background:#fafafa;color:#888;font-size:13px;text-align:center;">© 2025 Authenticate</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}



export const resetPasswordLink = () => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset your password</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f2f4f7;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="margin:24px 0;background:#ffffff;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:22px 28px;background:#b91c1c;color:#fff;text-align:left;">
                <h2 style="margin:0;font-size:18px;">Password reset request</h2>
              </td>
            </tr>

            <tr>
              <td style="padding:26px;color:#111827;font-size:15px;line-height:22px;">
                <p style="margin:0 0 12px;">Hello {{user_name}},</p>
                <p style="margin:0 0 16px;">We received a request to reset your password. Click the button below to set a new password. This link will expire in <strong>60 minutes</strong>.</p>

                <p style="text-align:center;margin:18px 0;">
                  <a href="{{reset_link}}" target="_blank" style="display:inline-block;padding:12px 20px;border-radius:6px;background:#b91c1c;color:#fff;text-decoration:none;font-weight:600;">Reset my password</a>
                </p>

                <p style="margin:0 0 12px;color:#6b7280;font-size:13px;">If you didn't request a password reset, please ignore this email or secure your account by contacting support.</p>
              </td>
            </tr>

            <tr>
              <td style="padding:14px 28px;background:#fafafa;color:#888;font-size:13px;text-align:center;">If the button doesn't work, copy and paste this link into your browser:<br><a href="{{reset_link}}" style="word-break:break-all;color:#1d4ed8;">{{reset_link}}</a></td>
            </tr>

            <tr>
              <td style="padding:12px 28px;background:#fff;color:#888;font-size:12px;text-align:center;">© {{year}} {{app_name}} • <a href="mailto:{{support_email}}">Support</a></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
