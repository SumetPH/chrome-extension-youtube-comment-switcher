document.getElementById("secondary").style.overflowY = "auto";
document.getElementById("secondary").style.height = "90vh";
document
  .getElementById("secondary")
  .appendChild(document.getElementById("comments"));
document
  .getElementById("primary-inner")
  .appendChild(document.getElementById("secondary-inner"));
