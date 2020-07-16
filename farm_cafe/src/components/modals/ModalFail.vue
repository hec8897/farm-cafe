<template>
    <modal 
        name="fail-modal"
        width="50%"
        :minWidth="340"
        height="auto"
        >
        
        <b-alert show  variant="danger">
            <h3 class="alert-heading" >{{mode}}가입 실패!</h3>
        </b-alert>

      </modal>
</template>
<script>
export default {
    props:['mode']
    
}
</script>

<style lang="scss">
div.alert{
    margin: 0;
    h3{
        font-size: 1.25rem;
    }
}

    
</style>