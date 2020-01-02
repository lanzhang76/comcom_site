var button = document.getElementById("abstract-button");
var button2 = document.getElementById("cul-button");

button.addEventListener(
  "click",
  function(event) {
    var content = document.getElementById("abstract");
    if (content.style.display == "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  },
  false
);

button2.addEventListener(
  "click",
  function(event) {
    var content = document.getElementById("culminate");
    if (content.style.display == "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  },
  false
);
