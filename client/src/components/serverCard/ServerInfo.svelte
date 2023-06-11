<script>
    export let server;
</script>

<div class="info-party">
            
    <div>
        <span>{server.state}</span>
    </div>
    <div>
        <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
        </svg>
        <span>Private</span>
    </div>
    
    <div>
        <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linejoin="round" fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277" d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"></path>
            <path stroke-width="2" fill="#707277" stroke="#707277" d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"></path>
        </svg>
        <span class="players">{server.players.length}/2</span>
    </div>
    
    <div>
        <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle>
        </svg>
        <span class="viewers">{server.viewers.length}/6</span>
    </div>
      
</div>

<style>
    span{
        margin: 0;
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
</style>