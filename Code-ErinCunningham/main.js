// ------------------ ABOUT----------------- //
// triggering display of the ABOUT section

let aboutButton = document.querySelector("#about-button");
let aboutSection = document.querySelector("#about");
let tanVivoSection = document.querySelector("#project1-tanvivo");
let home = document.querySelector("#home");
let contactSection = document.querySelector("#contact");
let tapperSection = document.querySelector("#project2-tapper");
let calendarSection = document.querySelector("#project3-calendar");
let venosaSection = document.querySelector("#project4-venosa");
let cromeySection = document.querySelector("#project5-cromey");
let tcmSection = document.querySelector("#project6-tcm");
aboutButton.addEventListener("click", function () {
    aboutSection.style.display = 'flex';
    contactSection.style.display = 'none';
    home.style.display = 'none';
    tanVivoSection.style.display = 'none';
    tapperSection.style.display = 'none';
    calendarSection.style.display = 'none';
    venosaSection.style.display = 'none';
    cromeySection.style.display = 'none';
    tcmSection.style.display = 'none';
});

// ------------------ CONTACT ---------------- //
// triggering display of the CONTACT section

let contactButton = document.querySelector("#contact-button");
contactButton.addEventListener("click", function () {
    aboutSection.style.display = 'none';
    home.style.display = 'none';
    tanVivoSection.style.display = 'none';
    contactSection.style.display = 'flex';
    tapperSection.style.display = 'none';
    calendarSection.style.display = 'none';
    venosaSection.style.display = 'none';
    cromeySection.style.display = 'none';
    tcmSection.style.display = 'none';
});


// ------------------ PROJECT1: TAN VIVO ----------------- //
// triggering display of the first project (TAN VIVO)

let tanvivoButton = document.querySelector("#img2");
tanvivoButton.addEventListener("click", function () {
    window.scrollTo(0,0);
    tapperSection.style.display = 'none';
    tanVivoSection.style.display = 'block';
    home.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    calendarSection.style.display = 'none';
    venosaSection.style.display = 'none';
    cromeySection.style.display = 'none';
    tcmSection.style.display = 'none';
});

let tanvivoButton2 = document.querySelector("#img8");
tanvivoButton2.addEventListener("click", function () {
    window.scrollTo(0,0);
    tapperSection.style.display = 'none';
    tanVivoSection.style.display = 'block';
    home.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    calendarSection.style.display = 'none';
    venosaSection.style.display = 'none';
    cromeySection.style.display = 'none';
    tcmSection.style.display = 'none';
});

let tanvivoButton3 = document.querySelector("#img9");
tanvivoButton3.addEventListener("click", function () {
    window.scrollTo(0,0);
    tapperSection.style.display = 'none';
    tanVivoSection.style.display = 'block';
    home.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    calendarSection.style.display = 'none';
    venosaSection.style.display = 'none';
    cromeySection.style.display = 'none';
    tcmSection.style.display = 'none';
});

// ------------------ PROJECT2: TAPPER ST ----------------- //
// triggering display of the second project

let tapperButton = document.querySelector("#img7");
tapperButton.addEventListener("click", function () {
    window.scrollTo(0,0);
    tapperSection.style.display = 'block';
    tanVivoSection.style.display = 'none';
    home.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    calendarSection.style.display = 'none';
    venosaSection.style.display = 'none';
    cromeySection.style.display = 'none';
    tcmSection.style.display = 'none';
});

let tapperButton2 = document.querySelector("#img5");
tapperButton2.addEventListener("click", function () {
    window.scrollTo(0,0);
    tapperSection.style.display = 'block';
    tanVivoSection.style.display = 'none';
    home.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    calendarSection.style.display = 'none';
    venosaSection.style.display = 'none';
    cromeySection.style.display = 'none';
    tcmSection.style.display = 'none';
});

// ------------------ PROJECT3: CALENDAR ----------------- //

let calendarButton = document.querySelector("#img1");
calendarButton.addEventListener("click", function () {
    window.scrollTo(0,0);
    tapperSection.style.display = 'none';
    tanVivoSection.style.display = 'none';
    home.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    calendarSection.style.display = 'block';
    venosaSection.style.display = 'none';
    cromeySection.style.display = 'none';
    tcmSection.style.display = 'none';
});

// ------------------ PROJECT4: VENOSA ----------------- //

let venosaButton = document.querySelector("#img3");
venosaButton.addEventListener("click", function () {
    window.scrollTo(0,0);
    tapperSection.style.display = 'none';
    tanVivoSection.style.display = 'none';
    home.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    calendarSection.style.display = 'none';
    venosaSection.style.display = 'block';
    cromeySection.style.display = 'none';
    tcmSection.style.display = 'none';
});

// ------------------ PROJECT5: LEWIS CROMEY ----------------- //

let cromeyButton = document.querySelector("#img6");
cromeyButton.addEventListener("click", function () {
    window.scrollTo(0,0);
    tapperSection.style.display = 'none';
    tanVivoSection.style.display = 'none';
    home.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    calendarSection.style.display = 'none';
    venosaSection.style.display = 'none';
    cromeySection.style.display = 'block';
    tcmSection.style.display = 'none';
});

