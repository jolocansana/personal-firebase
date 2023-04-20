import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs, setDoc, doc, deleteDoc} from 'firebase/firestore'
import {ref} from 'vue'

const firebaseConfig = {
  apiKey: "AIzaSyDww5US825-txXSWIxdDp9EgFvevsuoeJY",
  authDomain: "personal-firebase-ba85c.firebaseapp.com",
  projectId: "personal-firebase-ba85c",
  storageBucket: "personal-firebase-ba85c.appspot.com",
  messagingSenderId: "310858854942",
  appId: "1:310858854942:web:1c9bfafe4f5aac6c2ab40f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const linksCollection = collection(db, 'links')
const collectionString = 'links'

export const createLink = link => {
  const docId = link.path.replaceAll('/','-')
  console.log(docId)
  setDoc(doc(db, collectionString, docId), {
    path: link.path,
    url: link.url,
  });
}

// export const getLink = async id => {
//   const link = await linksCollection.doc(id).get()
//   return link.exists ? link.data() : null
// }

// export const updateLink = (id, link) => {
//   const docId = id.replaceAll('/','-')
//   updateDoc(doc(db, "users", docId), {
//     path: link.path,
//     url: link.url,
//   });
// }

export const deleteLink = id => {
  const docId = id.replaceAll('/','-')
  deleteDoc(doc(db, collectionString, docId));
}

export const useLoadLinks = async () => {
  var links = []
  const sample = "string"
  links = await getDocs(linksCollection).then((snapshot) => {
    let links_list = []
    snapshot.docs.forEach((doc) => {
      links_list.push({ ...doc.data() });
    });
    return links_list
  });
  return links
}