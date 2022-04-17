// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getFirestore, doc, collection, getDoc, getDocs, setDoc } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

//Global attributes of id or class
const entrepreneurs = document.getElementById("entrepreneurs"); //The id for validates the user if is entrepreneur or not.
const recomendationSection = document.getElementById("recomendations"); //The third part of the home page

let recomendation = []; //Array to have many recomendation products

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
/*onAuthStateChanged(auth, async (user) => {
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
});*/

//RECOMENDATION THE THIRD PART OF THE HOME PAGE
//Lectura de firebase recomendations
const getAllRecomendations = async () => {
    const collectionRef = collection(db, "recomendations");
    const { docs } = await getDocs(collectionRef);

    recomendationSection.classList.add("loaded");

    recomendation = docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        }
    });

    // Recorro cada uno de los 4 productos que tengo en mi arreglo
    recomendation.forEach(recomendation => {
        // Llamo la funcion productTemplate para cada product.
        recomendationTemplate(recomendation);
    });
    return recomendation;
};

//Acá se hace la función para que me aparezcan el arreglo de recomendation
const recomendationTemplate = (item) => {

    //Create an "a" element, and add class of "recomendations", this is for the modal that can open like popups.
    const recomendation = document.createElement("a");
    recomendation.className = "recomendation"; //The class of recomendatons for CSS (.product)

    //Here we put the A code but I don't know how to do it now, so this will be ignored for some reasons.

    let tagHtml; //This tag is for show that is more closer or not
    if(item.isClose){
        tagHtml = `<span class="product__tag product__tag--close">Cerca de ti</span>`;
    } else {
        tagHtml =  `<span class="product__tag">Normal</span>`;
    }

    //Add HTML
    recomendation.innerHTML = `
    <div class="recomendation__cards">
        ${tagHtml}
        <figure>
            <img src="${item.image}" alt="${item.name}" class="recomendation__image">
        </figure>
        <h2 class="recomendation__name">${item.name}</h2>
        <p class="recomendation__price">${item.price}</p>
    </div>
    `;

    //Add each recomendation products to our app
    recomendationSection.appendChild(recomendation);
}

getAllRecomendations();