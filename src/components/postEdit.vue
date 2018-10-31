<template>
  <div>

        <table width="100%"> 
            <tbody>
                <tr>
                    <td>用户名</td>
                    <td><input type="text" name=""></td>
                </tr>
                <tr>
                    <td>密码</td>
                    <td><input type="text" name=""></td>
                </tr>
                <tr>
                    <td>用户名</td>
                    <td><input type="text" name=""></td>
                </tr>
                <tr>
                    <td>密码</td>
                    <td><input type="text" name=""></td>
                </tr>
                <tr>
                    <td>用户名</td>
                    <td><input type="text" name=""></td>
                </tr>
                <tr>
                    <td>密码</td>
                    <td><input type="text" name=""></td>
                </tr>
                <tr>
                    <td>用户名</td>
                    <td><input type="text" name=""></td>
                </tr>
                <tr>
                    <td>密码</td>
                    <td><input type="text" name=""></td>
                </tr>
                <tr>
                    <td></td>
                    <td><el-button type="primary" @click="sure">确定</el-button></td>
                </tr>
            </tbody>     
        </table>


  </div>

</template>

<script>
import {util} from '../assets/js/util'
//import $ from "jquery"

export default {
  name: 'postList',
  data () {
    return {
    }
  },
  methods:{
    sure(){      
        console.log(this.$store.state.update);
        this.$store.commit('updateMutation',true);
        this.$router.back(-1);

    },

  },
}
</script>

<style lang="less" scoped>
@import '../assets/less/productionList.less';
td{ padding: 10px;}
</style>
