<script>
    import { navigate } from 'svelte-routing'
    import { authUser } from '../../stores/users';

</script>
{#if !$authUser}
     <!-- content here -->
     <slot/>
{:else}
    {navigate('/', {replace:true})}
{/if}

