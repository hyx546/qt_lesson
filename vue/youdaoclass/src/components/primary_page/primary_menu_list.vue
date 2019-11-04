<template>
  <div class="container">
    <MenuList :menuList="menuList"  :subject="subject" ></MenuList>
  </div>
</template>

<script>
import api from '@/api/index'
import MenuList from '@/components/menu_common_components/menu_list.vue'
export default {
  data() {
    return {
      menuList: [],
      subject: ''
    }
  },
  components:{
    MenuList,
  },
  created () {
    api.getPrimary_menu_list_Info_list().then(res => {
      console.log(res)
      this.menuList= res.subTag
      this.subject = res.subject
    })
  }
}
</script>

<style>
</style>
