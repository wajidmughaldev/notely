import {create} from 'zustand'
import { persist } from 'zustand/middleware';
const useAuthStore = create(
    persist(
    (set)=>({
    currentUser:null,

    setUser:(userData)=>{
        set(()=>({
            currentUser:userData
        }))
    }

})))
export default useAuthStore;