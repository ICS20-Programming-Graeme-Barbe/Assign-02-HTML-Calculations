// Created by Graeme
// Created on: April  4
// JS functions for index.html


// This function calculates the surface area and volume of a cone
'use strict';
function answer() {
	// Declares variables 
	let radius = parseFloat(document.getElementById('radius-of-base').value)
	let height = parseFloat(document.getElementById('height-of-cone').value)
	let unit = document.getElementById('unit').value
	//Calculates SA and volume
	let surfaceArea = Math.PI * radius * (radius + Math.sqrt(height ** 2 + radius ** 2))
	let volume = Math.PI * (radius **2) * height / 3
	//Answers
	document.getElementById('surface-area').innerHTML = 'The surface area of the cone is ' + surfaceArea.toFixed(2) + " " + unit + "²"
	document.getElementById('volume').innerHTML = 'The volume of the cone is ' + volume.toFixed(2) + " " + unit + "³" 
}
