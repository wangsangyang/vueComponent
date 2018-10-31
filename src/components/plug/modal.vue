<template>

    <div class="m-modal" :class="{'show': show}" v-if="show">
        <div class="container">
            <div class="bodyer">
                {{msg}}
            </div>
            <div class="footer">
                <a class="btn" @click="close">取消</a>
                <a class="btn" @click="sure">确定</a>
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
        //console.log(val);
        //this.$emit('on-show',val);
      }
    },
    methods: {
        close(){
            this.$emit('close',false);
        },
        sure(){
            this.$emit('close',false);
            this.$emit('sure',false);
        },
    }
}
</script>

<style lang="less" scoped>
.m-modal{
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
            display: flex;
            border-top: solid 1px #ddd;
            margin-top: -1px;
            .btn{ 
                flex: 1;
                text-align: center;
                padding: 10px 0;
                font-size: 14px;
                &:nth-child(2){
                    border-left: solid 1px #ddd;
                    color: #0246af;
                }
            }
        }
    }
    &.show{
        display: block;
    }
}
</style>
