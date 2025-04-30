# Deployment Guide for www.gabrielewessel.de

This guide provides step-by-step instructions for deploying the website to GitHub Pages with the custom domain www.gabrielewessel.de.

## Step 1: Push the Changes to GitHub

First, commit and push the changes to your GitHub repository:

```bash
git add .
git commit -m "Setup GitHub Pages with custom domain"
git push origin main
```

## Step 2: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: https://github.com/FriedrichWessel/gabrielewessel.de
2. Click on "Settings" (tab at the top of the repository)
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. Under "Custom domain":
   - Enter: `www.gabrielewessel.de`
   - Check the box for "Enforce HTTPS" (recommended for security)
6. Click "Save"

## Step 3: Configure DNS in DNSimple

Log in to your DNSimple account and configure the following DNS records:

### A Records for the Apex Domain (gabrielewessel.de)

Add four A records pointing to GitHub Pages' IP addresses:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A    | @    | 185.199.108.153 | 3600 |
| A    | @    | 185.199.109.153 | 3600 |
| A    | @    | 185.199.110.153 | 3600 |
| A    | @    | 185.199.111.153 | 3600 |

### CNAME Record for the WWW Subdomain

Add a CNAME record for the www subdomain:

| Type  | Name | Value                      | TTL  |
|-------|------|----------------------------|------|
| CNAME | www  | friedrichwessel.github.io. | 3600 |

**Important**: Make sure to include the trailing dot (.) in the CNAME value.

## Step 4: Wait for DNS Propagation

DNS changes can take up to 24-48 hours to propagate globally, although it's often much faster (minutes to a few hours).

## Step 5: Verify the Deployment

### Check GitHub Actions

1. Go to your GitHub repository
2. Click on the "Actions" tab
3. You should see a workflow run for the "Deploy static content to Pages" workflow
4. Make sure it completed successfully (green checkmark)

### Verify DNS Configuration

You can verify your DNS configuration using the `dig` command:

```bash
dig www.gabrielewessel.de +nostats +nocomments +nocmd
```

You should see a CNAME record pointing to `friedrichwessel.github.io`.

### Check the Website

Visit your website at https://www.gabrielewessel.de to verify it's working correctly.

## Troubleshooting

### If the Website Doesn't Load

1. **Check GitHub Pages Status**:
   - Go to your repository settings
   - Scroll down to the "Pages" section
   - Look for any error messages

2. **Verify DNS Configuration**:
   - Use a tool like [dnschecker.org](https://dnschecker.org) to verify your DNS records
   - Make sure the A records and CNAME record are correctly configured

3. **Check HTTPS**:
   - If you're using HTTPS (recommended), it may take some time for GitHub to provision the SSL certificate
   - Try accessing the site with HTTP first (http://www.gabrielewessel.de)

4. **Check GitHub Actions**:
   - Make sure the GitHub Actions workflow completed successfully
   - If there were errors, fix them and push the changes again

### If Assets Are Not Loading

If the website loads but images or other assets are not displaying:

1. Check the paths in your HTML files
2. Make sure the assets are being copied correctly in the GitHub Actions workflow
3. Check the browser console for any 404 errors

## Maintenance

Once the website is deployed, you can make changes by:

1. Editing the files in the `src` directory
2. Committing and pushing the changes to the main branch
3. The GitHub Actions workflow will automatically deploy the changes

For any questions or issues, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).
