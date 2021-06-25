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
// creating a Variable to contain the nav menue list
const navMenue = document.querySelector('#navbar__list');
// creating a fragment to contain the newly added li`s
const navBarList = document.createDocumentFragment();
// creating a Variable containing all the sections elements in the body
const allSections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// this function remove active class from all sections and dehighlights the nav bar
function deactivation (){
    for (let section of allSections)
      {
        section.classList.remove('your-active-class')
      };
    for (let li of navList)
      {
        li.style.cssText='color: #000; background-color: #fff'
      }
  }
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav
// this function creates four li`s and adding them to the navBarList fragment
for (let i =1; i<=4; i++){
    const navSection = document.createElement('li');
    navSection.textContent = `section ${i}`;
    navSection.classList.add('menu__link');
    navSection.setAttribute('id', `nav_${i}`);
    navBarList.appendChild(navSection);
  };
// appending the newly created li`s to the navigation menue
navMenue.appendChild(navBarList);
// setting the nav menue to flex to flow to change the look from blocks to inline
navMenue.style.display='flex';
  /**
   * End Main Functions
   * Begin Events
  */
// creating a Variable containing all the li elements in the nav menue
const navList = document.querySelectorAll('li');
// adding a click event listner to every li in the nav menue
// conecting every li in the nav menue to a it`s section using index numper
for (let sectionIndex = 0; sectionIndex<navList.length; sectionIndex++){
  // Scroll to section on link click
    navList[sectionIndex].addEventListener('click', function ()   {
  // adding a scrollIntoView method to the section with the same index
    allSections[sectionIndex].scrollIntoView({behavior: 'smooth'})}
  )
};

/*adding a scroll event listner that triggers a function
 *cheacking if the section on the veiw port based on the page top property
 *Add class 'active' to section when on the viewport
*/
document.addEventListener('scroll', function(){
  let pageTop = window.visualViewport.pageTop;
//cheacking if the section 1 on the veiw port based on the page top property
  if (pageTop>300 && pageTop<900){
     deactivation();  /*the function removes all the active classes and the highligting*/
     document.querySelector('#section1').classList.add('your-active-class'); /*addig the active class to the section on the view port*/
     document.querySelector('#nav_1').style.cssText='color: #fff; background-color: #333;'; /*highligting the section name on the nav menue*/
    }
//cheacking if the section 2 is on the veiw port
  else if (pageTop>900 && pageTop<1400){
     deactivation();
     document.querySelector('#section2').classList.add('your-active-class');
     document.querySelector('#nav_2').style.cssText='color: #fff; background-color: #333;';
    }
//cheacking if the section 3 is on the veiw port
  else if (pageTop>1400 && pageTop<2000){
     deactivation();
     document.querySelector('#section3').classList.add('your-active-class');
     document.querySelector('#nav_3').style.cssText='color: #fff; background-color: #333;';
    }
//cheacking if the section 4 is on the veiw port
  else if (pageTop>2000){
     deactivation();
     document.querySelector('#section4').classList.add('your-active-class');
     document.querySelector('#nav_4').style.cssText='color: #fff; background-color: #333;';
    }
  else{
     deactivation();/*deactivates all the highligting if no section is on the veiw port*/
    }
  }
);

// the end...
