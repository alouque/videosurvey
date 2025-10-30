document.addEventListener("DOMContentLoaded", () => {
  // --- Quiz Data ---

  const practiceBank = [
    {
      video: "videos/stacked_0.mp4",
      correctAnswer: "A whale breaching the ocean surface",
    },
    {
      video: "videos/stacked_4.mp4",
      correctAnswer: "A phoenix rising from ashes",
    },
    {
      video: "videos/stacked_1.mp4",
      correctAnswer: "A roller coaster plummeting down a steep track",
    },
  ];

  // Update studyBank with all videos and their correct answers
  const studyBank = [
    {
      video: "videos/0.mp4",
      correctAnswer: "A whale breaching the ocean surface",
    },
    {
      video: "videos/1.mp4",
      correctAnswer: "A roller coaster plummeting down a steep track",
    },
    {
      video: "videos/2.mp4",
      correctAnswer: "A kangaroo bounding across the outback",
    },
    { video: "videos/3.mp4", correctAnswer: "A rocket launching into space" },
    { video: "videos/4.mp4", correctAnswer: "A phoenix rising from ashes" },
    { video: "videos/5.mp4", correctAnswer: "A fire ant army marching" },
    {
      video: "videos/6.mp4",
      correctAnswer: "A horse leaping a wooden fence",
    },
    {
      video: "videos/7.mp4",
      correctAnswer: "A deer leaping over a fallen log",
    },
    {
      video: "videos/8.mp4",
      correctAnswer: "A cheetah sprinting across the savannah",
    },
    { video: "videos/9.mp4", correctAnswer: "A scateboarder grinding a rail" },
    {
      video: "videos/10.mp4",
      correctAnswer: "A tornado spinning wildly across a plain",
    },
    {
      video: "videos/11.mp4",
      correctAnswer: "A spaceship entering hyperspace",
    },
    {
      video: "videos/12.mp4",
      correctAnswer: "A snake striking at prey",
    },
    {
      video: "videos/13.mp4",
      correctAnswer: "A surfer riding a massive wave",
    },
    {
      video: "videos/14.mp4",
      correctAnswer: "A spider weaving a web swiftly",
    },
    {
      video: "videos/15.mp4",
      correctAnswer: "A boxer throwing a powerful punch",
    },
    {
      video: "videos/16.mp4",
      correctAnswer: "A mantis shrimp striking with lightning speed",
    },
    {
      video: "videos/17.mp4",
      correctAnswer: "A waterfall crashing down a cliff",
    },
    {
      video: "videos/18.mp4",
      correctAnswer: "A squirrel leaping from tree to tree",
    },
    {
      video: "videos/19.mp4",
      correctAnswer: "A dragonfly zipping over a pond",
    },
    {
      video: "videos/20.mp4",
      correctAnswer: "A race car zooming on a track",
    },
    {
      video: "videos/21.mp4",
      correctAnswer: "A hammer striking a nail",
    },
    {
      video: "videos/22.mp4",
      correctAnswer: "A firework exploding in the sky",
    },
    {
      video: "videos/23.mp4",
      correctAnswer: "A lightning bolt striking a tree",
    },
    {
      video: "videos/24.mp4",
      correctAnswer: "A wolf pack running through snow",
    },
    {
      video: "videos/25.mp4",
      correctAnswer: "A dolphin leaping through waves",
    },
    {
      video: "videos/26.mp4",
      correctAnswer: "A python constricting its prey",
    },
    {
      video: "videos/27.mp4",
      correctAnswer: "A falcon catching prey mid-flight",
    },
    {
      video: "videos/28.mp4",
      correctAnswer: "A volcano sending ash into the sky",
    },
    {
      video: "videos/29.mp4",
      correctAnswer: "A jet ski speeding across a lake",
    },
    {
      video: "videos/30.mp4",
      correctAnswer: "A pelican diving for fish",
    },
    {
      video: "videos/31.mp4",
      correctAnswer: "A stallion rearing up and kicking",
    },
    {
      video: "videos/32.mp4",
      correctAnswer: "A jet plane banking sharply",
    },
    {
      video: "videos/33.mp4",
      correctAnswer: "A catapult launching a projectile",
    },
    {
      video: "videos/34.mp4",
      correctAnswer: "A jellyfish pulsating gracefully in water",
    },
    {
      video: "videos/35.mp4",
      correctAnswer: "A geyser erupting hot water into the air",
    },
    {
      video: "videos/36.mp4",
      correctAnswer: "A hummingbird darting between flowers",
    },
    {
      video: "videos/37.mp4",
      correctAnswer: "A squirrel darting between tree branches",
    },
    {
      video: "videos/38.mp4",
      correctAnswer: "A car drifting on a wet road",
    },
    {
      video: "videos/39.mp4",
      correctAnswer: "A hummingbird flicking its wings rapidly",
    },
    {
      video: "videos/40.mp4",
      correctAnswer: "A dragon breathing fire",
    },
    {
      video: "videos/41.mp4",
      correctAnswer: "A spider leaping to catch a fly",
    },
    {
      video: "videos/42.mp4",
      correctAnswer: "A spacecraft landing on Mars",
    },
    {
      video: "videos/43.mp4",
      correctAnswer: "A spaceship launching a probe",
    },
    {
      video: "videos/44.mp4",
      correctAnswer: "A speedboat racing across water",
    },
    {
      video: "videos/45.mp4",
      correctAnswer: "A cheetah twisting mid-run",
    },
    {
      video: "videos/46.mp4",
      correctAnswer: "A rocket booster separating mid-flight",
    },
    {
      video: "videos/47.mp4",
      correctAnswer: "A bumblebee buzzing between flowers",
    },
    {
      video: "videos/48.mp4",
      correctAnswer: "A snowboarder jumping off a ramp",
    },
    {
      video: "videos/49.mp4",
      correctAnswer: "A bison charging across the plains",
    },
    {
      video: "videos/50.mp4",
      correctAnswer: "A waterwheel turning in a river",
    },
    {
      video: "videos/51.mp4",
      correctAnswer: "A rocket landing vertically on a platform",
    },
    {
      video: "videos/52.mp4",
      correctAnswer: "A sea turtle swimming powerfully through waves",
    },
    {
      video: "videos/53.mp4",
      correctAnswer: "A mountain biker flying over a jump",
    },
    {
      video: "videos/54.mp4",
      correctAnswer: "A racehorse thundering down a track",
    },
    {
      video: "videos/55.mp4",
      correctAnswer: "A hawk diving towards the ground",
    },
    {
      video: "videos/56.mp4",
      correctAnswer: "A cobra flaring its hood",
    },
    {
      video: "videos/57.mp4",
      correctAnswer: "A horse rearing up wildly",
    },
    {
      video: "videos/58.mp4",
      correctAnswer: "A scorpion snapping its claws",
    },
    {
      video: "videos/59.mp4",
      correctAnswer: "A volcano erupting molten lava",
    },
    {
      video: "videos/60.mp4",
      correctAnswer: "A dragonfly skimming over water",
    },
    {
      video: "videos/61.mp4",
      correctAnswer: "A fire spreading quickly through a forest",
    },
    {
      video: "videos/62.mp4",
      correctAnswer: "A mountain goat scaling a steep cliff",
    },
    {
      video: "videos/63.mp4",
      correctAnswer: "A tornado swirling dust and debris",
    },
    {
      video: "videos/64.mp4",
      correctAnswer: "A whale spouting water from its blowhole",
    },
    {
      video: "videos/65.mp4",
      correctAnswer: "A falcon chasing a pigeon",
    },
    {
      video: "videos/66.mp4",
      correctAnswer: "A hummingbird hovering rapidly",
    },
    {
      video: "videos/67.mp4",
      correctAnswer: "A submarine surfacing rapidly",
    },
    {
      video: "videos/68.mp4",
      correctAnswer: "A comet streaking across the night sky",
    },
    {
      video: "videos/69.mp4",
      correctAnswer: "A butterfly fluttering among flowers",
    },
    {
      video: "videos/70.mp4",
      correctAnswer: "A wind turbine spinning in strong gusts",
    },
    {
      video: "videos/71.mp4",
      correctAnswer: "A parrot flapping its colorful wings",
    },
    {
      video: "videos/72.mp4",
      correctAnswer: "A drone zipping through a forest",
    },
    {
      video: "videos/73.mp4",
      correctAnswer: "A submarine launching a missile",
    },
    {
      video: "videos/74.mp4",
      correctAnswer: "A lightning storm illuminating the sky",
    },
    {
      video: "videos/75.mp4",
      correctAnswer: "A racecar making a tight turn",
    },
    {
      video: "videos/76.mp4",
      correctAnswer: "A skier carving through fresh powder",
    },
    {
      video: "videos/77.mp4",
      correctAnswer: "A lioness pouncing on prey",
    },
    {
      video: "videos/78.mp4",
      correctAnswer: "A submarine diving deep underwater",
    },
    {
      video: "videos/79.mp4",
      correctAnswer: "A snow leopard sprinting up a rocky slope",
    },
    {
      video: "videos/80.mp4",
      correctAnswer: "A waterfall cascading into a pool",
    },
    {
      video: "videos/81.mp4",
      correctAnswer: "A shark breaching to catch a seal",
    },
    {
      video: "videos/82.mp4",
      correctAnswer: "A rocket sled speeding along a track",
    },
    {
      video: "videos/83.mp4",
      correctAnswer: "A fighter jet breaking the sound barrier",
    },
    {
      video: "videos/84.mp4",
      correctAnswer: "A hawk flapping its wings powerfully",
    },
    {
      video: "videos/85.mp4",
      correctAnswer: "A river rapidly flooding a valley",
    },
    {
      video: "videos/86.mp4",
      correctAnswer: "A whale tail slapping the ocean surface",
    },
    {
      video: "videos/87.mp4",
      correctAnswer: "A glacier calving into the sea",
    },
    {
      video: "videos/88.mp4",
      correctAnswer: "A tornado lifting debris into the air",
    },
    {
      video: "videos/89.mp4",
      correctAnswer: "A gazelle bounding over the grasslands",
    },
    {
      video: "videos/90.mp4",
      correctAnswer: "A storm cloud swirling violently",
    },
    {
      video: "videos/91.mp4",
      correctAnswer: "A thunderstorm rolling over mountains",
    },
    {
      video: "videos/92.mp4",
      correctAnswer: "A tornado touching down in a field",
    },
    {
      video: "videos/93.mp4",
      correctAnswer: "A comet blazing through space",
    },
    {
      video: "videos/94.mp4",
      correctAnswer: "A condor soaring over mountains",
    },
    {
      video: "videos/95.mp4",
      correctAnswer: "A surfer cutting sharply on a wave",
    },
    {
      video: "videos/96.mp4",
      correctAnswer: "A caterpillar transforming into a butterfly",
    },
    {
      video: "videos/97.mp4",
      correctAnswer: "A horse sprinting across a beach",
    },
    {
      video: "videos/98.mp4",
      correctAnswer: "A glacier moving slowly but powerfully",
    },
    {
      video: "videos/99.mp4",
      correctAnswer: "A spider scuttling quickly across leaves",
    },
    {
      video: "videos/100.mp4",
      correctAnswer: "A glider soaring silently in the sky",
    },
    {
      video: "videos/101.mp4",
      correctAnswer: "A meteor blazing through the atmosphere",
    },
    {
      video: "videos/102.mp4",
      correctAnswer: "A panther stalking silently through the jungle",
    },
    {
      video: "videos/103.mp4",
      correctAnswer: "A helicopter lifting off from a helipad",
    },
    {
      video: "videos/104.mp4",
      correctAnswer: "A lava flow creeping down a mountainside",
    },
    {
      video: "videos/105.mp4",
      correctAnswer: "A peregrine falcon swooping toward the ground",
    },
  ];

  const allAnswers = [
    // --- 106 Study Answers (0-105)---
    "A whale breaching the ocean surface",
    "A roller coaster plummeting down a steep track",
    "A kangaroo bounding across the outback",
    "A rocket launching into space",
    "A phoenix rising from ashes",
    "A fire ant army marching",
    "A horse leaping a wooden fence",
    "A deer leaping over a fallen log",
    "A cheetah sprinting across the savannah",
    "A scateboarder grinding a rail",
    "A tornado spinning wildly across a plain",
    "A spaceship entering hyperspace",
    "A snake striking at prey",
    "A surfer riding a massive wave",
    "A spider weaving a web swiftly",
    "A boxer throwing a powerful punch",
    "A mantis shrimp striking with lightning speed",
    "A waterfall crashing down a cliff",
    "A squirrel leaping from tree to tree",
    "A dragonfly zipping over a pond",
    "A race car zooming on a track",
    "A hammer striking a nail",
    "A firework exploding in the sky",
    "A lightning bolt striking a tree",
    "A wolf pack running through snow",
    "A dolphin leaping through waves",
    "A python constricting its prey",
    "A falcon catching prey mid-flight",
    "A volcano sending ash into the sky",
    "A jet ski speeding across a lake",
    "A pelican diving for fish",
    "A stallion rearing up and kicking",
    "A jet plane banking sharply",
    "A catapult launching a projectile",
    "A jellyfish pulsating gracefully in water",
    "A geyser erupting hot water into the air",
    "A hummingbird darting between flowers",
    "A squirrel darting between tree branches",
    "A car drifting on a wet road",
    "A hummingbird flicking its wings rapidly",
    "A dragon breathing fire",
    "A spider leaping to catch a fly",
    "A spacecraft landing on Mars",
    "A spaceship launching a probe",
    "A speedboat racing across water",
    "A cheetah twisting mid-run",
    "A rocket booster separating mid-flight",
    "A bumblebee buzzing between flowers",
    "A snowboarder jumping off a ramp",
    "A bison charging across the plains",
    "A waterwheel turning in a river",
    "A rocket landing vertically on a platform",
    "A sea turtle swimming powerfully through waves",
    "A mountain biker flying over a jump",
    "A racehorse thundering down a track",
    "A hawk diving towards the ground",
    "A cobra flaring its hood",
    "A horse rearing up wildly",
    "A scorpion snapping its claws",
    "A volcano erupting molten lava",
    "A dragonfly skimming over water",
    "A fire spreading quickly through a forest",
    "A mountain goat scaling a steep cliff",
    "A tornado swirling dust and debris",
    "A whale spouting water from its blowhole",
    "A falcon chasing a pigeon",
    "A hummingbird hovering rapidly",
    "A submarine surfacing rapidly",
    "A comet streaking across the night sky",
    "A butterfly fluttering among flowers",
    "A wind turbine spinning in strong gusts",
    "A parrot flapping its colorful wings",
    "A drone zipping through a forest",
    "A submarine launching a missile",
    "A lightning storm illuminating the sky",
    "A racecar making a tight turn",
    "A skier carving through fresh powder",
    "A lioness pouncing on prey",
    "A submarine diving deep underwater",
    "A snow leopard sprinting up a rocky slope",
    "A waterfall cascading into a pool",
    "A shark breaching to catch a seal",
    "A rocket sled speeding along a track",
    "A fighter jet breaking the sound barrier",
    "A hawk flapping its wings powerfully",
    "A river rapidly flooding a valley",
    "A whale tail slapping the ocean surface",
    "A glacier calving into the sea",
    "A tornado lifting debris into the air",
    "A gazelle bounding over the grasslands",
    "A storm cloud swirling violently",
    "A thunderstorm rolling over mountains",
    "A tornado touching down in a field",
    "A comet blazing through space",
    "A condor soaring over mountains",
    "A surfer cutting sharply on a wave",
    "A caterpillar transforming into a butterfly",
    "A horse sprinting across a beach",
    "A glacier moving slowly but powerfully",
    "A spider scuttling quickly across leaves",
    "A glider soaring silently in the sky",
    "A meteor blazing through the atmosphere",
    "A panther stalking silently through the jungle",
    "A helicopter lifting off from a helipad",
    "A lava flow creeping down a mountainside",
    "A peregrine falcon swooping toward the ground",
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
