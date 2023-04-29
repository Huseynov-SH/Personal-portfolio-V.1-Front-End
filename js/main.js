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
  let i, tabcontent, tablinks;
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

  // title modifier
  let imgElement = document.querySelector(".tablinks.active");
  let altText = imgElement.alt;
  document.getElementById("sec-title-p1").innerText = altText;
  document.getElementById("sec-title-p2").innerText = altText;
  ent.querySelector(".mobile-sec-title h4").innerText = "//" + altText;
}

function openSubtab(evt, subtabName) {
  let i, subtabcontent, subtablinks;
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

  // mobile title modifier
  let subtabtext = document.querySelector(".subtablinks.active p").innerText;
  document.querySelector(".mobile-sec-title h5").innerText = "//" + subtabtext;
}

//Code snippet showcase Details Toggle
const clickableSpans = document.querySelectorAll(".snippet-card #details-sp");
const hidePs = document.querySelectorAll(".snippet-card .hide-p");

clickableSpans.forEach(function (clickableSpan, index) {
  clickableSpan.addEventListener("click", function () {
    hidePs[index].classList.toggle("show");
  });
});

let headers = document.getElementsByClassName("accordion-header");

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
