var alarm = chrome.alarms.create("myAlarm", { delayInMinutes: 0.05, periodInMinutes: 20 });

chrome.alarms.onAlarm.addListener( function (alarm) {
  var notification = chrome.notifications.create(
    'take-a-break-notification', {
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Take a break!',
      message: 'Look away from your computer screen and focus on a spot 20 feet away for 20 seconds.'
    },

    function () {}
  );
});