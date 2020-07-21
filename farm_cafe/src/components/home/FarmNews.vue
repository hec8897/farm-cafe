<template>
    <div class='farm_news'>
    <h2>농업계 소식</h2>
    <ul class='farm_advertise'>
        <li v-for="list in lists" :key="list.idx">
            <div class='img'>
                <img v-bind:src="list.img" alt="">
            </div>
            <div class="text">
                <h2>{{list.tit}}</h2>
                <p v-line-clamp="3">{{list.desc}}</p>
                <span>{{list.date}}</span>
            </div>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            lists:[
                {
                    idx:0,
                    img:"https://picsum.photos/id/237/230/150",
                    tit:'전국 한우 개량 이끌 씨수소 20마리 선발',
                    desc:"농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다. 농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다. 농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다.",
                    date:"2020-07-21"
                },
                  {
                    idx:1,
                    img:"https://picsum.photos/id/27/230/150",
                    tit:'전국 한우 개량 이끌 씨수소 20마리 선발',
                    desc:"농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다.한우개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다. 농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다.",
                    date:"2020-07-21"
                },
                  {
                    idx:2,
                    img:"https://picsum.photos/id/37/230/150",
                    tit:'전국 한우 개량 이끌 씨수소 20마리 선발',
                    desc:"농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다. 농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다. 농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다.",
                    date:"2020-07-21"
                },
                  {
                    idx:3,
                    img:"https://picsum.photos/id/7/230/150",
                    tit:'전국 한우 개량 이끌 씨수소 20마리 선발',
                    desc:"농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다. 농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다. 농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다.",
                    date:"2020-07-21"
                },
                  {
                    idx:4,
                    img:"https://picsum.photos/id/25/230/150",
                    tit:'전국 한우 개량 이끌 씨수소 20마리 선발',
                    desc:"농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다. 농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다. 농촌진흥청(청장 김경규)은 가축개량협의회 한우분과위원회를 열고 전국 한우 개량을 이끌 보증씨수소 20마리를 뽑았다고 밝혔다.",
                    date:"2020-07-21"
                },
            

            ]
        }
    }
}
</script>

<style lang="scss">
div.farm_news{
    width: 70%;
    display: inline-block;
    h2{
        font-size: 1.25rem;
    }
    ul.farm_advertise{
        height: 300px;
        overflow-y: scroll;
        -ms-overflow-style: none;
        margin: 20px 0px;
        li{
            width: 100%;
            min-height: 80px;
            margin: 5px 0px;
            border:1px solid #d0d0d0;
            border-radius: 3px;
            padding: 10px 15px;
                position: relative;

            div.img{
                overflow: hidden;
                display: inline-block;
                img{
                    width:100%
                }
            }
            div.text{
                max-width: 70%;
                vertical-align: top;
                padding-left: 20px;
                display: inline-block;
                h2{
                    font-size: 1rem;
                    font-weight: bold;
                    margin-top:10px;
                }
                p{
                    margin-top: 20px;
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                }
                span{
                    position: absolute;
                    font-size: 0.75rem;
                    color: #666;
                    bottom: 20px;
                }
            }
        }
    }
    ul.farm_advertise::-webkit-scrollbar {
        display:none;
    }
}
    
</style>