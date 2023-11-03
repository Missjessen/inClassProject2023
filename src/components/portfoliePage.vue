<template>




<card>
  <div class="title-portfolio">SENESTE PROJEKTER</div> 
  
  <div class="bottum-portfolio">
    
  
    <span>
            Portfolio 
            </span> 
            <router-link id="artboard-link" to='/portfolio'>
     <img class="pil-3" src="@/assets/images/pil-44-2-5.png" alt="">
      
    </router-link> 
  </div>
<div class="lg:px-28 lg:py-5 md:px-24 md:py-4 sm:px-8 sm:py-4">
  
    <div class="project-view flex grid md:lg:grid-cols-4 sm:grid-cols-1">
      
      <div class="admin_project_card" v-for="portfolio in newestPortfolios" :key="portfolio.id">
        <h3>{{ portfolio.portfolioNavn }}</h3>
        <p><span>Kategori: </span>{{ portfolio.portfolioKategori }}</p>
        <p><span>Dato: </span>{{ portfolio.portfolioDato }}</p>
        <!-- <p><span>Team: </span>{{ project.projectTeam }}</p> -->
        <p><span>Beskrivelse: </span>{{ portfolio.portfolioBeskrivelse }}</p>
        <img class="4-img" :src="portfolio.portfolioBillede" alt="post image">

       
      </div>
    
    </div>
    </div>
 
</card>
 
</template>

<script setup>
import { computed, onMounted } from 'vue';
import usePortfolio from '../modules/usePortfolio.js';

const { portfolios, getPortfoliosData } = usePortfolio();



// Define a computed property to get the 4 newest projects
const newestPortfolios = computed(() => {
    const sortedPortfolios = portfolios.value.slice().sort((a, b) => new Date(b.portfolioDato) - new Date(a.portfolioDato));
return sortedPortfolios.slice(0, 4);
});

onMounted(() => {
  getPortfoliosData();
});


</script>

   

<style lang="scss" scoped>


.title-portfolio{
  font-family: bookman;
  font-size: 30px;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-top: 3rem;
  color: #4e4c4c;
  text-shadow: 1px 1px 1px #b6b4b4;
  margin-left: 3rem;
  margin-bottom: -4rem;
}
.bottum-portfolio{

font-family: bookman;
font-size: 30px;
display: flex;
justify-content: end;
align-items: end;

margin-bottom: 1rem;

}

#artboard-link, .pil-3{
  display: flexbox;
  flex-direction: row;
  justify-content:right;
  align-content: right;
 
  height: 5rem;

}
.admin_project_card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
}
 


img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(60%);
  width: 100%;
    
  display: flex;
    border-radius: 5px;
   align-items: flex-end;
  
  justify-items: end;


}

.title-4-new{
  font-family: bookman;
  font-size: 20px;
  display: flex;
  justify-content: start;
  align-items: start;
  
  margin-bottom: 1rem;
  color: #000000;
  font-weight: lighter;
 

}


</style>