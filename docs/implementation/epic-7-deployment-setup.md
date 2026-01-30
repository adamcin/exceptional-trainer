# GitHub Pages Deployment Setup - Action Required

## CRITICAL: One-Time Configuration Steps

Before your application can be deployed to GitHub Pages, you must complete these one-time setup steps:

### Step 1: Push Code to GitHub

If you haven't already, push this repository to GitHub:

```bash
# Add remote repository (replace with your GitHub username)
git remote add origin https://github.com/<your-username>/exceptional-trainer.git

# Push to main branch
git push -u origin main
```

### Step 2: Enable GitHub Pages with GitHub Actions

1. Navigate to your repository on GitHub: `https://github.com/<your-username>/exceptional-trainer`
2. Click **Settings** (tab at the top)
3. In the left sidebar, scroll down and click **Pages**
4. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"** from the dropdown
   - Do NOT select "Deploy from a branch"
5. Click **Save** (if required)

**Important**: The source MUST be set to "GitHub Actions" for the automated workflow to work.

### Step 3: Verify Workflow Permissions

Ensure GitHub Actions has the necessary permissions:

1. In repository Settings, go to **Actions** → **General**
2. Scroll to "Workflow permissions"
3. Ensure **"Read and write permissions"** is selected
4. Check **"Allow GitHub Actions to create and approve pull requests"** (optional, but recommended)
5. Click **Save**

### Step 4: Trigger First Deployment

You have two options to trigger the first deployment:

**Option A: Push a commit**
```bash
# Make any small change (or create an empty commit)
git commit --allow-empty -m "chore: Trigger initial deployment"
git push
```

**Option B: Manual trigger via GitHub UI**
1. Go to the **Actions** tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click **"Run workflow"** button
4. Select `main` branch
5. Click **"Run workflow"**

### Step 5: Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run in progress
3. Click on the workflow run to see detailed logs
4. Wait for both jobs (build and deploy) to complete (green checkmark)

**Expected timeline**: 2-5 minutes for first deployment

### Step 6: Access Your Deployed Application

Once deployment succeeds:

1. Your app will be available at: `https://<your-username>.github.io/exceptional-trainer/`
2. Update the README.md badge URL with your actual username:
   ```markdown
   ![GitHub Pages](https://github.com/<your-username>/exceptional-trainer/actions/workflows/deploy.yml/badge.svg)
   ```

## Post-Deployment Configuration

### Custom Domain (Optional)

If you want to use a custom domain instead of the GitHub Pages subdomain:

1. Create a file `public/CNAME` in your repository:
   ```
   your-domain.com
   ```

2. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/',  // Change from '/exceptional-trainer/' to '/'
     // ... rest of config
   });
   ```

3. Configure DNS with your domain registrar:
   - Add a CNAME record pointing to `<your-username>.github.io`
   - Or add A records pointing to GitHub Pages IPs

4. In GitHub repository Settings → Pages:
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## Troubleshooting

### Issue: "Pages build and deployment" workflow not found

**Solution**: Ensure you selected "GitHub Actions" as the source in Settings → Pages (not "Deploy from a branch")

### Issue: Workflow fails with "Error: No uploaded artifact was found"

**Solution**: This usually means the build failed. Check the "Build" job logs for errors.

### Issue: Workflow fails with "permissions" error

**Solution**:
1. Go to Settings → Actions → General
2. Under "Workflow permissions", select "Read and write permissions"
3. Re-run the workflow

### Issue: Page loads but shows 404 for assets

**Solution**:
1. Verify `base: '/exceptional-trainer/'` is set in `vite.config.ts`
2. Verify repository name matches the base path
3. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)

### Issue: Deployment succeeds but page shows old version

**Solution**:
1. Clear browser cache and hard refresh
2. Check Actions tab - ensure the latest workflow run completed successfully
3. Wait 1-2 minutes for CDN propagation

## Automated Deployment Behavior

After initial setup, deployment is fully automated:

- **Trigger**: Every push to `main` branch
- **Build time**: 2-5 minutes
- **Deployment**: Automatic to GitHub Pages
- **URL**: Always available at `https://<your-username>.github.io/exceptional-trainer/`

No manual intervention required for future deployments!

## Verification Checklist

After completing setup, verify:

- [ ] GitHub Pages source is set to "GitHub Actions"
- [ ] Workflow permissions are configured (read/write)
- [ ] At least one workflow run has completed successfully
- [ ] Application loads at `https://<your-username>.github.io/exceptional-trainer/`
- [ ] All navigation links work (hash routing)
- [ ] Assets (styles, fonts, images) load correctly
- [ ] localStorage persists progress across page reloads
- [ ] Application is responsive on mobile devices
- [ ] No errors in browser console

## Next Steps

Once deployment is working:

1. Update README.md with your actual GitHub username in badge URL
2. Share the live application URL with others
3. Continue development - changes pushed to `main` deploy automatically
4. Monitor Actions tab for deployment status after each push

## Support

If you encounter issues not covered here:

1. Check GitHub Actions logs in the Actions tab
2. Review the GitHub Pages documentation: https://docs.github.com/en/pages
3. Verify the workflow file matches the template in `.github/workflows/deploy.yml`
4. Ensure Node.js version in workflow (20) matches your local development version
