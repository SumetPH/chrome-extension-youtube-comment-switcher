if (document.getElementById("enable") === null) {
  // add element for check status
  $("body").append("<span id='enable'></span>");

  // move element in page
  $("#comments.style-scope.ytd-watch-flexy").appendTo(
    "#secondary.style-scope.ytd-watch-flexy"
  );
  $("#secondary-inner.style-scope.ytd-watch-flexy").appendTo(
    "#primary-inner.style-scope.ytd-watch-flexy"
  );
  $("#secondary.style-scope.ytd-watch-flexy").css({
    overflowY: "auto",
    height: "80vh"
  });
} else {
  // remove element for check status
  $("#enable").remove();

  // move element in page
  $("#comments.style-scope.ytd-watch-flexy").appendTo(
    "#primary-inner.style-scope.ytd-watch-flexy"
  );
  $("#secondary-inner.style-scope.ytd-watch-flexy").appendTo(
    "#secondary.style-scope.ytd-watch-flexy"
  );
  $("#secondary.style-scope.ytd-watch-flexy").css({
    overflowY: "",
    height: ""
  });
}
