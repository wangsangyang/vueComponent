<template>
  <div>

    <div class="separator">审核已完成帖子</div>

    <!-- {{ checkedArray }} -->


    <div class="cont1">
      <label class="checkbox checkAll" :class="{checked: checkAll}" @click="isCheckAllFn">
        <input type="checkbox">全选
      </label>
      <a class="btn" @click="shenhePass">通过</a>
    </div>

    <div class="cont2">

        <table width="100%" class="tableList">
            <thead>
                <tr>
                    <td>操作</td>
                    <td>作品信息</td>
                    <td>人物信息</td>
                    <td>帖子内容</td>
                    <td>时间</td>
                </tr>
            </thead>  
            <tbody>
                <tr v-for="(list,index) in tableArray">
                    <td>  
                      <label class="checkbox" :class="{checked: list.checked}" @click="isCheckFn(index,list.checked)">
                        <input type="checkbox" :value="list.dynamicId" v-model="checkedArray">
                      </label>
                      <a class="btn" @click="shenhePass">通过</a>
                    </td>
                    <td>{{list.workName}}</td>
                    <td>{{list.userName}}</td>
                    <td class="maxwidth">
                        <div class="maxwidth">{{list.dynamicContext}}</div>
                        <ul class="imgList">
                            <li v-for="image in list.imageArray">
                                <span class="imgbox"><img :src="image"></span>
                            </li>
                        </ul>
                      </td>
                    <td>{{list.dynamicTime}}</td>
                </tr>
            </tbody>     
        </table>

    </div>

  </div>

</template>

<script>
import {util} from '../assets/js/util'
//import $ from "jquery"

export default {
  name: 'shenhePost',
  data () {
    return {
        tableArray: [],
        checkedArray: [],
        checkAll: false,
    }
  },
  created(){
    this.init();
    //console.log(this.checkedArray);
  },
  methods:{
    init(){
        //console.log(util.getAdminId());
        let params = {
            url: 'user/getAllContext',           
            data: {}
        }
        util.$http(params).then(response=>{
            //console.log(response);
            if(response.data.code=='0000'){
                this.tableArray = response.data.data; 
                this.tableArray.map(function(v,k){
                    let imageArray = v.dynamicUrl?v.dynamicUrl.split(','):[];
                    v.imageArray = imageArray;
                    v.checked = false;
                });
                //console.log(this.tableArray);
            }
        });
    },
    isCheckFn(index,checked){
      this.tableArray[index].checked = !checked;
    },
    //全选
    isCheckAllFn(){
      this.checkAll = !this.checkAll;
      this.checkedArray = [];
      if(this.checkAll){
        this.tableArray.map((v,k)=>{
            v.checked = true;
            this.checkedArray.push(v.dynamicId);
        });
      }else{
        this.tableArray.map((v,k)=>{
            v.checked = false;
        });
      }
    },
    shenhePass(){
        //console.log(this.checkedArray);
        //return;
        if(this.checkedArray.length<1){
            this.$message({
              message: '请选择要审核的内容',
              type: 'error'
            });
            return false;
        }

        let params = {
            url: 'user/passContext',           
            data: {
              dynamicIds: this.checkedArray
            }
        }

        this.$confirm('你确定要审核通过吗?', '审核', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            util.$http(params).then(response=>{
                //console.log(response);
                if(response.data.code=='0000'){
                  this.init();
                  this.checkedArray = [];
                }
            });
        }).catch(() => { });

    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/productionList.less';
  .separator{ background-color: #fff; padding: 15px 0; text-align: center; }
  .cont1{ background-color: #fff; padding: 15px; margin-top: 20px; }
  .cont2{ background-color: #fff; padding: 15px; margin-bottom: 30px; }

   .btn{
        cursor: pointer;
        display: inline-block;
        width: 70px; 
        line-height: 24px; 
        background-color: #0FB6F7;
        color: #fff; 
        text-align: center;
        margin: 0 0 0 10px;
   }
   .checkbox{
      display: inline-block;
      font-size: 14px;
      position: relative;
      input{ opacity: 0; width: 100%; height: 100%; position: absolute; top: -1px; left: 0px;  }
       &:before{
          content: ""; display: inline-block; width: 15px; height: 15px; border: solid 1px #aaa; vertical-align: -3px; margin-right: 4px;
       }
       &.checked:before{
          background: no-repeat url(../assets/images/icon-gou.png) 0px 0px; 
       }
   }
   .checkAll{  }
</style>
