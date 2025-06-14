// src/services/noteService.js
import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDocs,
    query,
    orderBy 
  } from "firebase/firestore";
  import { db } from "../firebase/config";
  
  const noteService = {
    addNote: async (uid, data) => {
      try {
        const colRef = collection(db, "users", uid, "notes");
        const docRef = await addDoc(colRef, data);
        return { id: docRef.id, ...data };
      } catch (error) {
        console.error("Error adding note:", error);
        return null;
      }
    },
  
    updateNote: async (uid, id, data) => {
      try {
        const docRef = doc(db, "users", uid, "notes", id);
        await updateDoc(docRef, data);
        return true;
      } catch (error) {
        console.error("Error updating note:", error);
        return false;
      }
    },
  
    deleteNote: async (uid, id) => {
      try {
        const docRef = doc(db, "users", uid, "notes", id);
        await deleteDoc(docRef);
        return true;
      } catch (error) {
        console.error("Error deleting note:", error);
        return false;
      }
    },
  
    getAllNotes: async (uid) => {
      try {
        const colRef = collection(db, "users", uid, "notes");
        const q = query(colRef, orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error("Error fetching notes:", error);
        return [];
      }
    },
  };
  
  export default noteService;
  