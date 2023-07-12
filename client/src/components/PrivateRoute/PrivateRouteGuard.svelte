<script>
    import { navigate } from 'svelte-routing'
    import { authUser } from '../../stores/users';

</script>
{#if $authUser}
     <!-- content here -->
     <slot/>
{:else}
    <!-- <h1>Hola Mundo</h1> -->
    {navigate('/', {replace:true})}
{/if}