// ------------------ PROJECT6: TCM ----------------- //

let tcmButton = document.querySelector("#img4");
tcmButton.addEventListener("click", function () {
    window.scrollTo(0,0);
    tapperSection.style.display = 'none';
    tanVivoSection.style.display = 'none';
    home.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    calendarSection.style.display = 'none';
    venosaSection.style.display = 'none';
    cromeySection.style.display = 'none';
    tcmSection.style.display = 'block';
});

// ------------------ HOME ----------------- //
let homeButton = document.querySelector("#logo");
homeButton.addEventListener("click", function () {
    aboutSection.style.display = 'none';
    home.style.display = 'block';
    tanVivoSection.style.display = 'none';
    contactSection.style.display = 'none';
    tapperSection.style.display = 'none';
    calendarSection.style.display = 'none';
    venosaSection.style.display = 'none';
    cromeySection.style.display = 'none';
    tcmSection.style.display = 'none';
});

// Tan Vivo animations
// tl stands for timeline, .from animates an element from a specified place to where it currently is
// .to can be ued to do the opposite, animate out to somewhere else
// .fromTo can be used to set both
// .feature is the class

// text moves upwards

const tlText = gsap.timeline({
    scrollTrigger: {
        trigger: "#project1-tanvivo",
        start: "5%",
        end: "20%",
        scrub: true,
    }

});

tlText.from('.opener-text', { y: -300, opacity: 0, ease: "power1.inOut" });

// staggered image sliders from RHS

const tlImage = gsap.timeline({
    scrollTrigger: {
        trigger: "opener-text",
        scroller: "body",
        start: "1050",
        end: "1800",
        scrub: true,

    }
});

tlImage.to('#tanvivo2', { x: -1100, ease: "power1.inOut" });
tlImage.to('#tanvivo3', { x: -1730, ease: "power1.inOut" });
tlImage.to('#tanvivo4', { x: -2360, ease: "power1.inOut" });
tlImage.to('#tanvivo5', { x: -2990, ease: "power1.inOut" });

ScrollTrigger.create({
  
    trigger: "body",
    start: "1050",
    end: "1800",
  
    pin: true,
    
});

// project gallery + lightbox

let gridImages = document.querySelectorAll(".grid > img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let lightbox2 = document.getElementById("lightbox2");
let lightboxImg2 = document.getElementById("lightbox-img2");
let lightbox3 = document.getElementById("lightbox3");
let lightboxImg3 = document.getElementById("lightbox-img3");
let lightbox4 = document.getElementById("lightbox4");
let lightboxImg4 = document.getElementById("lightbox-img4");
let lightbox5 = document.getElementById("lightbox5");
let lightboxImg5 = document.getElementById("lightbox-img5");

// to open lightbox
gridImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    // set the image clicked as the image of the lightbox
    lightboxImg.src = img.src;
  });
});

// To close lightbox
lightbox.addEventListener("click", (e) => {
  // if the clicked element is not the dark overlay don't close it
  if (e.target !== e.currentTarget) return;
  // if it was the dark overlay it will close it
  lightbox.classList.remove("active");
});

//------

// to open lightbox
gridImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox2.classList.add("active");
      // set the image clicked as the image of the lightbox
      lightboxImg2.src = img.src;
    });
  });
  
  // To close lightbox
  lightbox2.addEventListener("click", (e) => {
    // if the clicked element is not the dark overlay don't close it
    if (e.target !== e.currentTarget) return;
    // if it was the dark overlay it will close it
    lightbox2.classList.remove("active");
  });

  //------

  // to open lightbox
gridImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox3.classList.add("active");
      // set the image clicked as the image of the lightbox
      lightboxImg3.src = img.src;
    });
  });
  
  // To close lightbox
  lightbox3.addEventListener("click", (e) => {
    // if the clicked element is not the dark overlay don't close it
    if (e.target !== e.currentTarget) return;
    // if it was the dark overlay it will close it
    lightbox3.classList.remove("active");
  });

  //------
  
  // to open lightbox
gridImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox4.classList.add("active");
      // set the image clicked as the image of the lightbox
      lightboxImg4.src = img.src;
    });
  });
  
  // To close lightbox
  lightbox4.addEventListener("click", (e) => {
    // if the clicked element is not the dark overlay don't close it
    if (e.target !== e.currentTarget) return;
    // if it was the dark overlay it will close it
    lightbox4.classList.remove("active");
  });

  //------

  // to open lightbox
gridImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox5.classList.add("active");
      // set the image clicked as the image of the lightbox
      lightboxImg5.src = img.src;
    });
  });
  
  // To close lightbox
  lightbox5.addEventListener("click", (e) => {
    // if the clicked element is not the dark overlay don't close it
    if (e.target !== e.currentTarget) return;
    // if it was the dark overlay it will close it
    lightbox5.classList.remove("active");
  });

  //------