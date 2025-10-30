document.addEventListener("DOMContentLoaded", () => {
  // --- Quiz Data ---

  const practiceBank = [
    {
      video: "videos/stacked_0.mp4",
      correctAnswer: "Whale Breaching the Water",
    },
    {
      video: "videos/stacked_4.mp4",
      correctAnswer: "Phoenix Rising from Ashes",
    },
    {
      video: "videos/stacked_1.mp4",
      correctAnswer: "Roller Coaster Going Downhill",
    },
  ];

  // Update studyBank with all videos and their correct answers
  const studyBank = [
    {
      video: "videos/stacked_2.mp4", // Example path, replace
      correctAnswer: "Answer1",
    },
    {
      video: "videos/stacked_3.mp4", // Example path, replace
      correctAnswer: "Answer2",
    },
  ];

  // Need to add all correct answers (practice AND study) to this list to generate wrong options
  const allAnswers = [
    //All possible answers
    "A Person Swimming",
    "A Dog Fetching",
    "A Ball Rolling",
    "A Car Driving",
    "A Person Walking",
    "A Banana Man",
    "A Bird Flying",
    "A Person Running",
    "Whale Breaching the Water",
    "Phoenix Rising from Ashes",
    "Roller Coaster Going Downhill",
    "Answer1",
    "Answer2",
  ];

  // --- Quiz State ---
  let idx = 0;
  let selected = null;
  let isAnswered = false; // State to track if feedback is shown
  let isPractice = true; // State to track practice vs. study
  let responses = []; // This will be cleared after practice

  // --- DOM Element References ---
  const $v = document.getElementById("video");
  const $opts = document.getElementById("options");
  const $next = document.getElementById("nextBtn");
  const $pid = document.getElementById("pid");
  const $start = document.getElementById("startBtn");
  const emailError = document.getElementById("email-error");
  const questionEl = document.getElementById("question");
  const $feedback = document.getElementById("feedback");
  //Screen references
  const $startScreen = document.getElementById("start-screen");
  const $quizScreen = document.getElementById("quiz-screen");
  const $intermissionScreen = document.getElementById("intermission-screen");
  const $startQuizBtn = document.getElementById("startQuizBtn");

  //Check if elements exist
  if (
    !$pid ||
    !$start ||
    !$v ||
    !$opts ||
    !$next ||
    !emailError ||
    !questionEl ||
    !$feedback ||
    !$startScreen ||
    !$quizScreen ||
    !$intermissionScreen ||
    !$startQuizBtn
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
      emailError.textContent = ""; //Clear error
    } else {
      $start.disabled = true;
      if (email.length > 0 && !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
      } else if (email.length > 0) {
        emailError.textContent = "Email must end with @lsu.edu";
      } else {
        emailError.textContent = ""; //Clear error if empty
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
    const currentBank = isPractice ? practiceBank : studyBank;

    if (idx >= currentBank.length) {
      console.error("loadTrial called out of bounds");
      return;
    }

    //Reset state for the new trial
    selected = null;
    isAnswered = false;
    $next.disabled = true;
    $next.textContent = "Next";
    $feedback.textContent = "";
    $feedback.className = "feedback";
    $opts.style.pointerEvents = "auto";

    const trial = currentBank[idx];
    $v.src = trial.video;

    $v.onerror = (e) => {
      console.error(
        `Error loading video. The browser failed to load: ${trial.video}`
      );
      questionEl.textContent = "Error: Could not load video file.";
    };

    //Update question text
    const questionPrefix = isPractice ? "Practice" : "Video";
    questionEl.textContent = `What is happening in this video? (${questionPrefix} ${
      idx + 1
    } of ${currentBank.length})`;

    $v.load();
    $v.play().catch((e) => {
      console.warn(
        "Autoplay was prevented by the browser. User must click play."
      );
    });
    $opts.innerHTML = ""; //Clear old options

    //Get 3 random wrong answers from the pool
    const wrongAnswers = allAnswers.filter((x) => x !== trial.correctAnswer);
    const shuffledWrong = shuffle(wrongAnswers).slice(0, 3);

    //Combine and shuffle correct + wrong answers
    const opts = shuffle([trial.correctAnswer, ...shuffledWrong]);

    opts.forEach((label) => {
      const d = document.createElement("div");
      d.className = "option";
      d.textContent = label;
      d.onclick = () => {
        if (isAnswered) return;

        $feedback.textContent = "";
        $feedback.className = "feedback";
        document.querySelectorAll(".option").forEach((n) => {
          n.classList.remove("selected");
          n.classList.remove("incorrect-answer");
          n.classList.remove("correct-answer");
        });

        d.classList.add("selected");
        selected = label;
        $next.disabled = false;
      };
      $opts.appendChild(d);
    });
  }

  //--- Event Listeners ---
  //MODIFIED: $next.onclick logic
  $next.onclick = async () => {
    const currentBank = isPractice ? practiceBank : studyBank;

    // --- CASE 1: User is clicking "Continue" (PRACTICE ONLY) ---
    if (isAnswered) {
      isAnswered = false; //Reset state
      idx++; //Move to the next index

      if (idx < currentBank.length) {
        // --- More videos in this round ---
        loadTrial();
      } else {
        // --- This round is over (PRACTICE IS OVER) ---
        $quizScreen.style.display = "none";
        $intermissionScreen.style.display = "block";
      }
      return; // Stop execution here
    }

    // --- CASE 2: User is clicking "Next" (to submit answer) ---
    const trial = currentBank[idx];
    const isCorrect = selected === trial.correctAnswer;
    const selectedOption = $opts.querySelector(".option.selected");

    if (!selectedOption) return;

    if (isPractice) {
      // --- PRACTICE LOGIC ---
      if (isCorrect) {
        isAnswered = true; // This will trigger "Continue" logic next click
        $next.textContent = "Continue";
        $opts.style.pointerEvents = "none";
        selectedOption.classList.add("correct-answer");
        $feedback.textContent = "Correct!";
        $feedback.className = "feedback correct";
      } else {
        selectedOption.classList.add("incorrect-answer");
        $next.disabled = true;
        $feedback.textContent = "Incorrect. Please try again.";
        $feedback.className = "feedback incorrect";
      }
    } else {
      // --- REAL STUDY LOGIC ---
      // Store the response (right or wrong)
      responses.push({
        video: trial.video,
        correctAnswer: trial.correctAnswer,
        participantAnswer: selected,
        isCorrect: isCorrect,
        ts: new Date().toISOString(),
      });

      idx++; // Move to the next index

      if (idx < currentBank.length) {
        // --- More videos in this round ---
        loadTrial();
      } else {
        // This round is over (STUDY IS OVER) ---
        // Submit results
        $next.disabled = true;
        $next.textContent = "Submitting...";
        const payload = {
          pid: $pid.value,
          startedAt: responses[0]?.ts || new Date().toISOString(),
          responses,
        };

        try {
          if (typeof window.submitResultsToFirestore !== "function") {
            console.error("Firebase submit function not found!");
            throw new Error("Submit function not ready.");
          }
          await window.submitResultsToFirestore(payload);
          document.querySelector(".wrap").innerHTML =
            "<h1>Thanks!</h1><p>Your responses were submitted.</p>";
        } catch (e) {
          console.error("Firestore submission failed:", e);
          document.querySelector(".wrap").innerHTML =
            "<h1>Submission Failed</h1><p>There was an error submitting your responses. Please refresh the page and try again.</p>";
        }
      }
    }
  };

  // Start button → hide start screen, show quiz screen
  $start.onclick = () => {
    $startScreen.style.display = "none";
    $quizScreen.style.display = "block";
    loadTrial(); // Load the first practice trial
  };

  // Start Quiz button → hide intermission, show quiz
  $startQuizBtn.onclick = () => {
    isPractice = false; // Switch to study mode!
    idx = 0; // Reset index
    responses = []; // Clear practice responses
    $intermissionScreen.style.display = "none";
    $quizScreen.style.display = "block";
    loadTrial(); // Load the first REAL study trial
  };
}); // End of DOMContentLoaded
