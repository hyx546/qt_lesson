import { fetchGet } from './config'

export default {
  getCarouselListInfo () {
    return fetchGet('/api/home/carousel/carousel_info_list')
  },
  getPopularCourseInfo () {
    return fetchGet('/api/home/popularCourse/popularCourse_info_list')
  },
  getDiscoverInfo () {
    return fetchGet('/api/home\/discover\/discover_info_list/')
  },
  getCourse_listInfo () {
    return fetchGet('/api/home/course_list/course_list_info_list')
  },
}