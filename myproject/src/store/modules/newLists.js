import zhihu from '../../api/zhihu'
import * as types from '../mutation-types'

const namespaced = true;

const state = {
    lists: []
}
const getters={
	allNews:state => state.lists
}

const actions={
	pushNew({commit}){
	    return zhihu.getNews({})
	    	.then(res=>{
	    		commit('pushNews', res.stories);
	    	})
	},
	// updateNew({commit}){
	// 	zhihu.getNews(res =>{
	// 		commit('updateNews',res.stories);
	// 	})
	// },
	getLastNew({commit}){
        return zhihu.getMoreNews({})
           .then(res =>{
           	// console.log(res);
        	commit('pushNews',res.stories);
        })
         	// .then(res=>{
         	// 	commit('pushNews',res.stories);
         	// })
         	// .then(res=>{
         	// 	commit('updateNews',res.stories);
         	// })
         	

    }
		
	
}

const mutations ={
	pushNews(state,lists){
		lists.forEach(function(list){
			state.lists.push(list);
		});
	},
	updateNews(state,lists){
		state.lists=lists;
	}	
}


export default {
  state,
  actions,
  getters,
  mutations
}