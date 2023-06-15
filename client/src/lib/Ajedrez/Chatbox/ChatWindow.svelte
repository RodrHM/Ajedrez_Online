<script>
    //  SUPONGO YO QUE ESTOS MENSAGES VENDRAN DESDE LA BASE DE DATOS JUNTO CON EL DATO PLAYER
    export let message_list = [{message:'Primer mensaje', player:'black'}]
    
</script>
<div class="chat-window">
    <ul class="message-list">
        <!-- LISTA DE MENSAJES -->
        {#each message_list as {message, player},idx (idx)}
            <li class={`message ${player}`}>{message}</li>
        {/each}
    </ul>
</div>

<style>
    .chat-window {
    height: 220px;
    overflow-y: scroll;
    }

    .message-list {
    list-style: none;
    margin: 0;
    padding: 0;
    }

    .message{
        color: #333;
    }
    .message.white{
        text-align: start;
        margin-left: 1em;
    }
    .message.black{
        text-align: end;
        margin-right: 1em;
    }
</style>