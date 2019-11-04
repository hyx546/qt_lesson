<template>
  <div class="container">
    <MenuList :menuList="menuList"  :subject="subject"  :mainpage="mainpage"></MenuList>
  </div>
</template>

<script>
import api from '@/api/index'
import MenuList from '@/components/menu_common_components/menu_list.vue'
export default {
  data() {
    return {
      menuList: [],
      subject: '',
      mainpage: ''
    }
  },
  components:{
    MenuList,
  },
  created () {
    api.getJunior_menulist_info_list().then(res => {
      console.log(res)
      this.menuList= res.subTag
      this.subject = res.subject
      this.mainpage = res.mainpage
    })
  }
}
</script>

<style>
</style>
