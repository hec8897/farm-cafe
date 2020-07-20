<template>
     <b-jumbotron  bg-variant="info" text-variant="white">
    <div class='wrap slide'>
        <p>전국 농자재 판매 관리인의 커뮤니티</p>
        <h2>우성 팜카페</h2>
        <p>혼자하면 힘들지만, 함께하면 든든합니다.</p>
        <div>
            <input type='text' placeholder="검색어 입력" v-model="Search"/>
            <b-icon class='right' icon="search"></b-icon>
        </div>
    </div>
  </b-jumbotron>
</template>
<script>
export default {
    data(){
        return{
            Search:""
        }
    }
}
</script>

<style lang="scss">
div.jumbotron {
        margin-bottom: 0;
        border-radius: 0;
    div.slide{
        height:  350px;
        h2{
            font-size: 2.125rem;
            margin: 30px 0;
        }
        p{
            font-size: 1.125rem;
        }
        div{
            position: relative;
            input{
                width: 100%;
                max-width: 350px;
                border-radius: 2px;
                margin-top: 20px;
                background-color: rgba(255,255,255,0.6);
                padding-left: 30px;
                border: 0px;
            }
            .right{
                position: absolute;
                left: .5%;
                top:50%;
                color: #222;
                transform: translateY(-50%);
                @media (max-width: 1024px) {
                    left: 1.5%;
                }
            }
        }
    }
}
    
</style>