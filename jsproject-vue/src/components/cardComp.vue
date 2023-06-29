          
    <template >
    <div class="container-fluid">
        <router-link :to="{name: 'Vehicle', params: {id:vehicle.id}}">
           <div class="row mx-auto" >
           <div class="col-lg-4 col-12 mt-2 py-lg-5 py-0 px-04">
  <div class="card" style="width: 18rem">
    <img :src="vehicle.image_url" class="card-img-top image" alt="project" />
    <div class="card-body ">
      <h5 class="card-title">{{vehicle.name}}</h5>
      <p class="card-text">
     <ul class=" list-unstyled svg" >
      <li>
        <img src="../assets/icons/year.svg" alt="year"> : {{vehicle.year}}
      </li>
     <li>
      <img src="../assets/icons/mileage.svg" alt="mileage" > : {{vehicle.kilometers}}
     </li>
     <li>
      <img src="../assets/icons/gearbox.svg" alt="gear"> : {{vehicle.transmission}}
     </li>
     <li>
      <img src="../assets/icons/fuel.svg" alt="fuel type"> : {{vehicle.fuel}}
     </li>
     <li>
      $: {{vehicle.price}}
     </li></ul>
      </p>
      <button
        type="button"
        class="btn btn-primary d-flex justify-content-center mxa-auto"
        data-bs-toggle="modal"
        data-bs-target=".modal"
      >
        view more..
      </button>
      <button
      class="btn btn-primary d-flex justify-content-center mx-auto"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      
    >
      Add to Cart
    </button>
  </div>
</div>
</div>
  </div>
  </router-link>
 </div> 
   
    



</template>
<script>
export default {
    props:['vehicle']
}
</script>
<style scoped>
ul{
  text-decoration: none;
    }
  router-link,.card{
    text-decoration: none;
}


.card{
 background-color:white; 
 /* color: rgb(175,175,175) !important; */   color:  rgb(20,39,44); 
}
.card:hover{
    scale: 105%;
    box-shadow: rgb(0,98,165) 0px 5px 5px 5px;
}
.sc{
    margin-top: 90px !important;
    color:  rgb(20,39,44); 
}


a:hover{
  scale: 102%;
 box-shadow: rgb(0,98,165) 0px 5px 5px 5px;
 border-radius: 10px !important;

}




@media screen and (max-width: 500px) {
    .offcanvas{
        width: 19.5rem !important;     
    }
    .canvas-b{
        margin-left: 5px !important;
    }

}
  

.offcanvas{
    background-color:  rgb(20,39,44) !important; 
 color: rgb(175,175,175) !important;
}
 
.btn-close{
  background-color: rgb(175,175,175) !important ;
}

.img{
    height: 7rem;
}


.canvas-b{
    margin-left: 10px !important;
}

.btn{
    margin-top: 5px !important;
}
</style>