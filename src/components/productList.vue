<template>
    <div>
        <h3 class="productTitle">Products</h3>
   <div class="row">
    <div class="card " style="width: 15rem;" v-for="item in products" :key="item.id">
  <img :src="item.imgUrl" class="card-img-top" :alt="item.title">
  <div class="card-body">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">${{item.price}}</p>
    <router-link :to="{
      name:'productDetails',
      params:{id:item.id}
        }">
        <a class="btn"> Details</a>
    </router-link>
    <a href="#" @click.prevent="addToCart(item)" class="btn btn-primary">Add Product</a>
  </div>
</div>
   </div>
</div>
</template>

<script>
// import products from '../list/product.json'

import { mapActions, mapGetters } from "vuex";
 export default{
    name: 'productList',
    mounted() {
    this.getProducts();
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["addToCart", "getProducts"]),
    
    
    // GoToDetails(key) {
      //   this.$router.push({ name: "productDetails", params: { id: key } });
      // },
      
    },
    // data(){
    //     return{
    //         products,
    //     }
    // },    
    
 }
</script>

<style scoped>
    
    
    .row{
        margin: auto;
        padding: 60px;
    }
    .productTitle{
        position: relative;
        left: 50px;
    }
</style>