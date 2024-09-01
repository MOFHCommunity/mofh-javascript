# mofh-javascript: Customize VistaPanel with JavaScript

mofh-javascript empowers you to transform your VistaPanel experience with customizable scripts. 

## How to install
Login to your MyOwnFreeHost account & click "Your Adverts", and then "Control Panel Advert Control", select your domain and copy & paste the code below: 


## Usage
### Load the initial code
```js
<script src="https://cdn.jsdelivr.net/gh/GenApplications/vistascripts.js/vistascripts.js"></script>
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

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Can I use mofh-javascript and Wybe Network's VistaPanel Customizations at the same time?
Yes, you can! Some conflicts can occur when covering the same functionality (for example, Wybe's Element Changer with mofh-javascript' element changing), in which case you're free to decide which script to utilize.
