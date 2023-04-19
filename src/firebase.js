import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore'
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

// export const createLink = link => {
//   return linksCollection.add(link)
// }

// export const getLink = async id => {
//   const link = await linksCollection.doc(id).get()
//   return link.exists ? link.data() : null
// }

// export const updateLink = (id, link) => {
//   return linksCollection.doc(id).update(link)
// }

// export const deleteLink = id => {
//   return linksCollection.doc(id).delete()
// }

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