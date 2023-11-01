<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { onMounted, ref } from 'vue'

import { auth } from './firebase.js'
import { signOut, onAuthStateChanged } from 'firebase/auth'


import router from './router'

let isLoggedIn = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      console.log('User logged in', auth.currentUser)

    } else {
      isLoggedIn.value = false
      console.log('User logged out', auth.currentUser)

    }
  })
})

let logOut = () => {
  signOut(auth)
  .then(() => {
    console.log('User logged out', auth.currentUser)
    router.push('/login')
  })
  .catch((error) => {
    console.log(error)
  })
}

</script>

<template>
  <header>


   <!-- /*nav-bar-logo*/ -->
     <nav> 
     <div class="bg-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div class="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
            <a  href="/" class="flex items-center">
          <img src="@/assets/images/logoskrift.png" class="h-10 mr-3" alt="Logo">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>




 <!-- /*nav-bar-left*/ -->
 <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/portfolio">Portfolio</RouterLink>
        </li>
         <li>
          <RouterLink v-if="isLoggedIn" to="/admin">Admin</RouterLink>
        </li> 
        <li>
          <RouterLink v-if="!isLoggedIn" to="/login" >Login</RouterLink>
        </li>
     </ul>
     <button @click="logOut" v-if="isLoggedIn">Log Out</button>
    </div>
   </div>
  </div>
</nav>

   <!-- /*logout*/ -->
<!--    <section class="logout">
         <button @click="logOut" v-if="isLoggedIn">Log Out</button>
   </section> -->

</header>

  <RouterView />

  <!-- lav flere mindre componenter -->
<!--  <kontaktMig /> // for hvert components du importere ind (sections på siden) -->


</template>

<style scoped>
header {
  line-height: 1;

  font-family: 'Courier New', Courier, monospace;

}


nav {
  width: 150%;
  background-color: rgb(248, 248, 248, 0,3);
  font-size: 30px;
}



nav li.router-active:hover {
  background-color: transparent;
  opacity: 0,5;
  border-radius: 2%;
}

nav li {
  display: inline-block;
  padding: 1rem;
  margin: 0 0.5rem;
  font-weight: bold;
  color: var(--color-text);
  text-decoration: none;
  border-radius: 2%;

}

nav img{
  width: 300px;
  height: 100px;
  margin-top: 10px;
  
}



/* @media (min-width: 1024px) { */
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  /* header  {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    
    font-size: 1rem;

    padding: 1rem 0;
   }
   
} */
</style>
