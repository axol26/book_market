<template>
  
  <div class="flex justify-center text-3xl font-bold p-4 tracking-tight text-gray-800 bg-gradient-to-b from-slate-200">
      Books For Sale
  </div>

  <section id="Projects" class="w-full flex flex-row flex-wrap items-center justify-center gap-14 mt-6 mb-10 px-4">
  
    <!--   ✅ Product card 1 - Starts Here 👇 -->
    <div @click="addBook(book.book_id)" v-for="book in jsonData" :key="book.id" class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl group">
      <img :src="book.image" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
      <div class="px-4 py-3 w-72">
          <span class="text-gray-400 mr-3 uppercase text-xs">{{ book.book_id }}</span>
          <p class="text-lg font-bold text-black truncate block capitalize group-hover:text-xl ease-in-out duration-500">{{ book.book_name }}</p>
          <div class="flex justify-between items-center my-3">
              <p class="text-lg font-semibold text-black">$ {{ book.price }}</p>
              
              <font-awesome-icon icon="fa-solid fa-basket-shopping" class="text-2xl font-semibold text-black group-hover:text-violet-800 ease-in-out duration-500" />
          </div>
      </div>
    </div>

  </section>


</template>

<script>

import axios from 'axios';

export default {
  name: 'ProductView',
  data() {
    return {
      jsonData: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get("/api/books")
        .then(response => {
          this.jsonData = response.data;
        })
        .catch(error => {
          console.log("Error fetching data:", error);
        });
    },
    addBook(bookId) {
      axios.post(`/api/baskets/add/${bookId}`)
        .then(response => {
          console.log('POST request successful:', response.data);
        })
        .catch(error => {
          console.log("Error fetching data:", error);
        });
    },
  }, 
}

</script>

<style>

</style>
