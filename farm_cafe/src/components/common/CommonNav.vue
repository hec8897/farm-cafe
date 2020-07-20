<template>
<div class="right">
        <div v-if="this.$store.state.login">
            <span class='pointer' @click="Modalshow('join-modal')">마이페이지</span>
            <span class='pointer'>로그아웃</span>
        </div>
         <div v-else>
            <span class='pointer' @click="Modalshow('login-modal')">로그인</span>
            <span class='pointer' @click="Modalshow('join-modal')">회원가입</span>
        </div>
</div>
</template>
<script>

export default {
    data(){
        return{
            login:this.$store.state.login
        }
    },
      methods: {
        Modalshow (popup) {
            this.$modal.show(popup);
        }
    }
}
</script>

<style lang="scss">


    div.right{
        float: right;
        color: cornsilk;
        padding:5px 0px;
        span{
            font-size:14px;
            margin-left: 15px;
        }
        a{
            color: #fff;
        }
        @media (max-width: 1024px) {
            position: absolute;
            right: 10px;
            top: 10px;
            
        }
    }
    
</style>