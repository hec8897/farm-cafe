<template>
    <div class='content'>

    <section class='section1 wrap'>
        <AccControl/>
        <MainContentInfo/>
    </section>

    <section class='section2 wrap'>
        <FarmNews/>
        <ProductAd/>
    </section>

    <section class='section3 wrap'>
        <MainboardFarm/>
        <MainboardFarm/>
        <MainboardFarm/>
    </section>


    </div>
</template>
<script>
import MainContentInfo from './MainContentInfo'
import AccControl from './AccControl'
import FarmNews from './FarmNews'
import ProductAd from './ProductAd'
import MainboardFarm from './MainboardFarm'

export default {
    components:{
        MainContentInfo,AccControl,FarmNews,ProductAd,MainboardFarm
    }
}
</script>

<style lang="scss">
section.section3{
    text-align: center;
}
    
</style>
