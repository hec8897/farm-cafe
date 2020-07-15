<template>
<div>
    <nav>
        <div>
        <span class='pointer' @click="Modalshow('login-modal')">로그인</span>
        <span class='pointer' @click="Modalshow('join-modal')">회원가입</span>
        </div>
    </nav>

    <ModalLogin />
    <ModalJoin />

</div>
</template>
<script>
import ModalLogin from '@/components/modals/ModalLogin.vue';
import ModalJoin from '@/components/modals/ModalJoin.vue';

export default {
    components:{
        ModalLogin,ModalJoin
    },
      methods: {
        Modalshow (popup) {
            this.$modal.show(popup);
            // this.$modal.hide(popup);
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