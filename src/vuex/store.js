import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    isUpdateProductionList: false,//是否刷新作品管理列表
}

const mutations = {
    updateProductionList(state,isUpdate){
    	  //console.log(isUpdate);
    	  //console.log('mutations');
        state.isUpdateProductionList = isUpdate;
    },
}

const getters = {
	productionListState(state){
		//console.log('getters');
		return state.isUpdateProductionList;
	},
}

export default new Vuex.Store({
    state,
    mutations,
    getters
});