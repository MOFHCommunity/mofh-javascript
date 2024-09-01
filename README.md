# mofh-javascript: Customize VistaPanel with JavaScript

mofh-javascript empowers you to transform your VistaPanel experience with customizable scripts. 

## How to install
Login to your MyOwnFreeHost account & click "Your Adverts", and then "Control Panel Advert Control", select your domain and copy & paste the code below: 

### Load the initial code
```js
<script src="https://cdn.jsdelivr.net/gh/MOFHCommunity/mofh-javascript/mofh-javascript.js"></script>
```
### Example code for changing logo to remote URL
```js
<script>SetVpLogoImage("YOUR_IMAGE_URL");</script>
```
Make sure to replace the URL inside the code with your own, and don't forget to include the initial code first!

### Example code for hiding sidebar
```js
<script>HideSidebar();</script>
```
### Example code for removing element
```js
<script>HideElementDetails('sitereptile', PAGE.appGroups);</script>
```
### Example code for changing element
```js
<script>
SetElementDetails('sitereptile', 'YOUR_ACCOUNT_MANAGEMENT_SYSTEM_URL/'+username, 'url', PAGE.appGroups);
SetElementDetails('sitereptile', 'Advanced Account Settings', 'itemdesc', PAGE.appGroups);
SetElementDetails('sitereptile', 'website', 'searchtext', PAGE.appGroups);
</script>
```
Make sure to replace the URL in the first line with your own.

### Can I use mofh-javascript and Wybe Network's VistaPanel Customizations at the same time?
Yes, you can! Some conflicts can occur when covering the same functionality (for example, Wybe's Element Changer with mofh-javascript' element changing), in which case you're free to decide which script to utilize.
