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
    </div>
</template>
<script>
import MainContentInfo from './MainContentInfo'
import AccControl from './AccControl'
import FarmNews from './FarmNews'
import ProductAd from './ProductAd'
export default {
    components:{
        MainContentInfo,AccControl,FarmNews,ProductAd
    }
}
</script>
