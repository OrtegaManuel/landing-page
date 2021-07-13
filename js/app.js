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
 * Define Global Variables
 *
 */

// Global variable for the navigation to append my li as a child element
const navMenu = document.querySelector('#navbar__list');
// Global variable to loop over
const sections = document.getElementsByTagName('section');

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

// build the nav

function navBar() {
  for (let section of sections) {
    // creating li element and storing it to the listElement variable
    let listElement = document.createElement('li');

    // adding HTML to the li element using template literals to create the anchors
    listElement.innerHTML = `<a href="#${section.id}" class="nav__links">${section.dataset.nav}</a>`;

    // appending the li element as a child to the DOM element stored in the global navMenu variable
    navMenu.appendChild(listElement);
  }
}

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', function () {
  for (let section of sections) {
    if (
      section.getBoundingClientRect().top < 471 &&
      section.getBoundingClientRect().top > -295
    ) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }
  }
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
navBar();

// Set sections as active
