import React, { Component } from 'react'

import { Button } from 'antd-mobile'

import '../../assets/css/Lt.scss'

export default class Lt extends Component {
    render() {
        return (
            <div className="lt">
                <div className="ltimg">
                    <img src="" alt=""/>
                </div>
                <p>置业顾问：<span style={{color: '#108EE9'}}>张小妹</span></p>
                <p>专业服务程序做人诚心做事！</p>

                <Button style={{
                    backgroundColor: '#108EE9',
                    color: '#fff',
                    width: '100px',
                    margin: '20px auto 0px'
                    }}>开始聊天</Button>
            </div>
        )
    }
}
