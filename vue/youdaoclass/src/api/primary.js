import { fetchGet } from './config'

export default {
  getPrimary_carousel_info_list () {
    return fetchGet('/api/primary/primary_carousel/primary_carousel_info_list')
  },
  getPrimary_menu_list_Info_list () {
    return fetchGet('/api/primary/primary_menu_list/primary_menu_list_info_list')
  },
  getPrimary_mini_course_Info_list () {
    return fetchGet('/api/primary\/primary_mini_course\/primary_mini_course_info_list/')
  },
  getPrimary_all_course_Info_list () {
    return fetchGet('/api/primary/primary_all_course/primary_all_course_info_list')
  },
  getChinese_course_Info_list () {
    return fetchGet('/api/primary/chinese_course/chinese_course_info_list')
  },
  getMath_course_Info_list () {
    return fetchGet('/api/primary/math_course/math_course_info_list')
  },
  getEnglish_course_Info_list () {
    return fetchGet('/api/primary/english_course/english_course_info_list')
  },
}
