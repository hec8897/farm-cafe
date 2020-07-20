<template>
    <nav class="lnb">
        <h2>우성팜카페</h2>
            <ul class='list' v-bind:class="{active:show}">
                <li class='pc' >
                    공지사항
                    <div class='hidden_menu'>
                        <div>
                            <p>카페 회칙</p>
                            <p>공지 사항</p>
                        </div>
                    </div>
                </li>

                <li class='pc'>장사 이야기</li>

                <li class='pc'>자유게시판</li>

                <li class='pc'>농업계 새소식</li>

                <li class='pc'>스마트팜 TV</li>

                <li class='disable'>
                    제조사 만남의 광장
                    <div class='hidden_menu'>
                        <div>
                            <p>작물보호제 제조사</p>
                            <p>비료 제조사</p>
                            <p>종묘 / 종자 제조사</p>
                            <p>농기계 / 농기구 제조사</p>
                            <p>제조사 이벤트</p>
                        </div>
                    </div>
                </li>
        
            </ul>
          <dd class='mo' @click="Navshow">
                <span v-if="show">
                    닫기
                    <b-icon icon="caret-up-fill"></b-icon>
                </span>
                <span v-else>
                    더보기
                    <b-icon icon="caret-down-fill"></b-icon>
                </span>
            </dd>
      <CommonNav/>
    </nav>
</template>
<script>

import CommonNav from '@/components/common/CommonNav.vue'

export default {
    components:{
        CommonNav
    },
    data(){
        return{
            show:false
        }
    },
    methods:{
        Navshow(){
            this.show = this.show == true?false:true
        }
    }
}

</script>
<style lang="scss">
nav.lnb{
    position: fixed;
    width: 100%;
    background: #252F44;
    padding: 20px;
    z-index: 999;
    @media (max-width: 1024px) {
        padding: 10px;
    }

    h2{
        color: #fff;
        font-size: 1.25rem;
        margin-right: 35px;
        display: inline;
        @media (max-width: 1024px) {
            display: block;
            margin-bottom: 20px;
        }
    }
    ul.list{
        text-align: center;
        display: inline;
        li{
            display: inline-block;
            margin-right: 10px;
            font-weight: 100;
            position: relative;
            color: #fff;
            cursor: pointer;
      
            div.hidden_menu{
                width: 190px;
                visibility: hidden;
                position: absolute;
                z-index: 999;
                left: 50%;
                transform: translateX(-50%);
                padding: 15px;
                opacity: 0.0;
                transition: .1s ease-in-out;
              
                div{
                    background-color: #fff;
                    border-radius: 3px;
                    p{
                        color: #444;
                        padding: 10px 0px;
                        font-size: 0.875rem;
                    }
                }
            }
            &.disable{
                color: #999;
            }
            &:not(.disable){
                &:hover div.hidden_menu{
                    visibility: visible;
                    opacity: 1.0;
                    @media (max-width: 1024px) {
                        visibility: hidden;
                        }
                    }
                }
            }
            @media (max-width: 1024px) {
                line-height: 1.75rem;
                li{
                    width: 100%;
                    text-align: left;
                }
            }
            @media (max-width: 1024px) {
                display: none;
                visibility: hidden;
            }

            &.active{
                display: block;
                visibility: visible;
            }
        }

    dd.mo{
        cursor: pointer;
        color: #fff;
        display: none;
        text-align: right;
        @media (max-width: 1024px) {
            display: block;
        }
    }
}
    
</style>