<template>

<div class="portfolio">
   
    <h1 class="portfolio-title">Portfolio</h1>

    <div class="portfolio-item-container">
        <div class="portfolio-item" style="overflow-wrap: break-word;" v-for="portfolio in portfolios" :key="portfolio">

            <div class="portfolio-item-details">

<!-- test af details -->
<router-link :to="{ name: 'portfoliodetails', params: { id: portfolio.id } }" class="btn-more">
          <button>Se mere..
            
          </button>
        </router-link>
<!-- slut på test-->

                <h2 class="portfolio-name">Navn: {{ portfolio.portfolioNavn }}</h2>
                <p class="date"> Dato: {{ portfolio.portfolioDato }}</p>
                <p class="portfolio-category"> Kategori:{{ portfolio.portfolioKategori }}</p>
                <p class="portfolio-description"> Beskrivelse: </p>
                 <p class="desscription-text"> {{ portfolio.portfolioBeskrivelse }}</p>
                  
                 <div class="img-btn">
                <img :src="portfolio.portfolioBillede" alt="post image" width="200" height="200">

                <!-- test af details -->
<!-- <router-link :to="{ name: 'portfoliodetails', params: { id: portfolio.id } }" class="btn-more">
          <button>Se mere..
            
          </button>
        </router-link> -->
<!-- slut på test-->
</div>

                
              
            </div>
        </div>
    </div>
</div>
  </template>
  
  <script setup> 
  import { RouterLink } from 'vue-router'
  
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



  /* Styles for the portfolio section */
.portfolio {
    text-align: center;
    padding: 20px;
    margin: 10px;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 5px;
    background-color: #f9f9f9;
    margin-top: 4rem;
    margin-right: 1rem;
  
}
/* Styles for the portfolio item title*/
.portfolio-name{
    font-size: 22px;
    font-weight: bold;
    color: #3a3a3a;
    margin: 5px 0 20px 0;
    font-family: bookman;
    text-align: center;
}

/* Styles for the portfolio title */
.portfolio-title {
    
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 10px;
    
    font-family: bookman;
    font-size: 50px;
    font-weight: lighter;
}
.date{
    font-size: 15px;
    font-weight: bold;
    color: #777;
    margin: 5px 0;
    font-family: bookman;
}
/* Styles for the portfolio item container */
.portfolio-item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

/* Styles for each portfolio item */
.portfolio-item {
    background-color: #ffffff;   
    margin: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Styles for the portfolio item details */
.portfolio-item-details {
    padding: 10px;
    text-align: left;
    border-radius: 1rem;

}

/* Styles for the portfolio item title

/* Styles for the portfolio item category */
.portfolio-category {
    font-style: italic;
    color: #555;
}

/* Styles for the portfolio item description */
.portfolio-description {
    font-size: 18px;
    font-weight: bold;
    color: #777;
    margin: 5px 0;
}

.portfolio-desscription-text {
    font-size: 15px;
    color: #777;
    margin: 5px 0;
}
.img-btn{
    display: flex;
  flex-direction: column;
   justify-self: end;
    align-items: flex-end;
    margin-top: 1rem;
}

.portfolio img {
    width: 100%;
    height: 100%;
  
    border-radius: 5px;
  
}

/* .btn-more{
    display: flex;
    justify-content: end;
    align-items: end;
    size: 1rem; */

@media (min-width: 378px) {
    .portfolio-item {
        width: 300px;
    }
  }
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  