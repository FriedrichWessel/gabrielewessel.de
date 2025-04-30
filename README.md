# Gabriele Wessel - Website

This repository contains the website for Gabriele Wessel, a certified baby carrier consultant. The website is deployed using GitHub Pages with a custom domain (www.gabrielewessel.de).

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment is handled by a GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

### How it works

1. When changes are pushed to the main branch, the GitHub Actions workflow is triggered.
2. The workflow copies the content from the `src` directory and the `assets` directory to a build directory.
3. It fixes the asset paths in HTML files to ensure they work correctly on GitHub Pages.
4. The content is then deployed to GitHub Pages.

## Custom Domain Setup

The website is configured to use the custom domain `www.gabrielewessel.de`. This is managed through:

1. A `CNAME` file in the repository root that contains the domain name.
2. DNS configuration in DNSimple.

### DNS Configuration in DNSimple

To ensure the custom domain works correctly, the following DNS records should be configured in DNSimple:

1. **A Records** for the apex domain (gabrielewessel.de) pointing to GitHub Pages IP addresses:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

2. **CNAME Record** for the www subdomain:
   - Name: www
   - Value: friedrichwessel.github.io.

### Verifying DNS Configuration

You can verify the DNS configuration using:

```bash
dig www.gabrielewessel.de +nostats +nocomments +nocmd
```

## Making Changes to the Website

1. Edit the files in the `src` directory.
2. Commit and push your changes to the main branch.
3. The GitHub Actions workflow will automatically deploy the changes to GitHub Pages.
4. Wait a few minutes for the deployment to complete.
5. Visit www.gabrielewessel.de to see the changes.

## Troubleshooting

If the website is not working correctly:

1. Check the GitHub Actions workflow to see if there were any errors during deployment.
2. Verify the DNS configuration in DNSimple.
3. Check the GitHub Pages settings in the repository settings to ensure the custom domain is configured correctly.
4. If the custom domain is not working, try accessing the site via the GitHub Pages URL (friedrichwessel.github.io/gabrielewessel.de) to see if the site itself is working.
