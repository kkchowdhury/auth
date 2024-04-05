import { datadogRum } from '@datadog/browser-rum';
datadogRum.init({
    applicationId: '5497fe57-a64c-4dda-8e73-999b2c3a8452',
    clientToken: 'pub33f8f2d18197e40c6753e04645049746',
    site: 'us5.datadoghq.com',
    service: 'auth', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 80,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'allow',
});


// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqzAnc8GWylzz917YuYwhLarbKku8LE2o",
    authDomain: "auth-f7501.firebaseapp.com",
    projectId: "auth-f7501",
    storageBucket: "auth-f7501.appspot.com",
    messagingSenderId: "943960156531",
    appId: "1:943960156531:web:c73716d97220860951fd06"
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
            datadogRum.setUser({
                email: email
            });
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
             datadogRum.setUser({
                email: email
            });
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}
