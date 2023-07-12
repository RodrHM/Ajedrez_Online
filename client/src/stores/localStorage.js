import { writable } from "svelte/store";

const createLocalStorageStore = ()=>{
    const {subscribe, update, set} = writable({})
    return {
        subscribe,
        setItem:({key, value})=>{
            let strValue = value
            // if(typeof value !== 'string') {
            //     strValue = JSON.stringify(strValue)
            // }
            localStorage.setItem(key, strValue)
            update(cache=>cache[key]=strValue)
        },
        getItem:(key)=>{
            return localStorage.getItem(key)
        },
        removeItem:(key)=>{
            localStorage.removeItem(key)
            update(cache=>delete cache[key])
        },
        creal:()=>{
            localStorage.clear()
            set({})
        }
    }
}

export const CustomLocalStorage = createLocalStorageStore()