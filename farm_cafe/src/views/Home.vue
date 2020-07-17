<template>
  <div class="home">
  <HomeSlider/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSlider from '@/components/home/HomeSlider.vue'

export default {
  name: 'Home',
  components: {
    HomeSlider
  }
}
</script>
