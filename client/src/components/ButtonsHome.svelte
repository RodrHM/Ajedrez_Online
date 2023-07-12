<script>
    import Button_1 from "./buttons/Button-1.svelte";
    import { navigate } from 'svelte-routing'

    const handleButton = ({detail})=>{
        console.log(detail)
        navigate('/auth')
    }
</script>


<div>
    <Button_1 name='Sign in' on:handleButton={handleButton}/>
    <Button_1 name='Sign up' on:handleButton={handleButton}/>
</div>

<style>
    div{
        display: flex;
        gap: 2em;
    }
</style>