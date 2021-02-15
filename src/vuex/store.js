import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        sofas: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_SOFAS_TO_STATE: (state, sofas) => {
            state.sofas = sofas;
        },
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isProductExists =false;
                
                state.cart.map(function(item) {
                    if (item.article===product.article) 
                    isProductExists=true;
                    
                    item.quantity++

                })
                if (!isProductExists) {
                    state.cart.push(product)
                }

            } else {
                state.cart.push(product)
            }
               
            
           

        },
        SET_CART_SOFA: (state, sofa) => {
            
                    state.cart.push(sofa)
             

        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++

        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity>1) {
                state.cart[index].quantity--
            }

        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        },
        GET_SOFAS_FROM_API({commit}) {
            return axios('http://localhost:3000/sofas', {
                method: "GET"
            })
            .then((sofas) => {
                commit('SET_SOFAS_TO_STATE', sofas.data);
                return sofas;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);

        },
        ADD_TO_CART_SOFA({commit}, sofa) {
            commit('SET_CART', sofa);

        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        }, 
        INCREMENT_CART_ITEM({commit}, index) {
             commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index)
       }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        SOFAS(state) {
            return state.sofas;
        },
        CART(state) {
            return state.cart;
        },

    }
});

export default store;