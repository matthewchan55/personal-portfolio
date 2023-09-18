// Nav Scroll
function scrollToSection(elementSelector, instance=0){
  const elements = document.querySelectorAll(elementSelector);
  if(elements.length > instance){
    elements[instance].scrollIntoView({behavior: 'smooth'})
  }
}

const link1 = document.getElementById("link1")
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')
const link4 = document.getElementById('link4')

  //About
link1.addEventListener('click', () => {
  scrollToSection('.container',1)
})
  //Project
link2.addEventListener('click', () => {
  scrollToSection('.container',2)
})
  //Contact
link3.addEventListener('click', () => {
  scrollToSection('.container',3)
})
  //Contact
link4.addEventListener('click', () => {
  scrollToSection('.container',3)
})

// About
const tabs = document.querySelectorAll('.tab');
const tabElements = document.querySelectorAll('.tabEl')

tabs.forEach((tab) => {
  tab.addEventListener('click', function() {
    const tabId = this.getAttribute('tab-showcase');
    tabElements.forEach((element) => {
      element.classList.remove('show');
    });
    const selectedElement = document.getElementById(tabId);
    selectedElement.classList.add('show');
    tabs.forEach((t) => t.classList.remove('show'))
    tab.classList.add('show')
  });
});


// Project
const projectCards = document.querySelectorAll('.project-card');
const showcaseElements = document.querySelectorAll('.showcaseEl');
const sideProj = document.querySelector('.sideproject')

projectCards.forEach((card) => {
  card.addEventListener('click', function() {
    const showcaseId = this.getAttribute('data-showcase');
    showcaseElements.forEach((element) => {
      element.classList.remove('show');
    });
    const selectedElement = document.getElementById(showcaseId);
    selectedElement.classList.add('show');
  });
});



// Photo Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 5 seconds
}