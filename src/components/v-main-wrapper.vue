<template>
<div class="v-main-wrapper">
   <router-view></router-view>
<!--<v-table/>
<v-sofa/>
<v-cart 

v-if="CART.length"
:cart_data="CART"


/>-->
</div>
</template>




<script>

//import vTable from './v-table'
//import vCart from './v-cart'
//import vSofa from './v-sofa'
import {mapGetters} from 'vuex'


export default {
    name: 'v-main-wrapper',
    //components: {
    //    vTable,
   //     vCart,
    //    vSofa
        
  //  },
  
    props: {},
    data() {
        return {
         
        }
    },
    computed: {
      ...mapGetters ([
          'CART'
      ])
    }
}
</script>




<style lang="scss">
.v-main-wrapper {
    max-width: 900px;
    color: $color;
    margin: 0 auto;
}
</style>