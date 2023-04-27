// Mobile navbar bars icon rotate
const bars_label_icon = document.getElementById("menu-bars-label");

bars_label_icon.addEventListener("click", function () {
  this.classList.toggle("active");
});

// // About Me  Information Tabs
document.addEventListener("DOMContentLoaded", function () {
  document.getElementsByClassName("tablinks")[0].click();
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementsByClassName("subtablinks")[0].click();
});

function openTab(evt, tabName) {
  if (tabName == "Tab1") {
    document.getElementById("sec-title-p1").innerText = "professional-info";
    document.getElementById("sec-title-p2").innerText = "professional-info";
  } else if (tabName == "Tab2") {
    document.getElementById("sec-title-p1").innerText = "personal-info";
    document.getElementById("sec-title-p2").innerText = "personal-info";
  } else {
    document.getElementById("sec-title-p1").innerText = "hobbies-info";
    document.getElementById("sec-title-p2").innerText = "hobbies-info";
  }
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openSubtab(evt, subtabName) {
  var i, subtabcontent, subtablinks;
  subtabcontent = document.getElementsByClassName("subtabcontent");
  for (i = 0; i < subtabcontent.length; i++) {
    subtabcontent[i].style.display = "none";
  }
  subtablinks = document.getElementsByClassName("subtablinks");
  for (i = 0; i < subtablinks.length; i++) {
    subtablinks[i].className = subtablinks[i].className.replace(" active", "");
  }
  document.getElementById(subtabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Code snippet showcase Details Toggle
const clickableSpans = document.querySelectorAll(".snippet-card #details-sp");
const hidePs = document.querySelectorAll(".snippet-card .hide-p");

clickableSpans.forEach(function (clickableSpan, index) {
  clickableSpan.addEventListener("click", function () {
    hidePs[index].classList.toggle("show");
  });
});

var headers = document.getElementsByClassName("accordion-header");

for (var i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

