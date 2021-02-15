<template>
<div class="v-table-item">
  <img :src="require('../assets/images/' + product_data.image)" alt="img">
  <p>{{product_data.name}}</p>
  <p>{{product_data.price}} P.</p>
  <button @click="addToCart">add to cart</button>

</div>
</template>




<script>




export default {
    name: 'v-table-item',
  
    props: {
      product_data: {
        type: Object, 
        default() {
          return{}
        }
      }  



    },
    data() {
        return {
          
        }
    },
    computed: {
      
    },
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product_data)
      }
    }
    
}
</script>




<style lang="scss">
img {
  height: 300px;
  width: 300px;
}
</style>