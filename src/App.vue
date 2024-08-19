<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-slate-200">
      <nav class="flex w-full items-center justify-between py-2 px-14">
        <div class="w-1/3">
          <RouterLink to="/">
            <img class="h-12 w-auto hover:scale-110 ease-in-out duration-300" src="images/logo.png" alt="" />
          </RouterLink>
        </div>


        <div class="w-1/3 flex justify-center gap-4">
          <RouterLink to="/" class="hover:text-violet-600 ease-in-out duration-300 font-bold">Home</RouterLink>
          <RouterLink to="/product" class="hover:text-violet-600 ease-in-out duration-300 font-bold">Products</RouterLink>
          <RouterLink to="/basket" class="hover:text-violet-600 ease-in-out duration-300 font-bold">Baskets</RouterLink>
        </div>

        <div class="w-1/3 flex justify-end gap-4">
          <a :href=project1Url target="_blank" class="border hover:bg-gray-600 p-2 rounded-lg text-md hover:text-violet-400 border-gray-400 ease-in-out duration-300">Book Management</a>
          <a :href=project3Url target="_blank" class="border hover:bg-gray-600 p-2 rounded-lg text-md hover:text-violet-400 border-gray-400 ease-in-out duration-300">Book Review</a>
        </div>
      </nav>
    </header>
      
      <RouterView />


    

    <footer class="bg-slate-400 mt-auto relative">
      <div class="h-16 mt-auto absolute inset-x-0 -top-16 from-slate-400 w-full bg-gradient-to-t -z-10"></div>
      <div class="flex justify-between items-center w-full py-3 px-14">
        <div class="font-semibold text-lg text-gray-800 hover:scale-105 ease-in-out duration-300">
          © 2023 All Rights Reserved.
        </div>
        <ul class="flex gap-5">
          <li>
              <a :href=portfolioUrl target="_blank" class="text-3xl text-gray-800 hover:text-violet-600 ease-in-out duration-300">
                <font-awesome-icon icon="fa-solid fa-house" />
              </a>
          </li>
          <li>
              <a :href=githubUrl target="_blank" class="text-3xl text-gray-800 hover:text-violet-600 ease-in-out duration-300">
                <font-awesome-icon icon="fa-brands fa-github" />
              </a>
          </li>
          <li>
              <a :href=linkedinUrl target="_blank" class="text-3xl text-gray-800 hover:text-violet-600 ease-in-out duration-300">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
              </a>
          </li>
        </ul>
      </div>
      

    
    </footer>
  </div>
</template>
 
<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  data() {
    return {
      isMobileMenuOpen: false,
      linkedinUrl: import.meta.env.VITE_LINKEDIN,
      githubUrl: import.meta.env.VITE_GITHUB,
      portfolioUrl: import.meta.env.VITE_PORTFOLIO,
      project1Url: import.meta.env.VITE_ASPX,
      project3Url: import.meta.env.VITE_REACT,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  }
};
</script>

<style scoped>

</style>
