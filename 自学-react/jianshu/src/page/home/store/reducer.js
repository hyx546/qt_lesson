import { fromJS } from 'immutable';
import  * as constants from './constants'

const defaultState = fromJS({ 
  articleList: [],
  recommendList: [],
  authors: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    authors: fromJS(action.authors),
  })
   // state.set('articleList',fromJS(action.articleList))
}

const addArticleList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage': action.nextPage
  })
  // state.set('articleList',state.get('articleList').concat(action.list)) 
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOMR_DATA: 
         return changeHomeData(state,action);
    case constants.ADD_ARTICLE_LIST: 
        return addArticleList(state,action)
    case constants.TOGGLE_TOP_SHOW: 
      return state.set('showScroll',action.show)
    default:
      return state;
  }
} 