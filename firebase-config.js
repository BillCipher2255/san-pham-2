const firebaseConfig = {
  apiKey: "AIzaSyDqT1PNkF4t_IuqrMuTEAMY_JcJ4IGUouw",
  authDomain: "final-product-2d8d7.firebaseapp.com",
  projectId: "final-product-2d8d7",
  storageBucket: "final-product-2d8d7.firebasestorage.app",
  messagingSenderId: "1001701617508",
  appId: "1:1001701617508:web:10a2cda4507ff4f1db1471"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
var db = firebase.firestore();