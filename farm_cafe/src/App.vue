<!-- app.vue Common component,main-router-view, popup 관리 -->
<!-- 세션 관리(새로고침할떄마다 서버의 세션값 가져와서 활용)-->

<template>
  <div id="app">
    <CommonNav/>

       <ModalLogin />
       <ModalJoin />
       <ModalJoinClass/>
       <Modalsuccess/>
       <ModalFail />
  
      <router-view/>
  </div>
</template>
<script>

import CommonNav from '@/components/common/CommonNav.vue'

//popup
import ModalLogin from '@/components/modals/ModalLogin.vue';
import ModalJoin from '@/components/modals/ModalJoin.vue';
import ModalJoinClass from '@/components/modals/ModalJoinClass.vue';
import Modalsuccess from '@/components/modals/Modalsuccess.vue';
import ModalFail from '@/components/modals/ModalFail.vue';

export default {
  components:{
    CommonNav,
    ModalLogin,
    ModalJoin,
    ModalJoinClass,
    Modalsuccess,
    ModalFail
  }
}
</script>
<style lang="scss">
</style>
