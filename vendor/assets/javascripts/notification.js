const NOTIFICATION_PERMISSION_GRANTED = "granted"
const NOTIFICATION_PERMISSION_DENIED = "denied"
const NOTIFICATION_PERMISSION_DEFAULT = "default"

function isNotificationSupport() {
  if ("Notification" in window) {
    console.log("This browser supports desktop notification");
    return true;
  }

  alert("This browser doesn't support desktop notification");
  return false
}

function createNotification() {
  var title = "Sample Notification";
  var options = {
    body: "Sample body"
  };
  new Notification(title, options);
}

function requestPermission() {
  Notification.requestPermission().then(function (permission) {
    console.log("Notification permission is: ", permission);

    if (permission === NOTIFICATION_PERMISSION_GRANTED) {
      createNotification();
    }
  });
}
