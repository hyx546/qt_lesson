import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)
const _import_ = file => () => import(`@/pages/${file}.vue`)
const _import_menu_pages = file => () => import(`@/pages/menu_pages/${file}.vue`)
const _import_pages_primary = file => () => import(`@/pages/menu_pages/page_primary/${file}.vue`)
const _import_pages_junior = file => () => import(`@/pages/menu_pages/page_junior/${file}.vue`)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _import_('home'),
      meta: {
        title: '有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/download/',
      name: 'download',
      component: _import_('download'),
      meta: {
        title: 'APP下载-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/login/',
      name: 'login',
      component: _import_('login'),
      meta: {
        title: '登录-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/primary/',
      name: 'primary',
      component: _import_menu_pages('primary'),
      meta: {
        title: '小学-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/996',
      name: '996',
      component: _import_pages_primary('996'),
      meta: {
        title: '语文-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/998',
      name: '数学',
      component: _import_pages_primary('998'),
      meta: {
        title: '数学-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/1044',
      name: 'english',
      component: _import_pages_primary('1044'),
      meta: {
        title: '英语-有道精品课 - 为你精选好课'
      }
    },
    {

      path: '/menu_pages/page_primary/child_program',
      name: 'child_program',
      component: _import_pages_primary('child_program'),
      meta: {
        title: '少儿编程-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/child_art',
      name: 'child_art',
      component: _import_pages_primary('child_art'),
      meta: {
        title: '少儿美术-有道精品课 - 为你精选好课'
      }
    },
    {

      path: '/menu_pages/page_primary/parents_channel',
      name: 'parents_channel',
      component: _import_pages_primary('parents_channel'),
      meta: {
        title: '家长频道-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/junior/',
      name: 'junior',
      component: _import_menu_pages('junior'),
      meta: {
        title: '初中-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/1224',
      name: '1224',
      component: _import_pages_primary('1224'),
      meta: {
        title: '初一-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/1226',
      name: '1226',
      component: _import_pages_primary('1226'),
      meta: {
        title: '初二-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/1228',
      name: '1228',
      component: _import_pages_primary('1228'),
      meta: {
        title: '初三-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/1166',
      name: '公开课',
      component: _import_pages_primary('1166'),
      meta: {
        title: '公开课-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/278',
      name: '初中语文',
      component: _import_pages_primary('278'),
      meta: {
        title: '语文-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/276',
      name: '初中数学',
      component: _import_pages_primary('276'),
      meta: {
        title: '数学-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/280',
      name: '初中英语',
      component: _import_pages_primary('280'),
      meta: {
        title: '英语-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/1310',
      name: '初中物理',
      component: _import_pages_primary('1310'),
      meta: {
        title: '物理-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/1338',
      name: '初中化学',
      component: _import_pages_primary('1338'),
      meta: {
        title: '化学-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/1930',
      name: '家长频道',
      component: _import_pages_primary('1930'),
      meta: {
        title: '家长频道-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/1854',
      name: '新高一',
      component: _import_pages_primary('1854'),
      meta: {
        title: '新高一-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/1464',
      name: '初三语文',
      component: _import_pages_primary('1464'),
      meta: {
        title: '语文-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/page_primary/1466',
      name: '初三数学',
      component: _import_pages_primary('1466'),
      meta: {
        title: '数学-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/senior/',
      name: 'senior',
      component: _import_menu_pages('senior'),
      meta: {
        title: '高中-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/CET46/',
      name: 'CET46',
      component: _import_menu_pages('CET46'),
      meta: {
        title: '四六级-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/english/',
      name: 'english',
      component: _import_menu_pages('english'),
      meta: {
        title: '实用英语-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/graduate/',
      name: 'graduate',
      component: _import_menu_pages('graduate'),
      meta: {
        title: '考研-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/interest_skill/',
      name: 'interest_skill',
      component: _import_menu_pages('interest_skill'),
      meta: {
        title: '兴趣技能-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/logic_english/',
      name: 'logic_english',
      component: _import_menu_pages('logic_english'),
      meta: {
        title: '逻辑英语-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/four_eight/',
      name: 'four_eight',
      component: _import_menu_pages('four_eight'),
      meta: {
        title: '专四专八-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/teacher_qualification/',
      name: 'teacher_qualification',
      component: _import_menu_pages('teacher_qualification'),
      meta: {
        title: '教师资格-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/IELTS/',
      name: 'IELTS',
      component: _import_menu_pages('IELTS'),
      meta: {
        title: '雅思托福-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/program/',
      name: 'program',
      component: _import_menu_pages('program'),
      meta: {
        title: '编程开发-有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/menu_pages/minority_language/',
      name: 'minority_language',
      component: _import_menu_pages('minority_language'),
      meta: {
        title: '小语种-有道精品课 - 为你精选好课'
      }
    },

  ]
})
