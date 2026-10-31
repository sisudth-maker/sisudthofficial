# Sisu DTH website

Static, responsive website for Sisu DTH. Includes HTML, CSS, JavaScript and assets.

## Code structure and maintenance guide

The website is a static site. The main pages and shared assets are:

```text
index.html           Main website
  header             Brand > navigation > mobile toggle
  main
    #home             Hero and calls to action
    #about            Studio introduction
    #services         Service cards
    #portfolio        Project cards
    #pricing          Package cards and enquiry links
    #care             Maintenance and support
    #process          Delivery steps
    .faq              Frequently asked questions
    #contact          Project enquiry form
  footer             Copyright and policy links

privacy.html         Privacy notice
styles.css           Shared styles and responsive overrides
script.js            Mobile navigation, pricing prefills, enquiry submission
```

**Editing guidelines**

- Keep related content inside its parent section, and use consistent child classes for cards, buttons and form controls.
- Search the entire `styles.css` file for a selector before editing it: later rules may override earlier declarations. CSS order was intentionally left unchanged during documentation.
- Keep business contact information, form field names, FormSubmit integration, privacy notice and external links intact unless a change is explicitly required.
- Test desktop and mobile navigation, all section links, pricing-to-contact prefilling and enquiry-form feedback after changes.
- Comments and section labels are for maintainability; this pass did not attempt a full CSS rewrite or a new folder architecture.

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
- Portfolio features D&B Poutine (live website), SISU DTH Market Monitor (Python prototype), and SAT Thermostat (Canva UI/UX concept). The portfolio previews must not be presented as real screenshots unless sourced from the projects.
- Three project packages include 12 months of limited technical maintenance, with optional paid care after the included period and no automatic renewal. Confirm precise service levels in each written agreement.
- Form uses the AJAX endpoint for sisudth@gmail.com. Verify FormSubmit activation and successful live submission before launch.
