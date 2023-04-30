// Mobile navbar bars icon rotate
const bars_label_icon = document.getElementById("menu-bars-label");

bars_label_icon.addEventListener("click", function () {
  this.classList.toggle("active");
});

// // About Me  Information Tabs
document.addEventListener("DOMContentLoaded", function () {
  let tabLinks = document.getElementsByClassName("tablinks")[0];
  if (tabLinks != undefined) {
    tabLinks.click();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let tabLinks2 = document.getElementsByClassName("subtablinks")[0];
  if (tabLinks2 != undefined) {
    tabLinks2.click();
  }
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
  if (document.querySelector(".mobile-sec-title h4") != null) {
    this.innerText = "//" + altText;
  }
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
//Projects page Dropdown menu
let menuTitle = document.querySelector("#_projects .page-menu-title");
if (menuTitle != null) {
  menuTitle.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// Projects page projects filter
const checkboxes = document.querySelectorAll(".project-filter-input");
const elements = document.querySelectorAll("[data-language]");
const noProjects = document.getElementById("not_found");

function filterElements() {
  const checked = Array.from(checkboxes).filter((checkbox) => checkbox.checked);

  if (!checked.length) {
    elements.forEach((element) => {
      element.style.display = "block";
    });
    noProjects.style.display = "none";
    return;
  }

  let shouldShowProjects = false;

  elements.forEach((element) => {
    const languages = element.dataset.language.split(" ");
    const shouldShow = languages.some((language) =>
      checked.some((checkbox) => checkbox.value === language)
    );
    element.style.display = shouldShow ? "block" : "none";
    if (shouldShow) {
      shouldShowProjects = true;
    }
  });

  if (!shouldShowProjects) {
    noProjects.style.display = "block";
  } else {
    noProjects.style.display = "none";
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", filterElements);
});

// filterElements();

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", filterElements);
});

//Contact me page Dropdown menu
let activeItem1 = document.querySelector("#_contact_me .page-menu-title1");
if (activeItem1 != null) {
  activeItem1.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
let activeItem2 = document.querySelector("#_contact_me .page-menu-title2");
if (activeItem2 != null) {
  activeItem2.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

//Contat me page input reader
// inputs
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
//display
const displayName = document.getElementById("name-value");
const displaEmail = document.getElementById("email-value");
const displayMessage = document.getElementById("message-value");
const displayDate = document.getElementById("date-value");

if (nameInput != null) {
  nameInput.addEventListener("input", () => {
    displayName.textContent = nameInput.value;
  });
}

if (emailInput != null) {
  emailInput.addEventListener("input", () => {
    displaEmail.textContent = emailInput.value;
  });
}

if (messageInput != null) {
  messageInput.addEventListener("input", () => {
    displayMessage.textContent = messageInput.value;
  });
}

const myDate = new Date();
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
if (displayDate != null) {
  displayDate.innerText = myDate.toLocaleDateString("en-US", options);
}
