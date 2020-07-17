<template>
    <modal 
        name="succes-modal"
        :adaptive="true"
        :scrollable="true"
        width="90%"
        height="auto"
        :maxWidth="650"
        :shiftY="0.1"
        @before-open="beforeOpen"
        @closed="classModal"
        >
        <!-- @opened="beforeOpen" -->
        
        <b-alert show >
            <div v-if="mode=='login'" v-html="templateLogin"></div>
            <div v-else-if="mode=='join'" v-html="templateJoin"></div>
        </b-alert>

      </modal>
</template>
<script>
export default {
        data(){
            return{
                mode:'',
                templateJoin:`
                <h3 class='alert-heading'>가입이 신청이 완료되었습니다!</h3>
                <hr>
                <h4>추가정보를 입력해서 비공개 게시판 접속 권한을 받으세요</h4>
                <hr>
                <p>로그인 후 사용해주세요</p>`,
                templateLogin:`<h3>로그인 되었습니다.</h3>`,
            }
        },
        methods:{
        classModal(){
            this.$modal.hide('join-modal');
            // this.$modal.show('class-modal');
        },
        beforeOpen(event){
            this.mode = event.params.mode;
        }
    }
}
</script>

<style lang="scss">
div.alert{
    margin: 0;
    h3{
        font-size: 1.25rem;
    }
    p{
        line-height: 1.5rem;
    }
}


    
</style>