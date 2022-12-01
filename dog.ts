let form = document.querySelector('header login-from') as HTMLFormElement;

let loginBtn =  document.querySelector("#login-btn") as HTMLSelectElement;

loginBtn.onclick = () => {

    form.classList.toggle("active");
    
};