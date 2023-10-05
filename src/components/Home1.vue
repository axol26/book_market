<template>
    <section class="bg-slate-200">
        <div class="w-full flex mt-5">
                <!--start caption content-->
                <div class="w-3/5 h-full px-12 pt-20 pb-20">
                    <div class="d-table-cell align-middle">
                        <h1 class=" text-5xl text-gray-800 tracking-tight font-bold animate-pulse">Some Books for Your Life</h1>
                        <p class="mt-6 text-justify animate-pulse">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt fringilla urna sit amet condimentum. Nulla blandit placerat est, in ornare tortor sollicitudin eget. Ut eget maximus sapien. Praesent id dolor interdum, fermentum erat non, sodales orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        <div class="flex justify-center items-center mt-10 gap-6">
                          <RouterLink to="/product" class="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 text-center">

                              Order Now!

                          </RouterLink>
                          <a href="http://www.testapp.somee.com/homepage.aspx" target="_blank" class="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 text-center">
                                Borrow a Book!

                          </a>
                        </div>
                      </div>
                </div>
                <!--end caption content-->
                <!--start caption image-->
                <div class="w-2/5 overflow-hidden relative">
                    <!-- <div class="overflow-hidden"> -->
                      <div class="w-2/5 mt-auto absolute inset-y-0 z-10 from-transparent bg-gradient-to-l to-slate-200"></div>
                      <!-- <div class="h-12 mt-auto absolute inset-x-0 z-10 from-transparent bg-gradient-to-t to-slate-200"></div>
                      <div class="h-12 mt-auto absolute inset-x-0 bottom-0 z-10 from-transparent bg-gradient-to-b to-slate-200"></div> -->
                        <div class="scrolling-container h-full ">
                            <img src="images/books_col.png" alt="Scrolling Image" class="scrolling-image w-auto" />
                            <img src="images/books_col.png" alt="Scrolling Image" class="scrolling-image w-auto" />
                        <!-- </div> -->
                    </div>
                </div>
                <!--end caption image-->
            </div>
        <div class="pattern-bg"></div>
    </section>
  </template>
    
<script>
export default {
  name: "Home1",
}
</script>
  
<style>
 /* Define the container for the scrolling image */
 
  
  /* Define the scrolling container */
  .scrolling-container {
    display: flex;
    animation: scrollRight 10s linear infinite; /* Adjust animation duration as needed */
  }
  
  /* Define the scrolling animation */
  @keyframes scrollRight {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  /* Define styling for the scrolling image */
  
  

</style>
  