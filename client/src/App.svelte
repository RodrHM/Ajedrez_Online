<script>
  import { Route, Router } from 'svelte-routing'

  import Home from './routes/Home.svelte';
  import Servers from './routes/Servers.svelte';
  import Dashboard from './routes/Dashboard.svelte';
  import NavBar from './components/navbar/NavBar.svelte';
  import Server from './routes/Server.svelte';
  import Auth from './routes/Auth.svelte';
  import axios from 'axios'
  import AuthProvider from './routes/AuthProvider.svelte';
  import PrivateRoute from './components/PrivateRoute/PrivateRoute.svelte';
    import PublicRoute from './components/PublicRoute/PublicRoute.svelte';

  axios.defaults.baseURL = 'http://localhost:3001/api'

</script>

<main>
  <AuthProvider>
    <Router>
      <NavBar/>
      <Route path='/' component={Home} />
      <PublicRoute path='/auth' component={Auth}/>
      <!-- <Route path='/auth' component={Auth} /> -->
      
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/servers' component={Servers} />
      <PrivateRoute path='/servers/:id' let:params>
        <Server id={params.id}/>
      </PrivateRoute>
    </Router>
  </AuthProvider>
</main>

<style>
  main{
    background-color: red;
    margin-top: 3.5em;
  }
</style>
