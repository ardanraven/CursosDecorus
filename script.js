const scriptURL = "https://script.google.com/macros/s/AKfycbycl1Y1iomVeabhE6Awhb7Dk4FzoqBToQPQGsiSfkW58kbQN3gJ72YDMxYewqELBUgK/exec"; // Substitua

fetch(scriptURL)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("playlists");

    data.forEach(playlist => {
      const section = document.createElement("section");
      section.className = "playlist";

      const title = document.createElement("h2");
      title.textContent = playlist.folderName;

      section.appendChild(title);

      playlist.files.forEach(audio => {
        const audioDiv = document.createElement("div");
        audioDiv.className = "audio-item";

        const label = document.createElement("span");
        label.textContent = audio.name;

        const player = document.createElement("audio");
        player.controls = true;
        player.src = audio.url;

        audioDiv.appendChild(label);
        audioDiv.appendChild(player);
        section.appendChild(audioDiv);
      });

      container.appendChild(section);
    });
  })
  .catch(err => {
    console.error("Erro ao carregar podcasts:", err);
  });
