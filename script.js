const $ = (id) => document.getElementById(id);

let current = 0;
let answered = false;

$("title").textContent = CONFIG.title;
$("intro").textContent = CONFIG.intro;

function normalize(s) {
  return s.trim().toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, " ");
}

function hearts() {
  for (let i = 0; i < 12; i++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = ["💛", "💖", "✨"][i % 3];
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDelay = Math.random() * 0.5 + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
}

function showQuestion() {
  const item = CONFIG.questions[current];
  answered = false;
  $("count").textContent = `Question ${current + 1} of ${CONFIG.questions.length}`;
  $("question").textContent = item.q;
  $("answer").value = "";
  $("answer").disabled = false;
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("hint").textContent = "";
  $("bar").style.width = (current / CONFIG.questions.length) * 100 + "%";
  $("answer").focus();
}

function showReward() {
  $("game").hidden = true;
  $("bar").style.width = "100%";
  $("playlistTitle").textContent = CONFIG.playlistTitle;
  $("final").textContent = CONFIG.finalMessage;

  const list = $("songs");
  list.innerHTML = "";
  CONFIG.playlist.forEach((song, i) => {
    const li = document.createElement("li");
    li.style.animationDelay = i * 0.15 + "s";
    const search = encodeURIComponent(`${song.title} ${song.artist}`);

    const strong = document.createElement("strong");
    strong.textContent = song.title;
    const by = document.createElement("span");
    by.className = "by";
    by.textContent = song.artist;
    const note = document.createElement("p");
    note.textContent = song.note;
    const link = document.createElement("a");
    link.href = `https://open.spotify.com/search/${search}`;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Listen on Spotify →";

    li.append(strong, by, note, link);
    list.appendChild(li);
  });

  $("reward").hidden = false;
  hearts();
}

$("start").addEventListener("click", () => {
  $("start").hidden = true;
  $("intro").hidden = true;
  $("game").hidden = false;
  showQuestion();
});

$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (answered) return;

  const item = CONFIG.questions[current];
  const guess = normalize($("answer").value);
  const ok = item.answers.some((a) => normalize(a) === guess);

  if (!ok) {
    const msgs = CONFIG.wrongMessages;
    $("feedback").textContent = msgs[Math.floor(Math.random() * msgs.length)];
    $("feedback").className = "feedback bad";
    return;
  }

  answered = true;
  $("answer").disabled = true;
  $("feedback").textContent = "Correct! Reward: " + item.reward;
  $("feedback").className = "feedback good";
  hearts();

  setTimeout(() => {
    current++;
    if (current >= CONFIG.questions.length) showReward();
    else showQuestion();
  }, 2200);
});

$("hintBtn").addEventListener("click", () => {
  $("hint").textContent = "Hint: " + CONFIG.questions[current].hint;
});
