<template>
<div class="v-cart-item">
  <img :src="require('../assets/images/' + cart_item_data.image)" alt="img">
  <p>{{cart_item_data.name}}</p>
  <p>{{cart_item_data.price}} P.</p>
  <p>{{cart_item_data.article}} </p>
  <div 

  class="v-cart-item_quantity">
  <p>Qty:</p>
  
 <span @click="decrementItem">-</span>
  {{cart_item_data.quantity}}
  <span @click="incrementItem">+</span>
  
 
  </div>
  <button @click="deleteFromCart">delete</button>
</div>
</template>




<script>




export default {
    name: 'v-cart-item',
  
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
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
      deleteFromCart() {
        this.$emit('deleteFromCart')
      },
      decrementItem() {
        this.$emit('decrement')

      },
      incrementItem() {
          this.$emit('increment')
        }

    },
    mounted() {
      this.$set(this.cart_item_data, 'quantity', 1)
    }
}
</script>




<style lang="scss">

</style>