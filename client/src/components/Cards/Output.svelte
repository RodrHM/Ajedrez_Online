<script>
    import { fly } from "svelte/transition";

    export let name;
    export let state;
    export let order;
</script>

<div class="ds" in:fly="{{x:-300, duration:1500, delay:500*order}}">
    <h6 >{name}</h6>
    <p>{state}</p>
</div>

<style>
    .ds{
    /* position: relative; */
    left: -300px;
    /* width: calc(250px / 3); */
    width: 33%;

    text-align: center;
    color: white;
    animation-fill-mode: forwards;
    }
    .ds h6 {
    text-transform: uppercase;
    color: crimson;
    }
    .ds p {
    font-size: 12px;
    }
</style>