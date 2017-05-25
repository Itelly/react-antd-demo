/**
 * 
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

// 引入单个页面（包括嵌套的子页面）
import Home from './components/Home.js'
// import Products from './components/Products.js'
import myTable from './components/table.js'
import myForm from './components/form.js'
import myChart from './components/chart.js'
import myAnimate from './components/animate.js'
import myCalendar from './components/calendar.js'
import myCard from './components/fetch.js'

const ACTIVE = { color: 'red' }

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'Telly'
        })
    }

    render() {
        return (
            <div>
                <div id="leftMenu"> 
                    <img src='src/assets/images/logo.png' width="50" id="logo"/>
                    <Menu theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 185 }}
                        // defaultOpenKeys={['sub1', 'sub2', 'sub3']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="home" /><span>公司首页</span></span>}>
                            <Menu.Item key="1"><Link to="/Home">公司简介</Link></Menu.Item>
                            <Menu.Item key="19"><Link to="/Products">产品成果</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>公司后台管理</span></span>}>
                            <Menu.Item key="2"><Link to="/myCard">用户管理</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/myAnimate">权限管理</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/myAnimate">部门管理</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/myAnimate">岗位管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="folder-open" /><span>业务统计管理</span></span>}>
                            <Menu.Item key="6"><Link to="/myCard">采购单统计</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/myAnimate">出货单统计</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/myAnimate">材料进货统计</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/myAnimate">样品统计</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                            <Menu.Item key="10"><Link to="/myTable">表格</Link></Menu.Item>
                            <Menu.Item key="11"><Link to="/myForm">表单</Link></Menu.Item>
                            <Menu.Item key="12"><Link to="/myChart">图表</Link></Menu.Item>
                            <Menu.Item key="13"><Link to="/myCalendar">日历</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                            <Menu.Item key="14"><Link to="/myCard">导航</Link></Menu.Item>
                            <Menu.Item key="15"><Link to="/myAnimate">关注</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" title={<span><Icon type="area-chart" /><span>业绩统计图</span></span>}>
                            <Menu.Item key="16"><Link to="/myCard">采购统计图</Link></Menu.Item>
                            <Menu.Item key="17"><Link to="/myAnimate">进出货统计图</Link></Menu.Item>
                            <Menu.Item key="18"><Link to="/myAnimate">产品产量统计图</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
            <IndexRoute path="myCard" component={myCard} />
            <Route path="home" component={Home} />
            
            <Route path="myTable" component={myTable} />
            <Route path="myForm" component={myForm} />
            <Route path="myChart" component={myChart} />
            <Route path="myCalendar" component={myCalendar} />
            <Route path="myAnimate" component={myAnimate} />
            <Route path="myCard" component={myCard} />
        </Route>
    </Router>
), document.getElementById('app'));


