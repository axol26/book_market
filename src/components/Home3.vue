<template>
    <!--start why choose area-->
    <section id="" class="pb-10 bg-slate-400 relative">
            <div class="h-20 -top-20 absolute inset-x-0 from-slate-400 w-full bg-gradient-to-t -z-10"></div>

            <h1 class=" text-5xl pb-8 text-gray-800 tracking-tight font-bold pt-4 text-center hover:text-white ease-in-out duration-300">Plenty of Books to Choose From</h1>
                
            <div class="container mx-auto">
                
                <!--start product gallery-->


<!-- Slideshow container -->
                  <div class="slideshow-container  relative">

                    <div class=" border-black splash">
                            <img src="images\lfa.jpg" class="mySlides fade h-[500px]">
                            <img src="images\pt.jpg" class="mySlides fade h-[500px]" >
                            <img src="images\tar.jpg" class="mySlides fade h-[500px]" >
                            <img src="images\tatwd.jpg" class="mySlides fade h-[500px]" >
                            <img src="images\tfios.jpg" class="mySlides fade h-[500px]" >
                            <img src="images\zc.jpg" class="mySlides fade h-[500px]" >
                    </div>

                    <div class="w-1/2 h-full border-red-700 absolute inset-y-0 right-0 flex items-center">
                      <div class="h-[85%] border-2 bg-white border-gray-800 w-3/4 relative rounded-xl hover:border-white hover:bg-gray-800 hover:text-white ease-in-out duration-500">
                        <div class="myDesc fade p-8 ">
                          <h3 class="text-2xl text-center font-extrabold tracking-tight">Looking For Alaska</h3>
                          <h1 class="text-lg text-center font-bold tracking-tight border-b-2 w-full pt-3 pb-1">Neil Gaiman</h1>
                          <p class="text-semibold tracking-tight py-3">Fantasy, Horror, Mythology</p>
                          <p class="text-semibold text-justify tracking-tight"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tellus quis urna eleifend, a fermentum nunc eleifend. Vestibulum id enim nec justo gravida ultrices. Integer eu arcu eget felis sagittis viverra at eget erat.</em></p>
                        </div>
                        <div class="myDesc fade p-8 ">
                          <h3 class="text-2xl text-center font-extrabold tracking-tight">Paper Towns</h3>
                          <h1 class="text-lg text-center font-bold tracking-tight border-b-2 w-full pt-3 pb-1">Jane Austen</h1>
                          <p class="text-semibold tracking-tight py-3">Romance, Satire, Classic Literature</p>
                          <p class="text-semibold text-justify tracking-tight"><em>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce eget velit id urna suscipit egestas. Donec ut justo sed tortor cursus hendrerit.</em></p>
                        </div>
                        <div class="myDesc fade p-8 ">
                          <h3 class="text-2xl text-center font-extrabold tracking-tight">The Anthropocene Reviewed</h3>
                          <h1 class="text-lg text-center font-bold tracking-tight border-b-2 w-full pt-3 pb-1">Stephen King</h1>
                          <p class="text-semibold tracking-tight py-3">Horror, Thriller, Supernatural</p>
                          <p class="text-semibold text-justify tracking-tight"><em>Maecenas hendrerit elit sit amet tincidunt. Curabitur eget nisl at velit vehicula tristique. Quisque vestibulum at turpis vel bibendum. Vivamus blandit magna a tincidunt.</em></p>
                        </div>
                        <div class="myDesc fade p-8 ">
                          <h3 class="text-2xl text-center font-extrabold tracking-tight">Turtles All The Way Down</h3>
                          <h1 class="text-lg text-center font-bold tracking-tight border-b-2 w-full pt-3 pb-1">George Orwell</h1>
                          <p class="text-semibold tracking-tight py-3">Dystopian Fiction, Political Satire, Social Commentary</p>
                          <p class="text-semibold text-justify tracking-tight"><em>Vestibulum at lorem non ligula posuere pharetra. Sed laoreet purus in felis congue, sit amet semper tortor vestibulum. Phasellus ut lacus nec erat hendrerit vestibulum.</em></p>
                        </div>
                        <div class="myDesc fade p-8 ">
                          <h3 class="text-2xl text-center font-extrabold tracking-tight">The Fault In Our Stars</h3>
                          <h1 class="text-lg text-center font-bold tracking-tight border-b-2 w-full pt-3 pb-1">J.K. Rowling</h1>
                          <p class="text-semibold tracking-tight py-3">Fantasy, Young Adult, Magical Realism</p>
                          <p class="text-semibold text-justify tracking-tight"><em>Nulla facilisi. Vestibulum et libero quis tortor auctor feugiat. Sed id venenatis neque, eu convallis elit. Vivamus auctor libero sit amet est facilisis, in vulputate urna dictum.</em></p>
                        </div>
                        <div class="myDesc fade p-8 ">
                          <h3 class="text-2xl text-center font-extrabold tracking-tight">Zombiecorns</h3>
                          <h1 class="text-lg text-center font-bold tracking-tight border-b-2 w-full pt-3 pb-1">Gabriel García Márquez</h1>
                          <p class="text-semibold tracking-tight py-3">Latin American Literature, Historical Fiction</p>
                          <p class="text-semibold text-justify tracking-tight"><em>Suspendisse potenti. Integer eu interdum augue. Nam ac urna non libero laoreet hendrerit a sit amet metus. Cras pulvinar, sem quis tristique scelerisque, elit quam vestibulum libero, id eleifend purus arcu vel odio.</em></p>
                        </div>
                        <div class="bottom-14 absolute left-[35%]">
                          
                          <a href="https://bookreview-t1vn.onrender.com" target="_blank" class="w-[50%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 text-center">
                            Review a Book!

                          </a>
                        </div>
                      </div>
                      
                    </div>


                  <!-- Full-width images with number and caption text -->
                    

                    <!-- Next and previous buttons -->
                    <a class="prev rounded-l-lg left-16" @click="plusSlides(-1)">&#10094;</a>
                    <a class="next rounded-r-lg right-16" @click="plusSlides(1)">&#10095;</a>

                  </div>


