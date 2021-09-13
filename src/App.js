import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
// import { renderRoutes } from "react-router-config"  // 默认
import renderRoutes from "./commom/js/renderRoutes"  // 默认
import routes from "./router/router"
import './commom/style/index.css'
import './commom/style/index.less'
import './commom/style/index.scss'
import Home from './pages/home'
import Login from './pages/login'

function App() {
  //  只使用 react-router-dom 来实现路由
  // return (
  //   <div className="App">
  //     <p className="css">css样式生效</p>
  //     <p className="less">less样式生成</p>
  //     <p className="sass">sass样式生成</p>
  //     {/* 采用hash模式路由（带 # ） */}
  //     <HashRouter>
  //       {/* 切换路由 */}
  //       <Switch>
  //         {/* exact 精准匹配，如果不使用精准匹配，/login/xxx 也可以跳转到 login 页 */}
  //         <Route exact path="/login" component={Login} />
  //         <Route path="/home" component={Home} />
  //         <Route exact path="/" component={Home} />
  //         {/* 没有匹配到路劲时重定向到home 页面 */}
  //         <Redirect to={"/home"} />
  //       </Switch>
  //     </HashRouter>
  //   </div>
  // );

  //  使用  react-router-dom  react-router-dom  来实现路由，类似于 vue-router 的配置形式 
  return (
    <div className="App">
      <p className="css">css样式生效</p>
      <p className="less">less样式生成</p>
      <p className="sass">sass样式生成</p>
      {/* 采用hash模式路由（带 # ） */}
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    </div>
  );
}

export default App;
