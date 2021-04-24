const song = document.querySelector('.song');  
const play = document.querySelector('.play');
const replay = document.querySelector('.replay');
const video = document.querySelector('.vid-container video');
const sounds = document.querySelectorAll('.sound-picker button');
const timeDisplay = document.querySelector('.time-display');

let fakeDuration = 600;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;