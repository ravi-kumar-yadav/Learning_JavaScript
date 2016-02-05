// get all links in html page
var allLinks = document.getElementsByTagName("a");
console.log("All links: ", allLinks);


// setting the alignment of 'mainContent' div to 'right'
var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align", "right");


// getting innerHTML of mainTitle anchor tag
var mainTitle = document.getElementById('mainTitle');
console.log(mainTitle.innerHTML);


// innerHTML of parent node containing further nodes inside it
// just displays all the HTML of children (raw HTML of all children nodes)
var sidebar = document.getElementById('sidebar');
console.log(sidebar.innerHTML);

// creating new 'nodes'
var newHeading = document.createElement('h1');
var newParagraph = document.createElement('p');

// adding content using easier but not so standard way to newly created nodes
newHeading.innerHTML = 'Did you Know?';
newParagraph.innerHTML = 'Assam produces more than 1 billion kg of Tea each year';

// add node to document
document.getElementById("trivia").appendChild(newHeading);
document.getElementById("trivia").appendChild(newParagraph);


