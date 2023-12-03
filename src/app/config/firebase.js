import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

import { addDoc, collection, doc, serverTimestamp, updateDoc, getFirestore, getDocs} from "firebase/firestore";
import { getDownloadURL, ref, uploadString, getStorage  , uploadBytes,  } from "firebase/storage";







const firebaseConfig = {
    apiKey: "AIzaSyCACk7l5M7ixoKj49yTxi3LgUJH5_g_Ta0",
    authDomain: "test-f994e.firebaseapp.com",
    projectId: "test-f994e",
    storageBucket: "test-f994e.appspot.com",
    messagingSenderId: "39216256426",
    appId: "1:39216256426:web:a2ebbf430b41d2f81507d3"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new FacebookAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);




const Facebook = async () => {



    try {
        const fb = signInWithPopup(auth, provider);

        return fb;
        alert('Successfully Login')


    }

    catch (e) {
        alert(e.message)
    }
}




// async function postAd({ input, updateFile }) {

//     try {
//         const url = await uploadImage(updateFile)

//         await addDoc(collection(db, "posts"), {
//             input,
//             imageURL: url,
            
//         });

//         alert("Ad Successfully posted")
//     }
//     catch (e) {
//         alert(e.message)
//     }
// }

// async function uploadImage(updateFile) {

//     try {
//         const storageRef = ref(storage, 'posts' + updateFile.name);
//         await uploadBytes(storageRef, updateFile)
//         const url = await getDownloadURL(storageRef);
//         return url
//     }

//     catch (e) {
//         alert(e.message)
//     }
// }

async function postAd(input, updateFile) {
    try {
      const url = await uploadImage(updateFile);
      await addDoc(collection(db, "posts"), {
        input,  
        imageUrl: url,
      });
      alert("Ad Posted Succesfully");
    } catch (e) {
      alert(e.message);
    }
  }
  
  async function uploadImage(updateFile) {
    try {
      const storageRef = ref(storage, "posts" + updateFile.name);
      await uploadBytes(storageRef, updateFile);
      const url = await getDownloadURL(storageRef);
  
      return url;
    } catch (e) {
      alert(e.message);
    }
  }

  async function getAds() {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const ads = [];
    querySnapshot.forEach((doc) => {
      ads.push(doc.data());
    });
    return ads;
  }

export { Facebook ,postAd, getAds}