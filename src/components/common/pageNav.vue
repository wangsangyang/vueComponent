<template>
 
  <div class="pageNav">
    <ul>
      <li><router-link :to="{ name: 'post'}" :class="{active: $route.meta.navActive=='index'}"><span>列表</span></router-link></li>
      <li><router-link :to="{ name: 'shenhePost'}" :class="{active: $route.meta.navActive=='shenhePost'}"><span>列表2</span></router-link></li>
    </ul>
  </div>
    
</template>

<script>

export default {
  data () {
    return {
      active: '',//导航高亮
      quanxianState: '',
    }
  },
  created(){
  },
}
</script>

<style lang="less" scoped>
@import '../../assets/less/pageNav.less';
</style>
