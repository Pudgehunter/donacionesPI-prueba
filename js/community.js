import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = [
         {
             id: 1,
             name: "Ayuda a Firulais",
             donations: "138400",
             goal: "560000",
             image: "./img/manual/firulais.png",
             description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido.",
         },
         {
            id: 2,
            name: "Ayuda a Firulais",
            donations: "138400",
            goal: "560000",
            image: "./img/manual/firulais.png",
            description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido.",
         }
     ];
    
    products.forEach(async (product) => {
        await setDoc(doc(db, "community", `344324dfr${product.id}`), product);
    });