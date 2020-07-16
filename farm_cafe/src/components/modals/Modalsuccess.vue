<template>
    <modal 
        name="succes-modal"
        :maxWidth="700"
        :shiftY="0.1"
        width="800"
        height="auto"
        @opened="beforeOpen"
        @closed="classModal">
        
        <b-alert show>
            <h3 class="alert-heading">가입이 완료되었습니다!</h3>
            <hr>
            <p>추가정보를 입력해서 비공개 게시판 접속 권한을 받으세요</p>
        </b-alert>

      </modal>
</template>
<script>
export default {
    methods:{
        beforeOpen () {
        },
        classModal(){
            this.$modal.hide('join-modal');
            this.$modal.show('class-modal');
        }
    }
}
</script>

<style lang="scss">
div.alert.alert-info{
    margin: 0;
    h3{
        font-size: 1.25rem;
    }
}

    
</style>