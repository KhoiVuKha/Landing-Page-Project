/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll('section');
const navBarMenu = document.querySelectorAll('.navbar__menu');
const navBarList = document.querySelector('#navbar__list');
const goToTopButton = document.querySelector('.custom-button');
const header = document.querySelector('.page__header');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// Check if element is in the view port
let isInViewport = element => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= 350 && 
    rect.bottom >= 350
  );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the navigation bar
function buildNavigationBar() {
  for (const section of sections) {
    // Get section ID
    const sectionID = section.id;
    // Get section atrribute
    const sectionAtrribute = section.dataset.nav;
    // Create new nav button
    const button = 
    `<li>
      <a class="menu__link" href="#${sectionID}">${sectionAtrribute}</a>
    </li>`;
    // Append button to list of nav button
    navBarList.insertAdjacentHTML('beforeend', button);
  }
  // Append navList to navigation bar menu
  navBarMenu.appendChild(navBarList);
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {
  // get list of menu__link
  const navList = document.querySelectorAll(".menu__link");

  sections.forEach((section, i)=>{
    if (isInViewport(section)) {
      section.classList.add("your-active-class");
      navList[i].classList.add("active-button");
    } else {
      section.classList.remove("your-active-class");
      navList[i].classList.remove("active-button");
    }
  })
}

// Function to show the go to top button
function showGoToTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Show the go up button
    goToTopButton.style.display = 'block';

    // Declare a timer for hiding the go up button
    let goUpButtonTimer;
    window.clearTimeout(goUpButtonTimer);

    // Hide go up button when timer is timeout
    goUpButtonTimer = setTimeout(function() {
      goToTopButton.style.display = 'none';
    }, 10000);
  } else {
    goToTopButton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;            // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleNavBar() {
  // Show nav bar when have scroll events
  header.style.cssText = "transition: ease 0.5s; opacity: 1;"
  
  // Declare a timer for hiding the navbar
  let navBarDisplayTimer;
  window.clearTimeout(navBarDisplayTimer);

  // Hide nav bar when timer is timeout
  navBarDisplayTimer = setTimeout(function() {
      header.style.cssText = "transition: ease 0.5s; opacity: 0;"
  }, 5000);
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
window.onload = () => {
  // Call function to build the navBar
  buildNavigationBar();
}

// Scroll to section on link click
navBarList.addEventListener('click', function(event) {
  event.preventDefault();
  const section = document.querySelector(event.target.getAttribute("href"));
  section.scrollIntoView({block: 'center', behavior: 'smooth'});
});

// Set sections as active
window.onscroll = () => {
  setActiveSection();
  showGoToTopButton();
  toggleNavBar();
}

// Scroll to top of the page - refer to: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
goToTopButton.addEventListener('click', topFunction);