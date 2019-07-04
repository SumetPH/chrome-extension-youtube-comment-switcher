chrome.tabs.getSelected(null, function(tab) {
  var tablink = tab.url;
  if (tablink.includes("youtube")) {
    document.getElementById("full").addEventListener("click", () => {
      chrome.tabs.executeScript({ file: "youtube/full.js" });
      window.close();
    });

    document.getElementById("default").addEventListener("click", () => {
      chrome.tabs.executeScript({ file: "youtube/default.js" });
      window.close();
    });
  } else {
    alert("It's don't support this website.");
    window.close();
  }
});
