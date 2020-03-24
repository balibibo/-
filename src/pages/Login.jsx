import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Flex, WhiteSpace,Button,InputItem,WingBlank } from 'antd-mobile';

import '../assets/css/Login.scss'

// axios请求路径
import { login } from '../api/apis.js'


export default class Login extends Component {

    state = {
        acc: '',
        pwd: '',
    }

    render() {
        return (
            <div>
                <Flex justify="center">
                    <img src={require('../assets/img/bilibili.png')} alt=""/>
                </Flex>

                <WhiteSpace size='xl' />

                <WingBlank size='lg'>
                    <InputItem
                    placeholder="请输入用户名"
                    clear
                    /*  value 和 onchange 实现双向绑定 */
                    value={this.state.acc}
                    /* val 已经被封装过 等同于 e.target.value */
                    onChange= { (val) => this.setState({ acc: val }) }
                    >
                        <div style={{backgroundImage: 'url('+require('../assets/img/denglu.png')+')', backgroundSize: 'cover', height: '22px', width: '22px'}} />
                    </InputItem>
                    <InputItem
                    placeholder="请输入密码"
                    type="password"
                    value={this.state.pwd}
                    onChange= { (val) => this.setState({ pwd: val }) }
                    >
                        <div style={{ backgroundImage: 'url('+require('../assets/img/mimadenglu.png')+')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>

                    <WhiteSpace size='xl' />

                    <Button type="primary" onClick={ this.clickLogin.bind(this) }>登录</Button><WhiteSpace />

                    {}
                    
                    <WhiteSpace size='xl' />

                    <Flex justify="between">
                        <Link to='/reg'>手机快速注册</Link>
                        <Link to='/reg'>忘记密码？</Link>
                    </Flex>

                </WingBlank>

                <div className='bottom'>
                        <span>登录/注册代表统一《用户协议》</span>
                </div>
            </div>
        )
    }


    clickLogin(){
        login(this.state.acc, this.state.pwd)
        .then( res => {   // 回调
            if(res === 'ok'){
                this.props.history.push('/')
            }else {
                alert('用户名或密码错误')
            }
        })
    }
}
