<template>
    <section class="section1">
        <div class="wrap">
        <h2>공지사항
        <span>더보기<b-icon icon="plus"></b-icon></span>
        </h2>
        <table>
            <thead>
                <tr>
                    <td><span>카페 회칙 안내</span></td>
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
    </section>
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
section.section1{
    h2{
        font-size: 1.57rem;
        position: relative;
        span{
            position: absolute;
            right: 1%;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.875rem;
            color: #666;
            cursor: pointer;
            &:hover{
                color: #444;
            }
        }
    }
    table{
        margin: 20px 0px;
        width: 100%;
        thead{
            background: #d9d9d9;
            border-top: 1px solid #666;
        }
        tbody{
            tr:hover{
                cursor: pointer;
                background-color: rgba(0,0,0,0.05);
            }
        }
        tr{
            border-bottom: 1px solid #d0d0d0;;
        }
      
        td{
            font-size: 0.875rem;
            text-align: center;
            padding: 10px 0px;
            span{
                color: tomato;
            }
            &:nth-child(1){
                width: 20%;
                font-size: 0.875rem;
            }
        }
    }
}
    
</style>