app.filter('yesno', function () {
  return function (input) {
    if (input === true) {
      return "Yes";
    } else {
      return "No";
    }
  };
});
