<template>
    <modal 
        name="join-modal"
        :adaptive="true"
        :scrollable="true"
        width="95%"
        height="auto"
        :maxWidth="600"

    >
    <div class='inner'>
        <h2>우성 팜카페 회원가입</h2>
        <ul>
        <!-- <li><input placeholder='우성 회원 코드'/></li> -->
            
        <li v-bind:class="{active:IdCheck,beactive:IdCheck == false}">

            <span class='left'>
                <b-icon icon="person-fill" font-scale="1.5"></b-icon>
            </span>

            <input type='text' placeholder='사용자실 아이디를 입력하세요' v-model="InsertData.Id" @blur="checkId"/>

            <span>
                <em class="t_blue" v-if="IdCheck == true">사용이 가능 한 아이디입니다.</em>
                <em class="t_red" v-else-if="IdCheck == false">중복된 아이디입니다.</em>
                <em class="t_red" v-else-if="IdCheck == 'short'">아이디는 6글자 이상이여야 합니다.</em>

            </span>   

            <span class='right'>
                <b-icon icon="exclamation-circle-fill" variant="info" v-if="IdCheck == true"></b-icon>
                <b-icon icon="exclamation-circle-fill"  variant="danger" v-else-if="IdCheck == 'short'"></b-icon>
                <b-icon icon="exclamation-circle-fill"  variant="danger" v-else-if="IdCheck == false"></b-icon>
            </span>

        </li>

        
        <li>
            <span class='left'>
                <b-icon icon="lock" font-scale="1.5"></b-icon>
            </span>

            <input  
                type='password'
                placeholder='사용하실 비밀번호를 입력하세요' 
                @blur="checkPw"
                v-model="passwordCheck" />

                  <span>
                <em class="t_red" v-if="PwCheck == 'short'">아이디는 6글자 이상이여야 합니다.</em>

            </span>   

            <span class='right'>
                <b-icon icon="exclamation-circle-fill"  variant="danger" v-if="PwCheck == 'short'"></b-icon>
            </span>
        </li>

        <li v-bind:class="{active:PwCheck,beactive:PwCheck == false}">
            <span class='left'>
                <b-icon icon="lock-fill" font-scale="1.5"></b-icon>
            </span>

            <input  
                type='password'
                placeholder='비밀번호를 확인해주세요'
                v-model="InsertData.password"
                @blur="checkPw"
            />

            <span v-bind:class="{t_blue:PwCheck,t_red:PwCheck == false}">
                <em v-if="PwCheck == false">패스워드가 다릅니다.</em>
            </span>   

            <span class='right'>
                <b-icon icon="exclamation-circle-fill"  variant="danger" v-if="PwCheck == false"></b-icon>
            </span>
            
        </li>

         <li>
            <span class='left'>
                <b-icon 
                icon="phone" 
                font-scale="1.5"></b-icon>
            </span>

            <input  
                type='number'
                placeholder="연락처를 입력하세요('-'를 제외하고 입력하세요)"
                v-model="InsertData.phone"
                 />
        </li>
        <li>
            <span class='left'>
                <b-icon icon="briefcase-fill" font-scale="1.5"></b-icon>
            </span>
            <select v-model="InsertData.Class" class='full'>
                <option value='null' disabled selected>가입유형을 선택하세요</option>
                <option 
                v-for="(Classification,i) in Classifications" 
                :key="i" 
                :value="Classification.value">{{Classification.Name}}</option>
            </select>
        </li>
        <!-- <li>
            <span class='left'>
                <b-icon icon="map" font-scale="1.5"></b-icon>
            </span>
            <select class='harf' v-model="InsertData.local1">
                <option value='null' disabled selected>지역</option>
                <option 
                v-for="(localList,i) in localLists" 
                :key="i" 
                :value="localList">{{localList}}</option>
            </select>
            <input class='harf' placeholder="시,구,군" v-model="InsertData.local2">
        </li> -->
        </ul>
        <div class='p_box'>
            <infoAgree/>
        </div>
        <p class='agree'>
        <input type='checkbox' id='check'/>
        <label for='check'>
            개인정보 수집 및 이용에 동의합니다.
        </label>
        </p>
        <div class='btns'>
            <div class='btn green'>네이버 아이디로 회원가입</div>
            <div class='btn red' @click="JoinData">우성 팜카페 회원 가입</div>
        </div>
    </div>

    <ModalJoinClass v-bind:mode="InsertData.Class"/>

    </modal>
</template>
<script>
import infoAgree from '../common/infoAgree.vue';
import ModalJoinClass from '@/components/modals/ModalJoinClass.vue';

export default {
    components:{
        infoAgree,ModalJoinClass
    },
    data(){
        return{
            IdCheck:null,
            PwCheck:null,
            passwordCheck:"",
            InsertData:{
                Id:"",
                password:null,
                phone:null,
                NicName:null,
                Class:null,
            },            
            Classifications:[
                {idx:0,value:'Saller',Name:"판매 업자 (도매, 소매상)"},
                {idx:1,value:'partner',Name:"제조사,광고사"},
                {idx:2,value:'association',Name:"기관 및 협회"}
                ]
            // localLists:['서울','인천','경기','대전','세종','부산','울산','대구','광주','제주','강원','충남','충북','경북','충남','전남','전북'],
        }
    },
    methods:{
   
        checkId(){
            //아이디 중복체크
            if(this.InsertData.Id.length > 5){
                this.IdCheck = this.InsertData.Id == 111111?true:false
            }
            else{
                this.IdCheck = 'short'
            }
        },
        checkPw(){
            if(this.passwordCheck.length > 4){
                this.PwCheck = this.passwordCheck!=this.InsertData.password?false:true
            }
            else{
                this.PwCheck = 'short'
            }
        },
       JoinData() {
            this.$modal.show("succes-modal");
            //가입성공

            // this.$modal.show("fail-modal");
            //가입실패
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
                margin: 20px 0px;
                border-bottom: 1px solid #d0d0d0;

                span{
                    position: absolute;
                    font-size: 0.75rem;
                    width: auto;
                    right: 5%;
                    top: 50%;
                    transform: translateY(-50%);
                    &.right{
                        right: 0;
                    }
                    &.left{
                        width: 0;
                        left: 1%;
                    }
                }

                input,select{
                    display: inline-block;
                    width: 80%;
                    border:0px;
                    margin: 0;
                    border-radius:0px;                  
                    margin-left: 30px;
                    z-index: 999;
                    font-size: 0.875rem;
                    background: #fff;
                    &.harf{width: 30%;}
                    &.full{
                        width: 90%;
                        }
                }   

                &.active{
                    border-bottom: 1px solid skyblue;
                }
                &.beactive{
                    border-bottom: 1px solid tomato;
                }
            }
        }
        div.p_box{
            max-height: 150px;
            overflow-y: scroll;
            background: #f0f0f0;
            border: 1px solid #d0d0d0;
        }
        p.agree{
            margin-top: 15px;
            input[type=checkbox]{
                width: 20px;
                height: 20px;
                cursor: pointer;
                vertical-align: middle;
                margin-right: 5px;

            }
            label{
                cursor: pointer;
                vertical-align: middle;
            }
        }
          
        h2{
            margin:20px 0px;
            font-weight:bold;
            font-size:1.125rem;
        }
        div.btns{
            margin-top: 20px;
        }

    
  
}

    
</style>