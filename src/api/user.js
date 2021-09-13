// https://cssuat.lh-home.com.cn/seat/api/seater/system/info

import requset from "../commom/js/request"

export function test() {
	return requset.get('https://cssuat.lh-home.com.cn/seat/api/seater/system/info', { test: 1 })
}