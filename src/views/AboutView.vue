<template>
  <div class="about">
    <h1>This is an about page</h1>


    <hr>

    <div v-for="product in products" :key="product">
      <p>
        ProductID: {{ product.id  }}
      </p>
      <p>
        ProductName: {{ product.productName }}
      </p>
      <p>
        ProductPrice: {{ product.productPrice }}
      </p>

      <hr>
    </div>
  </div>
</template>

<script setup>
import useProducts from '../modules/useProducts.js';
import { onMounted } from 'vue'

const { 
  products, 
  getProductsData, 


  //UpdateProductData
} = useProducts();

onMounted(() => {
  getProductsData();
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
