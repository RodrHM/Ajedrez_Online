<script>
    import ServerCard from "../components/serverCard/ServerCard.svelte";

</script>

<div id="server">
    <h1>Servers</h1>
    <div class="servers">
        <ServerCard number=1/>
        <ServerCard number=2/>
        <ServerCard number=3/>
        <ServerCard number=4/>
        <ServerCard number=5/>
        <ServerCard number=6/>
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