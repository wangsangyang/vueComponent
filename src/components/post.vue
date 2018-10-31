<template>
  <div>

      <div v-if="!$route.meta.isChildren">
        <table class="tableList" width="100%">
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

        <el-button type="primary" @click="showModalFn">弹窗</el-button>


        <modal :show="showModal" :msg="msg" @close='closeFn' @sure="sureFn"></modal>
      </div>

      <router-view></router-view>
      
      {{updateState}}

  </div>

</template>

<script>
import walert from './plug/alert'
import modal from './plug/modal'
import loading from '@/components/plug/loading'

import {mapMutations, mapGetters, mapActions, mapState} from 'vuex'

export default {
  name: 'post',
  components: {walert,modal,loading},
  data () {
    return {
      showModal: false,
      msg: '我的confirm弹窗'
    }
  },
  methods:{
    showModalFn(){
      this.showModal = true;
    },
    closeFn(show){
      alert(1);
      this.showModal = show;
    },
    sureFn(show){
      alert(show);
    },
    ...mapMutations(['updateMutation']),
  },
  computed:{
    ...mapState(['update']),
    updateState(){
      //if(this.$store.getters.getUpdate){
      if(this.update){
        this.showModal = true;
        this.msg = '更新完毕';
        //this.$store.commit('updateMutation',false);
        this.updateMutation(1111111111);
        //this.$store.dispatch('updateAction',21);
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>
