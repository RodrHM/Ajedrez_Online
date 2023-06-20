<script>
  import { Route, Router } from 'svelte-routing'

  import Home from './routes/Home.svelte';
  import Servers from './routes/Servers.svelte';
  import Dashboard from './routes/Dashboard.svelte';
  import NavBar from './components/navbar/NavBar.svelte';
  import Server from './routes/Server.svelte';

</script>

<main>
  <Router>
    <NavBar/>
    <Route path='/' component={Home} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/servers' component={Servers} />
    <Route path='/servers/:id' let:params >
      <Server id={params.id}/>
    </Route>
  </Router>
</main>

<style>
  main{
    background-color: red;
    margin-top: 3.5em;
  }
</style>
