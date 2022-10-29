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
