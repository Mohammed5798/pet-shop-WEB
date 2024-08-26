var _a;
//*--------------------scroll--------------------
window.onscroll = function () {
    var _a, _b;
    if (window.scrollY > 0) {
        (_a = document.querySelector(".header")) === null || _a === void 0 ? void 0 : _a.classList.add("active");
        page === null || page === void 0 ? void 0 : page.classList.remove("active");
    }
    else {
        (_b = document.querySelector(".header")) === null || _b === void 0 ? void 0 : _b.classList.remove("active");
    }
    ;
};
//*--------------display-page----------------
var button = document.querySelector("#login-btn");
var page = document.querySelector(".header .login-from");
button.onclick = function () {
    page === null || page === void 0 ? void 0 : page.classList.toggle("active");
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("active");
};
//*--------------read-more-------------------
// let parg = document.querySelector(".about .content .parg");
// let btno = document.querySelector(".about .content .btno")!.addEventListener("click" , () => {
//     parg.classList.remove("active");
// })
// let btnn = document.querySelector(".about .content .btnn")?.addEventListener("click" , () => {
//     parg.classList.add("active");
//     btno.classList.add("active");
// btnn?.classList.remove("active")
// })
var paragraph = document.querySelector(".paragraph");
var button_readMore = document.querySelector(".button1");
var button_readLess = document.querySelector(".button2");
button_readMore.addEventListener("click", function () {
    paragraph.classList.add("active");
    button_readMore.classList.add("active");
    button_readLess.classList.add("active");
});
button_readLess.addEventListener("click", function () {
    paragraph.classList.remove("active");
    button_readMore.classList.remove("active");
    button_readLess.classList.remove("active");
});
//*-------------------navbar-----------------
var navbar = document.querySelector(".header .navbar");
var menu = (_a = document.querySelector(".header .icons #menu")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("active");
    page === null || page === void 0 ? void 0 : page.classList.remove("active");
});
