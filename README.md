# chrome-reminder-extension

Need a periodic reminder extension for chrome?

This is a very simple (and minimal) chrome extension that notifies the user to take a break every 20 minutes 
according to the 20-20-20 rule to prevent eye strain and maintain healthy vision.
Steps for customization are below.

## Getting Started

Download this repository (as a .zip) and extract files to an accessible folder.

From the *Chrome Developer Docs*: 

>1. Visit **chrome://extensions** in your browser
>2. Ensure that the **Developer mode** checkbox in the top right-hand corner is checked.
>3. Click **Load unpacked extension…** to pop up a file-selection dialog.
>4. Navigate to the directory in which your extension files live, and select it.

After loading the extension, the notification should show within a few seconds.

See https://developer.chrome.com/extensions/getstarted if you are having any trouble.

## Customization

If you want to change the notification message, icon, and/or time interval, simply open up *popup.js*
and modify the **message**, **iconUrl**, **periodInMinutes** properties.

Here is *popup.js* for reference:

```javascript
// Change the periodInMinutes property to set time interval
var alarm = chrome.alarms.create("myAlarm", { delayInMinutes: 0.05, periodInMinutes: 20 }); 

chrome.alarms.onAlarm.addListener( function (alarm) {
  var notification = chrome.notifications.create(
    'take-a-break-notification', {
      type: 'basic',
      iconUrl: 'icon.png', // Replace with your own image
      
      // Customize either the notification title or message
      title: 'Take a break!',
      message: 'Look away from your computer screen and focus on a spot 20 feet away for 20 seconds.'
    },

    function () {}
  );
});
```
## Contact
Have any questions or experiencing any difficulties? Email me at wlin12@terpmail.umd.edu.
