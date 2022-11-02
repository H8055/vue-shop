<template>
    <div class="main">
        <h3>Cart</h3>
        <div class="container">
        <ul class="list-group">
            <li class="list-group-item" v-for="item in cart" :key="item.id">
                
                <div class="d-flex , cart-container">
                    
                    <div class="flex-shrink-0">
                        <img width="100px
                        " :src="item.imgUrl" :alt="item.title">
                    </div>
                    <div class="flex-grow-1 ms-3">
                        {{item.title}}
                    </div>
                    <div class="flex-grow-1 ms-3">
                        ${{item.qty*item.price}}
                    </div>
                    <div class="cart-btn">
                        <button @click="reduceQty(item.id)" class="qty-button btn btn-sm btn-secondary">-</button>
                        x {{ item.qty }}
                        <button @click="addQty(item.id)" class="qty-button btn btn-sm btn-secondary">+</button>
                    </div>
                    <button
                    
                        type="button"
                        @click="removeItemfromCart(item.id)"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                
            </li>
            
        </ul>
        
        <button
            v-if="cart.length"
            class="checkout-button btn btn-lg btn-block btn-success"
            
        >
            <span>Checkout ($ {{totalPrice()}})</span>
        </button>
    </div>
    </div>
</template>


<script>

import { mapGetters , mapActions } from 'vuex'


    export default{
    name: "cartPage",
    data() {
        return {};
    },
    methods: {
        ...mapActions(["addQty","reduceQty","removeItemfromCart"]),
        totalPrice(){
            return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
        },
    },
    computed:{
        ...mapGetters(["cart"]),
      
    },
    created(){
        
    }
    
}
        
</script>

<style scoped>

.main h3{
    position: relative;
    left: 100px;
    padding-bottom: 20px;

}
.qty-button {
  border-radius: 50%;
  width: 30px;
}
.cart-btn{
    margin: 5px auto;
    padding: 0px;
}

.cart-container{
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
}

.close{
    /* border: 1px solid red; */
    background: none;
    border: none;
    padding: 10px;
    font-weight: bold;
}
.checkout-button {
  margin-top: 20px;
  
  
}
</style>