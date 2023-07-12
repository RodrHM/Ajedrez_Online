<script>

    export let username;
</script>

<div class="field">
    <svg class="input-icon" 
    xmlns="http://www.w3.org/2000/svg" width="20"height="20" fill="currentColor" viewBox="0 0 24 24" >
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" 
        d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"></path>
        <path stroke-width="2" 
        d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"></path>
    </svg>
    <input autoComplete="off" placeholder="Username" class="input-field" type="text" bind:value={username}/>
</div>

<style>
    .field {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        border-radius: 25px;
        padding: 0.6em;
        border: none;
        outline: none;
        color: white;
        background-color: #171717;
        box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
    }
    .field .input-icon {
        height: 1.3em;
        width: 1.3em;
        fill: white;
    }
    .field .input-field {
        background: none;
        border: none;
        outline: none;
        width: 100%;
        color: #d3d3d3;
    }
</style>