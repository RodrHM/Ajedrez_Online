<script>
    import Piece from "./Piece.svelte";

    export let pieces;
    let darkPieces = [
        '&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;',
        '&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;'
    ]
    let lightPieces = [
        '&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;',
        '&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;'
    ]
    const handlerPiece = ()=>{}

    let buttonPiece={};
</script>
<!-- style:transform={`translate(${'0'}, ${'3em'})`} -->
<main class="box-piece">
    {#each pieces as piece, idx}
        <Piece range={piece} bind:buttonPiece={buttonPiece[`piece_${idx}`]}/>
        <!-- <p>{@html piece}</p> -->
    {/each}
</main>

<style>
    .box-piece{
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: 1fr 1fr;
    }
    /* p{
        color: red;
        font-size: 2em;
        padding: 0;
        margin: 0;
        border: none;
        background-color: transparent;
    } */
</style>