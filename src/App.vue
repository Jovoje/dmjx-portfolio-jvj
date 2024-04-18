<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>


  <main id="canvas">
    <div class="site">
<RouterLink to="/" class="title" style=" text-decoration: none;">
  <h1 class="navn">JOSEFINE VÖGE JENSEN</h1>
  
</RouterLink>
<div>
</div>

    <div class="nav-container">
      <nav class="navbar">
        <RouterLink to="/projects" id="nav1" style="text-decoration: none; color: aliceblue;"> MINE PROJEKTER</RouterLink>
        <RouterLink to="/about" id="nav2" style="text-decoration: none; color: aliceblue;">OM MIG</RouterLink>
        <RouterLink to="/contact" id="nav3" style="text-decoration: none; color: aliceblue;">KONTAKT</RouterLink>
      </nav>
    </div>


  <RouterView />
</div>
</main>
</template>

<style>

body {
  background-image: url("./images/Tegnebræt 1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.navn {
  font-family: "Silkscreen";
  font-variant: normal;
  font-size: 3vw;
  padding: 1vw;
  margin-left: 10px;
  color: rgb(255, 255, 255);
}

#nav1 {
  transition: opacity 0.2s ease-in-out;
  
}

#nav1:hover {
opacity: 0.3;
}
#nav2 {
  transition: opacity 0.2s ease-in-out;
  
}

#nav2:hover {
opacity: 0.3;
}
#nav3 {
  transition: opacity 0.2s ease-in-out;
  
}

#nav3:hover {
opacity: 0.3;
}
</style>
  