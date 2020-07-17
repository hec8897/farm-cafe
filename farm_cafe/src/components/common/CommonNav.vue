<template>
<div>
    <nav>
        <div v-if="login">
        <span>{{login}}</span>
            <span class='pointer' @click="Modalshow('login-modal')"></span>
            <span class='pointer' @click="Modalshow('join-modal')">마이페이지</span>
        </div>
         <div v-else>
            <span>{{login}}</span>
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
            login:false
        }
    },
    components:{
        // ModalLogin,ModalJoin,ModalJoinClass,Modalsuccess,ModalFail
    },
    updated(){
        this.login =  this.$store.state.login
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