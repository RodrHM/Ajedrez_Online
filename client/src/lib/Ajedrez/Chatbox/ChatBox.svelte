<script>
    import ChatInput from "./ChatInput.svelte";
    import ChatWindow from "./ChatWindow.svelte";

</script>

<div id="chatBox">
    <div class="card">
        <div class="chat-header">Chat</div>
        <ChatWindow />
        <ChatInput />
        <!-- <div class="chat-input"> -->
            <!-- <input bind:value={message} -->
            <!-- type="text" class="message-input" placeholder="#help for commands"> -->
            <!-- <button class="send-button" on:click={sendMessage}>Send</button> -->
        <!-- </div> -->
    </div>
    
</div>

<style>
    .card {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 260px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    border: solid #333;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0;
    }

    .chat-header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    /* border-top-left-radius: 5px; */
    /* border-top-right-radius: 5px; */
    }
</style>