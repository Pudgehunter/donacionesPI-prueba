// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, getDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

//Global attributes of id or class
const entrepreneurs = document.getElementById("entrepreneurs"); //The id for validates the user if is entrepreneur or not.
//user buttons validating if it is entrepreneur or client
const userCatalogue = document.getElementById("userCatalogue"); //Entrepreneur
//user interaction changes depends if he is entrepreneur or not
const userNavFavorite = document.getElementById("userNavFavorite"); //CLIENT
const userNavShop = document.getElementById("userNavShop"); //CLIENT
const userNavFeedbacks = document.getElementById("userNavFeedbacks"); //ENTREPRENEUR
const userNavCatalogue = document.getElementById("userNavCatalogue"); //ENTREPRENEUR
//const user = user.find(user => user.id == userId);
const userSection = document.getElementById("user"); //<div id="user"> </div>
const userImage = document.getElementById("userImage"); //Her RedPanda Image or default image
const userName = document.getElementById("userName"); //Mei Lee
const userNickname = document.getElementById("userNickname"); //@RedPanda
const userUbication = document.getElementById("userUbication"); // Toronto, Canada
const userDescription = document.getElementById("userDescription"); //Lorem ipsum
const userEFollow = document.getElementById("userEFollow"); //13 emprendimientos 
const userFFollow = document.getElementById("userFFollow"); //24 Fundaciones

//The software recognize if is the user is a entrepreneur, fundations or client.
const getUserInfo = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (e) {
        console.log(e);
    }
}

//FUNCTIONS
//Load profile information
const loadProductInfo = (user) => {
    userName.innerText = user.name; //Mei Lee
    userNickname.innerText = user.nickname; //@RedPanda
    userUbication.innerText = user.ubication; //Toronto, Canada
    userEFollow.innerText = user.eFollow + " emprendimientos"; //0 seguidores
    userFFollow.innerText = user.fFollow + " fundaciones"; //0  fundaciones
    userDescription.innerText = user.description; //Su descripción
    userImage.setAttribute("src", user.image);

     //The if conditions of the requirements
    if(user.isEntrepreneurs){//If is the user is entrepreneur, the software shall show statistic page
        entrepreneurs.classList.add("visible"); //Nav statistic
        userCatalogue.classList.add("visible"); //Entrepreneur catalogue part
        userNavFeedbacks.classList.add("visible"); //Entrepreneur interaction feedbacks
        userNavCatalogue.classList.add("visible"); //Entrepreneur interaction catalogue
        userNavFavorite.classList.add("hidden"); //Entrepreneur can't see favorite part NOT FUNCTION
        userNavShop.classList.add("hidden"); //Entrepreneur can't see shop part NOT FUNCTION
    } else if (userInfo.isEntrepreneurs == false) {  //If is not entrepreneur, the software shall not show statistic page
        entrepreneurs.classList.remove("visible"); //Nav statistic NOT FUNCTION
        userCatalogue.classList.remove("visible"); //Entrepreneur catalogue part NOT FUNCTION
        userNavFeedbacks.classList.remove("visible"); //Entrepreneur interaction feedbacks NOT FUNCTION
        userNavCatalogue.classList.remove("visible"); //Entrepreneur interaction catalogue NOT FUNCTION
        userNavFavorite.classList.remove("hidden"); //Client can see favorite part
        userNavShop.classList.remove("hidden"); //Client can see shop part
    }

}

onAuthStateChanged(auth, async (user) => {
    if (user) {
        //Los datos del firebase carrito
        const userInfo = await getUserInfo(user.uid);//User information, this gives all data of the user conectect with e-mail or google.
        
        loadProductInfo(userInfo); //Loadproduct is the information of the user 
        //console.log(userInfo);
    } else {
    }
});