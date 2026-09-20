# Insite Builders - Premium Digital Business Card

A production-ready, highly polished digital visiting card web application built with pure HTML, CSS, and Vanilla JavaScript.

## 🚀 How to Deploy to Your Web Hosting
1. Download all files (`index.html`, `card.html`, `style.css`, `script.js`, `card.js`, `contact.vcf`).
2. Upload them directly to the `public_html`, `www`, or root directory of your web hosting via cPanel File Manager or FTP.
3. Access your domain (e.g., `https://www.insitebuilders.com`). 
4. The system automatically detects your domain, so links will adapt automatically.

## 🛠 How to Customize

### Change Business Details
Open `card.html` and modify the text within the HTML tags.
- To change the phone number, update `<p class="phone-number">` and the `href="tel:+91..."` link in the Call button.
- Modify `script.js` line 16 to change the WhatsApp greeting message.
- Modify `card.js` line 38 to change the data saved inside the `.vcf` contact file.

### Replace the Logo
Currently, the logo uses a styled CSS placeholder `div.logo-placeholder`. 
To use an image:
1. Upload your logo (e.g., `logo.png`) to the same folder.
2. Replace `<div class="logo-placeholder">IB</div>` with `<img src="logo.png" alt="Insite Builders Logo" style="width: 60px; margin: 0 auto 15px; display: block;">` in both `index.html` and `card.html`.

### Change Colors
Open `style.css` and look at the `:root` variables at the top of the file:
```css
:root {
    --bg-dark: #0f0f11;     /* Main background color */
    --gold: #C5A059;        /* Primary accent color */
    /* ... change hex codes here ... */
}
```

## 🌐 Deploying to GitHub Pages Later
Because the app uses `window.location.origin`, it is perfectly safe to deploy to GitHub Pages without code changes!
1. Create a new GitHub repository.
2. Upload all files.
3. Go to Repository Settings -> Pages -> Deploy from branch (`main`).
4. Your card will work instantly on `https://yourusername.github.io/repo-name/`.

## 📦 Features Included
- ✅ Dynamic WhatsApp wa.me link generation
- ✅ 100% Mobile Responsive design
- ✅ Dynamic QR Code generation mapping to current URL
- ✅ Native Web Share API integration
- ✅ Dynamic `.vcf` contact file generation 
- ✅ No backend required (Static site generation ready)"# insitebuilders" 
