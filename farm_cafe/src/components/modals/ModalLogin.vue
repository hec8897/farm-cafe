<template>
    <modal 
        name="login-modal"
        :adaptive="true"
        width="90%"
        :minHeight="400"
        :maxWidth="600"
        :focusTrap="true"
    >
    <div class='inner left'>
        <h2>우성 팜카페 로그인</h2>
        <input placeholder='사용자 코드(아이디)를 입력하세요'/>
        <input placeholder='비밀번호를 입력하세요' type='password'/>
        <div class='btns'>
            <div class='btn'>우성 로그인</div>
            <div class='btn green'>네이버 로그인</div>
            <div class='btn red'>회원 가입</div>
        </div>
    </div>
    <div class='inner right'>
        <h2>로그인 광고 영역 </h2>
        <p>동영상, 이미지</p>
    </div>



    </modal>
</template>


<style lang="scss">
div.inner{
    height:100%;
    &.left{
        width:50%;
        float:left;
        padding:15px;
        box-sizing:border-box;
        position:relative;
        input{
            border:0px;
            border-bottom: 1px solid #d0d0d0;
            border-radius:0px;
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
    &.right{
        width:50%;
        float:right;
        background:skyblue;

        h2{
            font-size:1rem;
        }
    }
    
  
}

    
</style>