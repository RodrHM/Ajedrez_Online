<script>
  import Graph from "./Graph.svelte";
  import { fade } from "svelte/transition";

  export let statistics
</script>

<div class="ds-skill">
    <h6 in:fade="{{duration:2000}}">Skill</h6>
    <Graph name='Promedio de victorias' media={statistics.gamesAverage}/>
    <Graph name='Como Blancas' media={statistics.victoriesAverage}/>
    <Graph name='Como negras' media={statistics.defeatsAverage}/>
</div>

<style>

.ds-skill {
  /* position: absolute; */
  margin: auto;
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.ds-skill h6 {
  margin-bottom: 0px;
  font-weight: 700;
  text-transform: uppercase;
  color: crimson;
}
</style>