<template>
  <div id="app">
    <CommonNave/>
    
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
  @import './define.scss';
</style>
