import React, { Component } from "react";
import { HashRouter, Link } from 'react-router-dom'

import style from "./home.module.less" // 使用 module 解决样式污染问题
class Home extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className={style['home-container']}>
				<h1>Page1</h1>
				{/* Link 标签放在 HashRouter 或者 BrowserRouter 内 */}
				<HashRouter>
					<Link to="/login">点击切换登录页</Link>
				</HashRouter>
			</div>
		)
	}
}

export default Home