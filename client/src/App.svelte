<script>
  import { Link, Route, Router } from 'svelte-routing'
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'

  import Home from './routes/Home.svelte';
  import Servers from './routes/Servers.svelte';
  import Dashboard from './routes/Dashboard.svelte';
    import NavBar from './components/navbar/NavBar.svelte';

</script>

<main>
  <Router>
    <NavBar/>
    <Route path='/' component={Home} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/servers' component={Servers} />
  </Router>
</main>

<style>
  main{
    background-color: red;
    margin-top: 3.5em;
  }
</style>
