<script>

    export let setForm;
    export let submitBtn
    export let setBtn
    let signUp;

</script>

<div class="btn">
    <button class="button1" type="submit">{submitBtn}</button>
    <button class="button1" on:click={setForm}>{setBtn}</button>
</div>
<button class="button3">Forgot Password</button>

<style>
    .btn {
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin-top: 2.5em;
        gap: 0.5em;
    }
    .button1 {
        padding: 0.5em;
        /* padding-left: 1.1em; */
        /* padding-right: 1.1em; */
        border-radius: 5px;
        /* margin-right: 0.5em; */
        border: none;
        outline: none;
        transition: .4s ease-in-out;
        background-color: #252525;
        color: white;
        width: 50%;
    }
    .button1:hover {
        background-color: black;
        color: white;
    }
    .button3 {
        margin-bottom: 3em;
        padding: 0.5em;
        border-radius: 5px;
        border: none;
        outline: none;
        transition: .4s ease-in-out;
        background-color: #252525;
        color: white;

        width: auto;
        grid-column: 1/3;
    }
    .button3:hover {
        background-color: red;
        color: white;
    }
</style>