<template>
  <navbarComp/>
  <router-view/>
</template>

<script>
import navbarComp from "./components/navbarComp.vue";



export default{
  components: {navbarComp}
}
</script>
