<template >
    <div v-if="vehicle" class="vehicle-details">
        <img :src="vehicle.image_url" :alt="vehicle.name">

        <div>
        <h2>{{ vehicle.name }}</h2>
        <p>kilometers: {{ vehicle.kilometers }}</p>
        <p>Price: R{{ vehicle.price }}</p>
        
        </div>
    </div>
</template>
<script>
export default {
    props: ["id"],
    computed: {

        vehicle() {
            return this.$store.state.vehicle
        }

    },
    mounted() {
        this.$store.dispatch("getVehicle", this.id)
    }
}
</script>
<style >
.vehicle-details {
    display: flex;
    justify-content: center;
   background-color: rgb(27,40,168);
   min-height: 89.5vh;
}
    
</style>