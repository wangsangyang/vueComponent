<template>

    <div class="m-loading" :class="{'show': show}">
        <div class="container">
            <span></span>  
        </div>
    </div>

</template>

<script>
export default {
    props:['show','msg'],
    data() {
        return {
           temp: this.show
        }
    },
    watch: {
      show(val) {
        this.temp = val;
        //this.$emit('on-show',val);
      },
      temp(val) {
        console.log(val);
        //this.$emit('on-show',val);
      }
    },
    methods: {
        closeModal(){
            //this.temp = false;
            this.$emit('on-show',false);
        },
    }
}
</script>

<style lang="less" scoped>
.m-loading{
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    .container{ 
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .bodyer{
            padding: 20px;
        }
    }
    &.show{
        display: block;
    }
}
</style>
