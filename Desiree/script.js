const playButtons = document.querySelectorAll('.playButton');

playButtons.forEach(button => {
    const audio = button.parentElement.querySelector('audio');
    const icon = button.querySelector('i');

    button.addEventListener('click', () => {
        document.querySelectorAll('audio').forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
                const otherButton = otherAudio.parentElement.querySelector('.playButton i');
                if (otherButton) {
                    otherButton.classList.remove('fa-pause');
                    otherButton.classList.add('fa-play');
                }
            }
        });
        if (audio.paused) {
            audio.play();
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        } else {
            audio.pause();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });
});