import axios from "axios";
import { derived, writable } from "svelte/store";

const createFormAuth = ()=>{
    const {subscribe, update, set} = writable({
        username:null,
        email:'',
        password:''
    })

    return {
        subscribe,
        set,
        update,
        setForm:()=>{
            console.log('Estoy en setForm')
            update(f=>{
                if(f.username===null) return f = {username:'' ,email:'', password:''}
                else return f = {username:null ,email:'', password:''}
            })
        },
        signIn:async ()=>{
            try {
                let body = {}
                update((form)=>{
                    body = form
                    return form
                })
                const {data} = await axios.post('/auth/signIn?profile=Ajedrez-online', body)
        
                console.log(data)
                return {token: data.token, user: data.user}
            } catch (error) {
                return {error: error.response.data.error}
            }
        },
        signUp:async ()=>{
            try {
                let body = {}
                update((form)=>{
                    body = form
                    return form
                })
                const {data} = await axios.post("/auth/signUp?profile=Ajedrez-online", body)
                return {message: data.message}
            } catch (error) {
                return {error: error.response.data.error}
            }
        },
        forGotPassword:async ({email, moduleCase})=>{
            try {
                // Recive un email y devuelve un link para confirmar el cambio de contraseña
                const body = {email, moduleCase}
                const {data} = await axios.post("/auth/forgotPassword", body)
                
                return {message: data.message}
            } catch (error) {
                return {error: error.response.data.error}
            }
        },
        reset:()=>{
            set({
                username:null,
                email:'',
                password:''
            })
        },
    }
}

export const authStore = createFormAuth()

export const stateFormStore = derived(authStore, ({username})=> typeof username==='string' )

export const errorStore = derived(authStore, ({username, email, password}) => {
    // ACA VAN TODOS LOS CONDICIONALES EN FUNCION DE LAS SI EXISTE username
    // console.log(username)
    let errors = []

    if(typeof username==='string' && !username.length) errors.push('Missing username')
    if(!email.length) errors.push('Missing email')
    if(!password.length) errors.push('Missing password')

    if(typeof username==='string' && email.length && password.length){
        // Esto es register

        const errorUsername = controlRegisterErrors(username, 'username')
        const errorEmail = controlRegisterErrors(email, 'email')
        const errorPassword = controlRegisterErrors(password, 'password')
        
        if(errorUsername) errors.push(errorUsername)
        if(errorEmail) errors.push(errorEmail)
        if(errorPassword) errors.push(errorPassword)
    }

    return errors
})


const controlRegisterErrors = (str, locker)=>{
    try {
        const regex = {
            username: /^[a-zA-Z0-9_ -]{3,20}$/, ///[a-zA-Z0-9 ]{3,32}/gi, // /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{4,29}$/igm,
            email:/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
// - at least 8 characters
// - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
// - Can contain special characters
        }
        const messageError = {
            username:'Usernames can contain characters a-z, 0-9. The username cannot start nor end with a period. It must also not have more than one period sequentially. From 3 to 20 chars.',
            email:'Invalid email.',
            password:'It must be at least 8 characters in length, have 1 uppercase letter, 1 lowercase letter, and 1 number (special characters are allowed)'
        }
        if(!regex[locker].test(str)) throw new Error(messageError[locker])
        return ''
    } catch (err) {
        return err.message
    }
}