# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

This is the official company website for Next Rev, hosted on GitHub Pages at https://nxtrev.com.

Next Rev is an IT contracting company with two primary business streams:
1. **Clover Reseller** - Payment processing and device provisioning for merchants
2. **Software Development** - MemberLink membership management application for Clover App Market

## Website Structure

```
nextrev-website/
├── index.html        # Homepage
├── products.html     # Products overview (Member Link)
├── contact.html      # Contact information
├── privacy.html      # Privacy Policy (DRAFT)
├── terms.html        # Terms of Service (DRAFT)
├── css/
│   └── style.css     # Styling
├── img/
│   └── nextrev-logo.jpg
└── CNAME             # Custom domain configuration
```

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

## Legal Documents Status

The Privacy Policy and Terms of Service are **PLACEHOLDER documents** based on Clover templates.

**Action Required Before Publication**:
1. Customize all [BRACKETED] sections
2. Legal counsel review
3. Remove draft notices
4. Update "Last Updated" dates

## Related Repositories

- **Backend Services**: `C:\development\MemberLink` - Cloud Run microservices
- **Clover Android App**: `C:\development\memberLink-android` - POS membership app
