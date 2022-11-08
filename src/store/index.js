import Vuex from 'vuex'
import Vue from 'vue'
import products from '../list/product.json'
// import 'firebase/compat/auth';
// import { useAuthState } from
// import { auth } from './auth/firebase'

// const [user] = useAuthState(auth)
Vue.use(Vuex);
// console.log(user);

let saveCart = window.localStorage.getItem('saveCart');

const state = {
    search: '',
    products: [],
    // singleproducts: [],
    cart: saveCart ? JSON.parse(saveCart) : [],
};

const getters = {
    products: (state) => state.products,
    // singleproducts: (state) => state.singleproducts,
    cart: (state) => state.cart,
};

const actions = {
    getProducts({ commit }) {

        commit("getProductData");
    },
    // getsingleproducts({ commit }) {

    //     commit("getsingleproducts");
    // },
    removeItemfromCart({ commit }, id) {
        commit("removeItemfromCart", id);
    },
    addToCart({ commit }, item) {

        commit("addItemToCart", item);
    },
    addQty({ commit }, id) {
        commit("addQty", id)
    },
    reduceQty({ commit }, id) {
        commit("reduceQty", id)
    },
    emptyCart({ commit }, id) {
        commit("emptyQty", id)
    },
}

const mutations = {
    getProductData(state) {
        state.products = products;
    },
    // getsingleProducts(state) {
    //     state.singleproducts.id = products.id
    // },
    addItemToCart(state, item) {
        const productInCart = state.cart.find((product) => product.id === item.id);
        // localStorage.setItem('key', JSON.stringify(item));
        if (!productInCart) {
            state.cart.push({ ...item, qty: 1 });
            // localStorage.setItem('key', JSON.stringify(item));
        }
        else {
            productInCart.qty++;
            // item = JSON.parse(localStorage.getItem('key'));
        }
        this.commit("saveData");

    },
    saveData(state) {
        window.localStorage.setItem("saveCart", JSON.stringify(state.cart));
    },
    addQty(state, id) {
        const productInCart = state.cart.find((product) => product.id === id);
        productInCart.qty++;
        this.commit("saveData");
    },
    reduceQty(state, id) {
        const productInCart = state.cart.find((product) => product.id === id);
        if (productInCart.qty > 1) {
            productInCart.qty--;
            this.commit("saveData");
        }

    },
    emptyCart(state) {
        state.cart = []
    },
    removeItemfromCart(state, id) {
        state.cart = state.cart.filter((item) => item.id != id);
        this.commit("saveData");
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});