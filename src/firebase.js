import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBNestykZm58B1vFvaYuU1gYulf76i1mvY",
	authDomain: "twitter-clone-76769.firebaseapp.com",
	projectId: "twitter-clone-76769",
	storageBucket: "twitter-clone-76769.appspot.com",
	messagingSenderId: "174243258162",
	appId: "1:174243258162:web:0c65ae38a19173048f412b",
	measurementId: "G-G512FGCMQW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
