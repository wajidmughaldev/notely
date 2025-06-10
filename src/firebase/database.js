// db.js (Firebase Firestore wrapper)
import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    where,
  } from "firebase/firestore";
  import { db as firestore } from "./config"; // your initialized Firestore instance
  
  const db = {};
  
  db.notes = {
    // Add (requires userId)
    add: async (uid, data) => {
      try {
        const colRef = collection(firestore, "users", uid, "notes");
        const docRef = await addDoc(colRef, { ...data, uid }); // still include uid for good measure
        return { id: docRef.id, ...data };
      } catch (error) {
        console.error("Add Error:", error);
        return null;
      }
    },
  
    // Update (requires userId + noteId)
    update: async (uid, id, data) => {
      try {
        const docRef = doc(firestore, "users", uid, "notes", id);
        await updateDoc(docRef, data);
        return true;
      } catch (error) {
        console.error("Update Error:", error);
        return false;
      }
    },
  
    // Delete (requires userId + noteId)
    delete: async (uid, id) => {
      try {
        const docRef = doc(firestore, "users", uid, "notes", id);
        await deleteDoc(docRef);
        return true;
      } catch (error) {
        console.error("Delete Error:", error);
        return false;
      }
    },
  
    // Get single note (requires userId + noteId)
    get: async (uid, id) => {
      try {
        const docRef = doc(firestore, "users", uid, "notes", id);
        const snap = await getDoc(docRef);
        return snap.exists() ? { id: snap.id, ...snap.data() } : null;
      } catch (error) {
        console.error("Get Error:", error);
        return null;
      }
    },
  
    // List all notes for user (requires userId)
    list: async (uid) => {
      try {
        const colRef = collection(firestore, "users", uid, "notes");
        const snap = await getDocs(colRef);
        return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error("List Error:", error);
        return [];
      }
    },
  };
  
  export default db;
  