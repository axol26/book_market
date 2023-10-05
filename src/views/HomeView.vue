<template>
  <Home1 />
  <Home2 />
  <Home3 />
  <!-- <Home4 /> -->
</template>

<script>
import Home1 from "@/components/Home1.vue";
import Home2 from "@/components/Home2.vue";
import Home3 from "@/components/Home3.vue";
// import Home4 from "@/components/Home4.vue";
export default {
  name: "HomeView",
  components: {
    Home1,
    Home2,
    Home3,
    // Home4,
  },
};
</script>