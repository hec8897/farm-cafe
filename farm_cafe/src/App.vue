<template>
  <div id="app">
    <CommonNave/>
    
    <router-link to='/about'>123</router-link>
    <router-view/>
  </div>
</template>
<script>
import CommonNave from '@/components/common/CommonNav.vue'
export default {
  components:{
    CommonNave
  }
  
}
</script>
<style lang="scss">
</style>
