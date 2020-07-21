<template>
    <div class='product'>
    <h2>농자제 소식</h2>
        <Carousel 
            class='sliders'
            :per-page-custom=[[1024,1],[768,2],[480,2],[360,2]]
            :navigationEnabled="true"
            :navigationNextLabel="nextBtn"
            :navigationPrevLabel="prevBtn"
        >
        <Slide v-for="list in lists" :key="list.idx">
            <div class='inner'>
                <img :src="list.img" alt="123">
                <div class='desc'>
                    <h3>{{list.tit}} ({{list.com}})</h3>
                    <p v-line-clamp="2">{{list.desc}}</p>
                </div>
            </div>
        </Slide>
    
      </Carousel>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
//:autoplay='true'

//          :autoplayTimeout="3000"
//            :loop="true"

    components: {
        Carousel,
        Slide
    },
    data(){
        return{
            nextBtn:`<div class='btn_circle'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="25" height="25"
            viewBox="0 0 226 226"
            style=" fill:#444444;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#444444"><path d="M67.74703,18.04469c-1.83625,0 -3.47828,1.11234 -4.18453,2.80734c-0.68859,1.71266 -0.2825,3.65484 1.04172,4.94375l87.20422,87.20422l-87.20422,87.20422c-1.18297,1.13 -1.65969,2.825 -1.23594,4.39641c0.40609,1.58906 1.64203,2.825 3.23109,3.23109c1.57141,0.42375 3.26641,-0.05297 4.39641,-1.23594l90.4,-90.4c1.76563,-1.76562 1.76563,-4.62594 0,-6.39156l-90.4,-90.4c-0.8475,-0.88281 -2.01281,-1.35953 -3.24875,-1.35953z"></path></g></g></svg></div>`,
            prevBtn:`<div class='btn_circle'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="25" height="25"
            viewBox="0 0 226 226"
            style=" fill:#444444;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#444444"><path d="M158.11172,18.04469c-1.18297,0.01766 -2.29531,0.51203 -3.1075,1.35953l-90.4,90.4c-1.76562,1.76563 -1.76562,4.62594 0,6.39156l90.4,90.4c1.13,1.18297 2.825,1.65969 4.39641,1.23594c1.58906,-0.40609 2.825,-1.64203 3.23109,-3.23109c0.42375,-1.57141 -0.05297,-3.26641 -1.23594,-4.39641l-87.20422,-87.20422l87.20422,-87.20422c1.34188,-1.30656 1.73031,-3.28406 1.00641,-4.99672c-0.72391,-1.73031 -2.41891,-2.825 -4.29047,-2.75437z"></path></g></g></svg></div>`,
            lists:[
                {
                    idx:0,
                    tit:'박격포',
                    com:'팜한농',
                    img:'https://picsum.photos/id/237/300/180',
                    desc:'한 번의 관주처리로 잘록병을 확실하게 방제! 유기유황계 +카바메이트계 에트리디아졸·티오파네이트메틸 수화제'
                },
                     {
                    idx:1,
                    tit:'싹쓸이',
                    com:'팜한농',
                    img:'https://picsum.photos/id/27/300/180',
                    desc:'한 번의 관주처리로 잘록병을 확실하게 방제! 유기유황계 +카바메이트계 에트리디아졸·티오파네이트메틸 수화제'
                },
                     {
                    idx:2,
                    tit:'라젠타',
                    com:'팜한농',
                    img:'https://picsum.photos/id/231/300/180',
                    desc:'한 번의 관주처리로 잘록병을 확실하게 방제! 유기유황계 +카바메이트계 에트리디아졸·티오파네이트메틸 수화제'
                }
            ]
        }
    }

}
</script>

<style lang="scss">
div.product{
     width: 28%;
    display: inline-block;
    padding: 5px;
    box-sizing: border-box;;
    vertical-align: top;
     @media (max-width: 1024px) {
        width: 100%;
        display: block;
        text-align: center;    
    }
    h2{
        font-size: 1.25rem;

    }
    div.sliders{
        padding: 0px 15px;
        margin: 20px 0px;
        div.inner{
            width: 98%;
            padding: 0px;
            margin: 0 auto;
            border-radius: 3px;
            position: relative;
            border: 1px solid #d0d0d0;
            background-color: #fff;
            min-height: 300px;
            @media (max-width: 1024px) {
                min-height: 200px;
            }
            img{
                width: 100%;
                cursor: pointer;
            }
            div.desc{
                padding: 10px;
                p{
                    font-size: 0.75rem;
                    margin-top: 15px;
                    line-height: 1.125rem;
                }
            }
           
        }
        .VueCarousel-pagination{
            display: none;
        }
        .VueCarousel-navigation-button.VueCarousel-navigation-prev{
            left: 20px;
        }
        .VueCarousel-navigation-button.VueCarousel-navigation-next{
            right: 20px;
        }
    }
   }
    
</style>