<template>
  <div class="about">
    <div>
      <h1 class="add-text">Add new items</h1>
      <div class="add-item-fb">

        <p>Navn</p><input type="text" placeholder="Portfolio navn" v-model="AddPortfolioData.portfolioNavn">

        <p>Dato</p><input type="date" placeholder="Portfolio date" v-model="AddPortfolioData.portfolioDato">

        <p>Beskrivelse</p><input type="text" placeholder="Portfolio beskrivelse" v-model="AddPortfolioData.portfolioBeskrivelse">

        <input type="file" label="File input" @change="uploadImg">
        
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
      <p class="dato">
        portfolioDato: {{ portfolio.portfolioDato }}
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
      <ul>
        <input type="text" placeholder="New portfolio name" v-model="portfolio.portfolioNavn" />
        <input type ="text" placeholder="New portfolio date" v-model="portfolio.portfolioDato" />
        <input type ="text" placeholder="New portfolio beskrivelse" v-model="portfolio.portfolioBeskrivelse" />
        <input type ="text" placeholder="New portfolio billede" v-model="portfolio.portfolioBillede" />
        
        <input type ="text" placeholder="New portfolio kategori" v-model="portfolio.portfolioKategori" />
      </ul>
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
  uploadImg

} = usePortfolios();

onMounted(() => {
  getPortfoliosData();
});
</script>

<style>

.about {
  text-align: start;
  justify-content: space-between;
  box-sizing: 50px;
  margin: 4rem auto;
  padding: 0 20px;
  max-width: 700px;
  min-height: 100vh;

  flex-direction: column;
  
  align-items: start;
  justify-content: start;
  font-family: 'Courier New', Courier, monospace;
  font-size: large;


}



.add-text {
  font-size: 24px;
  margin-bottom: 10px;
}

.add-item-form {
  display: flex;
  flex-wrap: wrap;
 
}

.form-group {
  margin: 30px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="date"],
input[type="file"] {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-add,
.btn-delete,
.btn-edit {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #dfb9b9;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-add:hover,
.btn-delete:hover,
.btn-edit:hover {
  background-color: #b39191;
}

.portfolio-list {
  margin-top: 20px;
}

.portfolio-item {
  margin: 10px 0;
  text-align: left;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.edit-portfolio {
  margin-top: 10px;
}

.date {
  font-weight: bold;
}

.add-out {
  margin: 30px 0;
  text-align: left;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
                  

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}


</style>
