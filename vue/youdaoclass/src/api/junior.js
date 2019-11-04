import { fetchGet } from './config'

export default {
  getJunior_carousel_info_list () {
    return fetchGet('/api/junior/junior_carousel/junior_carousel_info_list')
  },
  getJunior_menulist_info_list () {
    return fetchGet('/api/junior/junior_menulist/junior_menulist_info_list')
  },

  getJunior_mini_course_info_list () {
    return fetchGet('/api/junior/junior_mini_course/junior_mini_course_info_list')
  },

  getJunior_all_course_info_list () {
    return fetchGet('/api/junior/junior_all_course/junior_all_course_info_list')
  },

  getChuyi_info_list () {
    return fetchGet('/api/junior/chuyi/chuyi_info_list')
  },

  getChuer_info_list () {
    return fetchGet('/api/junior/chuer/chuer_info_list')
  },
  getChusan_info_list () {
    return fetchGet('/api/junior/chusan/chusan_info_list')
  },

  getGongkaike_info_list () {
    return fetchGet('/api/junior/gongkaike/gongkaike_info_list')
  },

  getJunior_yuwen_info_list () {
    return fetchGet('/api/junior/junior_yuwen/junior_yuwen_info_list')
  },
  getJunior_shuxue_info_list () {
    return fetchGet('/api/junior/junior_shuxue/junior_shuxue_info_list')
  },
  getJunior_yingyu_info_list () {
    return fetchGet('/api/junior/junior_yingyu/junior_yingyu_info_list')
  },

  getJunior_wuli_info_list () {
    return fetchGet('/api/junior/junior_wuli/junior_wuli_info_list')
  },
  getJunior_huaxue_info_list () {
    return fetchGet('/api/junior/junior_huaxue/junior_huaxue_info_list')
  },
  getJunior_jiazhangpindao_info_list () {
    return fetchGet('/api/junior/junior_jiazhangpindao/junior_jiazhangpindao_info_list')
  },

  getXingaoyi_info_list () {
    return fetchGet('/api/junior/xingaoyi/xingaoyi_info_list')
  },
  getChusan_yuwen_info_list () {
    return fetchGet('/api/junior/chusan_yuwen/chusan_yuwen_info_list')
  },
  getChusan_shuxue_info_list () {
    return fetchGet('/api/junior/chusan_shuxue/chusan_shuxue_info_list')
  },
}
