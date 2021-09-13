import Home from '../pages/home';
import Page1 from '../pages/page1';
import Login from '../pages/login';
const routes = [
	{
		path: '/',
		exact: true,
		redirect: '/home',
	},
	{
		path: '/home',
		exact: true,
		component: Home,
		children: [
			{
				path: '/page1',
				exact: true,
				component: Page1,
			}
		]
	},
	{
		path: '/login',
		exact: true,
		component: Login,
	}

]

export default routes