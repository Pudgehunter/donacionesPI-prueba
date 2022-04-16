// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2gLD-eFCLZxeW2BQYWpd_haUwW8B1LwA",
    authDomain: "proweb-1.firebaseapp.com",
    projectId: "proweb-1",
    storageBucket: "proweb-1.appspot.com",
    messagingSenderId: "608825969113",
    appId: "1:608825969113:web:28149248158158f2a5f1c8"
};

const formatCurrency = (price) => {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    }).format(price);
};

window.onscroll = function (e) {
    const posY = document.documentElement.scrollTop;
    if (posY >= 150) {
        menu.classList.add('menu--scroll');
    } else {
        menu.classList.remove('menu--scroll');
    }
}