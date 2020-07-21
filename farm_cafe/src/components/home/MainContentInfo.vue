
<template>
        <div class="info">
        <h2 class='section_tit'>
        <b-icon icon="chat-square-quote" variant="success"></b-icon>
            팜카페 공지사항
            <span>더보기<b-icon icon="plus"></b-icon></span>
        </h2>
        <table class='info'>
            <thead>
                <tr>
                    <td>카페회칙</td>
                    <td>제목</td>
                    <td>조회수</td>
                    <td>날짜</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(list,index) in lists.slice(0,5)" :key="index" >
                    <td>{{list.cate}}</td>
                    <td>{{list.tit}}</td>
                    <td>{{list.view}}</td>
                    <td>{{list.date}}</td>
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
    div.info{
        display: inline-block;
        width: 70%;
        vertical-align: bottom;
        @media (max-width: 1024px) {
        width: 100%;
        }
    }
    table.info{
        td{
            text-align: center;
            &:nth-child(1){
                width: 20%;
            }
            &:nth-child(3){
                width: 10%;
            }
            &:nth-child(4){
                width: 20%;
                @media (max-width: 1024px) {
                    display: none;
                }
            }
        }
    }

    
</style>