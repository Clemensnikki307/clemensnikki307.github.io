/* JavaScript 6th Edition
	Chapter 6
	
	Name: Nikki
	Date: 10-15-18
	
	Filename: contact.js
	
*/

"use strict";
var formValidity = true;

/* validate required fields */
function validateRequired() {
   var inputElements = document.querySelectorAll("#contactinfo input");
   var errorDiv = document.getElementById("errorText");
   var elementCount = inputElements.length;
   var requiredValidity = true;
   var currentElement;
   try {
      for (var i = 0; i < elementCount; i++) { 
         // validate all input elements in fieldset
         currentElement = inputElements[i];
         if (currentElement.value === "") {
            currentElement.style.background = "rgb(255,233,233)";
            requiredValidity = false;
         } else {
            currentElement.style.background = "white";
         }
      }
      if (requiredValidity === false) { 
         throw "Please complete all fields.";
      } 
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
   }
   catch(msg) {
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg; 
      formValidity = false;
   }
}
	

	
