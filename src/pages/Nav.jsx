import React, { Component } from 'react'

import { TabBar } from 'antd-mobile'
import Main from "./Home"
import Lt from "./nav/Lt"
import Rec from "./nav/Rec"
import My from "./nav/My"


export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'main', // 当前选中标签的名字
            fullScreen: false,

            navlist: [
                { title: '首页', key: 'main', icon: 'nav01-01', selectedIcon: 'nav01-02', component: <Main></Main> },
                { title: '微聊', key: 'lt', icon: 'nav02-01', selectedIcon: 'nav02-02', component: <Lt></Lt> },
                { title: '足迹', key: 'rec', icon: 'nav03-01', selectedIcon: 'nav03-02', component: <Rec></Rec> },
                { title: '我的', key: 'my', icon: 'nav04-01', selectedIcon: 'nav04-02', component: <My></My> },
            ]
        };
    }

    // 被调用时渲染的内容
    /* renderContent(pageText) {
        return (
          <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <h1>aa</h1>
          </div>
        );
      } */

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    {
                        this.state.navlist.map((v, i) => {
                            return <TabBar.Item
                                title={v.title}
                                key={v.key}  // 唯一标识（按钮id）
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../assets/img/' + v.icon +'.png')}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../assets/img/' + v.selectedIcon +'.png')}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === v.key}
                                // badge={1}  右上角文字  使用引号
                                // dot 右上角小红点
                                onPress={() => {   // 切换选中
                                    this.setState({
                                        selectedTab: v.key,
                                    });
                                }}
                            // data-seed="logId"  自定义值
                            >
                                {/* 点击后渲染的内容 */}
                                {/* {this.renderContent('Life')} */}
                                {v.component}
                            </TabBar.Item>
                        })
                    }
                </TabBar>
            </div>
        );
    }
}
