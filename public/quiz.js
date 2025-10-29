const videoBank = [
  { video: "videos/banana.mp4", correctAnswer: "banana man" },
  { video: "videos/whale.mp4", correctAnswer: "whale" },
  { video: "videos/dog.mp4", correctAnswer: "dog" }
];
const allAnswers = [
  "Swimming","A dog running","A ball rolling","A car driving","A person walking", "banana man"
];

let idx = 0, selected = null, responses = [];
const $v = document.getElementById("video");
const $opts = document.getElementById("options");
const $next = document.getElementById("nextBtn");
const $pid = document.getElementById("pid");
const $start = document.getElementById("startBtn");

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadTrial() {
  selected = null;
  $next.disabled = true;
  const trial = videoBank[idx];
  $v.src = trial.video;
  $v.load();
  $opts.innerHTML = "";
  const opts = shuffle([trial.correctAnswer, ...allAnswers.filter(x => x !== trial.correctAnswer).slice(0,3)]);
  opts.forEach(label => {
    const d = document.createElement("div");
    d.className = "option";
    d.textContent = label;
    d.onclick = () => {
      document.querySelectorAll(".option").forEach(n => n.classList.remove("selected"));
      d.classList.add("selected");
      selected = label;
      $next.disabled = false;
    };
    $opts.appendChild(d);
  });
}

$next.onclick = async () => {
  const trial = videoBank[idx];
  responses.push({
    video: trial.video,
    correctAnswer: trial.correctAnswer,
    participantAnswer: selected,
    isCorrect: selected === trial.correctAnswer,
    ts: new Date().toISOString()
  });

  idx++;
  if (idx < videoBank.length) {
    loadTrial();
  } else {
    const payload = {
      pid: $pid.value || `p-${Date.now()}`,
      startedAt: responses[0]?.ts,
      responses
    };
    try {
      await window.submitResultsToFirestore(payload);
      document.querySelector(".wrap").innerHTML = "<h1>Thanks!</h1><p>Your responses were submitted.</p>";
    } catch (e) {
      document.querySelector(".wrap").innerHTML = "<h1>Thanks!</h1><p>Submission failed. Please send your exported file.</p>";
    }
  }
};

// Start button → hide start screen, show quiz screen
$start.onclick = () => {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  loadTrial();
};
