import { writable } from "svelte/store"


const createUser = ()=>{
    const {subscribe, update, set} = writable({
      _id:'',
      name:'Cosme Fulanito',
      email:'',
      color:'',
      performance:{
        games:29,
        victories:7,
        defeats:1,
        draw:0,
      },
      statistics:{
        gamesAverage:"50%",
        victoriesAverage:"90%",
        defeatsAverage:"75%",
      },
    })

    return {
        subscribe,
        setUser:(user)=>{
            set(user)
            console.log(user)
        },
        reset:()=>{
          set({
            _id:'',
            name:'Cosme Fulanito',
            email:'',
            color:'',
            performance:{
              games:29,
              victories:7,
              defeats:1,
              draw:0,
            },
            statistics:{
              gamesAverage:"50%",
              victoriesAverage:"90%",
              defeatsAverage:"75%",
            },
          })
        }
    }
}

export const userStore = createUser()