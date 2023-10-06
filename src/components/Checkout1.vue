<template>

  <div class="flex justify-center text-3xl font-bold p-4 tracking-tight text-gray-800 bg-gradient-to-b from-slate-200">
    Checkout Page
  </div>

    <div class="container mx-auto px-4 mt-6 mb-10 ">
        <div class="flex flex-row gap-4">
          <div class="w-3/4 bg-gray-200 rounded-lg p-6 mb-4 h-fit">

              <h3 class="text-base font-semibold leading-7 text-gray-900 text-center">Personal Information</h3>
              <h1 class="mt-1 text-sm leading-6 text-gray-600 text-center">Please input information below.</h1>

              <div class="mt-4 border flex flex-row flex-wrap">



                      <div class="border w-full flex flex-col justify-center">
                        <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Full name</label>
                        <div class="mt-1">
                          <input type="text" id="name" placeholder="Name" v-model="name" class="block px-3 w-full ease-in-out duration-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                        </div>
                      </div>

                      <div class="border w-1/2 mt-2 flex flex-col justify-center">
                        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
                        <div class="mt-1">
                          <input id="email" type="email" placeholder="Email" v-model="email" class="block px-3 w-[98%] ease-in-out duration-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                        </div>
                      </div>

                      <div class="border w-1/2 mt-2 flex flex-col justify-center">
                        <label for="contact" class="block text-sm font-semibold leading-6 text-gray-900 ml-[2%]">Contact No.</label>
                        <div class="mt-1">
                          <input id="contact" type="number" placeholder="Phone Number" v-model="phone" class="block ml-[2%] px-3 w-[98%] ease-in-out duration-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                        </div>
                      </div>

                      

                      <div class="border w-4/5 mt-2 flex flex-col justify-center">
                        <label for="address" class="block text-sm font-semibold leading-6 text-gray-900">Address</label>
                        <div class="mt-1">
                          <input type="text" id="address" placeholder="Full Address" v-model="address" class="block px-3 w-[98%] ease-in-out duration-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                        </div>
                      </div>


                      <div class="border w-1/5 mt-2 flex flex-col justify-center">
                        <label for="region" class="block text-sm font-semibold leading-6 text-gray-900 ml-[2%]">Region</label>
                        <div class="mt-1">
                          <select id="region" v-model="region" class="block ml-[2%] w-[98%] ease-in-out duration-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                              <option selected disabled>Select</option>
                              <option>Brunei</option>
                              <option>Cambodia</option>
                              <option>East Timor</option>
                              <option>Indonesia</option>
                              <option>Laos</option>
                              <option>Malaysia</option>
                              <option>Myanmar</option>
                              <option>Philippines</option>
                              <option>Singapore</option>
                              <option>Thailand</option>
                              <option>Vietnam</option>
                          </select>
                        </div>
                      </div>

                      



              </div>






        </div>



        
        <div class="w-1/4 bg-gray-100 rounded-lg shadow-md p-6 h-fit">

            <h2 class="text-lg font-semibold mb-4 text-center">Summary</h2>
            <div class="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${{ subtotal }}.00</span>
            </div>
            <div class="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$1.99</span>
            </div>
            <div class="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$5.00</span>
            </div>
            <hr class="my-2">
            <div class="flex justify-between mb-1 bg-gray-200 p-2 rounded-md text-lg">
                <span class="font-semibold">Total</span>
                <span class="font-semibold">${{ subtotal+5+1.99 }}</span>
            </div>
            <!-- <a href="http://localhost:5173/"> -->
              <button class="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 w-full hover:scale-105 ease-in-out duration-300" @click="order()">
                Place Order!
              </button>
            <!-- </a> -->

          </div>
        </div>

    </div>

</template>
  
<script>

import axios from 'axios';

export default {
  name: 'Checkout1',
  data() {
    return {
      jsonData: null,
      subtotal: 0,
      name: "",
      email: "",
      phone: "",
      address: "",
      region: ""
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    order() {
      const requestData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        region: this.region,
        total: this.subtotal + 5 + 1.99
      };

      

      axios.post("https://book-market-be-final.vercel.app/api/api/baskets/deletebasket")
        .then(response => {
          this.jsonData = response.data;
        })
        .catch(error => {
          console.log("Error fethcing data:", error);
        });
      axios.post("https://book-market-be-final.vercel.app/api/api/checkouts", requestData)
        .then(response => {
          this.jsonData = response.data;
          alert("Order Placed!");
          this.$router.push('/');
        })
        .catch(error => {
          console.log("Error fethcing data:", error);
        });

      
    },
    fetchData() {
      axios.get("https://book-market-be-final.vercel.app/api/api/baskets")
        .then(response => {
          this.jsonData = response.data;
          // console.log(this.jsonData);
          this.calculateSubtotal(this.jsonData);
        })
        .catch(error => {
          console.log("Error fethcing data:", error);
        });
    },
    calculateSubtotal(data) {
      this.subtotal = 0;
      console.log(data);
      for (let key in data) {
        this.subtotal += data[key].price * data[key].quantity;
      }
    },
  },
  // Component logic goes here
}
</script>
  
<style scoped>
/* Component styles go here */
</style>