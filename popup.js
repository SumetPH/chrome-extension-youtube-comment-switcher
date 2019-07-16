chrome.tabs.getSelected(null, tab => {
  var tablink = tab.url;
  // check support
  if (tablink.includes("www.youtube.com")) {
    $("#supported").css({ display: "" });

    $("#enable").click(() => {
      chrome.tabs.executeScript({ file: "youtube/enable.js" });
      window.close();
    });

    $("#disable").click(() => {
      chrome.tabs.executeScript({ file: "youtube/disable.js" });
      window.close();
    });
  } else {
    $("#unsupported").css({ display: "" });
  }
});
