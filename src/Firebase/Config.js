import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCWFXj9j0H4PR1zZ5cevnhGvO1UaVhM_Ng",
  authDomain: "look-movie.firebaseapp.com",
  projectId: "look-movie",
  storageBucket: "look-movie.appspot.com",
  messagingSenderId: "508983214520",
  appId: "1:508983214520:web:0513b6158b109ad9810f4d",
  measurementId: "G-YZP6HKM8VS",
};

const app = initializeApp(firebaseConfig);

export default app