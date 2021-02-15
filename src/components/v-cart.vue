<template>
<div class="v-cart">
  <router-link :to="{name: 'catalog'}">
  <button>back to catalog</button>
  </router-link>
  <p>Cart</p>
<v-cart-item
v-for="(item, index) in cart_data"
:key="item.article"
:cart_item_data="item"
@deleteFromCart="deleteFromCart(index)"
@increment="increment(index)"
@decrement="decrement(index)"

/>
<div class="v-cart_total">
  <p>total</p>
  <p>{{cartTotalCost}} P.</p>
</div>
</div>
</template>




<script>
import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'



export default {
    name: 'v-cart',
    components: {
      vCartItem

    },
  
    props: {
       cart_data: {
            type: Array,
            default() {
              return []
            }

          }
    },
    data() {
        return {
         
        }
    },
    computed: {
      cartTotalCost() {
      let result = []
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
        item.price*item.quantity;
        result.push(item.price*item.quantity);
      }
      
      result = result.reduce(function(sum, el) {
        
        return sum +el;
      })
      return result;

      } else {
        return 0;
      }
      



      
    }
   
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      deleteFromCart(index) {
       this.DELETE_FROM_CART(index)

      },
      increment(index) {
         this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
         this.DECREMENT_CART_ITEM(index)
      }
      
    }
}
</script>




<style lang="scss">

</style>