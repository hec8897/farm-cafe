<template>
    <modal 
        name="join-modal"
        :adaptive="true"
        :scrollable="true"
        width="90%"
        :minHeight="700"
        :maxWidth="600"
    >
    <div class='inner'>
        <h2>우성 팜카페 회원가입</h2>
        <ul>
            
        <li v-bind:class="{active:IdCheck,beactive:IdCheck == false}">
            <input placeholder='사용자실 아이디를 입력하세요' v-model="InsertData.Id" @blur="checkId"/>
            <span class='t_blue' v-if="IdCheck">사용이 가능 한 아이디입니다.</span>   
            <span class='t_red' v-else-if="IdCheck == false">사용이 불가능 한 아이디입니다.</span>   
            <b-icon icon="exclamation-circle-fill" variant="info" v-if="IdCheck"></b-icon>
            <b-icon icon="exclamation-circle-fill"  variant="danger" v-else-if="IdCheck == false"></b-icon>
        </li>
        
        <li><input placeholder='우성 회원 코드'/></li>
        <li><input placeholder='사용하실 비밀번호를 입력하세요'/></li>
        <li><input placeholder='비밀번호를 확인해주세요'/></li>
        </ul>
        <div class='btns'>
            <div class='btn'>우성 팜카페 회원가입</div>
            <div class='btn green'>네이버 로그인</div>
            <div class='btn red'>회원 가입</div>
        </div>
    </div>


    </modal>
</template>
<script>
export default {
    data(){
        return{
            IdCheck:null,
            InsertData:{
                Id:null
            }
        }
    },
    methods:{
        checkId(){
            if(this.InsertData.Id == 1){
                this.IdCheck = true
            }
            else{
                this.IdCheck = false
            }
        }
    }
}
</script>


<style lang="scss">
div.inner{
    height:100%;
        padding:30px;
        box-sizing:border-box;
        position:relative;
        ul{
            li{
                position: relative;
                svg{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
                span{
                    position: absolute;
                    font-size: 0.75rem;
                    width: auto;
                    right: 5%;
                    top: 50%;
                    transform: translateY(-50%);
                }
                margin: 10px 0px;
                border-bottom: 1px solid #d0d0d0;
                input{
                    display: inline-block;
                    width: 80%;
                    border:0px;
                    margin: 0;
                    border-radius:0px;                  
                }   
                &.active{
                    border-bottom: 1px solid skyblue;
                }
                &.beactive{
                    border-bottom: 1px solid tomato;
                }
            }
        }
          
        h2{
            margin:20px 0px;
            font-weight:bold;
            font-size:1.125rem;
        }
        div.btns{
            width:90%;
            position:absolute;
            bottom:5%;
            left:50%;
            transform:translateX(-50%);
        }

    
  
}

    
</style>