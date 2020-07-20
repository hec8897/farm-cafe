<template>
    <div class='wrap hot'>
        <div class='acc'>
            <div class='head'>
                <h3>[서울] {{$store.state.Name}} (관리자)</h3>
            </div>

            <div class='middle' v-if="!this.$store.state.login">
                <div class="btn" @click="$modal.show('login-modal')">팜카페 로그인</div>
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

<style lang="scss">

div.hot{
    display: inline-block;
    vertical-align: top;
    width: 26%;
    margin-left: 2%;
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
        height: 170px;
        background: #d0d0d0;
        img{
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }

   
}
    
</style>