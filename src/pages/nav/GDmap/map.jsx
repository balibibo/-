import React, { Component } from 'react'


export default class map extends Component {

    state = {
        cityName: ''
    }


    render() {
        return (
            <div> 
                <h1>地图</h1>
                {/* 加载地图的api  script放在public下的实体页面中 */}
                {/* 地图容器 */}
                <div id="map" style={{height: "300px", width: "100%"}}></div> 


            </div>
        )
    }


    // 在页面刚加载时就去，获取用户用户所在城市信息
    componentDidMount(){

        
        this.showCityInfo()
    }

    //获取用户所在城市信息
    showCityInfo() {

        var map = new window.AMap.Map("map", {
            resizeEnable: true,             // 是否监视浏览器变化，并重新绘制
            center: [116.397428, 39.90923],  // 经纬度设置
            zoom: 18
        });
        //实例化城市查询类    模块化后作用域查找范围只会在当前文件 ， 作用域链最顶级是当前模块本身
        var citysearch = new window.AMap.CitySearch();

        // let that = this;

        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity((status, result) => {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    console.log('当前城市'+cityinfo)
                    //地图显示当前城市
                    map.setBounds(citybounds);  // 为当前实例地图重绘当前位置
                }
            } else {
                console.log('执行失败',result.info);
            }
        });
    }
}


