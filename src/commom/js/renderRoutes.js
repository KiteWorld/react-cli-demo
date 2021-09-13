// 参考 react-router-config 的 renderRouter 函数，并添加鉴权功能

import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
let formattedRoutes = []
/* 
	routes: route 配置信息，参考 router.js
	authed:  true 表示已经登录,通常通过判断 token 是否存在
	authPath: 授权地址，一般为登录页的地址
	extraProps：额外属性
	switchProps  Switch 组件的属性
*/
const renderRoutes = (routes, authed = true, authPath = '/login', extraProps = {}, switchProps = {}) => {
	formattedRoutes = []
	if (!routes) return null
	formatRoutes(routes);
	routes = formattedRoutes
	return (<Switch {...switchProps}>
		{
			routes.map((route, i) => (
				<Route
					key={route.key || i}
					path={route.fullPath}
					exact={route.exact}
					strict={route.strict}
					render={(props) => {
						if ((!route.requiresAuth || authed || route.path === authPath) && !route.redirect) {
							return <route.component {...props} {...extraProps} route={route} />
						}
						const pathname = authed && route.redirect ? route.redirect : authPath
						return <Redirect to={{ pathname, state: { from: props.location } }} />
					}}
				/>
			))
		}
	</Switch>)
}
export default renderRoutes
// 格式化 router 
function formatRoutes(routes, parentPath) {
	routes.forEach((x, i) => {
		x.fullPath = (parentPath || '') + x.path
		formattedRoutes.push(x)
		if (x.children && x.children.length > 0) {
			formatRoutes(x.children, x.fullPath)
		}
	})
}


