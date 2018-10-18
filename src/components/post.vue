<template>
  <div>


      <table class="tableList" width="100%" v-if="!$route.meta.isChildren">
          <thead>
            <tr>
                <td>作品名</td>
                <td>作者</td>
                <td>操作</td>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>斗破苍穹</td>
                <td>张三</td>
                <td><router-link :to="{name: 'postEdit'}">查看</router-link></td>
            </tr>
            <tr>
                <td>斗破苍穹</td>
                <td>张三</td>
                <td><router-link :to="{name: 'postEdit'}">查看</router-link></td>
            </tr>
          </tbody>
      </table>

      <el-button type="primary" @click="modalShowFn">弹窗</el-button>

      <walert :show="modalShow" :msg="msg" @on-show="onShowFn"></walert>
      <!-- <loading :show="modalShow" :msg="msg"></loading> -->
      
      <router-view></router-view>
    
  </div>

</template>

<script>
import walert from './plug/alert'
import modal from './plug/modal'
import loading from '@/components/plug/loading'

export default {
  name: 'post',
  components: {walert      ,modal,loading},
  data () {
    return {
      modalShow: false,
      msg: '加载中...'
    }
  },
  methods:{
    modalShowFn(){
      this.modalShow = true;
    },
    onShowFn(val){
      alert(val);
      this.modalShow = val;
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>
