<template>
  <div class="home">
    <HomeSlider/>
    <MainContent />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSlider from '@/components/home/HomeSlider.vue'
import MainContent from '@/components/home/MainContent.vue'


export default {
  name: 'Home',
  components: {
    HomeSlider,MainContent
  }
}
</script>

<style lang="scss">
div.home{
  section.wrap{
    padding: 100px 0px;
  }
}
  
</style>