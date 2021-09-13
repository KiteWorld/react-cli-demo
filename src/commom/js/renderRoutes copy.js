// 参考 react-router-config 的 renderRouter 函数，并添加鉴权功能

import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
let formatRoutes = []
const renderRoutes = (routes, authed, authPath = '/login', extraProps = {}, switchProps = {}) => {
	formatRoutes = []
	if (!routes) return null
	getRoutes(routes);
	console.log(formatRoutes)
	routes = formatRoutes
	return (<Switch {...switchProps}>
		{
			routes.map((route, i) => (
				<Route
					key={route.key || i}
					path={route.fullPath}
					exact={route.exact}
					strict={route.strict}
					render={(props) => {
						if (!route.requiresAuth || authed || route.path === authPath) {
							return <route.component {...props} {...extraProps} route={route} />
						}
						return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
					}}
				/>
			))
		}
	</Switch>)
}
export default renderRoutes
function getRoutes(routes, parentPath) {
	routes.forEach((x, i) => {
		x.fullPath = parentPath || '' + x.path
		formatRoutes.push(x)
		if (x.children && x.children.length > 0) {
			getRoutes(x.children, x.fullPath)
		}
	})

}
