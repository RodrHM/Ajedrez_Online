<script>
    import Output from "./Output.svelte";


</script>

<div class="ds-info">
    <Output name='Partidas' order=2 state='29'/>
    <Output name='Victorias' order=1 state='0'/>
    <Output name='Derrotas' order=0 state='0'/>
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

