<script>
    export let buttonPiece = {};
    export let range;
    // export let position;

    const handlerTo = ()=>{
        console.log('Evaluamos sus posibles movimientos en base a su rango')
    }
</script>

<button bind:this={buttonPiece} on:click={handlerTo}><p>{@html range}</p></button>

<style>
    button{
        margin:0;
        padding:0;
        width: 3em;
        height: 3em;
        border: none;
    }
    button:focus{
        outline: none;
    }
    p{
        margin:0;
        padding:0;
        color: red;
        /* width: 3em; */
        /* height: 3em; */
        font-size: 2em;
    }
</style>