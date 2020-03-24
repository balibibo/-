import React, { Component } from 'react'

import { InputItem,WingBlank,Checkbox,WhiteSpace,Button } from 'antd-mobile';
import '../assets/css/Reg.scss'

import { Link } from 'react-router-dom'
const AgreeItem = Checkbox.AgreeItem;



export default class Reg extends Component {




    render() {
        return (
            <div>
                <WingBlank size='lg'>
                    <InputItem
                    placeholder="请输入手机"
                    clear
                    size=''
                    ></InputItem>
                    <InputItem
                    placeholder="请输入密码"
                    type="password"
                    size=''
                    ></InputItem>
                    <InputItem
                        placeholder="请输入验证码"
                        extra="获取验证码"
                        // onExtraClick extra点击事件回调
                    ></InputItem>


                    <AgreeItem  data-seed="logId" onChange={e => console.log('checkbox', e)}>
                        我已同意阅读 <span onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《用户服务协议》及《隐私权政策》</span>
                    </AgreeItem>


                    <Button type="primary">注册</Button><WhiteSpace />
                    
                    <div className="yyzh">
                        <Link to="/Login">已有账号</Link>
                    </div>
                    

                </WingBlank>
            </div>
        )
    }
}
