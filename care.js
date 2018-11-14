/*JavaScript 6th Edition
      Chapter 8

      Author: Nikki Clemens
      Date:   11-4-18

      Filename: care.js

*/


// function to add quiz 
	function plantChoice() {
	var checkboxes = document.getElementsByTagName("input");
	var checkboxChecked = [];
	
	//set up for the checkboxes length to be all selecting the "right" answers
	for(var i = 0; i < checkboxes.length; i++) {
		if(checkboxes[i].checked && (checkboxes[i].value === "right")) {
			checkboxChecked.push(checkboxes[i]);
			}
	}
	
	
	//if the letter is "a", "c" & "d"
	if (checkboxChecked.length === 3) {
		text = "Great job! You're correct!";
	}
	// if checked any other options 
	else {
		text = "Nope, try again.";}
	document.getElementById("quiz").innerHTML = text;
	}