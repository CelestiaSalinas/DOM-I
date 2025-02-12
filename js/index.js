const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const cta = document.getElementById("cta-img");
cta.src = siteContent["cta"]["img-src"];

const middle = document.getElementById("middle-img");
middle.src = siteContent["main-content"]["middle-img-src"];

const links = document.querySelectorAll("nav a");
links[0].textContent = siteContent.nav["nav-item-1"];
links[1].textContent = siteContent.nav["nav-item-2"];
links[2].textContent = siteContent.nav["nav-item-3"];
links[3].textContent = siteContent.nav["nav-item-4"];
links[4].textContent = siteContent.nav["nav-item-5"];
links[5].textContent = siteContent.nav["nav-item-6"];

//New links
const newLink1 = document.createElement("a");
const newLink2 = document.createElement("a");

newLink1.textContent = "Link one";
newLink2.textContent = "Link two";

const parentElement = document.querySelector("nav");

parentElement.append(newLink1);
parentElement.prepend(newLink2);

const linkColor = document.querySelectorAll("a");
linkColor.forEach(Element => {
  Element.style.color = "green";
});

const ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"];

const btn = document.querySelector("button");
btn.textContent = siteContent["cta"]["button"];

const topContAbout = document.querySelector(
  ".top-content div:nth-of-type(1) h4"
);
topContAbout.textContent = siteContent["main-content"]["about-h4"];

const para1 = document.querySelector(".top-content div:nth-of-type(1) p");
para1.textContent = siteContent["main-content"]["about-content"];

const topContFeatures = document.querySelector(
  ".top-content div:nth-of-type(2) h4"
);
topContFeatures.textContent = siteContent["main-content"]["features-h4"];

const para2 = document.querySelector(".top-content div:nth-of-type(2) p");
para2.textContent = siteContent["main-content"]["features-content"];

const bottomContServices = document.querySelector(
  ".bottom-content div:nth-of-type(1) h4"
);
bottomContServices.textContent = siteContent["main-content"]["services-h4"];

const para3 = document.querySelector(".bottom-content div:nth-of-type(1) p");
para3.textContent = siteContent["main-content"]["services-content"];

const bottomContProduct = document.querySelector(
  ".bottom-content div:nth-of-type(2) h4"
);
bottomContProduct.textContent = siteContent["main-content"]["product-h4"];

const para4 = document.querySelector(".bottom-content div:nth-of-type(2) p");
para4.textContent = siteContent["main-content"]["product-content"];

const bottomContVision = document.querySelector(
  ".bottom-content div:nth-of-type(3) h4"
);
bottomContVision.textContent = siteContent["main-content"]["vision-h4"];

const para5 = document.querySelector(".bottom-content div:nth-of-type(3) p");
para5.textContent = siteContent["main-content"]["vision-content"];

const contactInfoH4 = document.querySelector(".contact h4");
contactInfoH4.textContent = siteContent["contact"]["contact-h4"];

const contactInfo1 = document.querySelector(".contact p:nth-of-type(1)");
contactInfo1.textContent = siteContent["contact"]["address"];

const contactInfo2 = document.querySelector(".contact p:nth-of-type(2)");
contactInfo2.textContent = siteContent["contact"]["phone"];

const contactInfo3 = document.querySelector(".contact p:nth-of-type(3)");
contactInfo3.textContent = siteContent["contact"]["email"];

const foot = document.querySelector("footer");
foot.textContent = siteContent["footer"]["copyright"];
