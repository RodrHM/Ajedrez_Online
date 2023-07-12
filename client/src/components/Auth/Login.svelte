<script>
    import EmailInput from "./EmailInput.svelte";
    import PasswordInput from "./PasswordInput.svelte";
    import FormButtons from "./FormButtons.svelte";
    import { authStore } from "../../stores/Auth";
    import FormErrors from "./FormErrors.svelte";

    export let errors = []

</script>

    <p class="heading">Login</p>
    <EmailInput bind:email={$authStore.email}/>
    <PasswordInput bind:password={$authStore.password}/>
    
    {#if errors.length}
         <!-- content here -->
         <FormErrors {errors}/>
    {/if}
    <FormButtons setForm={authStore.setForm} submitBtn='Sign In' setBtn='Login'/>

<style>
    
    .heading {
        text-align: center;
        margin: 2em;
        color: rgb(255, 255, 255);
        font-size: 1.2em;
    }
    
</style>