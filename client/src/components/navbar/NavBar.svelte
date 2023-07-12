<script>
    import { Link } from "svelte-routing";


</script>
<nav>
    <Link to='/'>Home</Link>
    <Link to='/dashboard'>Dashboard</Link>
    <Link to='/servers'>Servers</Link>
    <Link to='/example'>Example</Link>
</nav>

<style>
    nav{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: blueviolet;
        height: 3.5em;
    }
</style>