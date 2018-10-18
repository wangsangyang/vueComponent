<template>

    <div class="w-alert" :class="{'show': show}" v-if="show">
        <div class="container">
            <div class="bodyer">
                {{msg}}
            </div>
            <div class="footer">
                <a class="btn" @click="closeFn">确定</a>
            </div>
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
        closeFn(){
            //this.temp = false;
            this.$emit('on-show',false);
        },
    }
}
</script>

<style lang="less" scoped>
.w-alert{
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    .container{ 
        width: 300px;
        background-color: #fff;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .bodyer{
            padding: 20px;
        }
        .footer{
            border-top: solid 1px #ddd;
            margin-top: -1px;
            .btn{ 
                display: block;
                text-align: center;
                padding: 8px 0;
            }
        }
    }
    &.show{
        display: block;
    }
}
</style>
