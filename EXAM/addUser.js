// (1) Imports
import { database } from "./config.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";


// (2) function to send data into the firebase 
function writeUserData(userId, firstName, lastname
) {
  set(ref(database , 'users/' + userId), { 
    firstName: firstName,
    lastName: lastname,
  })
  .then(() => {
    alert("Data sent successfully!");
  })
  .catch((error) => {
    alert(error);
  });
}


// (3) handle from in html
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const userId = Date.now().getTime().toString();

    