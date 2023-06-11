<script>
    import { fade } from 'svelte/transition';
</script>
<div in:fade="{{duration:2000}}">
    
    <h3 class="name">Albert Feynman</h3>
    <div class="buttons">
        <button class="btn">Retar</button>
        <!-- <button class="btn">friend</button> -->
    </div>
</div>

<style>
  .name {
  margin: auto;
  height: 40px;
  text-align: center;
  color: white;
  font-size: 18px;

}
.name:hover {
  text-decoration: underline;
  color: crimson;
}
.buttons {
  height: 40px;
  text-align: center;
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
}
.buttons .btn {
  padding: 5px 20px;
  border-radius: 10px;
  color: white;
  letter-spacing: 0.05em;
  text-decoration: none;
  font-size: 10px;
  transition: 1s;
}
.buttons .btn:hover {
  background: crimson;
}
</style>