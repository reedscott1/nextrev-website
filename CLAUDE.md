# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

This is the official company website for Next Rev, hosted on GitHub Pages at https://nxtrev.com.

Next Rev is an IT contracting company with two primary business streams:
1. **Clover Reseller** - Payment processing and device provisioning for merchants
2. **Software Development** - Member Link and Terminal Settlement Report, private Clover App Market apps

Tip Out Calculator was removed from the site 2026-08-12 (card #159) — product discontinued.
The `clover-training/` portal still contains a `shifts/tip-out-calculator/` guide; removing it
requires editing the `nextrev-clovertraining` source repo and re-running its deploy script.

## Website Structure

```
nextrev-website/
├── index.html        # Homepage
├── memberlink.html   # Member Link product page
├── tsr.html          # Terminal Settlement Report product page
├── team.html         # Our Team
├── contact.html      # Contact information
├── privacy.html      # Privacy Policy (LIVE — see Legal Documents below)
├── terms.html        # Terms of Service (LIVE — see Legal Documents below)
├── clover-training/  # Merchant training portal (synced from nextrev-clovertraining)
├── css/
│   └── style.css     # Styling
├── img/
│   └── nextrev-logo.jpg
└── CNAME             # Custom domain configuration
```

### clover-training/ subdirectory

Do NOT hand-edit `clover-training/` — it's a build artifact synced from the `nextrev-clovertraining` repo. To update: run `.\scripts\deploy.ps1` in `C:\development\nextrev-clovertraining`, which rebuilds the MkDocs site + PDF and overwrites this directory. Then commit both repos and push.

## Deployment

- **Custom Domain**: https://nxtrev.com
- **GitHub Pages**: https://reedscott1.github.io/nextrev-website
- **DNS**: Configured via GoDaddy pointing to GitHub Pages

Changes pushed to GitHub automatically deploy within 1-2 minutes.

## Local Development

```bash
# Simple HTTP server
python -m http.server 8000
# Navigate to http://localhost:8000
```

## Legal Documents

`terms.html` and `privacy.html` are **live, published documents** submitted to the Clover App
Market as the EULA/Terms and Privacy Policy for both Member Link and Terminal Settlement
Report. Both listings point at these URLs, so edits here reach app reviewers directly.

**Rule: never write "Clover" into `terms.html`.** Clover's App Market review (card #159,
2026-08-12) requires private apps to use generic wording — "POS System" or "Platform" — with
no reference to Clover or the Clover App Market. `grep -i clover terms.html` should match
nothing outside the nav. `privacy.html` follows the same convention.

Section numbering in `terms.html` is load-bearing: §5 Confidentiality, Data, and Ideas;
§7 Fees; §9 Compliance with Privacy Laws; §10 Data Subject Rights are the sections Clover
named by number. Sections 5, 9, and 10 are copied from the Clover EULA Template with
"App Provider" replaced by "Next Rev Inc." — do not reword them. Do not renumber without
re-checking against that feedback.

Both documents describe the apps' actual permission sets. If an app's permissions change,
update these files in the same card.

## Related Repositories

- **Backend Services**: `C:\development\MemberLink` - Cloud Run microservices
- **Clover Android App**: `C:\development\memberLink-android` - POS membership app
- **Clover Training Portal**: `C:\development\nextrev-clovertraining` - source of the `clover-training/` subdirectory; rebuilt via `scripts\deploy.ps1` in that repo
