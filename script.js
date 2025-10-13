function playMusic(mood) {
  const player = document.getElementById("player");
  let playlistURL = "";

  if (mood === "relaxed") {
    playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6"; // contoh
  } else if (mood === "energetic") {
    playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfWWJh";
  } else if (mood === "happy") {
    playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC";
  } else if (mood === "melancholic") {
    playlistURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1";
  }

  player.innerHTML = `<iframe src="${playlistURL}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
}
