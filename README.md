# Next Rev Company Website

Official website for Next Rev - Business Solutions

## About

Next Rev creates software solutions for businesses. Our products include:
- **Member Link** - Membership management for Clover POS systems
- **Terminal Settlement Report** - Per-shift cash drawer reconciliation for bartenders

Both are private apps installed directly by Next Rev, not listed on a public app
marketplace.

## Website Structure

- `index.html` - Homepage
- `memberlink.html` - Member Link product page
- `tsr.html` - Terminal Settlement Report product page
- `team.html` - Our Team
- `contact.html` - Contact information
- `privacy.html` - Privacy Policy (live)
- `terms.html` - Terms of Service (live)
- `clover-training/` - Merchant training portal (build artifact, do not hand-edit)
- `css/style.css` - Styling
- `img/nextrev-logo.jpg` - Company logo

A `products.html` overview page existed until 2026-08-12. It was orphaned when the
Products dropdown and per-product pages were introduced, and has been removed.

## Deployment

This site is hosted on GitHub Pages and accessible at:
- **Custom Domain**: https://nxtrev.com
- **GitHub Pages**: https://reedscott1.github.io/nextrev-website

## Legal Documents

`terms.html` and `privacy.html` are live, published documents. Both the Member Link and
Terminal Settlement Report Clover App Market listings point at these URLs, so edits here
reach app reviewers directly.

⚠️ **Never write "Clover" into `terms.html`.** Clover's App Market review requires private
apps to use generic wording — "POS System" or "Platform". `privacy.html` follows the same
convention. Section numbering in `terms.html` is load-bearing: §5 Confidentiality, §7 Fees,
§9 Compliance with Privacy Laws, §10 Data Subject Rights are the sections Clover named by
number. See `CLAUDE.md` for the full rule.

## Local Development

To test locally:
1. Clone this repository
2. Open `index.html` in a web browser
3. Or use a simple HTTP server:
   ```bash
   python -m http.server 8000
   ```
4. Navigate to http://localhost:8000

## Updating Content

### To Update Pages:
1. Edit the HTML files directly
2. Commit and push changes to GitHub
3. GitHub Pages will automatically rebuild (takes 1-2 minutes)

### To Update Legal Documents:
1. Edit `privacy.html` and/or `terms.html`
2. Keep the wording generic — no "Clover" (see Legal Documents above)
3. Update the "Last Updated" date
4. Commit and push

## DNS Configuration

Custom domain `nxtrev.com` is configured via:
- GitHub Pages custom domain setting
- GoDaddy DNS records pointing to GitHub Pages

See deployment documentation for DNS setup details.

## Links

- Live Site: https://nxtrev.com
- GitHub Repo: https://github.com/reedscott1/nextrev-website
- Member Link Dashboard: https://qa.signthedailybook.com

## Support

For website issues, contact: reedscott1
For product support, see contact page
