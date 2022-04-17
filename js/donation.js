// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

//Global attributes
const entrepreneurs = document.getElementById("entrepreneurs"); //The id for validates the user if is entrepreneur or not.

//Receives the user in the Firebase data
const getUserInfo = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (e) {
        console.log(e);
    }
}


//The software recognize if is the user is a entrepreneur, fundations or client.
onAuthStateChanged(auth, async (user) => {
    if (user) { //Receives the data of the user
        const userInfo = await getUserInfo(user.uid); //User information, this gives all data of the user conectect with e-mail or google.

        //The if conditions of the requirements
        if (userInfo.isEntrepreneurs == true) { //If is the user is entrepreneur, the software shall show statistic page
            entrepreneurs.classList.add("visible");
        } else if (userInfo.isEntrepreneurs == false) {  //If is not entrepreneur, the software shall not show statistic page
            entrepreneurs.classList.remove("visible");
        }

    } else {
        //If is not entrepreneur, the software shall not show statistic page
        entrepreneurs.classList.remove("visible");
    }
});
