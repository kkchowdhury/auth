// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB1Jt59ceh7shODn8dEGRZ2TIHE-8U2-SA",
  authDomain: "fir-auth-a11d7.firebaseapp.com",
  projectId: "fir-auth-a11d7",
  storageBucket: "fir-auth-a11d7.appspot.com",
  messagingSenderId: "1037033269052",
  appId: "1:1037033269052:web:b467f76fedf8c00588e039"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            window.userEmail = email;
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
            window.userEmail = email;
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}
