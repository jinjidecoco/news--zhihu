import axios from 'axios';

export  default {
	getNews(param){
	  	return axios.get('api/news/latest',{params:param})
	  		.then(res=>{
		     	// cb(res.data)
		     	return res.data;
		    })
	}
}