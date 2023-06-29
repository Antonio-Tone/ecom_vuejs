<template>
  <nav id="nav">
    <router-link class="nav-link active" to="/">Home </router-link>
    <router-link class="nav-link active" to="/vehicles">Inventory </router-link>
    <router-link class="nav-link active" to="../views/AboutView.vue">About</router-link>
  </nav>
</template>
<script>
export default {


};
</script>
<style scoped>
#nav {
  padding: 20px 16px;
  margin: 0;
  width: 100%;
  background-color: rgb(44, 44, 44);
  text-align: center;
  display: flex;
  justify-content: space-around;
}

.nav-link {
  text-decoration: none !important;
  color: rgb(175, 175, 175);
  font-size: large;
  font-weight: bold;
  padding: 8px;
  top: 0;
  z-index: 1;
}

.nav-link:hover{
    
    scale: 102%;
   box-shadow: rgb(0,98,165) 0px 5px 5px 5px;
   border-radius: 5px !important;
  
}
</style>
