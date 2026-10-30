# Sisu DTH website

Static, responsive website for Sisu DTH. Includes HTML, CSS, JavaScript and assets.

## Enquiry form email delivery

The project enquiry form is configured to send submissions to **sisudth@gmail.com** through FormSubmit's AJAX endpoint (`https://formsubmit.co/ajax/sisudth@gmail.com`). This avoids putting email account credentials in the website code.

**First-time activation is required:**
1. Deploy the site to a public HTTPS hosting URL.
2. Submit a test enquiry using the live website.
3. Check `sisudth@gmail.com` for FormSubmit's activation/confirmation email and approve it. Check spam/junk if it is not in the inbox.
4. Submit another test enquiry and confirm it arrives with the expected fields.

Until the recipient is activated with FormSubmit, delivery may fail. The form displays a message if it cannot confirm submission and provides the email address as a fallback. Form delivery depends on FormSubmit's service and availability; test it before promoting the site.

## Privacy notice and important launch checks
- A draft privacy notice is included at `privacy.html` and linked from the homepage footer and enquiry form. It explains the enquiry form, FormSubmit, purposes, possible lawful bases, retention, rights and cookies.
- **Review and personalise the notice before launch.** Add your full legal business/controller name and business postal address; verify provider terms, international transfers, active cookies/analytics and actual retention practices. The notice is a starting template, not legal advice.
- The form sends enquiry details to a third-party form delivery provider. Make sure your actual practices match the notice and comply with UK data protection requirements.
- Do not collect passwords, payment-card details or sensitive personal data in this form.
- Check every link, contact detail, service description and price before publishing.
- This is a static site; it does not include a private server or database for enquiries.

## Deploy
Upload the complete `sisu-dth-website` folder to a static hosting provider (for example, Netlify, Cloudflare Pages or your web host). Keep the `assets` folder alongside `index.html`, `styles.css` and `script.js`.

## Phase 1 updates
- Portfolio lists verified project descriptions; Virtual Boy is credited as independent work, and Market Monitor is identified as a prototype. Unreviewed projects are not represented as completed case studies.
- Three project packages include 12 months of limited technical maintenance, with optional paid care after the included period and no automatic renewal. Confirm precise service levels in each written agreement.
- Form uses the AJAX endpoint for sisudth@gmail.com. Verify FormSubmit activation and successful live submission before launch.
