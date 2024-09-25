
// Control para reproducir/pausar el video
const video = document.querySelector('video'); 
document.getElementById('playPauseVideo').addEventListener('click', function() {
    if (video.paused) {
        video.play();
        this.textContent = "⏸️ Pausar Video";
    } else {
        video.pause();
        this.textContent = "⏯️ Reproducir Video";
    }
});
