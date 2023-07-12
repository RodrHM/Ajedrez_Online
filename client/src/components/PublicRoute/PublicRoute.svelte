<script>
    import { Route } from "svelte-routing";
    import PublicRouteGuard from "./PublicRouteGuard.svelte";

    export let path;
    export let component = null;
</script>

<Route {path} let:params>
    <PublicRouteGuard> 
        {#if component}
            <!-- content here -->
            <svelte:component this={component}/>
        {:else}
            <!-- else content here -->
            <slot {params}/>
        {/if}
    </PublicRouteGuard>
</Route>