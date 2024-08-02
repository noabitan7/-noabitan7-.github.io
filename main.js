
const video = document.getElementById("showReel");
const videoContainer = document.getElementById('videoContainer');
const videoHeight = videoContainer.offsetHeight;
let firstScroll = false;
const films = document.querySelectorAll('.filmName');
let filmName = "";
let isDirecting = "Directing";
const contactBackground = document.getElementById('contactBackground');

const boxes = document.querySelectorAll('.create');
const triggerBottom = window.innerHeight * 0.9; // 90% of the viewport height
const waveTop = contactBackground.getBoundingClientRect().top;
const links = hamburgerLinks.querySelectorAll('.navbarItems');
let film;
let press = false;
var filmProperty;

var filmsProperties =  [
  {
      title: "HOME MEMORIES",
      name: "homeMemories",
      kind: "Directing",
      editing: "NIR BITAN",
      directing: "NIR BITAN",
      photo: "ABNER RODEL",
      src: "https://www.youtube.com/embed/wZFX3Q1vyE8?si=ach8hPxK9lVIOsAR",
      shoots: 4,
      url: "assets/images/directing/home memories/"
  },
  {
      title: "REALITY",
      name: "reality",
      kind: "Directing",
      editing: "NIR BITAN",
      directing: "NIR BITAN AND SHALEV NEZRI",
      photo: "NIR BITAN",
      src: "https://www.youtube.com/embed/wO8KfLintDg?si=SPxFw66UVI2px0ZD",
      shoots: 4,
      url: "assets/images/directing/reality/"
  },
  {
      title: "THE MERCHANT OF VENICE",
      name: "theMerchantOfVenice",
      kind: "Directing",
      editing: "NIR BITAN",
      directing: "NIR BITAN",
      photo: "ABNER RODEL",
      src: "https://www.youtube.com/embed/FHe0nKX3RKY?si=A3o1j5D0S-v2Vm1B",
      shoots: 5,
      url: "assets/images/directing/the merchant of venice/"
  },
  {
      title: "UNTITLED",
      name: "untitled",
      kind: "Directing",
      editing: "NIR BITAN",
      directing: "NIR BITAN",
      photo: "NIR BITAN",
      src: "assets/images/directing/untitled/Untitled.mp4",
      shoots: 6,
      url: "assets/images/directing/untitled/"
  },
  {
    title: "BRIOCHE",
    name: "brioche",
    kind: "videography",
    editing: "YISHAI ZEIT",
    directing: "YISHAI ZEIT",
    photo: "NIR BITAN",
    src: "https://www.youtube.com/embed/6Z2TjsXBn10?si=JhmThbQJjCTkthP0",
    shoots: 4,
    url: "assets/images/videography/brioche/"
  },
  {
    title: "IN KENT",
    name: "inKent",
    kind: "videography",
    editing: "NIV POZNANSKIi",
    directing: "SHANI HADAD",
    photo: "NIR BITAN",
    src: "https://www.youtube.com/embed/gwPu21-gc1Y?si=DZhP2QsrzBt4sJul",
    shoots: 6,
    url: "assets/images/videography/in kent/"
  },
  {
    title: "THANK YOU FOR COMING",
    name: "thankYouForComing",
    kind: "videography",
    editing: "OFIR DANIEL",
    directing: "SHANI HADAD",
    photo: "NIR BITAN",
    src: "https://www.youtube.com/embed/LYSKHxfrh6M?si=axOShYvij5d6FVJc",
    shoots: 5,
    url: "assets/images/videography/thank you for coming/"
  },
  {
    title: "THE CLOCK'S CRUEL NECESSITY",
    name: "theClocksCruelNecessity",
    kind: "videography",
    editing: "GUY SHILO",
    directing: "GUY SHILO",
    photo: "NIR BITAN",
    src: "https://www.youtube.com/embed/6A_2JKTxaCA?si=SnW7fMNnLLE5ZjHG",
    shoots: 6,
    url: "assets/images/videography/The Clocks Cruel Necessity/"
  }
];
 
