<script>

    export let password;
</script>

<div class="field">
    <svg class="input-icon" 
    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
    <input placeholder="Password" class="input-field" type="password" bind:value={password}/>
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