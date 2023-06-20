<script>
    import Piece from "../Piece.svelte";

    export let pieces;
    const handlerPiece = ()=>{}

    let buttonPiece={};
</script>
<ul class="piece-box">
    {#each pieces as piece, idx}
        <Piece {piece}/>
    {/each}
</ul>

<style>
    .piece-box{
        display: grid;
        padding: 0;
        margin: 0;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: 1fr 1fr;
        width: 24em;
        height: 6em;
        background-color: rgb(68, 68, 68);
        align-items: center;
    }
</style>