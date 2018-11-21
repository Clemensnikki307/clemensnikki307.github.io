/*  JavaScript 6th Edition
    Chapter 10
    
    Author: Nikki
    Date:  11-19-18 

    Filename: index.js
*/

"use strict";

// global varibles
var pos = [];

function loadSetup() {
	document.querySelector("nav ul li:first-of-type").className = "current";
   	document.querySelector("nav ul li:last-of-type").className = "";
   	document.getElementById("setup").style.display = "block";
	document.getElementById("location").style.display = "none";
	location.search = "";
}

// display the Directions content
function loadDirections(string) {
	document.querySelector("nav ul li:first-of-type").className = "";
   	document.querySelector("nav ul li:last-of-type").className = "current";
  	document.getElementById("setup").style.display = "none";
   	document.getElementById("location").style.display = "block";
   	geoTest();
}

function geoTest() {
	if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(createDirections, fail, {timeout: 10000});
	} else {
	fail();
	}

function createDirections(position) {
	var currPosLat = position.coords.latitude;
	var currPosLng = position.coords.longitude;
	var mapOptions = {
		center: new google.maps.LatLngAlt(currPosLat, currPosLng),
		zoom: 12
	};
	var map = new google.maps.Map(document.getElementById("map"),
	mapOptions);
}
function fail() {
	document.getElementById("map").innerHTML = "Unable to access your current location.";
}

}
