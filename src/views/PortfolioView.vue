<template>
    <div class="portfolio">
  
     <!--  <button class="btn-add" @click="firebaseAddSingleItem()">Add Item</button> -->
      <div>
       <!--  <input type="text" placeholder="portfolie navn" v-model="AddportfolioData.portfolioNavn" > -->
  <!-- </div>
  <hr>
  
      <h1>Portfolio</h1>
  
      <div class="portfolio item" v-for="portfolio in portfolios" :key="portfolio">
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
       
  
  
    
      </div> -->
</div>
      <br>
    </div>

    ------

    <div class="portfolio">
    <h1 class="portfolio-title">Portfolio</h1>

    <div class="portfolio-item-container">
        <div class="portfolio-item" style="overflow-wrap: break-word;" v-for="portfolio in portfolios" :key="portfolio">
            <div class="portfolio-item-image">
                <img src="{{ portfolio.portfolioBillede }}" alt="{{ portfolio.portfolioNavn }}" />
            </div>

            <div class="portfolio-item-details">
                <h2>Navn: {{ portfolio.portfolioNavn }}</h2>
                <p class="portfolio-category"> Kategori:{{ portfolio.portfolioKategori }}</p>
                <p class="portfolio-description"> Beskrivelse: {{ portfolio.portfolioBeskrivelse }}</p>
            </div>
        </div>
    </div>
</div>
  </template>
  
  <script setup> 
  
  
  import usePortfolios from '../modules/usePortfolio.js';
  import { onMounted } from 'vue'
  
  const { 
    portfolios, 
    getPortfoliosData, 
    //UpdateProductData
  } = usePortfolios();
  
  onMounted(() => {
    getPortfoliosData();
  
  })
  
  
  </script> 
  
  <style>
  .portfolio .item {
    margin: 20px;
    background-color: aqua;
  }

  /* Styles for the portfolio section */
.portfolio {
    text-align: center;
    padding: 20px;
}

/* Styles for the portfolio title */
.portfolio-title {
    font-size: 24px;
    margin-bottom: 20px;
}

/* Styles for the portfolio item container */
.portfolio-item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

/* Styles for each portfolio item */
.portfolio-item {
    background-color: #f9f9f9;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
}

/* Styles for the portfolio item image */
.portfolio-item-image img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

/* Styles for the portfolio item details */
.portfolio-item-details {
    padding: 10px;
    text-align: left;
}

/* Styles for the portfolio item title */
.portfolio-item-details h2 {
    font-size: 20px;
    margin: 10px 0;
}

/* Styles for the portfolio item category */
.portfolio-category {
    font-style: italic;
    color: #555;
}

/* Styles for the portfolio item description */
.portfolio-description {
    font-size: 14px;
    color: #777;
    margin: 10px 0;
}
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  