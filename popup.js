chrome.tabs.getSelected(null, tab => {
  var tablink = tab.url;
  if (tablink.includes("www.youtube.com")) {
    $("#supported").css({ display: "" });

    $("#full").click(() => {
      chrome.tabs.executeScript({ file: "youtube/full.js" });
      window.close();
    });

    $("#default").click(() => {
      chrome.tabs.executeScript({ file: "youtube/default.js" });
      window.close();
    });
  } else {
    $("#unsupported").css({ display: "" });
  }
});
