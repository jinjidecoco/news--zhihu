import zhihu from '../../api/zhihu'
import * as types from '../mutation-types'
import axios from 'axios';


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
	updateNew({commit}){
		 return zhihu.getNews({})
	    	.then(res=>{
	    		commit('updateNews', res.stories);
	    	})

	},
	getLastNew({commit}, date ){
	    axios.get('api/news/before/'+ date )
	    .then(res =>{
             commit('pushNews',res.data.stories)
	    })
    },
    // checkMore({commit}){
    // 	return zhihu.checkDetails({})
    // 	.then(res=>{
    // 		commit('check',res.id)
    // 	})
    // },
    getDetail({commit}){
    	return zhuhu.checkDetails({id})
    	.then(res=>{
    		commit('getDetail',res.body)
    	})
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
	},	
	checkMores(){

	},
	getDate(state,lists){
		lists.forEach(function(list){
			let d=list.date;
		});
	}
}


export default {
  state,
  actions,
  getters,
  mutations
}