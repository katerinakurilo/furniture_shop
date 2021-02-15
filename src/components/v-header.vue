<template>
<div class="v-header">
  <p>Header</p>
  <router-link :to="{name: 'catalog'}">
<p>Catalog</p>
  </router-link>
  <router-link :to="{name: 'cart', params: {cart_data: CART}}">
<p>cart: {{CART.length}}</p>
 </router-link>


</div>
</template>




<script>


import {mapActions, mapGetters} from 'vuex'


export default {
    name: 'v-header',
    components: {
        
    },
  
    props: {},
    data() {
        return {
          
        }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ])
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      
    }
    
}
</script>




<style lang="scss">

</style>