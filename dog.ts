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

let button = document.querySelector("#login-btn") as HTMLButtonElement;
let page = document.querySelector(".header .login-from")!;

button.onclick  = ()=>{

    page?.classList.toggle("active");

    navbar?.classList.remove("active");
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


let paragraph = document.querySelector(".paragraph") as HTMLParagraphElement;

let button_readMore = document.querySelector(".button1") as HTMLInputElement;

let button_readLess = document.querySelector(".button2") as HTMLInputElement;

button_readMore.addEventListener("click", ()=>{
    paragraph.classList.add("active");
    button_readMore.classList.add("active");
    button_readLess.classList.add("active")
})

button_readLess.addEventListener("click", ()=>{
    paragraph.classList.remove("active");
    button_readMore.classList.remove("active");
    button_readLess.classList.remove("active");
})


//*-------------------navbar-----------------

let navbar = document.querySelector(".header .navbar");

let menu = document.querySelector(".header .icons #menu")?.addEventListener("click" , () => {

    navbar?.classList.toggle("active");

    page?.classList.remove("active");
})