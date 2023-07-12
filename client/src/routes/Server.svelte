<script>
    import { onDestroy, onMount } from "svelte";
    import { io } from 'socket.io-client'
    import Game from "../lib/Ajedrez/Game.svelte";
    import { socketServerStore } from "../stores/socket";
    import { chatStore } from "../stores/serverChat";
    import { tableStore, turnStore } from "../stores/stores";
    import { userStore } from "../stores/users";
    import { pieceBoxStore } from "../stores/pieceBox";
    
    export let id;
    let socket;


    onMount( async ()=>{
        // CONDICIONAL PARA QUE NO ENTRE EN CASO DE QUE EL ID NO SEA ENTRE 1 Y 6
        // const id_server = window.location.pathname.split('/').at(-1)
        const url = `http://localhost:3001/api/server/${id}`
        // socket = io(`http://localhost:3001/api/server/${id}`)
        socket = io(url)
        socket.on('chat message', ({message, user})=>{
            chatStore.sendMessage({message, user})
        })
        socket.on('start game', ()=>{
            tableStore.startGame()
        })
        socket.on('set user', (user)=>{
            console.log(user)
            userStore.setUser(user)
        })
        socket.on('move piece', ({from, to})=>{
            if(to.piece.length) pieceBoxStore.pieceBoxUpdate({to, turn:$turnStore})
            turnStore.handlerTurn()
            tableStore.move({from, to})
        })

        socketServerStore.socketSet({socket})
        // console.log(io)
    })
    
    onDestroy(()=>{
        socket.off('chat message')
        socket.off('start game')
        pieceBoxStore.reset()
        chatStore.reset()
        tableStore.reset()
        turnStore.reset()
        // userStore.reset()
        socketServerStore.reset()
    })

</script>

<div>
    <Game />
</div>

<style>
    div{
        width: calc(3em * 8);
        margin: auto;
    }
</style>