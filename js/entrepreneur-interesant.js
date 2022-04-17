import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = [
         {
             id: 1,
             name: "Bowls Veggies",
             price: "12000",
             image: "./img/manual/bowlsveggies.jpg",
             isRecommended: true,
             isClose: true,
             description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido.",
             type: "healthy",
         },
         {
             id: 2,
             name: "Crispetas Leepops",
             price: "1500",
             image: "./img/manual/leepops.jpg",
             isRecommended: true,
             isClose: true,
             description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido.",
             type: "snacks",
         },
         {
             id: 3,
             name: "Takis fuego",
             price: "5000",
             image: "./img/manual/takisfuegos.jpg",
             isRecommended: true,
             isClose: true,
             description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido.",
             type: "snacks",
         },
         {
             id: 4,
             name: "Sweet cake bakery",
             price: "4200",
             image: "./img/manual/sweetbakery.jpg",
             isRecommended: true,
             isClose: true,
             description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido.",
             type: "sweet",
         }
     ];
    
    products.forEach(async (product) => {
        await setDoc(doc(db, "recomendations", `344324dfr${product.id}`), product);
    });