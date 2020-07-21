<template>
    <div class='wrap hot'>
        <p class='visitor'>
            <span>total: {{visitor.total}}</span>
            <span>today: {{visitor.today}}</span>
        </p>
        <div class='acc'>
            <div class='head'>
                <h3>[서울] {{$store.state.Name}} (관리자)</h3>
            </div>

            <div class='middle' v-if="!this.$store.state.login">
                <div class="btn green" @click="$modal.show('login-modal')">팜카페 로그인</div>
            </div>

            <div class='foot' v-else>
                <span>내가쓴글</span>
                <span>내정보</span>
                <span>알림</span>
            </div>
        </div>
        <div class='advertise'>
            <img src="@/assets/advertise1.jpg">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            visitor:{
                total:100,
                today:5
            }
        }
    }
}
</script>

<style lang="scss">

div.hot{
    display: inline-block;
    vertical-align: top;
    width: 26%;
    margin-right: 2%;

    p.visitor{
        span{
           font-size: 0.75rem;
            margin-right: 10px;
            background: MediumSeaGreen;
            color: #fff;
            padding: 1px 5px;
            border-radius: 3px;
            letter-spacing: 0.5px;
            font-weight: 100;
        }
    }

    @media (max-width: 1024px) {
        width: 100%;
        margin-bottom: 20px;
        margin-right: 0;
    }
    div.acc{
        margin-top: 10px;
        border: 1px solid MediumSeaGreen;
        border-radius: 2px;
        margin-bottom: 20px;
        div.head{
            padding: 15px 5px;
            h3{
                font-size: 0.875rem;
            }
            p{
                margin: 10px 0px;
                font-size: 0.875rem;
                color: #777;
            }
        }

        div.middle{
            padding:0px 5px;
        }

        div.foot{
            background: #f0f0f0;
            text-align: center;
            padding: 10px 0px;
            border-top: 1px solid #d0d0d0;
            span{
                margin: 20px;
                font-size: 0.875rem;
                cursor: pointer;
            }
        }
    }
    
    div.advertise{
        width: 100%;
        height: auto;
        img{
            width: 100%;
            height: auto;
            overflow: hidden;
        }
    }

   
}
    
</style>