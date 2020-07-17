<template>
  <sidebar-menu :menu="menu" />
</template>
 
<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        title: '우성소프트 팜카페',
                        hiddenOnCollapse: true,
                          icon: {
                                element: 'span',
                                class: 'fa fa-user',
                                // attributes: {}
                                // text: ''
                            }
                    },
                    {
                        href: '/',
                        title: '홈페이지',
                           icon: {
                                element: 'b-icon',
                                attributes: {
                                        icon:'house',
                                    }
                                }
                        },
                        {
                        href: '/farm',
                        title: '팜카페',
                         icon: {
                                element: 'b-icon',
                                attributes: {
                                    icon:'card-list',
                                }
                        },
                        
                        child: [
                            {
                                href: '/farm/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script> 

<style lang="scss">
    .v-sidebar-menu{
        .vsm--list{
        }
        .vsm--icon {
            height:20px!important;
            background-color: lighten(#424242,5%)!important;
            svg{
                font-size: 0.75rem;
            }
        }
        .vsm--item{
            .vsm--link_exact-active{
                background-color: lighten(#424242,5%)!important;
            }
           

        }
         .vsm--arrow:after{
                content: ''!important;
            }
             .vsm--toggle-btn:after{
                 content:'닫기'!important;
             }
    }

</style>