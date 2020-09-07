$( document ).on("turbolinks:load", function() {
  $(".js-btn-create-notification").on("click", function() {
    if (!isNotificationSupport()) {
      return;
    }

    var permission = Notification.permission;

    if (permission == NOTIFICATION_PERMISSION_GRANTED) {
      createNotification();
    } else if (permission == NOTIFICATION_PERMISSION_DEFAULT ||
      permission == NOTIFICATION_PERMISSION_DENIED) {
      requestPermission();
    }
  });
});
