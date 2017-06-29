import axios from 'axios';

export  default {
	getNews(param){
	  	return axios.get('api/news/latest',{params:param})
	  		.then(res=>{
		    return res.data;
	    })
	},
	// getMoreNews(param){
	// 	return axios.get('api/news/before/'+ 20170523)
	// 	    .then(res=>{
	// 		return res.data
	// 	})
	// },
	checkDetails(param){
		return axios.get('api/story-extra/#{id}')
		.then(res=>{
			return res.data
		})
	}
}