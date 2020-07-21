
<template>
        <div class="main-farm">
        <h2 class='section_tit sm'>
        <b-icon icon="chat-square-quote" variant="success"></b-icon>
            장사 이야기 게시판
            <span>더보기<b-icon icon="plus"></b-icon></span>
        </h2>
        <table class='main_farm'>
            <thead>
                <tr>
                    <td>제목</td>
                    <td>조회수</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(list,index) in lists.slice(0,5)" :key="index" >
                    <td>{{list.tit}}</td>
                    <td>{{list.view}}</td>
                </tr>
            </tbody>
        </table>
        </div>
</template>

<script>
export default {
    data(){
        return{
            lists:[
                {
                    cate:'공지사항',
                    tit:'팜카페 이용 준수사항 및 운영에 관한 안내',
                    date:'2020-05-23',
                    view:100
                },
                {
                    cate:'장사이야기 공유',
                    tit:'농약안전정보시스템 판매기록 전송에 대하여',
                    date:'2020-05-23',
                    view:50
                },
                    {
                    cate:'공지사항',
                    tit:'팜카페 이용 준수사항 및 운영에 관한 안내',
                    date:'2020-05-23',
                    view:100
                },
                {
                    cate:'장사이야기 공유',
                    tit:'농약안전정보시스템 판매기록 전송에 대하여',
                    date:'2020-05-23',
                    view:50
                },
                    {
                    cate:'공지사항',
                    tit:'팜카페 이용 준수사항 및 운영에 관한 안내',
                    date:'2020-05-23',
                    view:100
                },
                {
                    cate:'장사이야기 공유',
                    tit:'농약안전정보시스템 판매기록 전송에 대하여',
                    date:'2020-05-23',
                    view:50
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    div.main-farm{
        display: inline-block;
        width: 31%;
        vertical-align: bottom;
        margin: 10px;
        @media (max-width: 1024px) {
        width: 98%;
        margin: 15px 0px;
        }
    }
    table.main_farm{
        td{
            text-align: center;
            padding: 10px 7px;
            font-size: 0.75rem;
            &:nth-child(1){
                width: 80%;
            }
            }
    }

    
</style>