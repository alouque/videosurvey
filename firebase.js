import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  setLogLevel,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  // apiKey: "",
  authDomain: "video-study-1dfc0.firebaseapp.com",
  projectId: "video-study-1dfc0",
  storageBucket: "video-study-1dfc0.appspot.com",
  messagingSenderId: "910625697541",
  appId: "1:910625697541:web:c3764d83f25ddfc16e516c",
  measurementId: "G-0Q1G7JG6ZX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// setLogLevel('Debug'); // Uncomment for Firestore debugging

(async () => {
  try {
    await signInAnonymously(auth);
    console.log("Firebase anonymous sign-in successful.");
  } catch (e) {
    console.error("Firebase anonymous sign-in failed:", e);
    // Optionally notify the user that results cannot be saved
    document.body.innerHTML =
      "<h1>Error</h1><p>Could not connect to the study database. Please check your connection and refresh.</p>";
  }
})();

// Firestore submit helper
window.submitResultsToFirestore = async function (payload) {
  console.log("Submitting to Firestore:", payload);
  const pRef = await addDoc(collection(db, "participants"), {
    pid: payload.pid,
    startedAt: payload.startedAt,
    userAgent: navigator.userAgent,
    createdAt: serverTimestamp(),
  });

  for (const r of payload.responses) {
    await addDoc(collection(db, "participants", pRef.id, "responses"), {
      video: r.video,
      participantAnswer: r.participantAnswer,
      correctAnswer: r.correctAnswer,
      isCorrect: r.isCorrect,
      ts: r.ts,
      createdAt: serverTimestamp(),
    });
  }
  console.log("Firestore submission complete.");
  return true;
};