function checkVisibility() {
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom) {
      box.classList.add('visible');
    } else {
      box.classList.remove('visible');
    }
  });

  if(waveTop < triggerBottom) {
    contactBackground.style.display = "block";
  } 
}

function handleTelLink() {
  if (!isMobileDevice()) {
      alert('Please use a mobile device to place a call, or dial the number manually: +972502550586');
      return false;  // Prevent the default tel link behavior on non-mobile devices
  }
  return true;  // Allow normal behavior on mobile devices
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const showFilmName = (event) => {
  film = event.currentTarget.id;
  switch (film){
    case "reality": {
      filmName = "reality";
      isDirecting = "directing";
      break;
    }
    case "untitled": {
      filmName = "untitled";
      isDirecting = "directing";
      break;
    }
    case "theMerchantOfVenice": {
      filmName = "the merchant of venice";
      isDirecting = "directing";
      break;
    }
    case "homeMemories": {
      filmName = "home memories";
      isDirecting = "directing";
      break;
    }
    case "brioche": {
      filmName = "brioche";
      isDirecting = "videography";
      break;
    }
    case "inKent": {
      filmName = "in kent";
      isDirecting = "videography";
      break;
    }
    case "thankYouForComing": {
      filmName = "thank you for coming";
      isDirecting = "videography";
      break;
    }
    case "theClocksCruelNecessity": {
      filmName = "The Clocks Cruel Necessity";
      isDirecting = "videography";
      break;
    }
  }

  document.getElementById(film).setAttribute("src", `assets/images/filmName/${film}.png`);

  document.getElementById(film).addEventListener("mouseout", () => {
      document.getElementById(film).setAttribute("src", `assets/images/${isDirecting}/${filmName}/choosenPic.png`);
  });
  
}



function moveToSelected(element) {
  var vOrD = element.slice(-1);
  element = element.slice(0,-1);
  let selected;
  const first = document.querySelector(`.carousel a.${vOrD}`);
  const last = document.querySelector(`.carousel a.${vOrD}:last-child`);

  if (element === "next") { 
    selected = document.querySelector(`.selected.${vOrD}`).nextElementSibling;
    last.parentNode.insertBefore(first, last.nextSibling);
    selected = document.querySelector(`.selected.${vOrD}`).nextElementSibling;
  } else if (element === "prev") {
    selected = document.querySelector(`.selected.${vOrD}`).previousElementSibling;
    first.parentNode.insertBefore(last, first);
    selected = document.querySelector(`.selected.${vOrD}`).previousElementSibling;
  } else {
    selected = element;
  }

  const next = element === "next" ? last : selected.nextElementSibling;
  const prev = element === "next" ? selected.previousElementSibling : last;
  const prevSecond = prev ? prev.previousElementSibling : null;
  const nextSecond = next ? next.nextElementSibling : null;

  document.querySelectorAll(`.carousel a.${vOrD}`).forEach(el => {
    el.className = '';  // Remove all classes
  });

  selected.classList.add('selected', `${vOrD}`);
  if (prev) prev.classList.add('prev' , `${vOrD}`);
  if (next) next.classList.add('next' , `${vOrD}`);
  if (prevSecond) prevSecond.classList.add('prevSecond' , `${vOrD}`);
  if (nextSecond) nextSecond.classList.add('nextSecond' , `${vOrD}`);

  let current = nextSecond ? nextSecond.nextElementSibling : null;
  while (current) {
    current.classList.add('hideRight' , `${vOrD}`);
    current = current.nextElementSibling;
  }

  current = prevSecond ? prevSecond.previousElementSibling : null;
  while (current) {
    current.classList.add('hideLeft' , `${vOrD}`);
    current = current.previousElementSibling;
  }
}

function watchVideo(event){
  for(let i = 0; i < filmsProperties.length; i++){
    if (filmsProperties[i].name == event.currentTarget.id){
      filmProperty = filmsProperties[i];
    }
  }
  sessionStorage.setItem('films', JSON.stringify(filmsProperties));
  sessionStorage.setItem('filmProperties', JSON.stringify(filmProperty));
  window.location.href = 'moviePage.html';  
}  



window.addEventListener("load", (event) => { 
  checkVisibility();

  window.addEventListener("scroll", () => {
    checkVisibility();
  });
  
  document.getElementById("hamburgerIcon").addEventListener("click", function() {
  var links = document.getElementById("hamburgerLinks");
  if (links.classList.contains("hidden")) {
    links.classList.remove("hidden");
  } else {
    links.classList.add("hidden");
  }
  });

  window.addEventListener("scroll", () => {
    const navBarBackground = document.getElementById('navBarBackground');
    const videoElement = video.getBoundingClientRect();
    const videoBottom = videoElement.bottom;

    if(videoBottom <= 0){
      navBarBackground.classList.add('sticky');
      video.pause();
      video.currentTime = 0;
    } else {
      navBarBackground.classList.remove('sticky');
      video.play();
    }

  });
  
  document.getElementById("videoContainer").addEventListener("click", function(){
    if(!press){
      video.muted = false;
      press = true;      
    } else {
      video.muted = true;
      press = false;       
    }
  }); 

  if (window.matchMedia(`(max-width: 500px)`).matches) {
    // Remove class if viewport width is less than or equal to the breakpoint
    document.getElementById("directC").className = 'column';
    document.getElementById("videoC").className ='column';
  } else {
    // Add class if viewport width is greater than the breakpoint
    document.getElementById("directC").className = 'carousel';
    document.getElementById("videoC").className ='carousel';
  }


  document.getElementById('prevD').addEventListener('click', () => {
    moveToSelected('prevD');
  });

  document.getElementById('nextD').addEventListener('click', () => {
    moveToSelected('nextD');
  });

  document.getElementById('prevV').addEventListener('click', () => {
    moveToSelected('prevV');
  });

  document.getElementById('nextV').addEventListener('click', () => {
    moveToSelected('nextV');
  });

  document.getElementById('aboutNavbar').addEventListener('click', function() {
    const target = document.getElementById('about');
    const offset = 50; // Change this value to adjust the space from the top
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    // target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('hamburgerIcon').addEventListener('click', () => {
    hamburgerLinks.classList.toggle('open');
  });

  

  links.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerLinks.classList.remove('open');
    });
  });

  document.getElementById('aboutNavbarHamburger').addEventListener('click', function() {
    const target = document.getElementById('about');
    const offset = 50; // Change this value to adjust the space from the top
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    // target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('directingNavbar').addEventListener('click', function() {
    const target = document.getElementById('directing');
    const offset = 70; // Change this value to adjust the space from the top
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    // target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('directingNavbarHamburger').addEventListener('click', function() {
    const target = document.getElementById('directing');
    const offset = 70; // Change this value to adjust the space from the top
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    // target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('videoNavbar').addEventListener('click', function() {
    const target = document.getElementById('videography');
    const offset = 30; // Change this value to adjust the space from the top
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    // target.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
  });

  document.getElementById('videoNavbarHamburger').addEventListener('click', function() {
    const target = document.getElementById('videography');
    const offset = 30; // Change this value to adjust the space from the top
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    // target.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
  });


  const filmElements = [
    "homeMemories",
    "reality",
    "theMerchantOfVenice",
    "untitled",
    "brioche",
    "inKent",
    "thankYouForComing",
    "theClocksCruelNecessity"
  ];

  filmElements.forEach(film => {
    const element = document.getElementById(film);
    if (element) {
      element.addEventListener("mouseover", showFilmName);
      element.addEventListener("click", watchVideo);
    }
  });

});


// function moveSlide(step) {
//     const slides = document.querySelectorAll('.carousel-slide');
//     const totalSlides = slides.length;

//     // Update the current slide index
//     currentSlide += step;

//     // Loop back to the first slide if we go too far right
//     if (currentSlide >= totalSlides) {
//         currentSlide = 0;
//     }

//     // Loop back to the last slide if we go too far left
//     if (currentSlide < 0) {
//         currentSlide = totalSlides - 1;
//     }

//     // Move the carousel
//     const carousel = document.querySelector('.carousel');
//     carousel.style.transform = `translateX(${-100 * currentSlide}%)`;
// }
