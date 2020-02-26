import React, { PureComponent } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {  HomeWrapper,HomeRight,HomeLeft,BackTop} from './style';
import { connect } from 'react-redux';
import { actionCreators} from './store'

class Home extends PureComponent {

  // // 判断只有跟这个组件相关的数据发生，才让这个组件的render发生改变
  // shouldComponentUpdate() {

  // }

  handleScrollTop() {
    window.scrollTo(0,0)
  }
  render() {
    return (
     <div>
        <HomeWrapper>
          <HomeLeft>
            <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
          { this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null} 
        </HomeWrapper>

     </div>
    )
  }
  // 在页面挂载好
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents ();
  }
  // 组件即将被销毁的时候执行
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}
const mapstate = (state) =>({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
   const action = actionCreators.getHomeInfo();
   dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop >100) {
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapstate, mapDispatch) (Home);
