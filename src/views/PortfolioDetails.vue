<template>
   
       <!--  <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
     
        
        <div v-else>Loading...</div>
        
        <button @click="goBack()">Go Back</button>
        Details test {{ props.id }}
      </div>
    -->
  
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
    <div v-if="portfolioDetailView" class="container portfolioDetailView ">

<div class="grid grid-cols-2  ">

  <!------------col 1 img------->
  <div class="col1 pr-3" v-if="portfolioDetailView.portfolioBillede">
    <div>
      <img class="object-cover" id="portfoliobilliede" :src="portfolioDetailView.portfolioBillede" alt="Project Image" >
     
    </div>
  </div> 
  <!--------col 2 name, desciption links------>
  <div class="col2 bg-slate-300  rounded-md ">
    <ul>
      <li class=" font-medium  ">
        <span >Team:</span>
         {{ portfolioDetailView.portfolioKategori }}
      </li>
      <div class="child1 p-10">
        
        <li  class="text-3xl font-medium  ">
          <span class=""></span> {{ portfolioDetailView.portfolioNavn }}
        </li>
        <li  class="h-[28rem]"><span>Beskrivelse:</span> <br> {{ portfolioDetailView.portfolioBeskrivelse }}</li>
      </div>

      <div class="child2 grid grid-cols-3 pt-2 justify-items-center ">
        <!-- <button class="pr-3"><li class="bg-red-300 p-2"> {{ portfolieDetailView.onedriveLink }}</li></button>
        <button class="pr-3"><li class="bg-red-300 p-2"> {{ portfolieDetailView.githubLink }}</li></button>
        <button class="pr-3"><li class="bg-red-300 p-2"> {{ portfolieDetailView.youtubeLink }}</li></button> -->
      </div>
    </ul>
  </div>
</div>


<div class="grid grid-cols-2 justify-items-center ">
  <ul class="">
    <li class=""><span>Team:</span> {{ portfolioDetailView.portfolioTeam }}</li>
 </ul>

 <ul>
    <li class=""><span>Dato:</span> {{ portfolioDetailView.portfolioDato }}</li>
 </ul>
</div>
</div>


      <br>
      <button @click="goBack()">Go Back</button>

</template>


<script setup>


import usePortfolios from '../modules/usePortfolio.js';
import { onMounted,  computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()



const { portfolios, getPortfoliosData } = usePortfolios()




// Get Id from route query
const id = computed(() => router.currentRoute.value.params.id)

const portfolioDetailView = computed(() => {
  return portfolios.value.find(portfolio => portfolio.id === id.value);
});

const {
  firebaseDeleteSingleItem,
  firebaseUpdateSingleItem,
  
} = usePortfolios();



onMounted(() => {
  firebaseDeleteSingleItem,
  firebaseUpdateSingleItem,
  getPortfoliosData();
  console.log(portfolios, "portfolio");
  portfolioDetailView.value = portfolios.value.find(portfolio => portfolio.id === id.value);
});

const goBack = () => {
  router.go(-1);
};
</script>
  
  <style lang="scss">
  
  </style>