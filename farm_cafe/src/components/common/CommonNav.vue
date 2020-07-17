<template>
<div>
    <nav>
        <div v-if="this.$store.state.login">
            <span class='pointer'><a href="">우성소프트 홈페이지</a></span>
            <span class='pointer' @click="Modalshow('join-modal')">마이페이지</span>
        </div>
         <div v-else>
            <span class='pointer' @click="Modalshow('login-modal')">로그인</span>
            <span class='pointer' @click="Modalshow('join-modal')">회원가입</span>
        </div>
    </nav>

 

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
    },
}
</script>

<style lang="scss">

nav{
    text-align:right;
    background-color:#f1f1f1;
    div{
        padding:5px 0px;
        span{
            margin-right:15px;
            font-size:14px;
        }
    }
}
    
</style>