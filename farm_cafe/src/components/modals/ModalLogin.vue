<template>
    <modal 
        name="login-modal"
        :adaptive="true"
        width="90%"
        :minHeight="500"
        :maxWidth="800"

        :focusTrap="true"
    >
        <div class='inner left'>
            <h2>우성 팜카페 로그인</h2>
            <ul>
            <li>
                  <span class='left'>
                <b-icon icon="person-fill" font-scale="1.5"></b-icon>
            </span>
            <input placeholder='사용자 코드(아이디)를 입력하세요' v-model="LoginId"/></li>
            <li>
            <span class='left'>
                <b-icon icon="lock" font-scale="1.5"></b-icon>
            </span>
            <input placeholder='비밀번호를 입력하세요' type='password' v-model="LoginPw"/></li>
            </ul>
            <div class='btns'>
                <div class='btn' @click="LoginFn">우성 로그인</div>
                <div class='btn green'>네이버 로그인</div>
                <div class='btn red' @click="Modalshow()">회원 가입</div>
            </div>
            <a href="">비밀번호를 잊으셨나요?</a>        
            </div>
        <div class='inner right'>
            <h2>로그인 광고 영역 </h2>
            <p>동영상, 이미지</p>
        </div>
    </modal>
</template>
<script>

export default {
    data(){
        return{
            LoginId:"",
            LoginPw:""
        }
    },
    methods: {
        LoginFn(){
            let LoginData = {
                login:true,
                LoginId:this.LoginId,
                Name:"우성소프트"
                // LoginPw:this.LoginPw
            }
            this.$store.commit('loginFn',LoginData)
                if(this.$store.state.login.login == true){
                    this.$modal.show('succes-modal', {mode: 'login'});
                }

                    this.$modal.hide('login-modal')

            
        },
        Modalshow () {
            this.$modal.hide('login-modal');
            this.$modal.show('join-modal');
            // this.$modal.hide(popup);
        }
    },
}
</script>

<style lang="scss">
div.inner{
    &.left{
        height: auto;
        vertical-align: bottom;
        width:45%;
        display: inline-block;
        box-sizing:border-box;
        position:relative;
        padding:15px;
        padding-top: 50px;
        @media (max-width: 1024px) {
            width: 100%;
            display: block;
        }
        ul{
            margin: 50px 0;
            li{
            border-bottom: 1px solid #d0d0d0;
            }
        }
        input{
            border:0px;
            border-radius:0px;
        }        
        h2{
            margin:20px 0px;
            font-weight:bold;
            font-size:1.125rem;
        }
        div.btns{
            width: 100%;
            margin: 10px 0px;
        }
    }
    &.right{
        width:54%;
        height: 100%;
        float: right;
        background:skyblue;
          @media (max-width: 1024px) {
              display: none;
        }

        h2{
            font-size:1rem;
        }
    }
    
  
}

    
</style>