var _a, _b, _c, _d;
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
var button = (_a = document.querySelector(".header .icons #login-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    page === null || page === void 0 ? void 0 : page.classList.toggle("active");
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("active");
});
var page = document.querySelector(".header .login-from");
//*--------------read-more-------------------
var parg = document.querySelector(".about .content .parg");
var btnn = (_b = document.querySelector(".about .content .btnn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    parg === null || parg === void 0 ? void 0 : parg.classList.add("active");
    btno === null || btno === void 0 ? void 0 : btno.classList.add("active");
    //btnn?.classList.remove("active")
});
var btno = (_c = document.querySelector(".about .content .btno")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    parg === null || parg === void 0 ? void 0 : parg.classList.remove("active");
});
//*-------------------navbar-----------------
var navbar = document.querySelector(".header .navbar");
var menu = (_d = document.querySelector(".header .icons #menu")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("active");
    page === null || page === void 0 ? void 0 : page.classList.remove("active");
});
