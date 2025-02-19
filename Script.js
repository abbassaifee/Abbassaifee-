document.addEventListener("DOMContentLoaded", function() {
    startCountdown("2025-04-20T00:00:00");
});

function startCountdown(date) {
    const countdownElement = document.getElementById("countdown");
    const weddingDate = new Date(date).getTime();

    setInterval(function() {
        const now = new Date().getTime();
        const difference = weddingDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

function toggleMusic() {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
        document.getElementById("music-btn").innerText = "🔊 Stop Music";
    } else {
        music.pause();
        document.getElementById("music-btn").innerText = "🎵 Play Music";
    }
}
