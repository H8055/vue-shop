<template>
  <div class="mt-5" style="margin-top: 1rem !important">
    <div class="card" v-for="item in singleproducts" :key="item.id">
      <div class="row g-0">
        <div class="col-md-6 border-end">
          <div class="d-flex flex-column justify-content-center">
            <div class="main_image">
              <img :src="item.imgUrl" id="main_product_image" width="350" />
            </div>
            <div class="thumbnail_images">
              <ul id="thumbnail">
                <li>
                  <img onclick="" src="" width="70" />
                </li>
                <li>
                  <img onclick="" src="" width="70" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="p-3 right-side">
            <div class="d-flex justify-content-between align-items-center">
              <h3>{{ item.title }}</h3>
            </div>

            <h3 style="color: #005eb8; font-size: xxx-large">
              {{ item.price }} $
            </h3>
            <div class="mt-2 pr-3 content" style="margin-top: 1rem !important">
              <p style="font-size: 16px"></p>
            </div>
            <div class="ratings d-flex flex-row align-items-center">
              <div class="d-flex flex-row">
                <i class="bx bxs-star"></i> <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i> <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <span>441 reviews</span>
            </div>
            <div class="mt-5">
              <div class="r" style="display: flex; margin: auto">
                <span class="fw-bold">Status: </span>
                <img src="" style="margin-left: 15px; width: 23px" />
                <span id="exampleModalLabel"> Available </span>
              </div>
            </div>
            <br />
            <div class="buttons d-flex flex-row mt-5 gap-3">
              <div class="row" style="margin-top: -30px">
                <div>
                  <h5>Quantity</h5>
                </div>
                <div class="d-flex flex-row">
                  <div class="cart-btn">
                    <div class="cart-btn">
                      <button
                        @click="reduceQty(item.id)"
                        class="qty-button btn btn-sm btn-secondary"
                      >
                        -
                      </button>
                      x{{ item.id }}
                      <button
                        @click="addQty(item.id)"
                        class="qty-button btn btn-sm btn-secondary"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <!-- <div class="cart-btn">
                  <button
                    @click="reduceQty(item.id)"
                    class="qty-button btn btn-sm btn-secondary"
                  >
                    -
                  </button>
                  x {{ item.qty }}
                  <button
                    @click="addQty(item.id)"
                    class="qty-button btn btn-sm btn-secondary"
                  >
                    +
                  </button>
                </div> -->
              </div>
              <button
                class="btn btn-dark"
                style="background: #2970da"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="addToCart(item)"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
// import products from '../list/product.json'

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'productDetails',
  data() {
    return {
      singleproducts: [],
      qty: 1,
    }
  },
  mounted() {
    this.getProducts()
    this.getSingleproducts()

    // console.log(this.products)
  },
  computed: {
    ...mapGetters(['products', 'cart']),
  },
  methods: {
    ...mapActions(['addToCart', 'getProducts', 'addQty', 'reduceQty']),

    getSingleproducts() {
      //  var array=[]

      //  for(let key in this.products){
      //     console.log(key)
      //  }
      // this.products.forEach((item)=>{
      // console.log(id)
      // return item.id

      this.id = this.$route.params.id
      this.product = this.products.find((product) => product.id == this.id)
      this.singleproducts.push(this.product)
      console.log(this.product)
      console.log(this.singleproducts)
    },
  },
  //  return{ getSingleproducts()}

  // data(){
  //     return{
  //         products,
  //     }
  // },
}
</script>

<style scoped>
.card {
  border: none;
  overflow: hidden;
}
.thumbnail_images ul {
  list-style: none;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.thumbnail_images ul li {
  margin: 5px;
  padding: 10px;
  border: 2px solid #eee;
  cursor: pointer;
  transition: all 0.5s;
}
.thumbnail_images ul li:hover {
  border: 2px solid #000;
}
.main_image {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  height: 400px;
  width: 100%;
  overflow: hidden;
}

.content p {
  font-size: 12px;
}
.ratings span {
  font-size: 14px;
  margin-left: 6px;
}
.colors {
  margin-top: 5px;
}
.colors ul {
  list-style: none;
  display: flex;
  padding-left: 0px;
}
.colors ul li {
  height: 20px;
  width: 20px;
  display: flex;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
}
.colors ul li:nth-child(1) {
  background-color: #6c704d;
}
.colors ul li:nth-child(2) {
  background-color: #96918b;
}
.colors ul li:nth-child(3) {
  background-color: #68778e;
}
.colors ul li:nth-child(4) {
  background-color: #263f55;
}
.colors ul li:nth-child(5) {
  background-color: black;
}
.right-side {
  position: relative;
}

/* .buttons .btn {
  height: 50px;
  width: 150px;
  border-radius: 0px !important;
} */

.qty-button {
  border-radius: 50%;
  width: 30px;
}
.cart-btn {
  margin: 5px auto;
  padding: 0px;
}
</style>
