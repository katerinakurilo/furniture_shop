<template>
<div class="v-sofa">
  <router-link :to="{name: 'cart', params: {cart_data: CART}}">
<p>cart: {{CART.length}}</p>
 </router-link>
  <p>Sofa</p>
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
 



<v-sofa-item
v-for="sofa in filteredSofas"
:key="sofa.article"
v-bind:sofa_data="sofa"
@addToCart="addToCart"

/>



</div>
</template>




<script>

import vSofaItem from './v-sofa-item'
import {mapActions, mapGetters} from 'vuex'
import vSelect from './v-select'


export default {
    name: 'v-sofa',
    components: {
        vSofaItem,
        vSelect
    },
  
    props: {},
    data() {
        return {
          categories: [
            {name:'все', value: 'all' },
            {name:'для кухни', value: 'fk' },
            {name:'для гостиной', value: 'fg' }
          ],
          selected: 'Все',
          sortedSofas: [],
          minPrice: 0,
          maxPrice: 1000
        }
    },
    computed: {
      ...mapGetters([
        'SOFAS',
        'CART'
      ]),
      filteredSofas(){
        if(this.sortedSofas.length) {
          return this.sortedSofas
        } else {
          return this.SOFAS
        }
      }

      
    },
    methods: {
      ...mapActions([
        'GET_SOFAS_FROM_API',
        'ADD_TO_CART_SOFA'
      ]),
     addToCart(data) {
        this.ADD_TO_CART_SOFA(data)
      },
      sortByCategories(category){
         let vm = this;
       this.sortedSofas = [...this.SOFAS]
       this.sortedSofas = this.sortedSofas.filter(function(item) {
         return item.price >= vm.minPrice && item.price <= vm.maxPrice
       })
       if (category) {
         this.sortedSofas = this.sortedSofas.filter(function(e) {
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
      this.GET_SOFAS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Data arrived!')
          this.sortByCategories()

        }
      })
    }
}
</script>




<style>
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