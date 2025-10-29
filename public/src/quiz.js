document.addEventListener("DOMContentLoaded", () => {
  // --- Quiz Data ---

  // Simplified to only include the practice bank
  const videoBank = [
    {
      video: "/videos/stacked_0.mp4", // <-- FINAL PATH: Absolute from 'src' server root
      correctAnswer: "Whale",
    },
    {
      video: "/videos/stacked_1.mp4", // <-- FINAL PATH
      correctAnswer: "Rollercoaster",
    },
    {
      video: "/videos/stacked_2.mp4", // <-- FINAL PATH
      correctAnswer: "Kangaroo",
    },
  ];

  // Updated allAnswers to match
  const allAnswers = [
    // Distractor answers
    "Swimming",
    "A dog running",
    "A ball rolling",
    "A car driving",
    "A person walking",
    "banana man",
    "whale",
    "dog",

    // Practice Bank Answers
    "Whale",
    "Rollercoaster",
    "Kangaroo",
  ];

  // --- Quiz State ---
  let idx = 0;
  let selected = null;
  let responses = []; // Responses will be stored here
  // 'isPractice' variable removed for simplicity

  // --- DOM Element References ---
  const $v = document.getElementById("video");
  const $opts = document.getElementById("options");
  const $next = document.getElementById("nextBtn");
  const $pid = document.getElementById("pid");
  const $start = document.getElementById("startBtn");
  const emailError = document.getElementById("email-error"); // For validation
  const questionEl = document.getElementById("question");

  // Check if elements exist
  if (
    !$pid ||
    !$start ||
    !$v ||
    !$opts ||
    !$next ||
    !emailError ||
    !questionEl
  ) {
    console.error(
      "Quiz script failed: Could not find one or more required DOM elements."
    );
    document.body.innerHTML =
      "<h1>Error</h1><p>A critical error occurred. Please refresh the page. (Code: DOM_INIT_FAIL)</p>";
    return; // Stop execution
  }

  // --- Email Validation Logic (Unchanged) ---
  $pid.addEventListener("input", () => {
    const email = $pid.value.trim().toLowerCase();
    if (email.endsWith("@lsu.edu")) {
      $start.disabled = false;
      emailError.textContent = ""; // Clear error
    } else {
      $start.disabled = true;
      if (email.length > 0 && !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
      } else if (email.length > 0) {
        emailError.textContent = "Email must end with @lsu.edu";
      } else {
        emailError.textContent = ""; // Clear error if empty
      }
    }
  });

  // --- Quiz Functions ---
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function loadTrial() {
    // No currentBank, just videoBank
    if (idx >= videoBank.length) {
      console.error("loadTrial called out of bounds");
      return;
    }
    selected = null;
    $next.disabled = true;
    const trial = videoBank[idx];

    // --- RE-ADDING DEBUGGING CODE ---
    console.log("Attempting to load video from:", trial.video);
    $v.src = trial.video;

    // Add an error listener to see WHY it's failing
    $v.onerror = (e) => {
      console.error(
        `Error loading video. The browser failed to load: ${trial.video}`
      );
      console.error(
        "This is a 404 NOT FOUND error. Please check your file paths and server setup."
      );
      questionEl.textContent = "Error: Could not load video file.";
    };
    // --- END DEBUGGING CODE ---

    // Update question text
    questionEl.textContent = `What is happening in this video? (Practice ${
      idx + 1
    } of ${videoBank.length})`;

    $v.load();
    $opts.innerHTML = ""; // Clear old options

    // Get 3 random wrong answers
    const wrongAnswers = allAnswers.filter((x) => x !== trial.correctAnswer);
    const shuffledWrong = shuffle(wrongAnswers).slice(0, 3);

    // Combine and shuffle correct + wrong answers
    const opts = shuffle([trial.correctAnswer, ...shuffledWrong]);

    opts.forEach((label) => {
      const d = document.createElement("div");
      d.className = "option";
      d.textContent = label;
      d.onclick = () => {
        document
          .querySelectorAll(".option")
          .forEach((n) => n.classList.remove("selected"));
        d.classList.add("selected");
        selected = label;
        $next.disabled = false;
      };
      $opts.appendChild(d);
    });
  }

  // --- Event Listeners ---
  // MODIFIED $next.onclick
  $next.onclick = async () => {
    const trial = videoBank[idx];

    // Store responses locally (this is fine, just for state)
    responses.push({
      video: trial.video,
      correctAnswer: trial.correctAnswer,
      participantAnswer: selected,
      isCorrect: selected === trial.correctAnswer,
      ts: new Date().toISOString(),
    });

    idx++; // Move to the next index

    if (idx < videoBank.length) {
      // --- Case 1: More videos in the practice round ---
      loadTrial();
    } else {
      // --- Case 2: Practice round is over ---
      // DO NOT SUBMIT. Just show a completion message.
      document.querySelector(".wrap").innerHTML =
        "<h1>Practice Complete</h1><p>You have finished the practice problems.</p>";
    }
  };

  // Start button → hide start screen, show quiz screen
  $start.onclick = () => {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    loadTrial(); // Load the first practice trial
  };
}); // End of DOMContentLoaded
