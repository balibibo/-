// import redux from 'redux'  

// 解构  原本是   redux.createStore
import { createStore } from 'redux'

// 一个reducer只能计算一个值  如果需要多次计算，创建多个reducer
//  创建数据库  reducer   state 目前存储的值   action  本次dispatch出来的对象
var store = createStore(function(state, action){   // 传入store后，store通知react更新
    // action.type 来知道本次要做什么事情
    console.log(action)
    switch(action.type){
        case 'changeName' : return '老八'
        /* case 'name' : return action.name
        case "sum" : return action.one+action.two   // 数据计算
        case "reduce" : return action.big-action.small */

        case 'addfoot' : return [action.obj, ...state]  // 足迹

        // default : return '奥利给'
        default : return []
    }
    // return 什么值， store就会保存什么值
})


// 获取值方法   store.getState()
// console.log(store.getState())

// 用来修改state数据的唯一方法  像 vue中的 mutaitions
/* store.dispatch({    // 发出一股通知，触发一次reducer    类似 store.commit
    type: 'changeName'    // 本次触发reducer要做的事  用来区分每次要做什么事情
}) */

// 在dispactch时 可以随 action对象传递一些值给redux（数据库）
/* store.dispatch({
    type: 'name',
    name: 'debu心'
})

store.dispatch({
    type: 'sum',
    one: 1,
    two: 2
})

store.dispatch({
    type: 'reduce',
    big: 2,
    small: 1
}) */




// 获取修改后的值
// console.log(store.getState())

//  
export default store