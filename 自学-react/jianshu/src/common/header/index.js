import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition} from 'react-transition-group';
import {
  HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper
} from './style'
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
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
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting"><i className="iconfont">&#xe637;</i>写文章</Button>
          <Button className="reg">注册</Button> 
        </Addition>
      </HeaderWrapper>
    )
  }
  handleInputFocus() {
   
  }
  handleInputBlur() {
    
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);