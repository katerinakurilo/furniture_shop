<template>
<div class="v-sofa-item">
  <img :src="require('../assets/images/' + sofa_data.image)" alt="img">
  <p>{{sofa_data.name}}</p>
  <p>{{sofa_data.price}} P.</p>
  <button @click="addToCart">add to cart</button>

</div>
</template>




<script>




export default {
    name: 'v-sofa-item',
  
    props: {
      sofa_data: {
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
        this.$emit('addToCart', this.sofa_data)
      }
    }
}
</script>




<style lang="scss">

</style>