function setMood(mood) {
    showMoodMessage(mood);
    playMusic(mood);
    playDingSound();
    spawnParticles(mood);
}

/* 🎶 PLAYLIST SESUAI MOOD */
function playMusic(mood) {
    const player = document.getElementById("player");
    let playlistURL = "";

    if (mood === "calm") {
        playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0";
    } 
    else if (mood === "blue") {
        playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1";
    } 
    else if (mood === "happy") {
        playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC";
    } 
    else if (mood === "angry") {
        playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfWWJh";
    }

    player.innerHTML = `
        <iframe src="${playlistURL}" width="100%" height="380" frameborder="0"
        allow="encrypted-media"></iframe>
    `;
}

/* 🔮 MOOD DECISION GENERATOR */
function showMoodMessage(mood) {
    const messageBox = document.getElementById("mood-message");

    const messages = {
        calm: [
            "Take a deep breath 🌿",
            "You are safe. You are here.",
            "Slow down, everything is okay."
        ],
        blue: [
            "It's okay to feel sad 💙",
            "Be kind to yourself today.",
            "You are stronger than you think."
        ],
        happy: [
            "Shine bright today! 🌈",
            "Keep spreading your joy.",
            "Your smile is powerful!"
        ],
        angry: [
            "It's okay to feel anger 🔥",
            "Take a breath before you react.",
            "Use your energy wisely."
        ]
    };

    const list = messages[mood];
    const randomMsg = list[Math.floor(Math.random() * list.length)];

    messageBox.innerText = randomMsg;
    messageBox.classList.add("show");

    setTimeout(() => {
        messageBox.classList.remove("show");
    }, 4000);
}

/* 🔔 SUARA 'DING' */
function playDingSound() {
    const audio = new Audio("ding.mp3");
    audio.volume = 0.4;
    audio.play();
}

/* ✨ PARTICLE ANIMATION */
function spawnParticles(mood) {
    const colors = {
        calm: "#98e6d8",
        blue: "#6bb6ff",
        happy: "#ffe066",
        angry: "#ff5959"
    };

    const container = document.body;

    for (let i = 0; i < 20; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.background = colors[mood];
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = 1 + Math.random() * 1 + "s";

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}
