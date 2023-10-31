<template>
  <div class="about">
    <h1>This is an about page</h1>

   <!--  <button class="btn-add" @click="firebaseAddSingleItem()">Add Item</button> -->
    <div>
     <!--  <input type="text" placeholder="portfolie navn" v-model="AddportfolioData.portfolioNavn" > -->
</div>
<hr>

    <h1>Portfolio</h1>

    <div v-for="portfolio in portfolios" :key="portfolio">
      <p>
        portfoliosID: {{ portfolio.id }}
      </p>
      <p>
        portfolioNavn: {{ portfolio.portfolioNavn }}
      </p>
      <p>
        portfolioBeskrivelse: {{ portfolio.portfolioBeskrivelse }}
      </p>
      <p>
        portfolioBillede: {{ portfolio.portfolioBillede }}
      </p>
      <p>
        portfolioKategori: {{ portfolio.portfolioKategori }}
      </p>
      <button class="btn-delete" @click="firebaseDeleteSingleItem(portfolio.id)">Delete item</button>

      <p>
        <input type="text" placeholder="New portfolie navn" v-model="portfolio.portfolioNavn" />
      </p>
      <button class="btn-edit" @click="firebaseUpdateSingleItem(portfolio.id)">Edit item</button>

  
    </div>
  </div>
</template>

<script setup> 


import usePortfolios from '../modules/usePortfolio.js';
import { onMounted } from 'vue'

const { 
  portfolios, 
  getPortfoliosData, 
  firebaseDeleteSingleItem, 
  firebaseAddSingleItem ,
  firebaseUpdateSingleItem,
  AddportfolioData
  
  


  //UpdateProductData
} = usePortfolios();

onMounted(() => {
  getPortfoliosData();

})


</script> 

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
