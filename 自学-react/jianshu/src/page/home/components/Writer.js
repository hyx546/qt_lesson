import React, { PureComponent } from 'react'
import {connect} from 'react-redux';
import { WriterWrapper,WriterWrapperSwitch,WriterWrapperTitle,WriterWrapperHeader,
  WriterWrapperHeaderInfo,WriterWrapperFooter,WriterWrapperContant,WriterInfo

} from '../style';


class Writer extends PureComponent {
  render() {
    const { list } =this.props;
    return (
      <WriterWrapper>
        <WriterWrapperTitle>
          <WriterWrapperHeader>
            <img className="imgUrl" src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
            <WriterWrapperHeaderInfo>
              <div className="title">下载简书手机App</div>
              <p className="description">随时随地发现和创作内容</p>
            </WriterWrapperHeaderInfo>
          </WriterWrapperHeader>
          <WriterWrapperFooter>
            <span className="autor">推荐作者</span>
            {/* onClick={() => this.props.handleChangePage(page, totalPage,this.spinIcon)} */}
            <WriterWrapperSwitch >
            <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe851;</i>
            换一批</WriterWrapperSwitch>
          </WriterWrapperFooter>
        </WriterWrapperTitle>
        {
            list.map((item,index) => {
             return (
             <WriterWrapperContant key={index}>
                <img className="imgUrl" src={item.get('avatar_source')} alt=""/>
                <WriterInfo>
                  <h3 className='title'>{item.get('nickname')}</h3>
                  <p className='desc'>写了{item.get('total_wordage')/1000}k字 · {item.get('total_likes_count')/1000}k喜欢</p>
                </WriterInfo>
                <span className="notice">关注</span>
              </WriterWrapperContant>)
            })
        }
        
        
      </WriterWrapper>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home','authors'])
})

export default connect(mapState) (Writer);
