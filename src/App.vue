<template>
    <div id="app">

        <div v-if="$route.meta.isNeedNav">
        	<pageHeader></pageHeader>
          <pageNav></pageNav>
        </div>

        <div :class="path=='login'||path=='home'||path=='forgetpw'?'loginMain':'main'">
          <keep-alive include="login,index,productionList,characterList,dynamicList,QAList,fansList"> 
    		      <router-view></router-view>
          </keep-alive> 

        </div>

    </div>
</template>

<script>
import pageHeader from './components/common/pageHeader'
import pageNav from './components/common/pageNav'
export default {
  name: 'App',
  components: {pageHeader,pageNav},
  data(){
      return {
        path: ''
      }
  },
  created(){
    //console.log(this.$route.name);
    this.path = this.$route.name;
  },
  watch: {
    $route(to,from){
      //console.log(to);
      this.path = this.$route.name;
    }
  },
}
</script>

<style lang="less" scoped>
.main{ width: 100%; min-height:100%; padding: 80px 20px 0 230px; background-color: #f6f8f9; }
</style>
