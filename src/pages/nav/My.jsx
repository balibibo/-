import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { Flex } from 'antd-mobile'
import '../../assets/css/my.scss'

export default class My extends Component {
    render() {
        return (
            <div>
                <div className="mytop-bg">
                    <div className="mytop">
                        <div className="mytop-l">
                            <Link to="/login"><img src={require('../../assets/img/mylogin.png')} alt=""/></Link>
                        </div>
                        <div className="mytop-r">
                            <div className="mytop-login">
                                <Link to="/login">登录/注册</Link>
                                <img src={require('../../assets/img/myset.png')} alt=""/>
                            </div>
                            <p>可以与经济人发起聊天</p>
                        </div>
                    </div>
                    {/* 信息 */}
                    <div className="myinfo">
                        <Flex justify="center">
                            <div className="myinfo-div">
                                <p>0</p>
                                <div className="myinfo-img">
                                    <img src={require('../../assets/img/myinfo01.png')} alt=""/>
                                    <span>钱包</span>
                                </div>
                            </div>
                            <div className="myinfo-div">
                                <p>0</p>
                                <div className="myinfo-img">
                                    <img src={require('../../assets/img/myinfo02.png')} alt=""/>
                                    <span>优惠</span>
                                </div>
                            </div>
                            <div className="myinfo-div">
                                <p>0</p>
                                <div className="myinfo-img">
                                    <img src={require('../../assets/img/myinfo03.png')} alt=""/>
                                    <span>积分</span>
                                </div>
                            </div>
                        </Flex> 
                    </div>
                </div>

                {/* 下方其他 */}
                {/* 上下大边距 */}
                <div className="myline">
                    {/* 其中的单个内容 */}
                    <div className="myother">
                        {/* 图片+文字 */}
                        <div className="myother-img">
                            <img src={require('../../assets/img/myoter01.png')} alt=""/>
                            <span>我的积分</span>
                        </div>
                        <span>></span>
                    </div>
                    <div className="myother">
                        {/* 图片+文字 */}
                        <div className="myother-img">
                            <img src={require('../../assets/img/myoter02.png')} alt=""/>
                            <span>我的订阅</span>
                        </div>
                        <span>></span>
                    </div>
                    <div className="myother">
                        {/* 图片+文字 */}
                        <div className="myother-img">
                            <img src={require('../../assets/img/myoter03.png')} alt=""/>
                            <span>微聊联系人</span>
                        </div>
                        <span>></span>
                    </div>
                </div>
                <div className="myline">
                    {/* 其中的单个内容 */}
                    <div className="myother">
                        {/* 图片+文字 */}
                        <div className="myother-img">
                            <img src={require('../../assets/img/myoter04.png')} alt=""/>
                            <span>房贷计算器</span>
                        </div>
                        <span>></span>
                    </div>
                    <div className="myother">
                        {/* 图片+文字 */}
                        <div className="myother-img">
                            <img src={require('../../assets/img/myoter05.png')} alt=""/>
                            <span>我的房子</span>
                        </div>
                        <span>></span>
                    </div>
                </div>
                <div className="myline">
                    {/* 其中的单个内容 */}
                    <div className="myother">
                        {/* 图片+文字 */}
                        <div className="myother-img">
                            <img src={require('../../assets/img/myoter06.png')} alt=""/>
                            <span>我的看房记录</span>
                        </div>
                        <span>></span>
                    </div>
                    <div className="myother">
                        {/* 图片+文字 */}
                        <div className="myother-img">
                            <img src={require('../../assets/img/myoter07.png')} alt=""/>
                            <span>我的问答</span>
                        </div>
                        <span>></span>
                    </div>
                </div>
                <div className="myline">
                    {/* 其中的单个内容 */}
                    <div className="myother">
                        {/* 图片+文字 */}
                        <div className="myother-img">
                            <img src={require('../../assets/img/myoter08.png')} alt=""/>
                            <span>设置</span>
                        </div>
                        <span>></span>
                    </div>
                    <div className="myother">
                        {/* 图片+文字 */}
                        <div className="myother-img">
                            <span>意见反馈</span>
                        </div>
                        <span>></span>
                    </div>
                </div>
                
            </div>
        )
    }
}
