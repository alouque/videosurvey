import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "video-study-1dfc0.firebaseapp.com",
  projectId: "video-study-1dfc0",
  storageBucket: "video-study-1dfc0.appspot.com",
  messagingSenderId: "910625697541",
  appId: "1:910625697541:web:c3764d83f25ddfc16e516c",
  measurementId: "G-0Q1G7JG6ZX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

await signInAnonymously(auth);

// Firestore submit helper
window.submitResultsToFirestore = async function(payload) {
  const pRef = await addDoc(collection(db, "participants"), {
    pid: payload.pid,
    startedAt: payload.startedAt,
    userAgent: navigator.userAgent,
    createdAt: serverTimestamp()
  });

  for (const r of payload.responses) {
    await addDoc(collection(db, "participants", pRef.id, "responses"), {
      video: r.video,
      participantAnswer: r.participantAnswer,
      correctAnswer: r.correctAnswer,
      isCorrect: r.isCorrect,
      ts: r.ts,
      createdAt: serverTimestamp()
    });
  }
  return true;
};
