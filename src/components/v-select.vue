<template>
<div class="v-select">
   <p 
   class="title"
   @click="areOptionsVisible=!areOptionsVisible"
   
   
   >{{selected}}</p>
   <div class="options" 
   v-if="areOptionsVisible"
   >
       <p 
       v-for="option in options"
       :key="option.value"
       @click="selectOption(option)"
       
       >
         {{option.name}}  
       </p>
   </div>

</div>
</template>




<script>





export default {
    name: 'v-select',
    components: {
        
        
    },
  
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {
        type: String,
        default: ''


    }
    },
    
    data() {
        return {
         areOptionsVisible: false
        }
    },
    computed: {
      
    },
    methods: {
        selectOption(option) {
           this.$emit('select', option)
           this.areOptionsVisible=false;

        },
        hideSelect() {
             this.areOptionsVisible=false;
        }
    },
    mounted() {
        document.addEventListener('click', this.hideSelect.bind(this), true)

    },
    beforeDestroy() {
        document.removeEventListener('click', this.hideSelect)

    }
}
</script>




<style>
.options p:hover {
background: gray;
}

</style>