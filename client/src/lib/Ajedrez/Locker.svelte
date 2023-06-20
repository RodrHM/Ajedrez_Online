<script>
    import { handlerFromTo } from "./piece-Move";

    export let locker;
    // export let range;
    export let eje_x;
    export let eje_y;
    // export let position;
    console.log('----------')
    
    const handlerButton = ()=> {
        const detail = {
            eje_x,
            eje_y, 
            bg: locker.style.backgroundColor, 
            piece:locker.children[0].innerHTML}
        // const detail = {eje_x, eje_y}
        handlerFromTo(detail)
        
    }

    // const handlerFromT = ()=>{
    //     const detail = {eje_x, eje_y, bg:locker.style.backgroundColor, piece:locker.children[0].innerHTML}
    //     handlerFromTo(detail)
    // }
    
</script>
<button 
bind:this={locker} 
on:click={handlerButton} 
style:grid-area={`${eje_y+1}/${eje_x+1}/${eje_y+2}/${eje_x+2}`}
><p></p></button>

<style>
    button{
        margin:0;
        padding:0;
        width: 3em;
        height: 3em;
        border: none;
        /* background-color: rgb(189, 189, 189); */
        /* background-color: rgba(255, 255, 255, 0.4); */
        background-color: transparent;
        /* border: none; */
        border-radius: 0;
    }
    button:focus{
        outline: none;
    }
    button:nth-child(even):nth-child(-n+8),
    button:nth-child(n+17):nth-child(even):nth-child(-n+24),
    button:nth-child(n+33):nth-child(even):nth-child(-n+40),
    button:nth-child(n+49):nth-child(even):nth-child(-n+56),
    button:nth-child(n+9):nth-child(odd):nth-child(-n+16),
    button:nth-child(n+25):nth-child(odd):nth-child(-n+32),
    button:nth-child(n+41):nth-child(odd):nth-child(-n+48),
    button:nth-child(n+57):nth-child(odd):nth-child(-n+64){
        content: '';
        position: absolute;
        width: 3em;
        height: 3em;
        background: rgba(0, 0, 0, .4);
        /* z-index: auto; */
    }
    p{
        margin:0;
        padding:0;
        color: black;
        font-size: 2.25em;
        /* width: 100%; */
        /* height: 100%; */
        transform: rotate(180deg);
    }
    p:hover{
        background-color: rgba(255, 0, 0, 0.5);
    }
</style>
