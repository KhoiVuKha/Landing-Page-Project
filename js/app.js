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
const navBar = document.querySelectorAll('.navbar__menu');
const navBarList = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the navigation bar
function buildNavigationBar() {
  // Append element to navigation bar
  sections.forEach(section => {
    // Get section ID
    const sectionID = section.id;
    // Get section atrribute
    const sectionAtrribute = section.dataset.nav;
    // Create nav button
    const navButton = document.createElement('li');
    navButton.insertAdjacentHTML("afterbegin",`<a href="#${sectionID}" class="menu__link">${sectionAtrribute}</a>`);
    // Append nav button to nav button list
    navBarList.appendChild(navButton);
  });
  navBar.appendChild(navBarList);
}

// Call the build navigation bar funtion
buildNavigationBar();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
