<script>
    import BoxPiece from "./Box-Piece.svelte";
    import Table from "./Table.svelte";
    import StartButton from './StartButton.svelte'
    import ChatBox from "./Chatbox/ChatBox.svelte";

    //  ESTO LLEGA POR LA BASE DE DATOS
    let darkPieces = [
        '&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;',
        '&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;'
    ]
    let lightPieces = [
        '&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;',
        '&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;'
    ]


    let lockers;
</script>
    <StartButton />
    <BoxPiece pieces={darkPieces}/>
    <Table bind:lockers={lockers}/>
    <BoxPiece pieces={lightPieces}/>
    <ChatBox />


