const img = document.querySelector("img");
const music = document.querySelector("audio");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const title = document.getElementById("title");
const songs = [{
    name: "1",

},
{
    name: "2",

},
{
    name: "3",


},
{
    name: "4",


}]


let isPlaying = false;

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause")
};
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play")
};
play.addEventListener("click", () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }

});
const loadSong = (songs) => {

    music.src = "songs/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg"
};

sonsIndex = 0;

const nextSongs = () => {
    sonsIndex = (sonsIndex + 1) % songs.length;
    loadSong(songs[sonsIndex]);
    playMusic();
};
const prevSongs = () => {
    sonsIndex = (sonsIndex - 1 + songs.length) % songs.length;
    loadSong(songs[sonsIndex]);
    playMusic();
};

next.addEventListener("click", nextSongs);
prev.addEventListener("click", prevSongs);