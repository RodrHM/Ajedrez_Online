<script>
    // import Piece from "./Piece.svelte";
    import Locker from "./Locker.svelte";
    import {tableStore} from '../../stores/stores'

    export let lockers;
    // export let pleyer;
    let table = $tableStore

</script>
<div id="table" bind:this={lockers}>
    {#each table as row, row_idx}
    {#each row as col, col_idx (`${row_idx}${col_idx}`)}
        <Locker 
        eje_x={col_idx}
        eje_y={row_idx}
        bind:locker={table[row_idx][col_idx][0]}
        />
        {/each}
    {/each}
</div>
<div id='table-bg'></div>

<style>
    #table{
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
        background-color: #d4d4d4;
        /* border: dotted thin black; */
        transition: 2s;
        transform: rotate(180deg) scaleX(-1);
    }
</style>