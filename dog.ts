//*--------------------scroll--------------------
window.onscroll = () => {

    if(window.scrollY >0){
        document.querySelector(".header")?.classList.add("active");

        page?.classList.remove("active");
    }else{
        document.querySelector(".header")?.classList.remove("active");
    };
};

//*--------------display-page----------------

let button = document.querySelector(".header .icons #login-btn")?.addEventListener("click" , ()=>{

    page?.classList.toggle("active");

    navbar?.classList.remove("active");
})

let page = document.querySelector(".header .login-from")!;

//*--------------read-more-------------------
let parg = document.querySelector(".about .content .parg")!;

let btnn = document.querySelector(".about .content .btnn")?.addEventListener("click" , () => {

    parg?.classList.add("active");

    btno?.classList.add("active");

    //btnn?.classList.remove("active")
})

let btno = document.querySelector(".about .content .btno")?.addEventListener("click" , () => {

    parg?.classList.remove("active");
})


//*-------------------navbar-----------------

let navbar = document.querySelector(".header .navbar");

let menu = document.querySelector(".header .icons #menu")?.addEventListener("click" , () => {

    navbar?.classList.toggle("active");

    page?.classList.remove("active");
})