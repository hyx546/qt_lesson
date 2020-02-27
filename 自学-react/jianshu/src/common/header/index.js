import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition} from 'react-transition-group';
import  {actionCreators}  from './store';
import { Link} from 'react-router-dom';
import { actionCreators as loginActionCreators }  from '../../page/login/store';
import {
  HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,
  SearchInfoSwitch, SearchInfoItem,SearchInfoList
} from './style'



class Header extends Component {
  getListArea = () => {
    const {focused, list,page,mouseIn,totalPage,} = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = ((page - 1)*10); i < page * 10 ; i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    } 
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={this.props.handleMouseEnter} 
          onMouseLeave={this.props.handleMouseLeave}
        >
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => this.props.handleChangePage(page, totalPage,this.spinIcon)}>
          <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe851;</i>
          换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
         { pageList}
        </SearchInfoList>
      </SearchInfo>
      )
    }else {
      return null;
    }
  }
  render() {
    const {login,logout} = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login ?  <NavItem className='right' onClick={logout}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
            
          }
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused} //用来控制入场和出场动画的
              timeout={200} //动画时间
              classNames="slide"
            >
              <NavSearch className={this.props.focused ? 'focused': ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            
            <i className={this.props.focused ? 'focused iconfont': 'iconfont'}>&#xe623;</i>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writting"><i className="iconfont">&#xe637;</i>写文章</Button>
          </Link>
          <Button className="reg">注册</Button> 
        </Addition>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    // focused: state.get('header').get('focused')
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    totalPage: state.getIn(['header','totalPage']),
    login: state.getIn(['login','login'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+ (originAngle+ 360) + 'deg)';

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page+1));
      }
      else{
        dispatch(actionCreators.changePage(1))
      }
     
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);