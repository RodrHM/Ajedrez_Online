<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    export let name;
    export let media;

    let ele; 

    onMount(async ()=>{
      
      console.log('segundo')
      ele.animate([
        { width: '0' },
        { width: media },
      ], {
        duration: 2000
      });
      })

</script>

<div class="skill html">
    <h6 in:fade="{{duration:2000}}">{name}</h6>
    <div bind:this={ele} style:width={media} class="bar bar-html">
      <p>{media}</p>
    </div>
</div>

<style>
.ds-skill .skill h6 {
  font-weight: 400;
  font-size: 8px;
  letter-spacing: 0.05em;
  margin: 4px 0;
  color: white;
}
.ds-skill .skill .bar {
  height: 5px;
  background: crimson;
  text-align: right;
}
.ds-skill .skill .bar p {
  color: white;
  font-size: 8px;
  padding-top: 5px;
}
.ds-skill .skill .bar:hover {
  background: white;
}
</style>