<template>
    <div class='farm_news'>
    <h2>농업계 소식</h2>
    <ul class='farm_advertise'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
div.farm_news{
    width: 70%;
    display: inline-block;
    h2{
        font-size: 1.25rem;
    }
    ul.farm_advertise{
        height: 300px;
        overflow-y: scroll;
        -ms-overflow-style: none;
        margin: 20px 0px;
        li{
            width: 100%;
            min-height: 80px;
            margin: 5px 0px;
            border:1px solid #d0d0d0;
            border-radius: 3px;
            padding: 10px 15px;
        }
    }
    ul.farm_advertise::-webkit-scrollbar {
        display:none;
    }
}
    
</style>