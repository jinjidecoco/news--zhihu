<template>
	<div class='new-list'>
	<ul>
		<li v-for='list in lists'>
			<span>{{list.title}}</span>
			<span>{{list.date}}</span>

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
import axios from 'axios';
	export default{
		name: 'newLists',        
		data(){
			return{
			
		    };
        },
        computed:{
        	...mapGetters({
        		lists: 'allNews'
        	})
        },
        methods:{
        	...mapMutations(['pushNews','updateNews','getLastNews']),
        	...mapActions(['pushNew','updateNew','getLastNew']),

        	//获取滚动条高度
        	handleScroll(){
	        	function getScrollTop(){
	        		  var scrollTop=0;
	        		if(document.documentElement&&document.documentElement.scrollTop){
	        			scrollTop=document.documentElement.scrollTop;
	        		}else{
	        			scrollTop=document.body.scrollTop;
	        		}
	        		return scrollTop;
	        		console.log(scrollTop);
	        	}
	        	//获取可视区域高度
	        	function getClientHeight(){  
	                  var clientHeight=0;  
			       if(document.body.clientHeight&&document.documentElement.clientHeight){  
			           var clientHeight=(document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;          
			        }else{  
			           var clientHeight=(document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;      
			    }  
			       return clientHeight;  
	            }
	            //获取页面实际高度
	            function getContentHeight(){  
                 return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);  
                }
                function getDate(){
                	var d=new Date();

                }

	            let viewHeight=getClientHeight(),
	                topHeight=getScrollTop(),
	                contentHeight=getContentHeight(),
	                bottomHeight=contentHeight-topHeight-viewHeight;
	                if(bottomHeight<100){
	                	this.getLastNew();
	                }
	        }    
        },
        created(){
        	this.pushNew(),
        	this.updateNew();
            window.addEventListener('scroll',this.handleScroll)

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