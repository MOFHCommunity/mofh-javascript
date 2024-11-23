
# mofh-javascript: Customize VistaPanel with JavaScript

mofh-javascript empowers you to transform your VistaPanel experience with customizable scripts. 

## How to install
Login to your MyOwnFreeHost account & click "Your Adverts", and then "Control Panel Advert Control", select your domain and copy & paste the code below: 

## Usage
### Load the initial code
```js
<script src="https://cdn.jsdelivr.net/gh/MOFHCommunity/mofh-javascript/mofh-javascript.js"></script>
```

### Getting Page Information

Retrieve the current page information (e.g., to determine which VistaPanel page is being displayed).

```javascript
const pageInfo = get_page_info();
```

### Customizing the Favicon

Set a custom favicon for VistaPanel.

```javascript
set_custom_favicon('https://example.com/favicon.ico');
```

### Setting the Page Title

Change the title of the VistaPanel page.

```javascript
set_page_title('Custom VistaPanel Title');
```

### Changing PHP Version

Set a specific PHP version in the account settings page.

```javascript
set_php_version('PHP 7.4');
```

### Customizing SSL Page Text

Customize the text displayed on the SSL configuration page.

```javascript
set_ssl_page_text('Your SSL configuration is secure and up to date.');
```

### Managing VistaPanel Logo

Get the current logo URL of VistaPanel.

```javascript
const logoUrl = get_vp_logo_image();
```

Set a custom logo for VistaPanel.

```javascript
set_vp_logo_image('https://example.com/logo.png');
```

### Setting Element Details

Modify details of specific elements within VistaPanel, such as URLs, descriptions, or search text.

```javascript
set_element_details('featureKey', 'New URL', 'url', sectionsArray);
```

### Hiding Elements

Hide specific elements on the VistaPanel interface based on their feature key.

```javascript
hide_element_details('featureKey', sectionsArray);
```

### Hiding the Sidebar

Hide the VistaPanel sidebar.

```javascript
hide_sidebar();
```

### Getting VistaPanel Username

Retrieve the currently logged-in username from VistaPanel.

```javascript
const username = get_vp_username();
```

### Getting VistaPanel Version

Fetch the current version of VistaPanel.

```javascript
get_vp_version().then(version => {
    console.log('VistaPanel Version:', version);
}).catch(error => {
    console.error('Error fetching version:', error);
});
```

### Loading External Stylesheets

Dynamically load an external stylesheet into the VistaPanel.

```javascript
load_stylesheet('https://example.com/styles.css');
```

## Frequently Asked Questions (FAQ)

### 1. **Can I use mofh-javascript and Wybe Network's VistaPanel Customizations at the same time?**
   **Yes, you can!** Some conflicts can occur when covering the same functionality (for example, Wybe's Element Changer with mofh-javascript's element changing), in which case you're free to decide which script to utilize.

### 2. **Is mofh-javascript a library?**
   mofh-javascript allows you to customize VistaPanel with code easily and impress your clients!

### 3. **How can I report bugs or request features?**
   You can report bugs or request features by opening an issue on the project's GitHub repository. Contributions are welcome!

### 4. **Can I contribute to mofh-javascript?**
   Yes, contributions are encouraged! You can contribute by forking the repository, making your changes, and submitting a pull request. Please review the contribution guidelines before submitting.

### 5. **Is mofh-javascript secure to use?**
   mofh-javascript is developed with security in mind. However, as with any third-party script, it's important to review the code and ensure it meets your security standards before deploying it on a live site.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
