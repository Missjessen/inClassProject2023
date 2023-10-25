<template>
   <!-- // knapper  -->
  <div class="about">
    <div>
    <h1 class="add-text">Add new ithems</h1>
    <div class="add-item-fb">
      <!-- //  input felter for portfolio  -->
      <p>Navn</p><input type="text"  placeholder="Product name" v-model="AddProductData.productName" >
      <p>Beskrivelse</p><input type="text" placeholder="Product beskrivelse" v-model="AddProductData.productBeskrivelse" >
      <p>Billede</p><input type="text" placeholder="Product image" v-model="AddProductData.productBillede" >
      <p>Kategori</p><input type="text" placeholder="Product kategori" v-model="AddProductData.productKategori" >
      <button class="btn-add" @click="firebaseAddSingleItem()">Add Item</button>
    </div>
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
        ProductPrice: {{ product.productBeskrivelse }}
      </p>
      <p>
        ProductBillede: {{ product.productBillede }}
        </p>
        <p>
        ProductKategori: {{ product.productKategori }}
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

/* background  */
body {
               background-color: #f6f6f6;
               font-family: 'Courier New', Courier, monospace;
}

.about{
               max-width: 1000px;
               
               margin: 0 auto;
               background-color: #fff;
               padding: 20px;
               border-radius: 5px;
               box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

}
     .add-item-fb input {  /* input add* */
                 background-color: #f4f1f1;
                 margin-bottom: 10px;
                 flex: 2;
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
                  background-color: #f3d0aa;}
      

/* Add some spacing to the bottom of the page *
hr {
  margin: 20px 0;
} */

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}


</style>
