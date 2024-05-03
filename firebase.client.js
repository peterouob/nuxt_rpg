import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBX-OxxMim5cM1BqtsLvtciWmCH4AiRWnw",
    authDomain: "nuxt-fire-98338.firebaseapp.com",
    projectId: "nuxt-fire-98338",
    storageBucket: "nuxt-fire-98338.appspot.com",
    messagingSenderId: "1001688226762",
    appId: "1:1001688226762:web:4e5a6694f296ace26ccd33",
    measurementId: "G-82WLLJ9PPZ"
};

const  app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

