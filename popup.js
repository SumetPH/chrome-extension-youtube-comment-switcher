chrome.tabs.getSelected(null, tab => {
  var tablink = tab.url;
  // check support
  if (tablink.includes("www.youtube.com")) {
    $("#supported").css({ display: "" });

    if (localStorage.getItem("yt-layout")) {
      $("#enable").css({ display: "none" });
      $("#disable").css({ display: "" });
    } else {
      $("#disable").css({ display: "none" });
      $("#enable").css({ display: "" });
    }

    $("#enable").click(() => {
      localStorage.setItem("yt-layout", true);
      chrome.tabs.executeScript({ file: "youtube/enable.js" });
      window.close();
    });

    $("#disable").click(() => {
      localStorage.removeItem("yt-layout");
      chrome.tabs.executeScript({ file: "youtube/disable.js" });
      window.close();
    });
  } else {
    $("#unsupported").css({ display: "" });
  }
});
