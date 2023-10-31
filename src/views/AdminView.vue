<template>
  <div class="about">
    <div>
      <h1 class="add-text">Add new items</h1>
      <div class="add-item-fb">
        <p>Navn</p><input type="text" placeholder="Portfolio navn" v-model="AddPortfolioData.portfolioName">
        <p>Beskrivelse</p><input type="text" placeholder="Portfolio beskrivelse" v-model="AddPortfolioData.portfolioBeskrivelse">
        <p>Billede</p><input type="text" placeholder="Portfolio billede" v-model="AddPortfolioData.portfolioBillede">
        <p>Kategori</p><input type="text" placeholder="Portfolio kategori" v-model="AddPortfolioData.portfolioKategori">
        <button class="btn-add" @click="firebaseAddSingleItem()">Add Item</button>
      </div>
    </div>
    <hr>
    <div class="add-out" style="overflow-wrap: break-word;" v-for="portfolio in portfolios" :key="portfolio.id">
      <p>
        ID: {{ portfolio.id }}
      </p>
      <p>
        Navn: {{ portfolio.portfolioNavn }}
      </p>
      <p>
        Beskrivelse: {{ portfolio.portfolioBeskrivelse }}
      </p>
      <p>
        Billede: {{ portfolio.portfolioBillede }}
      </p>
      <p>
        Kategori: {{ portfolio.portfolioKategori }}
      </p>
      <button class="btn-delete" @click="firebaseDeleteSingleItem(portfolio.id)">Delete item</button>
      <p>
        <input type="text" placeholder="New portfolio name" v-model="portfolio.portfolioName" />
      </p>
      <button class="btn-edit" @click="firebaseUpdateSingleItem(portfolio.id)">Edit item</button>
      <hr>
    </div>
  </div>
</template>

<script setup>
import usePortfolios from '../modules/usePortfolio.js';
import { onMounted } from 'vue';

const {
  portfolios,
  getPortfoliosData,
  firebaseDeleteSingleItem,
  firebaseAddSingleItem,
  AddPortfolioData,
  firebaseUpdateSingleItem,
} = usePortfolios();

onMounted(() => {
  getPortfoliosData();
});
</script>

<style>

/* background  */
body {
               background-color: #f6f6f6;
               font-family: 'Courier New', Courier, monospace;
               
 
}

.about{
               max-width: auto;
               
               margin: 0 auto;
               background-color: #fff;
               padding: 20px;
               border-radius: 5px;
               box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                margin-top: 20px;
                display: flexbox;

}
     .add-item-fb input {  /* input add* */
                 background-color: #f4f1f1;
                 margin-bottom: 10px;
                 /* flex: 2; */
                 display: flex;
                 
                 padding: 8px;
                 border: 1px solid #ccc;
                 border-radius: 5px;
                
}
      .btn-add {   /* add Btn* */
                 background-color: #b4b4b4;
                 border-radius: 5px;
                 margin-top: 5px;
                 padding: 6px;
                 font-size: smaller;
}
       .add-text { /*Title */
                 color: #000000;
                 font-size: larger;
                 font-weight: bold;
  
                }
                hr {
  margin: 20px 0 0 20px;
}
      .btn-edit,       
      .btn-delete {   /* delete Btn* *//* edit Btn* */
                 background-color: #c5bfbf;
                 margin-top: 5px;
                 font-size: small;
                 padding: 6px;
                 border: 1px solid #ccc;
                 border-radius: 5px;
                 cursor: pointer;
      }
      .btn-add:hover,
      .btn-delete:hover,
      .btn-edit:hover {
                  background-color: #f3d0aa;
                
                }
      .add-out{
        height: 200px;
        width: 150px;
      }
                  

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}


</style>
