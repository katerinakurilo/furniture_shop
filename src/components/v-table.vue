<template>
<div class="v-table">
<router-link :to="{name: 'cart', params: {cart_data: CART}}">
<p>cart: {{CART.length}}</p>
 </router-link>
  <p>Table</p>
  <div class="filters">
<v-select
  :selected="selected"
  :options="categories"
  @select="sortByCategories"
  />

<div class="range-slider">
  <input 
  type="range" 
  min="0" 
  max="1000" 
  step="10"
  v-model.number="minPrice"
  @change="setRangesSlider"
  
  
  >
  <input 
  type="range" 
  min="0" 
  max="1000" 
  step="10"
  v-model.number="maxPrice"
  @change="setRangesSlider"
  
  
  >
</div>
<div class="range-values">
  <p>Min: {{minPrice}}</p>
  <p>Max: {{maxPrice}}</p>
</div>

  </div>
  
<v-table-item
v-for="product in filteredProducts"
:key="product.article"
v-bind:product_data="product"
@addToCart="addToCart"

/>



</div>
</template>




<script>

import vTableItem from './v-table-item'
import {mapActions, mapGetters} from 'vuex'
import vSelect from './v-select'

export default {
    name: 'v-table',
    components: {
        vTableItem,
        vSelect
    },
  
    props: {},
    data() {
        return {
          categories: [
            {name:'все', value: 'all' },
            {name:'кухоные', value: 'k' },
            {name:'офисные', value: 'o' }
          ],
          selected: 'Все',
          sortedProducts: [],
          minPrice: 0,
          maxPrice: 1000
        }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ]),
      filteredProducts(){
        if(this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      }
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data)
      },
      sortByCategories(category){
       let vm = this;
       this.sortedProducts = [...this.PRODUCTS]
       this.sortedProducts = this.sortedProducts.filter(function(item) {
         return item.price >= vm.minPrice && item.price <= vm.maxPrice
       })
       if (category) {
         this.sortedProducts = this.sortedProducts.filter(function(e) {
           vm.selected = category.name;
         return e.category === category.name
       })
       }


      },
      setRangesSlider() {
        if (this.minPrice > this.maxPrice) {
          let tmp = this.maxPrice;
          this.maxPrice = this.minPrice;
          this.minPrice = tmp;
        }
        this.sortByCategories()
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Data arrived!')
          this.sortByCategories()

        }
      })
      
    }
}
</script>




<style lang="scss">
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>