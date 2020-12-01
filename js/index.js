const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const topNav = document.querySelectorAll("nav a");

topNav[0].textContent = siteContent["nav"]["nav-item-1"];
topNav[1].textContent = siteContent["nav"]["nav-item-2"];
topNav[2].textContent = siteContent["nav"]["nav-item-3"];
topNav[3].textContent = siteContent["nav"]["nav-item-4"];
topNav[4].textContent = siteContent["nav"]["nav-item-5"];
topNav[5].textContent = siteContent["nav"]["nav-item-6"];


const topSection = document.querySelector('h1');
const topButton = document.querySelector('button');
const topImg = document.querySelector('#cta-img');

topSection.textContent = siteContent['cta']['h1'];
topButton.textContent = siteContent['cta']['button'];
topImg.setAttribute('src', siteContent['cta']['img-src']);


const mainContent = document.querySelector(".main-content");
const topContent = mainContent.querySelectorAll("h4");
const textContentOne = mainContent.querySelectorAll("p");
const midImg = document.querySelector("#middle-img");

topContent[0].textContent = siteContent["main-content"]["features-h4"];
topContent[1].textContent = siteContent["main-content"]["about-h4"];
topContent[2].textContent = siteContent["main-content"]["services-h4"];
topContent[3].textContent = siteContent["main-content"]["product-h4"];
topContent[4].textContent = siteContent["main-content"]["vision-h4"];

textContentOne[0].textContent = siteContent["main-content"]["features-content"];
textContentOne[1].textContent = siteContent["main-content"]["about-content"];
textContentOne[2].textContent = siteContent["main-content"]["services-content"];
textContentOne[3].textContent = siteContent["main-content"]["product-content"];
textContentOne[4].textContent = siteContent["main-content"]["vision-content"];

midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


const contact = document.querySelector(".contact");
const contactH4 = contact.querySelector("h4");
const contactContent = contact.querySelectorAll("p");

contactH4.textContent = siteContent["contact"]["contact-h4"];

contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];


const footerContent = document.querySelector("footer");

footerContent.textContent = siteContent["footer"]["copyright"];

const newLink1 = document.createElement("a");
const newLink2 = document.createElement("a");

newLink1.textContent = "Home";
newLink1.href= "#";
newLink1.style.color = "green";
newLink2.textContent = "The Entire Star Wars Series, even the only ok ones.";
newLink2.href= "#";
newLink2.style.color = "green";

document.querySelector("nav").prepend(newLink1);
document.querySelector("nav").appendChild(newLink2);

const greenNav = document.querySelectorAll("nav a");

greenNav[0].style.color = "green"
greenNav[1].style.color = "green"
greenNav[2].style.color = "green"
greenNav[3].style.color = "green"
greenNav[4].style.color = "green"
greenNav[5].style.color = "green"