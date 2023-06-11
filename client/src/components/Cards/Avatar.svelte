<script>
    import { fly } from 'svelte/transition'
</script>

<div class="avatar" in:fly="{{y:-200, duration:1500, opacity:1}}">
    <div class="ds-top"></div>
    <div class="avatar-holder">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Albert Einstein">
    </div>
</div>

<style>
    .avatar{
        height: auto;
    }
    .ds-top {
        position: relative;
        display: block;
        width: 100%;
        height: 80px;
        /* margin:0; */
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background: crimson;
        /* transform: translateY(-40px); */
    }
    .avatar-holder {
    margin: auto;
    transform: translateY(-40px);
    width: 100px;
    height: 100px;
    border-radius: 100% ;
    background-color: #151515;
    overflow: hidden;
    }
    .avatar-holder img {
    width: 90%;
    height: 90%;
    margin: 5%;
    /* object-fit: cover; */
    }
</style>