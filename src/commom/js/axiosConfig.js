import axios from "axios";

//拦截请求，加上 token 
axios.interceptors.request.use(function (config) {
	let token = true
	if (token) return config.headers[`X-Access-Token`] = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb2RlIjoiS2l0ZTE4NzQiLCJ0ZW5hbnRJZCI6MSwibmFtZSI6Ium7hOeovSIsInN1YlR5cGUiOiJwYy53ZWIiLCJpZCI6MTQyMjg0ODQ1MjExNTY2NDg5NywidHlwZSI6InN5cyIsImV4cCI6MTYzMTUyMzE0NH0.dSD-QmwfuE0H2Ol4GI5AqFwUjb1BWvZbiEuzxmj_G10`
	return config
}, function (error) {
	return Promise.reject(error);
})
