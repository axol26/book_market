<template>
  <div>
    <h1>JSON Data:</h1>
    <pre>{{ jsonData }}</pre>
  </div>
</template>

<script>
import axios from 'axios'; // Import Axios in this component

export default {
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
      // Use Axios as imported in this component
      axios.get('https://book-market-be-final.vercel.app/api/api/books/1')
        .then(response => {
          this.jsonData = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  },
};
</script>
  
  <style scoped>
  /* Component styles go here */
  </style>