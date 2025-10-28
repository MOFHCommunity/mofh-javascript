
# 🧩 mofh-javascript

**mofh-javascript** is a lightweight, modern JavaScript library that allows MyOwnFreeHost (MOFH) resellers to easily **customize and enhance their VistaPanel** control panels.

It provides a simple API to manipulate the VistaPanel DOM, adjust interface elements, dynamically load assets, and integrate custom branding — all without modifying VistaPanel’s backend.

---

## 🚀 Features

✅ Customize titles, favicons, and logos
✅ Modify or hide elements dynamically
✅ Inject styles and scripts
✅ Fetch VistaPanel version & user data
✅ Improve user interface and branding
✅ 100% client-side, zero backend access required

---

## 🧠 Quick Start

### 1. Enable Custom JS on Your Reseller Panel

1. Sign in to your **MyOwnFreeHost reseller account**.
2. Navigate to **“Your Adverts” → “Control Panel Advert Control”**.
3. Select your domain.
4. Paste the usage snippet below in the **advert script box**.

---

### 2. Include mofh-javascript

Add this snippet to load the library from CDN (recommended):

```html
<script src="https://cdn.jsdelivr.net/gh/MOFHCommunity/mofh-javascript/mofh-javascript.js"></script>
```

Once loaded, you can immediately call any mofh-javascript function inside a `<script>` tag or your own JS file.

---

## 💡 Usage Examples

Below are common examples of what you can do using `mofh-javascript`.

---

### 🏷️ Getting the Current Page Info

Determine which VistaPanel page the client is currently viewing (useful for conditional customization):

```javascript
const pageInfo = get_page_info();
console.log("Current Page:", pageInfo);
```

---

### 🌐 Set a Custom Favicon

Update the browser tab icon dynamically:

```javascript
set_custom_favicon('https://example.com/favicon.ico');
```

---

### 📄 Change the Page Title

Set a custom title for better branding or personalization:

```javascript
set_page_title('Welcome to My Custom VistaPanel');
```

---

### ⚙️ Change Displayed PHP Version

Update the displayed PHP version text in the “Account Settings” page:

```javascript
set_php_version('PHP 8.2');
```

> 💡 Only works on the “Account Settings” page (`option=accountsettings`).

---

### 🔐 Customize SSL Configuration Text

Display custom informational text on the SSL configuration page:

```javascript
set_ssl_page_text('Your SSL certificate is active and configured correctly.');
```

> 💡 Automatically changes the alert style from “warning” to “info”.

---

### 🖼️ Manage VistaPanel Logo

Retrieve the current logo:

```javascript
const currentLogo = get_vp_logo_image();
console.log(currentLogo);
```

Replace it with your own branding:

```javascript
set_vp_logo_image('https://example.com/branding/logo.png');
```

---

### 🧩 Modify Element Details

Change a specific feature’s URL, description, or search text in VistaPanel menus:

```javascript
set_element_details('ftp_accounts', 'https://docs.example.com/ftp', 'url', sectionsArray);
```

---

### 👻 Hide Specific Elements

Hide individual elements or entire sections:

```javascript
hide_element_details('file_manager', sectionsArray);
```

Hide the sidebar completely:

```javascript
hide_sidebar();
```

---

### 👤 Retrieve Logged-In Username

Access the username displayed on the VistaPanel interface:

```javascript
const username = get_vp_username();
console.log('Logged in as:', username);
```

---

### 🧩 Fetch VistaPanel Version

Programmatically check which VistaPanel version your reseller panel is running:

```javascript
get_vp_version()
  .then(version => console.log('VistaPanel Version:', version))
  .catch(err => console.error('Error fetching version:', err));
```

---

### 🎨 Load External Stylesheets

Inject external CSS for custom themes or branding:

```javascript
load_stylesheet('https://example.com/custom-theme.css');
```

You can use this to match your reseller branding or create a dark mode.

---

## 🧭 Advanced Usage Tips

### 💬 Conditional Logic Based on Page

```javascript
const page = get_page_info();

if (page === 'accountsettings') {
    set_php_version('PHP 8.2');
} else if (page === 'sslconfigure') {
    set_ssl_page_text('SSL is managed automatically on this server.');
}
```

---

### 🎨 Combine with Custom Styles or Dark Mode

```javascript
load_stylesheet('https://cdn.jsdelivr.net/gh/yourname/vp-darkmode/dark.css');
set_custom_favicon('https://yourdomain.com/dark-favicon.png');
set_page_title('Dark Panel Mode Enabled');
```

---

## 🧰 Full API Reference

| Function                                       | Description                                                            |
| ---------------------------------------------- | ---------------------------------------------------------------------- |
| `get_page_info()`                              | Returns the current VistaPanel page (`option` query parameter).        |
| `set_custom_favicon(url)`                      | Sets a custom favicon for the control panel.                           |
| `set_page_title(title)`                        | Changes the browser’s title text.                                      |
| `set_php_version(version)`                     | Updates the displayed PHP version on the Account Settings page.        |
| `set_ssl_page_text(text)`                      | Customizes the SSL configuration alert text and style.                 |
| `get_vp_logo_image()`                          | Returns the current logo image URL.                                    |
| `set_vp_logo_image(url)`                       | Sets a new logo image.                                                 |
| `set_element_details(key, value, type, array)` | Updates a feature’s property such as URL, description, or search text. |
| `hide_element_details(key, array)`             | Hides specific interface items by feature key.                         |
| `hide_sidebar()`                               | Hides the VistaPanel sidebar for a cleaner look.                       |
| `get_vp_username()`                            | Returns the logged-in username.                                        |
| `get_vp_version()`                             | Fetches the active VistaPanel version asynchronously.                  |
| `load_stylesheet(url)`                         | Dynamically loads an external CSS file.                                |

---

## ❓ FAQ

### **1. Can I use mofh-javascript with Wybe Network’s VistaPanel Customizations?**

✅ Yes, absolutely.
Both scripts can be loaded together. If you encounter overlapping functionality (e.g. both modify the same element), choose which one you want to take priority.

---

### **2. Is mofh-javascript a library or a plugin?**

It’s a **JavaScript library**, not a plugin. It provides a collection of functions designed to make VistaPanel customization simple and code-based.

---

### **3. How can I report bugs or request new features?**

You can **open an issue** on the [GitHub repository](https://github.com/MOFHCommunity/mofh-javascript).
Contributions and pull requests are very welcome!

---

### **4. How do I contribute?**

1. Fork the repository
2. Create a new feature branch
3. Make your improvements
4. Submit a pull request

Before contributing, please review the `CONTRIBUTING.md` and follow the project’s code style.

---

### **5. Is it safe to use on live VistaPanels?**

Yes — mofh-javascript is designed to work client-side only and **does not access user credentials or panel internals**.
Still, always review scripts before deploying them and host them securely via HTTPS.

---

## ⚖️ License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute mofh-javascript under the terms of the [LICENSE](LICENSE) file.

---

## ❤️ Acknowledgements

Created by [SpookyKipper](https://github.com/SpookyKipper) and [Deveroonie](https://github.com/Deveroonie).
Modernized documentation and structure by the MOFH Community.

