// navbar Section

var featuresBtn = document.querySelectorAll(".features")[0];
var featuresMenu = document.querySelectorAll(".dropdown-menu")[0];

var arrowUp = document.querySelectorAll(".arrow-up")[0];
var arrowDown = document.querySelectorAll(".arrow-image")[0];

var companyArrowUp = document.querySelectorAll(".company-arrow-up")[0];
var companyArrowDown = document.querySelectorAll(".company-arrow-image")[0];

var companyBtn = document.querySelectorAll(".company")[0];
var companyMenu = document.querySelectorAll(".dropdown-menu-company")[0];


featuresBtn.addEventListener("click", function () {
    featuresBtn.classList.toggle("bold");
    featuresMenu.classList.toggle("hide");
    arrowUp.classList.toggle("hide");
    arrowDown.classList.toggle("hide");
})

companyBtn.addEventListener("click", function () {
    companyBtn.classList.toggle("bold");
    companyMenu.classList.toggle("hide");
    companyArrowUp.classList.toggle("hide");
    companyArrowDown.classList.toggle("hide");
})


document.addEventListener("click", function (event) {
    if (!featuresMenu.contains(event.target) && event.target !== featuresBtn) {
        featuresBtn.classList.remove("bold");
        featuresMenu.classList.add("hide");
        arrowDown.classList.remove("hide");
        arrowUp.classList.add("hide");
    }
    if (!companyMenu.contains(event.target) && event.target !== companyBtn) {
        companyBtn.classList.remove("bold");
        companyMenu.classList.add("hide");
        companyArrowDown.classList.remove("hide");
        companyArrowUp.classList.add("hide");
    }
    if (!sideBar.contains(event.target) && event.target !== menuBtn) {
        sideBar.classList.remove("active");
    }
})

// menu button section

var menuBtn = document.querySelector(".menu-button");
var sideBar = document.querySelector(".side-bar");

menuBtn.addEventListener("click", function () {
    sideBar.classList.add("active");
});

var closeBtn = document.querySelector(".close-button");

closeBtn.addEventListener("click", function () {
    sideBar.classList.remove("active");
})


// sidebar section

// features

var featuresSideBarBtn = document.querySelectorAll(".features")[1];
var featuresSideBarMenu = document.querySelectorAll(".dropdown-menu")[1];

var arrowUpSideBar = document.querySelectorAll(".arrow-up")[1];
var arrowDownSideBar = document.querySelectorAll(".arrow-image")[1];

featuresSideBarBtn.addEventListener("click", function () {
    featuresSideBarBtn.classList.toggle("bold");
    featuresSideBarMenu.classList.toggle("hide");
    arrowUpSideBar.classList.toggle("hide");
    arrowDownSideBar.classList.toggle("hide");
})

// company

var companyArrowUpSideBar = document.querySelectorAll(".company-arrow-up")[1];
var companyArrowDownSideBar = document.querySelectorAll(".company-arrow-image")[1];

var companyBtnSideBar = document.querySelectorAll(".company")[1];
var companyMenuSideBar = document.querySelectorAll(".dropdown-menu-company")[1];


companyBtnSideBar.addEventListener("click", function () {
    companyBtnSideBar.classList.toggle("bold");
    companyMenuSideBar.classList.toggle("hide");
    companyArrowUpSideBar.classList.toggle("hide");
    companyArrowDownSideBar.classList.toggle("hide");
})
