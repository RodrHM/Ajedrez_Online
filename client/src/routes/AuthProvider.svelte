<script>
    import { onMount } from "svelte";
    import { userStore } from "../stores/users";


    let promiseData = userStore.authUser();
    onMount(async()=>{
        // const token = localStorage.getItem('token')
        const token = localStorage.getItem('token')
        let data = {}
        if(token) data = await promiseData
        if(data.token && data.token!==token) localStorage.setItem('token', data.token)
        if(data.error) alert(data.error)
    }) 
</script>
{#await promiseData}
    <!-- promise is pending -->
    <!-- LOADER -->
    <h1>Esto es el await</h1>
{:then value}
    <!-- promise was fulfilled -->
    <!-- CHILDRENS -->
    <slot/>
{/await}

<style>
    h1{
        color: aliceblue;
    }
</style>