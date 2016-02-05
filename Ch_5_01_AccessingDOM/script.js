
// get anchor tag with id "mainTitle" from html page
var mainTitle = document.getElementById('mainTitle');

// NodeType --> Element (1)
console.log("This is an element of type: ", mainTitle.nodeType);
console.log("Inner HTML is ", mainTitle.innerHTML);
console.log("Child nodes: ", mainTitle.childNodes);
console.log("Child Nodes count: ", mainTitle.childNodes.length);

