// typewriter
var aText = new Array("");
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedText");
 var iArrLength = aText[0].length; // the length of the text array
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br /> <br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

// reveal timer
var revealId = "";
var revealSpeed = 0;

function revealTimer(id, speed)
{
  function reveal() {
    elm = document.getElementById(id)
    elm.style.opacity = '1';
  }

	setTimeout(reveal, speed);
}