import React, { Component } from 'react'

import '../../../assets/css/City.scss'

import axios from 'axios'

import BScroll from 'better-scroll'







export default class city extends Component {

    state = {
        hotcity: [],
        citylist: [],
        newCity: ''
    }

    componentDidMount() {
        // 异步可能会有延迟
        axios.get('http://localhost:3000/city.json')
        .then(res => {
            console.log(res.data)
            this.setState({
                hotcity: res.data.hotcity,
                citylist: res.data.citylist
            })
        })

        // 获取当前城市信息
        this.showCityInfo()

        // 联动
        this.leftScroll = new BScroll(document.getElementById("citydiv-box"))


    }

    // 点击右边序号
    cityUl= (e) => {
        this.leftScroll.scrollToElement(document.getElementById(e.target.innerHTML), 400)
    }

    //获取用户所在城市信息
    showCityInfo() {
        //实例化城市查询类    模块化后作用域查找范围只会在当前文件 ， 作用域链最顶级是当前模块本身
        var citysearch = new window.AMap.CitySearch();

        // let that = this;

        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity((status, result) => {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    // var citybounds = result.bounds;
                    this.setState({
                        newCity: cityinfo
                    })   // cityinfo 当前城市信息
                    /* //地图显示当前城市
                    map.setBounds(citybounds); */
                }
            } else {
                console.log('执行失败',result.info);
            }
        });
    }


    render() {
        return (
            <div className="cityall">
                <div id="citydiv-box" className="citydiv-box">
                    <ul className="content">
                        <div className="citydiv">
                            <div className="headNumber">
                                <span>当前城市</span>
                            </div>
                            <div className="haveCity">
                                <span>{this.state.newCity}</span>
                            </div>
                        </div>
                        <div id="热" className="citydiv">
                            <div className="headNumber">
                                <span>热门城市</span>
                            </div>
                            {
                                // console.log(this.state.hotcity)
                                this.state.hotcity.map((item,i) => {
                                    return <div key={i} className="haveCity">
                                        <span>{item}</span>
                                    </div>
                                })
                            }
                        </div>

                        {
                            this.state.citylist.map(obj => {
                                return <div id={obj.title} key={obj.title} className="citydiv">
                                    <div className="headNumber">
                                        <span>{obj.title}</span>
                                    </div>
                                    {
                                        obj.city.map((v,index) => {
                                            return <div key={index} className="haveCity">
                                                <span>{v}</span>
                                            </div>
                                        })
                                    }
                                </div>
                            })
                        }
                    </ul>
                </div>

                {/* 右边序号定位 */}
                <ul className="cityUl">
                    <li onClick={this.cityUl}>热</li>
                    {
                        this.state.citylist.map( (v,i) => {
                            return <li key={v.title} onClick={this.cityUl}>{v.title}</li>
                        })
                    }
                </ul>

            </div>
        )
    }
}

