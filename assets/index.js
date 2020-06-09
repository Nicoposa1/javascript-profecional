import MediaPlayer from './MediaPLayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const button = document.querySelector("button");
const muteUnmute = document.querySelector("#UnMute");


const player = new MediaPlayer({element: video, plugins: [new AutoPlay ()]})
button.onclick = () => player.togglePlay ()

muteUnmute.onclick = () => player.UnMute()