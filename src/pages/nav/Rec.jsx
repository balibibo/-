import React, { Component } from 'react'

// 引入注入数据函数
import { connect } from 'react-redux'

class Rec extends Component {
    render() {
        return (
            <div>
                <p>足迹</p>
                {this.props.likesList.length===0?'还没有浏览记录':this.props.likesList.map((obj,i) => {return <p key={i}>{obj.name}</p>})}
            </div>
        )
    }
}

// 闭包  connect()(类名)
export default connect((state) => {
    console.log(state)
    // state就是store.getState() 所有状态
    // return { newCity: state.newCity } // XXX:state 通过return把redux的state注入

    //取值 使用this.props.XXX（属性名） 取注入的值

    return {
        likesList: state
    }
})(Rec)
