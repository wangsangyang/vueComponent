import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    update: false,//是否刷新作品管理列表
}

const mutations = {
    updateMutation(state,isUpdate){
    	console.log(isUpdate);
        state.update = isUpdate;
    },
}

const getters = {
	getUpdate(state){
		console.log(state.update);
		return state.update;
	},
}

const actions = {
    updateAction({commit},val){
        console.log(val);
        commit('updateMutation',val)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});