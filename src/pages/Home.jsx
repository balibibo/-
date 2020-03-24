import React, { Component } from 'react'

import { Carousel } from 'antd-mobile';

import '../assets/css/Home.scss'

import { IP, like } from '../api/apis'

import { connect } from 'react-redux'


class home extends Component {

    state = {
        value: '',

        //轮播图
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideIndex: 2,
        newCity: '定位中',
        likes: []
    };
    /* componentDidMount() {
      this.autoFocusInst.focus();
    } */
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }

    // 轮播图
    componentDidUpdate() {
        // After the new child element is rendered, change the slideIndex
        // https://github.com/FormidableLabs/nuka-carousel/issues/327
        if (this.state.slideIndex !== this.state.data.length - 1) {
            /* eslint react/no-did-update-set-state: 0 */
            this.setState({ slideIndex: this.state.data.length - 1 });
        }
    }

    topPush(url) {
        window.location.href = '/#/' + url
    }

    // 在页面刚加载时就去，获取用户用户所在城市信息
    componentDidMount() {
        this.showCityInfo()

        // 获取猜你喜欢数据
        like().then(res => {
            console.log(res.data)
            this.setState({
                likes: res.data
            })
        })

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
                console.log('执行失败', result.info);
            }
        });
    }

    addfoot(obj) {
        console.log(obj)
        this.props.dispatch({
            type: 'addfoot',
            obj
        })
    }


    render() {



        return (
            <div>
                <div className='top-search'>
                    <p className="city" onClick={this.topPush.bind(this, 'City')}>{this.state.newCity}▼</p>
                    <div className='searchdiv' style={{
                        background: 'url(' + require('../assets/img/search.png') + ')',
                        paddingLeft: '30px',
                        paddingRight: '20px',
                        width: '64%',
                        marginRight: '8px',
                        backgroundSize: '24px 24px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '2px 8px',
                        backgroundColor: '#fff',
                        borderRadius: '20px'
                    }}>
                        <input onClick={this.topPush.bind(this, 'search')} type="text" placeholder='挑好房，上房产源码app' />
                    </div>
                    <div className="map">
                        <img onClick={this.topPush.bind(this, 'map')} src={require('../assets/img/map.png')} alt="" />
                    </div>
                </div>

                {/* 轮播图 */}


                <Carousel
                    autoplay={false}
                    infinite
                    selectedIndex={this.state.slideIndex}
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map((val, index) => (
                        <a
                            key={val + index}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                src={require("../assets/img/banner.jpg")}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>

                <div className="product">
                    <div className="productdiv">
                        <div className="productdd">
                            <div className="productimg"><img src={require("../assets/img/product01.png")} alt="" /></div>
                            <p>新房</p>
                        </div>
                        <div className="productdd">
                            <div className="productimg"><img src={require("../assets/img/product02.png")} alt="" /></div>
                            <p>二手房</p>
                        </div>
                        <div className="productdd">
                            <div className="productimg"><img src={require("../assets/img/product03.png")} alt="" /></div>
                            <p>租房</p>
                        </div>
                        <div className="productdd">
                            <div className="productimg"><img src={require("../assets/img/product04.png")} alt="" /></div>
                            <p>商铺写字楼</p>
                        </div>
                    </div>
                    <div className="productdiv">
                        <div className="productdd">
                            <div className="productimg"><img src={require("../assets/img/product05.png")} alt="" /></div>
                            <p>卖房</p>
                        </div>
                        <div className="productdd">
                            <div className="productimg"><img src={require("../assets/img/product06.png")} alt="" /></div>
                            <p>海外房产</p>
                        </div>
                        <div className="productdd">
                            <div className="productimg"><img src={require("../assets/img/product07.png")} alt="" /></div>
                            <p>小区房价</p>
                        </div>
                        <div className="productdd">
                            <div className="productimg"><img src={require("../assets/img/product08.png")} alt="" /></div>
                            <p>问答</p>
                        </div>
                    </div>
                </div>

                {/* 房产全百科 */}
                <div className='relevant'>
                    <p><span>房产全百科</span>专业的买房攻略</p>
                    <div className="relevantdiv">
                        <div>
                            <div className="relevantimg"><img src={require("../assets/img/relevant01.png")} alt="" /></div>
                            <p>卖房</p>
                        </div>
                        <div>
                            <div className="relevantimg"><img src={require("../assets/img/relevant02.png")} alt="" /></div>
                            <p>海外房产</p>
                        </div>
                        <div>
                            <div className="relevantimg"><img src={require("../assets/img/relevant03.png")} alt="" /></div>
                            <p>小区房价</p>
                        </div>
                        <div>
                            <div className="relevantimg"><img src={require("../assets/img/relevant04.png")} alt="" /></div>
                            <p>问答</p>
                        </div>
                    </div>
                </div>

                {/* 猜你喜欢 */}
                <div className="like">
                    <p className="liketitle">猜你喜欢</p>
                    <div>
                        {
                            this.state.likes.map((v, i) => {
                                return <div onClick={this.addfoot.bind(this,v)} key={i} className="likelist">
                                    <div className="likeimg">
                                        <img src={IP + v.imgs} alt="" />
                                    </div>
                                    <div className="likeinfo">
                                        <div className="likeplace">
                                            <span>{v.name}</span>
                                            <span>{v.price}/平</span>
                                        </div>
                                        <p>{v.area}</p>
                                        <p>{v.type} {v.point}平</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(home)


