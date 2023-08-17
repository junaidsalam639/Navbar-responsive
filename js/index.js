import {auth , db , storage } from './../firebase.mjs'
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user);
      document.getElementById('inner').innerHTML = `
      <a href="" id='logout' onclick='log()'>logout</a>`
    } else {
      
    }
  });


//   logout function
function log(){
    signOut(auth).then(() => {
      alert('singout successfully')
    }).catch((error) => {
      // An error happened.
    });
}

window.log = log