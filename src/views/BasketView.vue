<template>

    <div class="flex justify-center text-3xl font-bold p-4 tracking-tight text-gray-800 bg-gradient-to-b from-slate-200">
        Your Basket
    </div>

    <div class=" container mx-auto px-4 mt-6 mb-6 ">
        


        <div class="flex flex-row gap-4">
            <div class="w-3/4 bg-gray-200 rounded-lg p-6 mb-4 h-fit">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="font-semibold text-lg text-gray-800 text-center border-r-2 border-l-2 border-gray-400">Product</th>
                                <th class="font-semibold text-lg text-gray-800 text-center border-r-2 border-l-2 border-gray-400">Price</th>
                                <th class="font-semibold text-lg text-gray-800 text-center border-r-2 border-l-2 border-gray-400">Quantity</th>
                                <th class="font-semibold text-lg text-gray-800 text-center border-r-2 border-l-2 border-gray-400">Total</th>
                            </tr>
                        </thead>
                        <tbody>




                            <tr v-for="basket in jsonData" :key="basket.id">
                                <td class="py-4 border-r-2 border-l-2 border-gray-400">
                                    <div class="flex pl-6 items-center">
                                        <img class="h-16 w-16 mr-4" :src="basket.image" alt="Product image">
                                        <span class="font-semibold">{{ basket.book_name }}</span>
                                    </div>
                                </td>
                                <td class="py-4 text-center">$ {{ basket.price }}</td>
                                <td class="py-4 border-r-2 border-l-2 border-gray-400">
                                    <div class="flex items-center justify-center">
                                        <button @click="removeQty(basket.book_id)" class="border border-gray-900 rounded-md py-2 px-4 mr-2">-</button>
                                        <span class="text-center w-8">{{ basket.quantity }}</span>
                                        <button @click="addQty(basket.book_id)" class="border border-gray-900 rounded-md py-2 px-4 ml-2">+</button>
                                    </div>
                                </td>
                                <td class="py-4 w-28 border-r-2 text-center border-gray-400">$ {{ basket.quantity*basket.price }}</td>
                            </tr>

                            
                        </tbody>
                    </table>
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
                    <RouterLink to="/checkout">
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full hover:scale-105 ease-in-out duration-300">
                            Go To Checkout
                        </button>
                  </RouterLink>
                </div>
            </div>
    </div>


  </template>
  
<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';

export default {
  name: 'BasketView',
  data () {
    return {
        jsonData: null,
        subtotal: 0,
    };
  },
  mounted () {
    this.fetchData();
  },
  methods: {
    fetchData() {
        axios.get("http://127.0.0.1:8000/api/baskets")
            .then(response => {
                this.jsonData = response.data;
                this.calculateSubtotal(this.jsonData);
            })
            .catch(error => {
                console.log("Error fetching data:", error);
            });
    },
    addQty(bookId) {
        axios.post(`http://127.0.0.1:8000/api/baskets/add/${bookId}`)
            .then(response => {
                console.log('POST request successful:', response.data);
            })
            .catch(error => {
                console.log("Error adding to basket:", error);
            })
        this.fetchData();
    },
    removeQty(bookId) {
        axios.post(`http://127.0.0.1:8000/api/baskets/remove/${bookId}`)
            .then(response => {
                console.log('POST request successful:', response.data);
            })
            .catch(error => {
                console.log("Error removing to basket:", error);
            })
        this.fetchData();
    },
    calculateSubtotal(data) {
        //console.log(data, data.length);
        this.subtotal=0;
        for (let key in data) {
            this.subtotal += data[key].quantity * data[key].price;
        }
    },
  },
  
}
</script>


  <style>
  
  </style>
