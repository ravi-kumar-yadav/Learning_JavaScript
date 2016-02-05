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
