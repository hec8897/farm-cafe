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
        <!-- <li><input placeholder='우성 회원 코드'/></li> -->
            
        <li v-bind:class="{active:IdCheck,beactive:IdCheck == false}">

            <span class='left'>
                <b-icon icon="person-fill" font-scale="1.5"></b-icon>
            </span>

            <input placeholder='사용자실 아이디를 입력하세요' v-model="InsertData.Id" @blur="checkId"/>

            <span  
                v-bind:class="{t_blue:IdCheck,t_red:IdCheck == false}" 
                >
                <em v-if="IdCheck">사용이 가능 한 아이디입니다.</em>
                <em v-else-if="IdCheck == false">중복된 아이디입니다.</em>
            </span>   

            <span class='right'>
                <b-icon icon="exclamation-circle-fill" variant="info" v-if="IdCheck"></b-icon>
                <b-icon icon="exclamation-circle-fill"  variant="danger" v-else-if="IdCheck == false"></b-icon>
            </span>

        </li>

        
        <li>
            <span class='left'>
                <b-icon icon="lock-fill" font-scale="1.5"></b-icon>
            </span>

            <input  
                placeholder='사용하실 비밀번호를 입력하세요' 
                v-model="passwordCheck" />
        </li>

        <li v-bind:class="{active:PwCheck,beactive:PwCheck == false}">
            <span class='left'>
                <b-icon icon="lock-fill" font-scale="1.5"></b-icon>
            </span>

            <input  
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
                <b-icon icon="phone" font-scale="1.5"></b-icon>
            </span>

            <input  
                placeholder="연락처를 입력하세요('-'를 제외하고 입력하세요)"
                v-model="InsertData.phone"
                 />
        </li>
        <li>
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
        </li>


        
        </ul>
        <div class='btns'>
            <div class='btn green'>네이버 아이디로 회원가입</div>
            <div class='btn red'>우성 팜카페 회원 가입</div>
        </div>
    </div>


    </modal>
</template>
<script>
export default {
    data(){
        return{
            IdCheck:null,
            PwCheck:null,
            passwordCheck:null,
            InsertData:{
                Id:null,
                password:null,
                phone:null,
                NicName:null,
                local1:null,
                local2:null
            },
            localLists:['서울','인천','경기','대전','세종','부산','울산','대구','광주','제주','강원','충남','충북','경북','충남','전남','전북']
        }
    },
    methods:{
        checkId(){
            //아이디 중복체크
            this.IdCheck = this.InsertData.Id == 1?true:false
        },
        checkPw(){
            this.PwCheck = this.passwordCheck!=this.InsertData.password?false:true
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
                margin: 15px 0px;
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
                    &.harf{width: 30%;}
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