<script>
    import BoxPiece from "./BoxPiece/Box-Piece.svelte";
    import Table from "./Table.svelte";
    import StartButton from './StartButton.svelte'
    import ChatBox from "./Chatbox/ChatBox.svelte";
    import { pieceBoxStore } from "../../stores/pieceBox";

    //  ESTO LLEGA POR LA BASE DE DATOS
    let pieceBox;

    $:pieceBox = $pieceBoxStore

</script>
    <StartButton />
    <BoxPiece pieces={pieceBox.black}/>
    <Table/>
    <BoxPiece pieces={pieceBox.white}/>
    <ChatBox />


