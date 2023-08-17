import {auth , db , storage } from './../firebase.mjs'
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection , addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


document.getElementById('btn').addEventListener('click' , ()=>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name');
    let number = document.getElementById('number');

    if(email == '' || password == '' || name.value == '' || number.value == ''){
       alert('please fill the input')
    }
    else{

        createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        try {
            const docRef = await addDoc(collection(db, "Practice-Data"), {
              email : email,
              password : password,
              name : name.value,
              number : number.value,
            });
            console.log("Document written with ID: ", docRef.id);
            setTimeout(() => {
                alert('singup successfully');
                location.href = './login.html'
            }, 1000);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
  })
  .catch((error) => {
      const errorCode = error.code;
    const errorMessage = error.message;
    // ..
})

}

});