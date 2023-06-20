<script>
    import ServerCard from "../components/serverCard/ServerCard.svelte";

</script>

<div id="server">
    <h1>Servers</h1>
    <div class="servers">
        <ServerCard id_server=1/>
        <ServerCard id_server=2/>
        <ServerCard id_server=3/>
        <ServerCard id_server=4/>
        <ServerCard id_server=5/>
        <ServerCard id_server=6/>
    </div>
</div>

<style>
    #server{
        width: auto;
        /* height: 100vh; */
    }

    .servers{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        /* gap: .5%; */
        /* gap: 1em; */
    }
</style>