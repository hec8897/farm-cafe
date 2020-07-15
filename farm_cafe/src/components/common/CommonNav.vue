<template>
<div>
    <nav>
        <div>
        <span class='pointer'  @click="show()">로그인</span>
        <span class='pointer' >회원가입</span>
        </div>
    </nav>
    <ModalLogin show='true'/>
</div>
</template>
<script>
import ModalLogin from '@/components/modals/ModalLogin.vue'

export default {
    components:{
        ModalLogin
    },
      methods: {
        show () {
            this.$modal.show('my-first-modal');
        },
        hide () {
            this.$modal.hide('my-first-modal');
        }
    },
}
</script>

<style lang="scss">
nav{
    text-align:right;
    div{
        padding:5px 0px;
        span{
            margin-right:15px;
        }
    }
}
    
</style>