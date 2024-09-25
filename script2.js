window.onload = function() {
    const balloon = document.getElementById('balloon');
    const surprise = document.getElementById('surprise');
    const surpriseVideo = document.getElementById('surprise-video');

    // Agregar un evento de clic al globo
    balloon.addEventListener('click', function() {
        balloon.style.display = 'none'; // Oculta el globo
        surprise.style.display = 'block'; // Muestra la sorpresa
        surpriseVideo.play();
    });
};

