import Vuex from 'vuex'
import Vue from 'vue'
import products from '../list/product.json'

Vue.use(Vuex);

const state = {
    products: [],
    cart: [],
};

const getters = {
    products: (state) => state.products,
    cart: (state) => state.cart,
};

const actions = {
    getProducts({ commit }) {

        commit("getProductData");
    },
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
    addItemToCart(state, item) {
        const productInCart = state.cart.find((product) => product.id === item.id);
        if (!productInCart) {
            state.cart.push({ ...item, qty: 1 });
        }
        else {
            productInCart.qty++;
        }

    },
    addQty(state, id) {
        const productInCart = state.cart.find((product) => product.id === id);
        productInCart.qty++;
    },
    reduceQty(state, id) {
        const productInCart = state.cart.find((product) => product.id === id);
        if (productInCart.qty > 1) {
            productInCart.qty--;
        }

    },
    emptyCart(state) {
        state.cart = []
    },
    removeItemfromCart(state, id) {
        state.cart = state.cart.filter((item) => item.id != id);
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});