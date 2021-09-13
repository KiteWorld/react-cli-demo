import axios from "axios";


export default function request(method, url, data, opt = {
	baseURL: "",
	responseType: "json",
	isSerializer: false
}) {
	const requstParam = {
		url,
		method,
		responseType: opt.responseType,
		params: method == "get" ? data : {},
		data: method == "get" ? {} : data
	}
	//参数序列化
	if (opt.isSerializer) requstParam.paramsSerializer = function (params) {
		//QS库太大，如果只是用到 QS 序列化功能推荐手写
		// return Qs.stringify(params, { arrayFormat: 'brackets' })
	}
	// 用于覆盖全局设置的 baseURL ，
	if (opt.baseURL) requstParam.baseURL = opt.baseURL
	return new Promise((resolve) => {
		axios.request(requstParam).then((res) => {
			//根据自己项目处理响应结果,这里直接返回 result 的内容
			resolve(res.data.result)
		}).catch(function (error) {
			//统一处理异常，可以使用轻提示，例如：Toast等等
			console.log(error?.response?.data?.message || error.message);
			resolve(false) // 错误统一放回 false
		});
	})

}

// request 对象添加 get、post 属性 
["get", "post"].forEach(method => request[method] = (url, data, opt) => request(method, url, data, opt || {}))