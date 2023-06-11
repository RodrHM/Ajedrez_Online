<script>
    // import ServerLoader from "./ServerLoader.svelte";
    import ServerInfo from './ServerData.svelte';
import ServerLoader from './ServerLoader.svelte';


    let data;
    let server = {
        name:'Sala 1',
        players:[],// Cantidad y de que juegan
        table:[],
        state:'emtry',// [emtry, standby, full, progress]
        private:['email', '...'],// Para que solo pueda entrar el que esta invitado 
        history:[],
        // player_one:{},
        // player_two:{},
        turn:'',
        whiteDead:[],
        blackDead:[],
        chat:[],
        viewers:[]
    }
</script>

<div class="card">
    {#if server}
         <!-- content here -->
        <ServerInfo/>
    {:else}
         <!-- else content here -->
        <ServerLoader/>
    {/if}
</div>





<style>
    .card {
        /* min-width: 12.5rem; */
        /* min-height: 17rem; */
        width: 350px;
        height: 200px;
        background-color: #212121;
        border-radius: 1rem;
        border: #212121 0.2rem solid;
        transition: all 0.4s ease-in;
        box-shadow: 0.4rem 0.4rem 0.6rem #00000040;
        
        padding: 1.5rem;
        grid-gap: 1.25rem;
        gap: 1.25rem;
        
        --gray: rgba(229, 231, 235, 1);

        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(3, 1fr);

        align-items: center;
    }
    span{
        margin: 0;
    }
    .table{
        width: 100%;
        aspect-ratio: 1/1;
        background-color: aqua;
        
        grid-row: 1/4;
        grid-column: 1/4;
    }
    h3{
        width: 100%;
        margin: 0;
        grid-row: 1/2;
        grid-column: 4/7;
    }
    .botonera{
        background-color: blue;
        grid-template-rows: 2/3;
        grid-column: 4/7;
    }
    .info-party{
        background-color: crimson;

        grid-template-rows: 3/4;
        grid-column: 4/7;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        
        place-items: center;
    }

    .card:hover {
        /* transform: translateY(-1.5rem); */
        border: crimson 0.2em solid;
        border-radius: 2.5rem 0 2.5rem 0;
    }
</style>