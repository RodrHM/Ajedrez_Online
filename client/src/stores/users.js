import axios from "axios"
import { derived, writable } from "svelte/store"


const createUser = ()=>{
    const {subscribe, update, set} = writable(null)

    return {
      subscribe,
      setUser:({user})=> set(user) ,
      authUser: async ()=>{
        try {
          const token = localStorage.getItem('token')
          if(!token) return 
          const headers = {headers:{'Authorization':`Bearer ${token}`}}
          const {data} = await axios.get('/user/ajedrez', headers)
          set(data.profile)

          console.log(data)
          return {token:data.token}
        } catch (error) {
          console.log(error)
          // alert(error)
          return {error:error.response.data.error}
        }
      },
      changeUser: async (payload)=>{
        try {
          const body = payload
          
          const token = localStorage.getItem('token')
          const headers = {headers:{'Authorization':`Bearer ${token}`}}
          const {data} = await axios.put('/user/modifyAccount/ajedrez', body, headers)

          update( user => ({...user, ...data.profile}))

          return {data:data.profile}
        } catch (error) {
          // alert(error)
          return {error:error.response.data.error}
        }
      },
      reset:()=> set(null)
    }
}

// {
//   _id:'',
//   name:'Cosme Fulanito',
//   email:'',
//   color:'',
//   performance:{
//     games:29,
//     victories:7,
//     defeats:1,
//     draw:0,
//   },
//   statistics:{
//     gamesAverage:"50%",
//     victoriesAverage:"90%",
//     defeatsAverage:"75%",
//   },
// }

export const userStore = createUser()

export const authUser = derived(userStore, (user)=> !!user)