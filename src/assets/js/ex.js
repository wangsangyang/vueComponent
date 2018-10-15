import Vue from 'vue'

let loading = `<div class="loading">
	<span>加载中...</span>
</div>`;

Vue.component('loading',{
	template: loading,
	data(){
		return {
			text: '加载中...'
		}
	},
	methods: {
		
	}
});


export const util = {
	$http(params){
		let {headers = {}, url = '', method = 'post', data = {} } = params;


		
		 }

	},
}
