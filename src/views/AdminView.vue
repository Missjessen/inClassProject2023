<template>
   <!-- // knapper  -->
  <div class="about">
    <h1>This is an about page</h1>
    <button class="btn-add" @click="firebaseAddSingleItem()">Add Item</button>
    <div class="add-item-fb">
      <!-- //  input felter for portfolio  -->
      <input type="text" placeholder="Product name" v-model="AddProductData.productName" >
      <input type="text" placeholder="Product beskrivelse" v-model="AddProductData.productBeskrivelse" >
      <input type="text" placeholder="Product image" v-model="AddProductData.productBillede" >
      <input type="text" placeholder="Product kategori" v-model="AddProductData.productKategori" >
    </div>
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
      <button class="btn-delete" @click="firebaseDeleteSingleItem(product.id)">Delete item</button>
    
      <p>
        <input type="text" placeholder="New product name" v-model="product.productName" />
      </p>
      <button class="btn-edit" @click="firebaseUpdateSingleItem(product.id)">Edit item</button>
      <hr>
    </div>
  </div>
</template>

<script setup>
import useProducts from '../modules/useProducts.js';
import { onMounted } from 'vue'

/** Find ud af hvilke ting du skal uploade
* fx portfolio navn, beskrivelse, billede, kategori
*
*/
const { 
  products, 
  getProductsData, 
  firebaseDeleteSingleItem, 
  firebaseAddSingleItem ,
  AddProductData,
  firebaseUpdateSingleItem,
  //UpdateProductData
} = useProducts();

onMounted(() => {
  getProductsData();
})


</script>

<style>

.add-item-fb {
  color: aqua;
  height:100px
}

.add-item-fb input {
background-color: blueviolet;
}

.btn-add {
  /* Btn* */
  background-color: #666666
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
