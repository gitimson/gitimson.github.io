const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const screen = document.querySelector(".screen"),
      name = document.querySelector(".name");

screen.onmouseenter = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    name.innerText = name.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return name.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= name.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}
 const musicContainer = document.getElementById("music-container");
 const playBtn = document.getElementById("play");
 const prevBtn = document.getElementById("prev");
 const nextBtn = document.getElementById("next");
 const audio = document.getElementById("audio");
 const progress = document.getElementById("progress");
 const progressContainer = document.getElementById("progress-container");
 const title = document.getElementById("title");
 const cover = document.getElementById("cover");
 const songs = ["jazz"];
 let songIndex = 0;
 loadSong(songs[songIndex]);
 function loadSong(song){
    title.innerText = song;
    audio.src = `./music/${song}.mp3`;
    cover.src = `./images/${song}.jpg`;
 }
 function playSong(){
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fa").classList.remove("fa-play");
    playBtn.querySelector("i.fa").classList.add("fa-pause")
    audio.play();
 }
 function pauseSong(){
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fa").classList.add("fa-play")
    playBtn.querySelector("i.fa").classList.remove("fa-pause")
    audio.pause();
 }
 function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong()
 }
 function nextSong() {
    songIndex++
    if (songIndex > songs.length - 1){
        songIndex = 0
    }
    loadSong(songs[songIndex]);
    playSong();
 }
 function updateProgress(e){
    const { duration, currentTime} = e.srcElement;
    const progressPerCent = (currentTime / duration) * 100;
    progress.style.width = `${progressPerCent}%`;
 }
 function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
 }
 playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");
    if (isPlaying){
        pauseSong();
    } else {
        playSong();
    }
 });
 
 $(document).ready(function() {
   function checkName() {
     const nameId = $('#nameId');
     const surnameId = $('#surnameId');
 
     for (let lett of nameId.val()) {
       if (!isNaN(lett)) {
         alert('Numbers in the name field are not allowed');
         return false;
       }
     }
 
     for (let lett of surnameId.val()) {
       if (!isNaN(lett)) {
         alert('Numbers in the surname field are not allowed');
         return false;
       }
     }
 
     return true;
   }
 
   const emailInput = $('#emailInput');
 
   function checkEmail() {
     if (emailInput.val().includes('@') && emailInput.val().includes('.')) {
       return true;
     } else {
       emailInput.val('');
       alert('Wrong mail form');
       return false;
     }
   }
 
   function checkPhone() {
     const phoneInp = $('#phoneInp').val();
     if (phoneInp[0] == '+' && phoneInp.length == 12) {
       return true;
     } else {
       alert('Incorrect number form');
       return false;
     }
   }
 
   const birthInp = $('#birthInp');
   birthInp.on('change', function checkDate() {
     if (+birthInp.val().split('-')[0] > new Date().getFullYear() - 122) {
       return true;
     } else {
       alert('You entered the wrong year');
       birthInp.val('');
       return false;
     }
   });
 
   const submitBtn = $('#submitBtn');
   submitBtn.on('click', function() {
     if (checkName() && checkPhone() && checkEmail()) {
       alert('You have successfully registered!');
     } else {
       alert('Fix the errors and resend');
     }
   });
 });
 
 $('#submitBtn').css('background-color', '#cf7e21');
 
 $('#submitBtn').text('Confirm');
 
 $('img').click(function() {
     window.location.href = 'index.html';
   });
 
   document.querySelector('h1').addEventListener("mouseover",function() {
       document.querySelector('h1').style.backgroundColor = '#cf7e21';
       document.querySelector('h1').style.borderRadius = '8px';
     });
   
     document.querySelector('h1').addEventListener("mouseout",function() {
       document.querySelector('h1').style.backgroundColor = '';
       document.querySelector('h1').style.borderRadius = '';
     });
 
   var inputElements = document.querySelectorAll("input");
     inputElements.forEach(function(inputElement) {
       inputElement.addEventListener("keypress", function(event) {
         console.log(event.key);
       });
     });
     
 document.querySelector("h6").addEventListener("click", function(){
   document.querySelector("h6").style.opacity="0.2";
 });
 
 