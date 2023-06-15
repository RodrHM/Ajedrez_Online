<script>
    import { Link } from "svelte-routing";
import ServerInfo from "./ServerInfo.svelte";
    import ServerTable from "./ServerTable.svelte";

    export let number;
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

    const handlerRedirect = ()=>{
        
    }
</script>
    <ServerTable/>
        <h3>sala {number}</h3>
        
        <ServerInfo {server}/>
        <div class="botonera">
            <button on:click={()=>{}}><Link to={`servers/${number}`}>ent</Link></button>
            <button>exp</button>
        </div>
<style>
    
    
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
    
</style>