<script setup>
import heropage from '../components/heroPage.vue'
import skills from '../components/skillsPage.vue'
import kontakt from '../components/kontaktPage.vue'
import portfolio from '../components/portfoliePage.vue'

import aboutme from '../components/AboutMee.vue'  // for hvert components du importere ind (sections på siden)

</script>

<template>
  <main>
    
    <heropage />
  <skills/>
   <aboutme />
  <kontakt/>
  <portfolio />
  
  </main>
</template>
