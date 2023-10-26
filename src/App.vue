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
   

    <div class="wrapper">
     <div>
      <nav>
<nav class="bg-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a  href="views/../HomeView.vue" class="flex items-center">
      <img src="@/assets/images/logo5.png" class="h-8 mr-3" alt="Flowbite Logo">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
  </a>
  <div class="flex md:order-2">
     
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-4 w-15 h-15 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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

    
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/admin">Admin</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
      <button @click="logOut" v-if="isLoggedIn">Log Out</button>
    </div>
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
  line-height: 1.5;
  max-height: 200px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  background-color: rgb(247, 194, 184);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
/* 
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
