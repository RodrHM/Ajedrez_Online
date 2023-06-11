<script>
    import Graph from "./Graph.svelte";
    import { fade } from "svelte/transition";


</script>

<div class="ds-skill">
    <h6 in:fade="{{duration:2000}}">Skill</h6>
    <Graph name='Promedio de victorias' media=50%/>
    <Graph name='Como Blancas' media=90%/>
    <Graph name='Como negras' media=75%/>
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