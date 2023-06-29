import { createStore } from 'vuex'

export default createStore({
  state: {
    vehicles:null,
    vehicle:null,
  },
  
  mutations: {
    setVehicles: (state,vehicles)=>{
      state.vehicles = vehicles;
    },
setVehicle: (state,vehicle)=>{
  state.vehicle = vehicle;
}
  },
  actions: {
    getVehicles: async (context)=>{
      fetch("http://localhost:3000/vehicles")
      .then((res)=> res.json())
      .then((vehicles)=>context.commit("setVehicles", vehicles));
    },
    getVehicle: async (context,id)=>{
      fetch("http://localhost:3000/vehicles/" +id)
      .then((res)=>res.json())
      .then((vehicle)=> context.commit("setVehicle", vehicle));
    },
  },
 
});
