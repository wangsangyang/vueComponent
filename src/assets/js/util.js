import axios from 'axios'
//import qs from 'qs'
import router from "../../router/index";

//axios.defaults.baseURL = 'http://39.106.167.104/';
axios.defaults.baseURL = 'http://test.jiayiworld.com/';
//axios.defaults.baseURL = 'http://testdata.jiayiworld.com/';
//axios.defaults.baseURL = 'http://192.168.0.85:8443/';
//axios.defaults.baseURL = 'https://api.jiayiworld.com/';

import { Message,Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;

            
let myloading;
axios.interceptors.request.use(config=>{
	myloading = Loading.service({fullscreen: true, text: '加载中....', customClass: 'el-selfloading'});
	//myloading = Loading({ text: '创建中...', customClass: 'el-selfloading' });
	return config
}, error=>{
	// 请求失败的处理
});

// response响应拦截 拦截器
axios.interceptors.response.use(
response => {
	myloading.close();
    //console.log(response);
    return response;
},
error => {
	myloading.close();
	//console.log(error);
	//console.log(error.response);
	//router.push({name: 'login'});
    if (error.response) {
    	// 返回 401 ，说明未登录，则跳转到登录页面
    	if(error.response.status==401){
				Message({message:'您还未登录',type: 'error',duration: 1500,onClose: function(){
					router.push({name: 'login'});
				}});
    	}

        // switch (error.response.status) {
        //     case 401:
        //         // 返回 401 清除token信息并跳转到登录页面
        //         store.commit(types.LOGOUT);
        //         router.replace({
        //             path: 'login',
        //             query: {redirect: router.currentRoute.fullPath}
        //         })
        // }
    }
    return error.response;
});

export const util = {
	$http(params){
		let {headers = {}, url = '', method = 'post', data = {} } = params;
	
		// headers = {	
  //           'Authorization': 'Bearer ',
  //           "Cookie" : 'JSESSIONID=123321',

		// }

		//console.log(data);

		if(method=='get'){
  			return new Promise((resolve,reject)=>{
				axios.get(url, {params: data}, {headers}).then(response=>{
					resolve(response);
				}).catch(error=>{
					reject(error);
					console.log(error);
					//throw new Error(error);
				});
			});	
		}else{
			return new Promise((resolve,reject)=>{
				axios.post(url, data, {headers}).then(response=>{
					resolve(response);
				}).catch(error=>{
					reject(error);
					console.log(error);
					//throw new Error(error);
				});
			});	
		}
	},
	getAdminId(){
		return localStorage.getItem('adminId');
	},
	trim(str){
		return str.replace(/(^\s*)|(\s*$)/g, "");
	},
	getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
	}
}
