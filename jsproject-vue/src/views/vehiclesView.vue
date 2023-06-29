<template>
  <div v-if="vehicles" class="flex-container">
    <CardComp
      v-for="vehicle of vehicles"
      :key="vehicle.id"
      :vehicle="vehicle"
    />
  </div>
  <div v-else>Loading..</div>
</template>
<script>
import CardComp from '../components/cardComp.vue';
export default {
  computed: {
    vehicles() {
      console.log(this.$store.state.vehicles)
      return this.$store.state.vehicles;
    },
  },
  mounted() {
    this.$store.dispatch("getVehicles");
  },

  components: { CardComp },
};
</script>
<style scoped>
.flex-container          {
   background-color: rgb(27,40,168);
}
</style>