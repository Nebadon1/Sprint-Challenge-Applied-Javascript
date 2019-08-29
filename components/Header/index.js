// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container');

function Header() {

const theHeader = document.createElement('div');
    theHeader.classList.add('class', 'header');

    const theDate = document.createElement('spam');
    theDate.classList.add('class', 'date');

    const theTitle = document.createElement('h1');

    const theTemp = document.createElement('spam');
    theTemp.classList.add('class', 'temp');

    //append Childs
    headerContainer.appendChild(theHeader);
    theHeader.appendChild(theDate);
    theHeader.appendChild(theTitle);
    theHeader.appendChild(theTemp);

    //Set Content
    theDate.textContent = 'SMARCH 28, 2019';
    theTitle.textContent = 'Lambda Times';
    theTemp.textContent = '98°';


return theHeader;
      
}

Header(headerContainer);