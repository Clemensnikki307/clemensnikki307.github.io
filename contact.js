/* JavaScript 6th Edition
	Chapter 8
	
	Name: Nikki
	Date: 11-4-18
	
	Filename: contact.js
	
*/

"use strict";
var formValidity = true;
var contactUsObject = {},
	contactUsSubmission;

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

// value for Contact Us field
function createID() {
   var firstName = document.getElementById("fNameinput");
   var lastName = document.getElementById("lNameinput");
   var phone = document.getElementById("cPhoneinput");
   var email = document.getElementById("cEmailinput");
   var message = document.getElementsByTagName("cMessageinput");
   var firstInit;
   var lastInit;
   if (firstname.value !== "" && lastName.value !== "" && phone.value !== "") {
      firstInit = firstName.value.charAt(0).toUpperCase();
      lastInit = lastName.value.charAt(0).toUpperCase();
      acctid = firstInit + lastInit + phone.value;
// contactUsArray = [];
      contactUsObject = {};
      for (var i = 0; i < fields.length - 1; i++) {
// contactUsArray.push(fields[i].value);
         contactUsObject[fields[i].name] = fields[i].value;
      }
   }
}

function createString() {
  contactUsSubmission = JSON.stringify(contactUsObject);
}

// create event listeners
function createEventListeners() {
   var firstName = document.getElementById("fNameinput");
   var lastName = document.getElementById("lNameinput");
   var phone = document.getElementById("cPhoneinput");
   var email = document.getElementById("cEmailinput");
   var message = document.getElementById("cMessageinput");
   if (firstName.addEventListener) {
      firstName.addEventListener("change", createID, false); 
      lastName.addEventListener("change", createID, false); 
      phone.addEventListener("change", createID, false);
      email.addEventListener("change", createID, false); 
     message.addEventListener("change", createID, false);
   } else if (firstName.attachEvent) {
      firstName.attachEvent("onchange", createID);
      lastName.attachEvent("onchange", createID);
      phone.attachEvent("onchange", createID);
      email.attachEvent("onchange", createID);
      message.attachEvent("onchange", createID);
      
   }
   
   var submit = document.getElementById("submitButton");
   if (submit.addEventListener) {
      submit.addEventListener("click", createString, false);
   } else if (submit.attachEvent) {
      submit.attachEvent("onclick", createString);
   }
}

if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}

	
