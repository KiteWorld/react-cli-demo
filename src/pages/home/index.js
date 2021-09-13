import React, { Component } from "react";
import { HashRouter, Link } from 'react-router-dom'
import { test } from "../../api/user"

import style from "./home.module.less" // 使用 module 解决样式污染问题
class Home extends Component {
	async componentDidMount() {
		const res = await test()
		console.log(res)
	}
	render() {
		return (
			<div className={style['home-container']}>
				<h1>Home Page</h1>
				{/* Link 标签放在 HashRouter 或者 BrowserRouter 内 */}
				<HashRouter>
					<Link to="/login">点击切换登录页</Link>
				</HashRouter>
			</div>
		)
	}
}

export default Home