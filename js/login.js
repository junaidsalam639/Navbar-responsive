import {auth , db , storage } from './../firebase.mjs'
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection , addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


document.getElementById('btn').addEventListener('click' , ()=>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(email == '' || password == ''){
       alert('please fill the input')
    }
    else{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          setTimeout(() => {
            alert('login successfully');
            if(user.email == 'junaidsalam639@gmail.com'){
                location.href = './admin.html'
            }
            else{
                location.href = './../index.html'
            }
          }, 1000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Your singup is first');
          location.href = './singup.html'
        });

}

});

