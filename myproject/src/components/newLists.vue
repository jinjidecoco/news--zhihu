<template>
	<div class='new-list'>
	<ul>
		<li v-for='list in lists'>
			<span>{{list.title}}</span>
			<div>
				<img :src='list.images[0]|proxyImg'>
			</div>
			<span>{{list.date}}</span>
		</li>
	<!-- 	<button @click='pushNew'>13</button>
		<button @click='updateNew'>14</button>
 -->	</ul>
	
 	</div>
</template>
<script >
import {mapGetters,mapActions,mapMutations} from 'vuex';
	export default{
		name: 'newLists',
		data(){
			return{
		    }
        },
        computed:{
        	...mapGetters({
        		lists: 'allNews'
        	})
        },
        methods:{
        	...mapMutations(['pushNews','updateNews']),
        	...mapActions(['pushNew','updateNew']),

        	//获取滚动条高度
        	getScrollTop:function(){
        		  var scrollTop=0;
        		if(document.documentElement&&document.documentElement.scrollTop){
        			scrollTop=document.documentElement.scrollTop;
        		}else{
        			scrollTop=document.body.scrollTop;
        		}
        		return scrollTop;
        		console.log(scrollTop);
        	},
        	//获取可视区域高度
        	getClientHeight:function(){  
                  var clientHeight=0;  
		       if(document.body.clientHeight&&document.documentElement.clientHeight){  
		           var clientHeight=(document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;          
		        }else{  
		           var clientHeight=(document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;      
		    }  
		       return clientHeight;  
            },
        },
        created(){
        	this.pushNew(),
        	this.updateNew();
        },
        filters:{
        	proxyImg(url){
        		console.log(url)
        		return "https://images.weserv.nl/?url="+url.split('https://')[1];
        	}
        },

	}
</script>
<style lang='less'scoped>
	
</style>