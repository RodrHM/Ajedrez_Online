<script>
    import { socketServerStore } from "../../stores/socket";
    import { tableStore } from "../../stores/stores";

    const startGame = ()=>{
        console.log('INICIAR JUEGO')
        // dispatch('startGame')
        // tableStore.startGame()
        socketServerStore.startGame()
    }
</script>

<button on:click={startGame}>START</button>

<style>
    button{
        position: absolute;
        background-color: gold;
        top: 0;
        left: 0;
    }
</style>