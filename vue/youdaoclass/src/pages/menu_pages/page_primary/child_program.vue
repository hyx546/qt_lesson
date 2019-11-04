<template>
  <div id="child_program_page">
    <MenuList menu_title="六年级" menu_URL0="#/menu_pages/primary"
    menu_item1="精选" menu_URL1="#/menu_pages/primary"
    menu_item2="语文" menu_URL2="#/menu_pages/page_primary/chinese"
    menu_item3="数学" menu_URL3="#/menu_pages/page_primary/math"
    menu_item4="英语" menu_URL4="#/menu_pages/page_primary/english"
    menu_item5="少儿编程" menu_URL5="#/menu_pages/page_primary/child_program"
    menu_item6="少儿美术" menu_URL6="#/menu_pages/page_primary/child_art"
    menu_item7="家长频道" menu_URL7="#/menu_pages/page_primary/parents_channel"
    ></MenuList>

    <div class="child_program_content">
      <course class="course" classify="逻辑英语" course_title="5天用公式巧学英语" course_time="时间：2019.10.17 20:00" course_hour="5课时"
              course_item_img="https://oimagec7.ydstatic.com/image?id=2375325558000401482&product=bisheng"
              course_item_name="钟平" course_buy="已有12062人购买" course_cost="免费"></course>
      <course class="course" classify="逻辑英语" course_title="5天用公式巧学英语" course_time="时间：2019.10.17 20:00" course_hour="5课时"
                course_item_img="https://oimagec7.ydstatic.com/image?id=2375325558000401482&product=bisheng"
                course_item_name="钟平" course_buy="已有12062人购买" course_cost="免费"></course>
      <course class="course" classify="逻辑英语" course_title="5天用公式巧学英语" course_time="时间：2019.10.17 20:00" course_hour="5课时"
                course_item_img="https://oimagec7.ydstatic.com/image?id=2375325558000401482&product=bisheng"
                course_item_name="钟平" course_buy="已有12062人购买" course_cost="免费"></course>
      <course class="course" classify="逻辑英语" course_title="5天用公式巧学英语" course_time="时间：2019.10.17 20:00" course_hour="5课时"
                course_item_img="https://oimagec7.ydstatic.com/image?id=2375325558000401482&product=bisheng"
                course_item_name="钟平" course_buy="已有12062人购买" course_cost="免费"></course>
      <course class="course" classify="逻辑英语" course_title="5天用公式巧学英语" course_time="时间：2019.10.17 20:00" course_hour="5课时"
                course_item_img="https://oimagec7.ydstatic.com/image?id=2375325558000401482&product=bisheng"
                course_item_name="钟平" course_buy="已有12062人购买" course_cost="免费"></course>
      <course class="course" classify="逻辑英语" course_title="5天用公式巧学英语" course_time="时间：2019.10.17 20:00" course_hour="5课时"
                course_item_img="https://oimagec7.ydstatic.com/image?id=2375325558000401482&product=bisheng"
                course_item_name="钟平" course_buy="已有12062人购买" course_cost="免费"></course>
      <course class="course" classify="逻辑英语" course_title="5天用公式巧学英语" course_time="时间：2019.10.17 20:00" course_hour="5课时"
                course_item_img="https://oimagec7.ydstatic.com/image?id=2375325558000401482&product=bisheng"
                course_item_name="钟平" course_buy="已有12062人购买" course_cost="免费"></course>
      <course class="course" classify="逻辑英语" course_title="5天用公式巧学英语" course_time="时间：2019.10.17 20:00" course_hour="5课时"
                course_item_img="https://oimagec7.ydstatic.com/image?id=2375325558000401482&product=bisheng"
                course_item_name="钟平" course_buy="已有12062人购买" course_cost="免费"></course>
      <course class="course" classify="逻辑英语" course_title="5天用公式巧学英语" course_time="时间：2019.10.17 20:00" course_hour="5课时"
                course_item_img="https://oimagec7.ydstatic.com/image?id=2375325558000401482&product=bisheng"
                course_item_name="钟平" course_buy="已有12062人购买" course_cost="免费"></course>
      <course class="course" classify="逻辑英语" course_title="5天用公式巧学英语" course_time="时间：2019.10.17 20:00" course_hour="5课时"
                course_item_img="https://oimagec7.ydstatic.com/image?id=2375325558000401482&product=bisheng"
                course_item_name="钟平" course_buy="已有12062人购买" course_cost="免费"></course>
    </div>
    
  </div>
</template>

<script>
import PrimaryMenuList from '@/components/primary_page/primary_menu_list.vue'
import course from '@/components/common_components/course'
import MenuList from '@/components/menu_common_components/menu_list.vue'

export default {
  components: {
     
      PrimaryMenuList,
      course
  }
}
</script>

<style scoped>
.child_program_content{
  display: flex;
  flex-wrap: wrap;
  margin-left: 125px;
  margin-top: 15px;
}

</style>