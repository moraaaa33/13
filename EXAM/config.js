// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDxFcYUO5pJCZZEGgcD-px1DIdnE86ySQU",
    authDomain: "new-project-7c236.firebaseapp.com",
    databaseURL: "https://new-project-7c236-default-rtdb.firebaseio.com",
    projectId: "new-project-7c236",
    storageBucket: "new-project-7c236.firebasestorage.app",
    messagingSenderId: "824349475082",
    appId: "1:824349475082:web:15ee08c599f67053b73af3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  export { database };