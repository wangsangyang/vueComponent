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
        tableArray: [],
        noData: false,
    }
  },
  created(){
    this.init();
  },
  methods:{
    init(){
        //console.log(util.getAdminId());
        let params = {
            url: 'user/getAllContext',           
            data: {}
        }
    },

  },
}
</script>

<style lang="less" scoped>
@import '../assets/less/productionList.less';
</style>