<!-- The dots/circles -->
<!-- <div style="text-align:center">
<span class="dot" @click="currentSlide(1)"></span>
<span class="dot" @click="currentSlide(2)"></span>
<span class="dot" @click="currentSlide(3)"></span>
</div>   -->


                <!--end product gallery-->
                <!--start why choose content-->
                
                
                <!--end why choose content-->
              </div>
    </section>
    <!--end why choose area-->


    
</template>
    
<script>

export default {
  name: 'Home3',
  data() {
    return {
      slideIndex: 1,
    };
  },
  mounted() {
    // Call showSlides to initialize the slideIndex when the component is mounted
    this.showSlides(this.slideIndex);
  },
  methods: {
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    },
    showSlides(n) {
      console.log(this.slideIndex, n)
      let slides = document.getElementsByClassName("mySlides");
      let desc = document.getElementsByClassName("myDesc");
      if (this.slideIndex > slides.length) {
        this.slideIndex = 1;
      } else if (this.slideIndex == 0) {
        this.slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        if (this.slideIndex == i + 1) {
          slides[i].style.display = "block";
          desc[i].style.display = "block";
        } else {
          slides[i].style.display = "none";
          desc[i].style.display = "none";
        }
      }

    },
  },
};

</script>
  
<style>
.splash {
  position: relative;
  /* height: 100vh; */
  width: calc(100% - 15vw);
  bottom: -10px;
  right: -200px;
  animation: animateUser 4s linear infinite;
}
@keyframes animateUser {
  50% {
    bottom: 10px;
  }
}

/* Slideshow container */
.slideshow-container {
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides, .myDesc {
  display: none;

}


/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  user-select: none;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
/* .text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
} */

/* Number text (1/3 etc) */
/* .numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
} */

/* The dots/bullets/indicators */
/* .dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.dot:hover {
  background-color: #717171;
} */

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>  
  