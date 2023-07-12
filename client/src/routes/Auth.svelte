<script>
    import { navigate } from "svelte-routing";
    import Login from "../components/Auth/Login.svelte";
    import Register from "../components/Auth/Register.svelte";
    import { authStore, errorStore, stateFormStore } from "../stores/Auth";
    import { CustomLocalStorage } from "../stores/localStorage";
    import { userStore } from "../stores/users";

    let stateForm = false;
    let errors = []
    $:{
        stateForm = $stateFormStore
        errors=[]
    }
    
    const handlerForgotPassword = ()=>{}

    const handlerSubmit = async ()=>{
        console.log($authStore)
        const {username} = $authStore
        errors = [...$errorStore]

        console.log(errors)
        if(!errors.length){
            if(username===null) {
                const {error, token, user} = await authStore.signIn()
                console.log({error, token, user})
                token && CustomLocalStorage.setItem({key:'token', value:token})
                token && userStore.authUser()
                if(errors) errors=[...errors, error]
                navigate('/dashboard', {replace:true})
            }
            else {
                const {error, message} = await authStore.signUp()
                message && alert(message)
                if(error) errors=[...errors, error]
            }
        }

        console.log('handlerSubmit')
    }

</script>

<div class="auth">
    <form class="form" on:submit|preventDefault={handlerSubmit}>
    {#if !stateForm}
        <!-- content here -->
        <Login {errors}/>
    {:else if stateForm}
        <!-- else if content here -->
        <Register {errors}/>
    {:else}
    <!-- else content here -->
    <p>No hay ningun componente cargado</p>
    {/if}
    </form>
    
</div>

<style>
    .auth{
        display: flex;
        justify-content: center;
        margin: auto;
        background-color: #171717;
        border-radius: 30px;
        transition: .4s ease-in-out;

        width: auto;
        max-width: 20em;
    }
    .auth:hover {
        transform: scale(1.05);
        border: 1px solid black;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 80%;
    }

    @media (max-width:600px) {
        .auth{
        width: 90%;
        }
    }

    /* .error-messages { */
        /* background-color: #d3d3d3; */
        /* color: red; */
        /*  */
        /* transform: translateY(1em); */
    /* } */
    /* .crose{ */
        /* position: absolute; */
        /* background-color: #252525; */
        /* color: #d3d3d3; */
        /* width: 1.5em; */
        /* height: 1.5em; */
        /* border-radius: 100%; */
        /* transition: .5s; */
        /* cursor: pointer; */
        /* align-self: flex-end; */
        /* margin-top: 1em; */
        /* transform: translateX(1em); */
    /* } */
    /* .crose:hover{ */
        /* background-color: red; */
        /* transform: scale(1.2); */
        /* transform: translateX(1em); */
    /* } */
  
</style>