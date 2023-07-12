<script>
    import EmailInput from "./EmailInput.svelte";
    import PasswordInput from "./PasswordInput.svelte";
    import UsernameInput from "./UsernameInput.svelte";
    import FormButtons from "./FormButtons.svelte";
    import { authStore } from "../../stores/Auth";
    import FormErrors from "./FormErrors.svelte";

    // let errors = ['Password must be at least !8 characters',"Password must include Elon's baby name"]
    
    // let {username, password, email} = $authStore
    export let errors;

</script>

    <p class="heading">Register</p>
    <UsernameInput bind:username={$authStore.username}/>
    <EmailInput bind:email={$authStore.email}/>
    <PasswordInput bind:password={$authStore.password}/>
    {#if errors.length}
         <!-- content here -->
         <FormErrors {errors}/>
    {/if}
    <FormButtons setForm={authStore.setForm} submitBtn='Sign Up' setBtn='Register'/>

<style>
    .heading {
        text-align: center;
        margin: 2em;
        color: rgb(255, 255, 255);
        font-size: 1.2em;
    }
</style>