// Created by Graeme
// Created on: April  4
// JS functions for index.html


// This function calculates the surface area and volume of a cone
'use strict'
function answer() {
	// Declares variables 
	let radius = parseFloat(document.getElementById('radius-of-base').value)
	let height = parseFloat(document.getElementById('height-of-cone').value)
	let slantHeight = parseFloat(document.getElementById('slant-height').value)
	let unit = document.getElementById('unit-of-measurement').innerHTML
	//Calulates SA and volume
	let surfaceArea = Math.PI * (radius **2) + Math.PI * radius * slantHeight
	let volume = 1 / 3 * (Math.PI * (radius **2)) * height
	//Answers
	document.getElementById('surface-area').innerHTML = 'The surface area is ' + surfaceArea + unit
	document.getElementById('volume').innerHTML = 'The volume is ' + surfaceArea + unit + "²"
}
