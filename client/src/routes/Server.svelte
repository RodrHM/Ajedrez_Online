<script>
    import { onDestroy, onMount } from "svelte";
    import { io } from 'socket.io-client'
    import Game from "../lib/Ajedrez/Game.svelte";

    export let id;
    let socket;

    onMount(()=>{
        // socket = io(`http://localhost:3001/server/${id}`)
        // socket = io('http://localhost:3001/api/server/2')
        // socket.on('chat message', (message)=>{
        //     console.log(message)
        // })
        // console.log(io)
    })

    onDestroy(()=>{
        // socket.off('chat message')
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