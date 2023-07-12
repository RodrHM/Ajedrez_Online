<script>
    import { Route } from "svelte-routing";
    import PrivateRouteGuard from "./PrivateRouteGuard.svelte";
    import { onMount } from "svelte";


    export let path;
    export let component = null;
</script>

<Route {path} let:params>
    <PrivateRouteGuard>
        {#if component}
            <!-- content here -->
            <svelte:component this={component}/>
        {:else}
            <!-- else content here -->
            <slot {params}/>
        {/if}
    </PrivateRouteGuard>
</Route>
