<template>

    <header class="pageHeader">
      <div class="left">
        <a @click="linkIndex">
          <dl class="logobox">
            <dt><img src="../../../static/images/logo.png" alt="logo"></dt> 
            <dd>
              <h3>加一运营管理平台</h3> 
              <h4>www.jiayiworld.com</h4>
            </dd>
          </dl>
        </a>
    </div>
      <div class="right"><a class="signout" @click="signout">【退出】</a></div>
    </header>

</template>

<script>
import {util} from '../../assets/js/util'

export default {
  data () {
    return {
      
    }
  },
  created(){
  },
  methods:{
    signout(){
      let params = {
          method: 'get',
          url: 'user/logout',
      }

      this.$confirm('你确定要系统吗？','退出登录',{type: 'warning'}).then(()=>{
        util.$http(params).then(response=>{
            //console.log(response);
            if(response.data.code=='0000'){      
              localStorage.removeItem('quanxianState');
              localStorage.removeItem('lastLoginTimestamp');
              this.$router.push({name: 'login'});
            }
        }); 
      }).then();
    },
    linkIndex(){
      this.$router.push({name: 'index'});
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/pageHeader.less';
</style>
