chrome.tabs.getSelected(null, function(tab) {
  var tablink = tab.url;
  if (tablink.includes("www.youtube.com")) {
    document.getElementById("supported").style.display = "";

    document.getElementById("full").addEventListener("click", () => {
      chrome.tabs.executeScript({ file: "youtube/full.js" });
      window.close();
    });

    document.getElementById("default").addEventListener("click", () => {
      chrome.tabs.executeScript({ file: "youtube/default.js" });
      window.close();
    });
  } else {
    document.getElementById("unsupported").style.display = "";
  }
});
