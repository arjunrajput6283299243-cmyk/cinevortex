import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PASTE_YOUR_KEY",
  authDomain: "PASTE",
  projectId: "PASTE",
  storageBucket: "PASTE",
  messagingSenderId: "PASTE",
  appId: "PASTE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const movieList = document.getElementById("movieList");

async function loadMovies() {
  const querySnapshot = await getDocs(collection(db, "movies"));
  movieList.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const movie = doc.data();
    movieList.innerHTML += `
      <div class="movie-card">
        <img src="${movie.poster}" width="200">
        <h3>${movie.title}</h3>
        <video width="200" controls>
          <source src="${movie.video}" type="video/mp4">
        </video>
      </div>
    `;
  });
}

loadMovies();