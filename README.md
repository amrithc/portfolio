# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio is designed to be hosted on GitHub Pages and can be shared as your resume.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading and optimized
- 🎯 Smooth scrolling navigation
- ✨ Animations and transitions
- 🔗 Easy to customize

## Setup Instructions for GitHub Pages

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - Make it public

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Site**
   - Your portfolio will be available at: `https://yourusername.github.io`
   - It may take a few minutes for the site to be live

## Customization

### Update Personal Information

1. **Name and Title** - Edit `index.html`:
   - Change "Amrith Coumaran" to your name
   - Update the subtitle and description in the hero section

2. **About Section** - Update the about text in `index.html`

3. **Skills** - Modify the skills in the skills section to match your expertise

4. **Projects** - Replace the placeholder projects with your actual projects:
   - Update project names
   - Add project descriptions
   - Add GitHub and live demo links
   - Update technology tags

5. **Contact Information** - Update contact links:
   - Replace email address
   - Add your GitHub username
   - Add your LinkedIn profile URL

### Styling

- Colors can be customized in `styles.css` using CSS variables in the `:root` selector
- Fonts can be changed by updating the Google Fonts link in `index.html`

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

