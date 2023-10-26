<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { onMounted, ref } from 'vue'

import { auth } from './firebase.js'
import { signOut, onAuthStateChanged } from 'firebase/auth'

import aboutMe from './components/aboutMe.vue'  // for hvert components du importere ind (sections på siden)
import heropage from './components/heroPage.vue'

import kontakt from './components/kontaktPage.vue'
import portfolio from './components/portfoliePage.vue'
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
     <nav class="bg-white  fixed w-full z-20 top-0 left-0  border-gray-200 dark:border-gray-600">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a  href="/" class="flex items-center">
          <img src="@/assets/images/logo5.png" class="h-10 mr-3" alt="Flowbite Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
      </a>


 <!-- /*nav-bar-left*/ -->
   <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-large border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/admin">Admin</RouterLink>
        </li>
        <li>
          <RouterLink to="/login">Login</RouterLink>
        </li>
     </ul>
    </div>
   </div>
  </nav>

   <!-- /*login*/ -->
   <div>
      <button @click="logOut" v-if="isLoggedIn">Log Out</button>
   </div>


</header>

  <RouterView />

  <!-- lav flere mindre componenter -->
<!--  <kontaktMig /> // for hvert components du importere ind (sections på siden) -->
  <heropage />
  <aboutMe />
  <kontakt/>
  <portfolio />

</template>

<style scoped>
header {
  line-height: 1;
  max-height: 150px;
  font-family: 'Courier New', Courier, monospace;

}


nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
  background-color: rgb(248, 248, 248, 0,3);
  font-size: 20px;
}

nav li.router-link-exact-active {
  color: var(--color-text);
}

nav li.router-link-exact-active:hover {
  background-color: transparent;
  opacity: 0,5;
  border-radius: 2%;
}

nav li {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
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
