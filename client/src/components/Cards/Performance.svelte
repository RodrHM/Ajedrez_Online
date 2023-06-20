<script>
    import Output from "./Output.svelte";

    export let performance;
</script>

<div class="ds-info">
    <Output name='Partidas' order=3 state={performance.games}/>
    <Output name='Victorias' order=2 state={performance.victories}/>
    <Output name='Derrotas' order=1 state={performance.defeats}/>
    <Output name='Tablas' order=0 state={performance.draw}/>
</div>

<style>
    .ds-info {
    margin: auto;
    width: inherit;
    height: auto;
    display: flex;
    justify-content: space-around;
    width: 100%;
    }
</style>

