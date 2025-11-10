loop = true
function troll() {

    document.querySelector(".petter").style.display = "block";
    const audio = new Audio('AudioEstourado.mp3');
    audio.loop = true;
    audio.play().catch(e => { });
    // loop()
}
// Para recarregando
document.addEventListener('keydown', (e) => {
    if (e.key === 'F5') location.reload();
    loop = false
});

function loop() {
    while (loop == true) {
        // Entra em fullscreen uma vez
        document.documentElement.requestFullscreen();

        // Só sai do fullscreen repetidamente
        setInterval(() => {
            try {
                document.exitFullscreen();
            } catch (e) {
                // Ignora erros
            }
        }, 10);
    }
}