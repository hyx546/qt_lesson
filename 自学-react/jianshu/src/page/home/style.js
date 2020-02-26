import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  margin-left: 15px;
  width: 625px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width:625px;
    height:270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    width:125px;
    height:100px;
    display: block;
    float: right;
    border-radius: 10px;

  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height:18px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  margin-bottom: 10px;
  width: 280px;
`

export const RecommendItem = styled.div`
  margin: 6px 0;
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`
export const WriterWrapper = styled.div `
  width: 280px;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`
export const WriterWrapperTitle = styled.div`
  font-size: 14px;
  height: 20px;
  color: #969696;
  width:280px;
  margin-bottom: 130px;
`
export const WriterWrapperHeader = styled.div`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  height: 62px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  overflow: hidden;
  .imgUrl {
    width: 60px;
    height: 60px;
    opacity: .85;
    float: left;
  }
`

export const WriterWrapperHeaderInfo = styled.div`
  float: left;
  width: 280px;
  margin-top: -50px;
  margin-left: 58px;
  .title {
    font-size: 15px;
    color: #333;
    width:143px;
    height: 21px;
    line-height: 27px;
  }
  .description{
    margin-top: 4px;
    font-size: 13px;
    color: #999;
    line-height: 18px;
    margin-left:-110px;
  }
`
export const WriterWrapperFooter = styled.div`
  width: 100%;
  height: 20px;
  display: block;
  position: relative;
  .autor{
    width: 56px;
    height: 16px;
    position: absolute;
    top: -142px;
    left: 0;
  }
`

export const WriterWrapperSwitch = styled.span`
  float: right;
  font-size: 13px;
  position: absolute;
  top: -142px;
  right: 0;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    position: absolute;
    left: -13px;
    top: 1px;
    transition: all .2s ease-in;
    /* transform: rotate(0deg); */
    transform-origin: center center;
  }
`

export const WriterWrapperContant = styled.div`
  line-height: 20px;
  margin-bottom:20px;
  width:280px;
  float: left;
  .imgUrl{
    float: left;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .notice {
    float: right;
    margin-top: 5px;
    font-size: 13px;
    color: #42c02e;
  }
`

export const WriterInfo = styled.div`
  float: left;
  display: block;
  text-align: left;
  margin-left: 10px ;
  .title {
    line-height: 24px;
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
  }
  .desc {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
    line-height: 18px;
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height:40px;
  margin: 30px 0;
  background-color: #a5a5a5;
  border-radius: 20px;
  color:#ffff;
  text-align: center;
  cursor: pointer;
`
export const BackTop = styled.div`
  position: fixed;
  width:60px;
  height:60px;
  line-height:60px;
  text-align: center;
  border: 1px solid #ccc;
  right: 100px;
  bottom: 30px;
  font-size: 14px;
`
