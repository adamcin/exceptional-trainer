# Exceptional Trainer

A web application designed to help learn Adobe Photoshop through a structured skills-based curriculum with exercises, challenges, and assessments.

## Goal

Master Adobe Photoshop techniques required to create complex image manipulations, such as seamlessly replacing heads in historical paintings while maintaining artistic style and consistency.

## Technology Stack

- **Build Tool**: Vite 6.x
- **Framework**: React 18.x with TypeScript
- **UI Components**: Adobe React Spectrum
- **Routing**: React Router v6 (Hash routing for GitHub Pages)
- **State Management**: React Context API
- **Storage**: Browser localStorage

## Project Structure

```
exceptional-trainer/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route page components
│   ├── contexts/       # React context providers
│   ├── lib/            # Utility functions and helpers
│   ├── content/        # Curriculum content (JSON + Markdown)
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Root application component
│   ├── main.tsx        # Application entry point
│   └── router.tsx      # Route configuration
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd exceptional-trainer
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at: http://localhost:5173/exceptional-trainer/

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

### Type Checking

Run TypeScript type checking:
```bash
npm run lint
```

## Deployment

![GitHub Pages](https://github.com/adamcin/exceptional-trainer/actions/workflows/deploy.yml/badge.svg)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automated Deployment

Every push to the `main` branch triggers an automatic deployment:

1. GitHub Actions runs the workflow defined in `.github/workflows/deploy.yml`
2. The workflow installs dependencies, builds the production bundle, and deploys to GitHub Pages
3. The site becomes available at: `https://<username>.github.io/exceptional-trainer/`

### Initial Setup (One-Time Configuration)

Before the first deployment, configure GitHub Pages in your repository:

1. Push this code to your GitHub repository
2. Go to repository Settings → Pages
3. Under "Source", select **GitHub Actions** (not "Deploy from a branch")
4. Save the configuration

Once configured, all future deployments happen automatically on push to `main`.

### Manual Deployment Trigger

You can also manually trigger a deployment:

1. Go to the Actions tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow" and select the `main` branch
4. Click "Run workflow" to start the deployment

### Local Testing

Before pushing changes, test the production build locally:

```bash
# Build the production bundle
npm run build

# Preview the production build locally
npm run preview
```

The preview server will start at http://localhost:4173/exceptional-trainer/ (or similar port). Verify that:
- All pages load correctly
- Navigation works with hash routing
- Assets (styles, images) load properly
- The base path `/exceptional-trainer/` is correctly applied

### Deployment Verification

After deployment completes:

1. Check the Actions tab for workflow status (green checkmark = success)
2. Visit your GitHub Pages URL: `https://<username>.github.io/exceptional-trainer/`
3. Test the application in your browser:
   - Navigate through different modules
   - Verify localStorage saves progress
   - Test on mobile devices (responsive design)
   - Check browser console for errors

### Troubleshooting

**Workflow fails with "ENOENT: no such file or directory"**
- Ensure `npm ci` can install dependencies (check package.json and package-lock.json)
- Verify Node.js version in workflow matches local development

**Pages not updating after deployment**
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check that the workflow completed successfully in Actions tab
- Verify GitHub Pages is enabled and set to "GitHub Actions" source

**Assets fail to load (404 errors)**
- Verify `base: '/exceptional-trainer/'` is set in `vite.config.ts`
- Check that the repository name matches the base path
- Ensure hash routing is used (not browser history routing)

**localStorage doesn't work**
- GitHub Pages serves over HTTPS, which enables localStorage
- Check browser privacy settings (private browsing may block storage)

## Development Workflow

### Epic 1: Project Foundation (Current)

- ✅ Initialize Vite + TypeScript + React project
- ✅ Configure React Spectrum integration
- ✅ Setup React Router with hash routing
- ✅ Create basic project structure
- ✅ Create placeholder pages (HomePage, ModulePage)

### Upcoming Epics

- **Epic 2**: Progress State Management (localStorage + Context API)
- **Epic 3**: Content Management System (JSON + Markdown)
- **Epic 4**: Navigation & Routing (Module hierarchy, guards)
- **Epic 5**: Assessment System (Self-assessment with scoring)
- **Epic 6**: UI Components (Module cards, progress bars, etc.)
- **Epic 7**: Module Content (Curriculum design and writing)

## License

Private project for personal use.
