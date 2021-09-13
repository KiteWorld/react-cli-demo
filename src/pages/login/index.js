import React, { Component } from "react";
import style from "./login.module.less" // 使用 module 解决样式污染问题
import { HashRouter, Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return (
			<div className={style['login-container']}>
				<h1>Login Page</h1>
				<HashRouter>
					<Link to="/">点击切换到主页</Link>
				</HashRouter>
			</div>
		)
	}
}

export default Home