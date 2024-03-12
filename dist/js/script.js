// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav){
        header.classList.add('navbar-fixed');
    }
    else{
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Contact Toast
const sendBtn = document.querySelector('#send');

sendBtn.addEventListener('click', function() {
    const items = document.querySelectorAll(".items");
    let showToast = false;
    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");

            if(!showToast){
                showToast = true;
                show_toast(item);
            }
        }
        else{
            if(item.id == "email"){
                if(!checkEmail()){
                    if(!showToast){
                        showToast = true;
                        show_toast(item);
                    }
                }
            }
        }

        item.addEventListener("keyup", () => {
            if(item.value != ""){
                if(item.id == "email"){
                    checkEmail();
                }
                else{
                    item.classList.remove("error");
                }
            }
            else{
                item.classList.add("error");
            }
        });
    }

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !message.classList.contains("error")){
        sendEmail();
        contactForm.reset();
        return false;
    }
});

const contactForm = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

function sendEmail(){
    const bodyMessage = `Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value}`;
    Email.send({
        SecureToken: "3657f87f-f81e-4a37-8254-4aa436d2ed08",
        To : 'mariorenaldyy@gmail.com',
        From : "mariorenaldyy@gmail.com",
        Subject : "Portfolio (luxen.pro) Contact Message",
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
      }
    );
}

function checkEmail(){
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        return false;
    }
    else{
        email.classList.remove("error");
        return true;
    }
}

function show_toast(item){
    const toastContainer = document.querySelector("#toast-container");
    const toast = document.querySelector('#toast-warning');
    const toastClone = toast.cloneNode(true);
    const closeToast = toastClone.querySelector("#toast-close");
    closeToast.addEventListener('click', function() {
        toastClone.remove();
    });
    const toastMsg = toastClone.querySelector("#toast-message");
    toastContainer.append(toastClone);

    if(item.id == "name"){
        toastMsg.innerHTML = "Name can't be blank";
    }
    else if(item.id == "email"){
        if(item.value == ''){
            toastMsg.innerHTML = "Email can't be blank";
        }
        else{
            toastMsg.innerHTML = "Email format is invalid";
        }
    }
    else {
        toastMsg.innerHTML = "Message can't be blank";
    }
    
    toastClone.classList.remove('invisible');
    toastClone.classList.add('show');
    setTimeout(function(){ toastClone.remove(); }, 3000);
}