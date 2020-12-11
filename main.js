
var dragged;

document.addEventListener("drag", function(event){

}, false)

document.addEventListener("dragstart", function(event){
    dragged = event.target
    //event.target.style.opacity = .5;
}, false)

document.addEventListener("dragend", function(event){
    event.target.opacity = 1;
}, false)

document.addEventListener("dragover", function(event){
    event.preventDefault()
}, false)

document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "empty" ) {
        event.target.style.background = "purple";
    }

}, false);

document.addEventListener("dragleave", function( event ) {
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.className == "empty" ) {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.className == "empty" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }
  
}, false);