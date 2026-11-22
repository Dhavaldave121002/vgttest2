# Vertex Global Tech — Web Design Services Ahmedabad

A responsive React service landing page and PHP enquiry endpoint starter.

## Included
- `src/WebDesignAhmedabad.jsx` — complete page component
- `src/web-design-ahmedabad.css` — responsive visual system and layouts
- `api/enquiry.php` — validated JSON endpoint that stores enquiries in `private/enquiries.jsonl`

## React integration
1. Copy the two files in `src/` into your React project.
2. Import and render `WebDesignAhmedabad` in the route for `/web-design-services-ahmedabad/`.
3. Ensure the app is served at the canonical route and that `/api/enquiry.php` resolves to the PHP endpoint.
4. For SEO, use your project's SSR/prerender solution (or equivalent) so the main page content is present in the initial HTML response. Add route-specific metadata using your existing SEO setup.

## PHP integration
1. Deploy `api/enquiry.php` at `/api/enquiry.php` on a PHP-enabled host.
2. Ensure the PHP process can write to the `private/` directory. Configure the web server to deny all direct HTTP access to `/private/`.
3. Configure a transactional email or CRM integration in the PHP endpoint. The current endpoint securely validates and logs submissions but does not send email notifications.
4. Add rate limiting and a server-side spam control (for example, a honeypot plus CAPTCHA/risk scoring) before public launch.
5. Use HTTPS and keep the enquiry log outside the public web root in production where possible.

## Before publishing
- Confirm the WhatsApp-enabled number before adding a WhatsApp CTA. This build intentionally does not assume either phone number is WhatsApp-enabled.
- Replace the portfolio placeholder with verified Vertex Global Tech projects only.
- Verify that Privacy Policy and Terms URLs exist, or update the links.
- Add/verify the exact Organization details and JSON-LD in the site's SEO layer. Avoid invented ratings, reviews, office address or claims.
- Add the page to the XML sitemap and submit it in Google Search Console after deployment.
- Validate metadata, structured data, accessibility and Core Web Vitals on the live site.

## SEO metadata suggestion
Title: Professional Web Design Services Ahmedabad | Vertex Global Tech
Description: Looking for professional web design services in Ahmedabad? Vertex Global Tech creates responsive, SEO-friendly business websites, ecommerce websites and custom web solutions.
Canonical: https://vertexglobaltech.in/web-design-services-ahmedabad/

## Important
This is a drop-in page package, not a direct deployment to `vertexglobaltech.in`. No existing website repository or hosting access was supplied in this chat, so integration into the live website still needs to be performed in the actual project.

## Run locally
Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```
Open the local URL printed by Vite (normally `http://localhost:5173`).

To create a production frontend build:

```bash
npm run build
```

Note: the React preview requires installing npm dependencies. The current execution environment could not reach the npm registry, so dependencies could not be installed and the preview could not be launched here.

# vgttest2
