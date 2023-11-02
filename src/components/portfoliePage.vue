<template>
    
        <div class="lg:px-28 lg:py-5 md:px-24 md:py-4 sm:px-8 sm:py-4">
    <div class="project-view flex grid md:lg:grid-cols-4 sm:grid-cols-1">
      <div class="admin_project_card" v-for="portfolio in newestPortfolios" :key="portfolio.id">
        
        <h3>{{ portfolio.portfolioNavn }}</h3>
        <p>
          <span>Kategori: </span>{{ portfolio.portfolioKategori}} <!-- .join(', ')  -->
        </p>
        <p>
          
          <span>Dato: </span>{{ portfolio.portfolioDato }}
        </p>
     <!--    <p>
          <span>Team: </span>{{ project.projectTeam }}
        </p> -->
        <p>
          <span>Beskrivelse: </span>{{ portfolio.portfolioBeskrivelse }}
        </p>
        <img :src="portfolio.portfolioBillede" alt="post image" width="200" height="200">
    <!--     <router-link :to="{ name: 'portfoliodetail', params: { id: portfolio.id } }" class="btn-more">
          <button>Portfolio</button>
        </router-link> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, /* ref, */ onMounted } from 'vue';
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

</style>