import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div `
  z-index: 1;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`
export const Logo = styled.div `
  position: absolute;
  height: 56px;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height:100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float:right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div `
  float:left;
  position: relative;
  .iconfont {
    position: absolute;
    right:5px;
    bottom: 5px;
    width:30px;
    height:30px;
    line-height:30px;
    border-radius:15px;
    text-align: center;
    &.focused {
      background-color: #777;
      color:#fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eee;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  font-size:14px;
  color:#666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width:240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
    width: 160px;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
    
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background-color: #fff;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  position: relative;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    position: absolute;
    left: -22px;
    top: -4px;
    transition: all .2s ease-in;
    /* transform: rotate(0deg); */
    transform-origin: center center;
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 3px;
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0 ;
  height: 56px;
`
export const Button = styled.div`
  float:right;
  width: 80px;
  box-sizing: border-box;
  line-height: 38px;
  border-radius: 19px;
  margin-top:9px;
  margin-right:20px;
  border: 1px solid #ec6149;
  text-align:center;
  &.reg {
    color: #ec6149
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
  }
`
