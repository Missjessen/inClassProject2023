<template> 
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
        <span >Kategori:</span>
         {{ portfolioDetailView.portfolioKategori }}
      </li>
      <li class=""><span>Dato:</span> {{ portfolioDetailView.portfolioDato }}</li>
      <div class="child1 p-10">
        
        <li  class="text-3xl font-medium  ">
          <span class=""></span> {{ portfolioDetailView.portfolioNavn }}
        </li>
        <li  class="h-[28rem]"><span>Beskrivelse:</span> <br> {{ portfolioDetailView.portfolioBeskrivelse }}</li>
      </div>
    </ul>
  </div>
</div>


<div class="grid grid-cols-2 justify-items-center ">
  <ul class="">

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
/* Add styles the app container */
.app{
  display: flex;
  justify-items: center;
  align-items: center;
}

  /* Add styles for the container */
.container.portfolioDetailView {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 20px;
  font-family: bookman;
  
}

/* Add styles for the grid */
.grid.grid-cols-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* Style for the left column (col1) */
.col1 {
  display: flex;
  justify-content: center;
  ;
}

#portfoliobilliede {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Style for the right column (col2) */
.col2 {
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Style for the list items */
li {
  margin-bottom: 10px;
}

/* Style for the buttons (child2) */
.child2 button {
 
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
}

/* Style for the "Go Back" button */
button {
  background-color: #f3e1e1;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  size: 20px;
  cursor: pointer;
}

button:hover {
  background-color: #aba7a7;
}
  
  </style>