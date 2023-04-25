// Mobile navbar bars icon rotate
const bars_label_icon = document.getElementById("menu-bars-label");

bars_label_icon.addEventListener("click", function () {
  this.classList.toggle("active");
});

function createLineDiv(lineNumber) {
  var lineDiv = document.createElement("div");
  lineDiv.classList.add("cus-grid");

  var counterSpan = document.createElement("span");
  counterSpan.classList.add("counter");
  counterSpan.textContent = lineNumber - 1;
  lineDiv.appendChild(counterSpan);

  var decSpan = document.createElement("span");
  decSpan.classList.add("dec");
  decSpan.textContent = "*";
  lineDiv.appendChild(decSpan);

  return lineDiv;
}

var text = document.getElementById("myText").textContent;
var lines = text.split("\n");

for (var i = 0; i < lines.length; i++) {
  if (lines[i].trim() !== "") {
    var lineDiv = createLineDiv(i + 1);
    document.getElementById("lineCount").appendChild(lineDiv);
  }
  if (i == lines.length - 1) {
    var lineDiv2 = document.createElement("div");
    lineDiv2.classList.add("cus-grid");

    var counterSpan2 = document.createElement("span");
    counterSpan2.classList.add("counter");
    counterSpan2.textContent = i;
    lineDiv2.appendChild(counterSpan2);

    var decSpan2 = document.createElement("span");
    decSpan2.classList.add("dec");
    decSpan2.textContent = "**/";
    lineDiv2.appendChild(decSpan2);
    document.getElementById("lineCount").appendChild(lineDiv2);
  }
}
