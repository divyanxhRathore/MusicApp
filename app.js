const authorName = document.getElementById("author");
const songName = document.getElementById("name");
const forwardBtn = document.getElementById("forwardBtn");
const playPauseBtn = document.querySelector("#playPause i");
const backBtn = document.getElementById("backwardBtn");
const audio = document.querySelector("audio");
const bg = document.querySelector("#iconBg img");
const icon = document.querySelector("#musicIcon img")

let isPlaying = false;

// songs information added in object form
const songs = [{
    name: "theweeknd",
    title: "Blinding Lights",
    author: "The Weeknd",
},
{
    name: "drugs",
    title: "Drugs",
    author: "12 AM"
},
{
    name: "travis",
    title: "Goosebumps",
    author: "Traviss Scott",
},
{
    name: "hope",
    title: "Hope",
    author: "XXXtentacion",
}]

const play = () => {
    isPlaying = true;
    audio.play();
    icon.classList.add("animate");
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
}

const pause = () =>{
    isPlaying = false;
    audio.pause();
    icon.classList.remove("animate");
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
};

playPauseBtn.addEventListener("click", () =>{
    if(isPlaying){
        pause();
    }else{
        play();
    }
});

const loadSong = (songs) => {
    songName.textContent = songs.title;
    authorName.textContent = songs.author;
    audio.src = "./assets/songs/"+songs.name+".mp3";
    icon.src = "./assets/images/"+songs.name+".jpg";
    bg.src = "./assets/images/"+songs.name+".jpg";
}

let index = 0;
const nextSong = () =>{
    index = (index + 1) % songs.length;
    loadSong(songs[index]);
    isPlaying = false;
};

const prevSong = () =>{
    index = (index - 1 + songs.length) % songs.length;
    loadSong(songs[index]);
    isPlaying = false;
};

forwardBtn.addEventListener("click", nextSong);
backBtn.addEventListener("click", prevSong);