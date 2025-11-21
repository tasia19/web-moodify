/* ===============================
      SET MOOD MAIN FUNCTION
================================= */
function setMood(mood) {
    showMoodMessage(mood);
    playMusic(mood);
    playDingSound();
    spawnParticles(mood);

    // Set dropdown generator mengikuti kartu yang dipilih
    const moodSelect = document.getElementById("moodChoice");
    if (moodSelect) moodSelect.value = mood;
}

/* ===============================
      SPOTIFY PLAYLIST PLAYER
================================= */
function playMusic(mood) {
    const player = document.getElementById("player");
    let playlistURL = "";

    const playlist = {
        calm: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
        sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",   // perbaikan dari 'blue'
        happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",
        angry: "https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfWWJh",
    };

    playlistURL = playlist[mood];

    player.innerHTML = `
        <iframe 
            src="${playlistURL}" 
            width="100%" 
            height="380" 
            frameborder="0"
            allow="encrypted-media">
        </iframe>
    `;
}

/* ===============================
      MOOD MESSAGE POP-UP
================================= */
function showMoodMessage(mood) {
    const messageBox = document.getElementById("mood-message");

    /* ------------------ MOOD BUBBLE MESSAGE ------------------ */

function moodMessage(mood) {
    const pesan = {
        happy: [
            "Kamu terlihat ceria hari ini! 😊 Semoga energi baikmu menular ke semua hal yang kamu lakukan!",
            "Hari ini penuh warna! Terus sebarkan kebaikan ya ✨"
        ],
        calm: [
            "Tenang itu bukan lemah, tapi bentuk kekuatan. Kamu hebat 🤍",
            "Ketenanganmu hari ini membuat segalanya terasa lebih ringan."
        ],
        blue: [
            "Tidak apa-apa merasa sedih. Istirahat sebentar, kamu tidak sendirian 💙",
            "Perasaanmu valid. Pelan-pelan ya, kamu akan baik-baik saja."
        ],
        angry: [
            "Tarik napas sebentar… kamu butuh ruang untuk diri sendiri. Kamu kuat ❤️‍🔥",
            "Emosi itu wajar. Yang penting kamu tidak memendam semuanya sendirian."
        ]
    };

    const list = pesan[mood] || ["Bagaimana pun perasaanmu, kamu tetap berharga."];

    return list[Math.floor(Math.random() * list.length)];
}

/* ------------------ BUBBLE RENDER ------------------ */

function addBubble(type, text) {
    const wrap = document.getElementById("bubbleContainer");

    const bubble = document.createElement("div");
    bubble.className = `bubble ${type}`;
    bubble.innerHTML = `
        <div class="label">${type === "user" ? "Mood kamu" : "Pesan untukmu"}</div>
        ${text}
    `;

    wrap.appendChild(bubble);

    // auto scroll ke bawah
    wrap.scrollTop = wrap.scrollHeight;
}

/* ------------------ BUTTON EVENT ------------------ */

document.getElementById("generateButton").addEventListener("click", () => {
    const selectedMood = document.querySelector("input[name='mood']:checked");

    if (!selectedMood) {
        alert("Pilih mood dulu ya 😊");
        return;
    }

    const mood = selectedMood.value;

    // tampilkan bubble user
    addBubble("user", mood);

    // tampilkan bubble mood message
    const pesan = moodMessage(mood);
    setTimeout(() => addBubble("ai", pesan), 500);
});


    const list = messages[mood];
    const randomMsg = list[Math.floor(Math.random() * list.length)];

    messageBox.innerText = randomMsg;
    messageBox.classList.add("show");

    setTimeout(() => {
        messageBox.classList.remove("show");
    }, 4000);
}

/* ===============================
          DING SOUND
================================= */
function playDingSound() {
    const audio = new Audio("ding.mp3");
    audio.volume = 0.4;
    audio.play();
}

/* ===============================
        PARTICLE ANIMATION
================================= */
function spawnParticles(mood) {
    const colors = {
        calm: "#98e6d8",
        blue: "#6bb6ff",
        happy: "#ffe066",
        angry: "#ff5959"
    };

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.background = colors[mood];
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = 1 + Math.random() * 1 + "s";

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}
