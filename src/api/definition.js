import axios from 'axios';

var instance = axios.create({
  baseURL: 'http://wuya.fztk.dev.dodoedu.com',
  timeout: 5000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});


export function get(url) {
	 return function (params){
	      return instance.get(url,{
	      	 params
	      }).then((res) => {
	      	 // const { errno,data } = res.data;
	      	 // if(errno == 0){
	      	 // 	  return data;
	      	 // }
	      	 // console.log(res);
	      	 return res.data;
	      }).catch(()=>{
	      	 
	      })
	 }
}