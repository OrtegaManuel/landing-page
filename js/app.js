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

// Global variable for the navigation to append my li as a child element
const navMenu = document.querySelector('#navbar__list');
// Global variable to loop over
const sections = document.getElementsByTagName('section');
// Global variable for the "back to top" button
const toTopBtn = document.getElementById('toTop');

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
    // using an if/else statement with my desired min/max values taken from .getBoundingClientRect().top
    if (
      section.getBoundingClientRect().top < 350 &&
      section.getBoundingClientRect().top > -250
    ) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }
  }
});

// calling the navBar() to create the navigation
navBar();

// calling scrollFunction() on scrolling

window.onscroll = function () {
  scrollFunction();
};

// adding style rules to show the "back to top" button when scrolling past 250px

function scrollFunction() {
  if (document.documentElement.scrollTop > 250) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
}

// add click event listener with smooth back to top scrolling

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
