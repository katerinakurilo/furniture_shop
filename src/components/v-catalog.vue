<template>
<div class="v-catalog">
  <router-link :to="{name: 'cart', params: {cart_data: CART}}">
<p>cart: {{CART.length}}</p>
 </router-link>
  <p>Catalog</p>
  
<div class="catalog_elements">
 <div class= "table_catalog">
   <router-link :to="{name: 'table'}">
    <p>Table</p>
 <img :src="require('../assets/images/table.svg')" alt="img">
</router-link>
 </div>
  
  <div class="sofa_catalog">
<router-link :to="{name: 'sofa'}">
<p>Sofa</p>
<img :src="require('../assets/images/sofa.svg')" alt="img">
 </router-link>
  </div>

</div>

  


</div>
</template>




<script>


import {mapActions, mapGetters} from 'vuex'


export default {
    name: 'v-catalog',
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
.catalog_elements {
  display: flex;
  justify-content: space-around;
}
.catalog_elements img {
  height: 200px;
  width: 200px;
}
.table_catalog {

  border: 1px solid black;
  border-radius: 20px;
}
.sofa_catalog {

  border: 1px solid black;
  border-radius: 20px;
}
.table_catalog img {
  margin-left: 20px;
  margin-right: 20px;
  
}
.sofa_catalog img {
  margin-left: 20px;
  margin-right: 20px;
  
}
</style>