<script>
    import { userStore } from "../../stores/users";
    import Avatar from "./Avatar.svelte";
    import InfoUser from "./InfoUser.svelte";
    import Performance from "./Performance.svelte";
    import Statistics from "./Statistics.svelte";

    const exampleUser = {
      _id:'',
      name:'Cosme Fulanito',
      email:'',
      color:'',
      performance:{
        games:29,
        victories:7,
        defeats:1,
        draw:0,
      },
      statistics:{
        gamesAverage:"50%",
        victoriesAverage:"90%",
        defeatsAverage:"75%",
      },
    }

    let user = $userStore
</script>

<div class="card">
    <Avatar/>
    <InfoUser name={user.name}/>
    <Performance performance={user.performance}/>
    <Statistics statistics={user.statistics}/>
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