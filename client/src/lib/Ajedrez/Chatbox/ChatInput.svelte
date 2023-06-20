<script>
    import { chatStore } from "../../../stores/serverChat";
    import { socketServerStore } from "../../../stores/socket";
    import { turnStore } from "../../../stores/stores";

    // export let player = 'white';
    // export let message_list;

    let message = '';
    //  SUPONGO YO QUE ESTOS MENSAGES VENDRAN DESDE LA BASE DE DATOS JUNTO CON EL DATO PLAYER

    const sendMessage = ()=>{
        if(!message.length) return

        const user = {name: $turnStore, color:''}
        // chatStore.sendMessage({message, user})
        socketServerStore.chatMessage({message, user})
        message=''
    }

</script>
<div class="chat-input">
    <input bind:value={message} on:keydown={(e)=>e.key==='Enter'&&sendMessage()}
    type="text" class="message-input" placeholder="send message">
    <button class="send-button" on:click={sendMessage}>Send</button>
</div>
<style>
    .chat-input {
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ccc;
    }

    .message-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 5px;
    font-size: 14px;
    }

    .send-button {
    border: none;
    outline: none;
    background-color: #333;
    color: #fff;
    font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;
    }

    .send-button:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    }
</style>