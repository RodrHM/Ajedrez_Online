<script>
    import Avatar from "./Avatar.svelte";
    import InfoUser from "./InfoUser.svelte";
    import Performance from "./Performance.svelte";
    import Statistics from "./Statistics.svelte";
</script>

<div class="card">
    <Avatar/>
    <InfoUser/>
    <Performance/>
    <Statistics/>
  </div>

<style>
    .card {
  margin: auto;

  width: 300px;

  height: auto;
  border-radius: 20px;

  padding-bottom: 20px;
  background: #151515;
  overflow: hidden;
}

</style>