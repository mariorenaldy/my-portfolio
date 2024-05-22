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

//Modal
const portfolioMore = document.querySelector('#portfolio-more');
const icrpedigreeMore = document.querySelector('#icrpedigree-more');
const timerMore = document.querySelector('#timer-more');
const shuttleMore = document.querySelector('#shuttle-more');
const vaksinasiMore = document.querySelector('#vaksinasi-more');
const modalClose = document.querySelector('#modal-close');
const projectModal = document.querySelector('#project-modal');
const modalContent = document.querySelector('#modal-content');
const html = document.querySelector('html');
const header = document.querySelector('header');

const modalTitle = document.querySelector('#modal-title');
const modalImage = document.querySelector('#modal-image');
const modalDesc = document.querySelector('#modal-desc');
const modalURL = document.querySelector('#modal-URL');
const modalCode = document.querySelector('#modal-code');

portfolioMore.addEventListener('click', function() {
    modalTitle.innerHTML = "My Portfolio";
    modalImage.src = "dist/img/portfolio/portfolio.png";
    modalDesc.innerHTML = "I created this website with the intention of using it as a showcase and a portfolio. I built this website with Tailwind, and still planning to finish the blog feature. I've made a contact section that is directly integrated with my personal email, so you can provide feedback or suggestions for the website.";
    modalURL.href = "https://luxen.pro/";
    modalCode.href = "https://github.com/mariorenaldy/my-portfolio";

    projectModal.classList.toggle('hidden');
    projectModal.classList.toggle('flex');
    modalContent.classList.toggle('isOpen');
    projectModal.classList.toggle('isOpen');
    setTimeout(function() {
        modalContent.classList.toggle('isOpen');
        projectModal.classList.toggle('isOpen');
    }, 100);

    let details = navigator.userAgent; 
    let regexp = /android|iphone|kindle|ipad/i; 
    let isMobileDevice = regexp.test(details); 
    if(!isMobileDevice) {
        html.classList.add('padding-right');
        header.classList.add('padding-right');
    }
    html.classList.toggle('overflow-hidden');
});
timerMore.addEventListener('click', function() {
    modalTitle.innerHTML = "React Timer";
    modalImage.src = "dist/img/portfolio/timer.png";
    modalDesc.innerHTML = "React Timer is a replica of Google Timer widget (that can be found by searching “timer” on google search) that is built with React and JSX. This app has fully functional timer countdown system, and a span that act as an input which accept number keys with moveable cursor that could handle arrow keys as well. The app utilized HackTimer.js by turuslan to prevent countdown throttle when the tab is inactive.";
    modalURL.href = "https://react-timer-three-alpha.vercel.app/";
    modalCode.href = "https://github.com/mariorenaldy/react-timer";

    projectModal.classList.toggle('hidden');
    projectModal.classList.toggle('flex');
    modalContent.classList.toggle('isOpen');
    setTimeout(function() {
        modalContent.classList.toggle('isOpen');
    }, 100);

    let details = navigator.userAgent; 
    let regexp = /android|iphone|kindle|ipad/i; 
    let isMobileDevice = regexp.test(details); 
    if(!isMobileDevice) {
        html.classList.add('padding-right');
        header.classList.add('padding-right');
    }
    html.classList.toggle('overflow-hidden');
});
icrpedigreeMore.addEventListener('click', function() {
    modalTitle.innerHTML = "ICRPedigree";
    modalImage.src = "dist/img/portfolio/icrpedigree.png";
    modalDesc.innerHTML = "ICRPedigree is a web-based dog registration management and certificate printing system made for Indonesian Canine Registry. The system generates all dog's pedigree to be included on a certificate.<br><br>A marketplace or e-commerce feature is also created as a prototype where ICR organizations can sell dog food products with integrated payment gateway and shipping costs calculator using third party APIs.";
    modalURL.href = "https://icrpedigree.42web.io/";
    modalCode.href = "https://github.com/mariorenaldy/icrpedigree/tree/skripsi";

    projectModal.classList.toggle('hidden');
    projectModal.classList.toggle('flex');
    modalContent.classList.toggle('isOpen');
    setTimeout(function() {
        modalContent.classList.toggle('isOpen');
    }, 100);

    let details = navigator.userAgent; 
    let regexp = /android|iphone|kindle|ipad/i; 
    let isMobileDevice = regexp.test(details); 
    if(!isMobileDevice) {
        html.classList.add('padding-right');
        header.classList.add('padding-right');
    }
    html.classList.toggle('overflow-hidden');
});
shuttleMore.addEventListener('click', function() {
    modalTitle.innerHTML = "Shuttle Bus Booking Mobile Application";
    modalImage.src = "dist/img/portfolio/Shuttle.png";
    modalDesc.innerHTML = "In the fifth semester of my Informatics major, I took a Programming on Mobile Devices course which required me to create a mobile app for the course's final project. The concept of this application is quite simple: it provides a booking system for a shuttle bus where we can choose the path/route, date, time, and the availabe vehicle size and seats. I decided to build the app using Android Studio and Kotlin with MVP architecture, and use the web service provided by the course and some third party libraries.";
    modalURL.classList.add('hidden');
    modalCode.href = "https://github.com/mariorenaldy/Shuttle";

    projectModal.classList.toggle('hidden');
    projectModal.classList.toggle('flex');
    modalContent.classList.toggle('isOpen');
    setTimeout(function() {
        modalContent.classList.toggle('isOpen');
    }, 100);
    
    let details = navigator.userAgent; 
    let regexp = /android|iphone|kindle|ipad/i; 
    let isMobileDevice = regexp.test(details); 
    if(!isMobileDevice) {
        html.classList.add('padding-right');
        header.classList.add('padding-right');
    }
    html.classList.toggle('overflow-hidden');
});
vaksinasiMore.addEventListener('click', function() {
    modalTitle.innerHTML = "COVID-19 Vaccination Management System";
    modalImage.src = "dist/img/portfolio/vaksinasi.png";
    modalDesc.innerHTML = "COVID-19 Vaccination Management System is a system that is made to facilitate COVID-19 vaccination services in Indonesia during the pandemic. This system is a mock project that was created in collaboration with two of my friends in 2021.";
    modalURL.href = "https://vaksinasi.42web.io/";
    modalCode.href = "https://github.com/mariorenaldy/vaksinasi";

    projectModal.classList.toggle('hidden');
    projectModal.classList.toggle('flex');
    modalContent.classList.toggle('isOpen');
    setTimeout(function() {
        modalContent.classList.toggle('isOpen');
    }, 100);

    let details = navigator.userAgent; 
    let regexp = /android|iphone|kindle|ipad/i; 
    let isMobileDevice = regexp.test(details); 
    if(!isMobileDevice) {
        html.classList.add('padding-right');
        header.classList.add('padding-right');
    }
    html.classList.toggle('overflow-hidden');
});

modalClose.addEventListener('click', function() {
    modalContent.classList.toggle('isClosed');
    projectModal.classList.toggle('isClosed');

    setTimeout(function() {
        projectModal.classList.toggle('hidden');
        projectModal.classList.toggle('flex');
        modalContent.classList.toggle('isClosed');
        projectModal.classList.toggle('isClosed');
        modalURL.classList.remove('hidden');
        html.classList.toggle('overflow-hidden');
        html.classList.remove('padding-right');
        header.classList.remove('padding-right');
    }, 100);
});