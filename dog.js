let form = document.querySelector('.header .login-from');

var loginBtn = document.querySelector("#login-btn");

loginBtn.onclick =  () => {

    form.classList.toggle("active");

    navbar.classList.remove("active");

    tallk.classList.remove("active");

    btno.classList.remove("active");

    btnn.classList.remove("active");

};


const navbar = document.querySelector(".header .navbar");

const button = document.querySelector(".header .icons #menu").onclick = () => {
    
    navbar.classList.toggle("active");

    form.classList.remove("active");
};

window.onscroll = () => {
    
    navbar.classList.remove("active");

    form.classList.remove("active");


    if(window.scrollY > 0){
        document.querySelector(".header").classList.add("active");
    }else{
        document.querySelector(".header").classList.remove("active");
    };
}

// window.onload = () => {

//     if(window.scrollY > 0){
//         document.querySelector(".header").classList.add("active");
//     }
//     else {
//         document.querySelector(".header").classList.remove("active")
//     };
// };

const btnn = document.querySelector(".about .content .btnn");

const btno = document.querySelector(".about .content .btno");

const tallk = document.querySelector(".about .content .parg");

btnn.onclick = () =>{
    
    tallk.classList.add("active");

    btno.classList.toggle("active");

    btnn.classList.toggle("active");

    form.classList.remove("active");
};

btno.onclick = () =>{
    
    tallk.classList.remove("active");
    
    btno.classList.toggle("active");
    
    btnn.classList.toggle("active");
};