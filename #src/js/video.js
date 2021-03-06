const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'a_FSfzQ2IW4',
  });
}

document.querySelector('[data-btn-video]').addEventListener('click', () => {
    document.querySelector('[data-modal-video]').style.display='block'
    //onPlayerReady(event)
})

function onPlayerReady(event) {
  event.target.playVideo();
}


document.querySelector('[data-modal-video]').addEventListener('click', () => {
    document.querySelector('[data-modal-video]').style.display='none'
    player.stopVideo();
})

document.addEventListener("keydown", function ( event ) {
    if (event.key === "Escape") {
        document.querySelector('[data-modal-video]').style.display='none'
        player.stopVideo();
    }
})