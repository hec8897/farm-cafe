<template>
    <div class='content'>
    <section class='section1 wrap'>
        <AccControl/>
        <MainContentInfo/>
    </section>
    <section class='section2 wrap'>
        <FarmNews/>
    </section>
    </div>
</template>
<script>
import MainContentInfo from './MainContentInfo'
import AccControl from './AccControl'
import FarmNews from './FarmNews'
export default {
    components:{
        MainContentInfo,AccControl,FarmNews
    }
}
</script>
