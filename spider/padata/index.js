const puppeteer = require('puppeteer')
const $ = require('cheerio')
const url = 'https://www.dongqiudi.com'
const fs = require('fs')


async function run() {

    const browser = await puppeteer.launch({
        headless: false
    });
    // 在浏览器中创建中一个新的页面，通过使用await关键字来等待页面成功创建
    const page = await browser.newPage();
    // await page.setDefaultNavigationTimeout(100000);
    await page.goto(url);// 使用page.goto() 打开谷歌首页
    
    let html = await page.content()
    const wrapper =  $('.bottom-right-top', html)
    // console.log(html);
    let datat = wrapper.find('.team-part')
    let txt = datat.find('.data-info')
    let item = txt.find('.data-info-item')
    let arr = []
    txt.each((i, v) => {
        
        // console.log(i, $(v).text())
        console.log(i,JSON.stringify($(v).text()))
    })
    console.log(datat.length);
    
    // setTimeout(async () => {
        
    //     let feed_data = wrapper.find('._j_feed_data')
    //     console.log(feed_data.length)
    //     let feed_List = []
    //     feed_data.each((j , c) => {
    //         $(c).find('.feed-item').each((i, v) => {
    //             let feedObj = {}
    //             let type = $(v).attr('data-type')
    //             feedObj.type = type
    //             let top = $(v).find('.bar')
    //             let title = $(v).find('.title').text().trim()
    //             let nums_type = top.find('.stat').text().split(' ')[1]
    //             let nums = top.find('.stat .num').text()
    //             let from_type = top.find('.type strong').text()
    //             feedObj.title = title
    //             feedObj.nums_type = nums_type
    //             feedObj.nums = nums
    //             feedObj.from_type = from_type
    //             if (type === '1' || type === '2' || type === '9') {
    //                 let body = $(v).find('.art')
    //                 let body_img = body.find('dt img').attr('src')
    //                 let content = body.find('dd .info').text().trim()
    //                 let author_img = body.find('dd .ext-r .author img').attr('src')
    //                 let author_name = body.find('dd .ext-r .author').text()
    //                 feedObj.body_img = body_img
    //                 feedObj.content = content
    //                 feedObj.author_img = author_img
    //                 feedObj.author_name = author_name
    //                 if (type === '9') {
    //                     let comments = body.find('dd .ext-r .nums').text().trim().slice(0, -2)
    //                     feedObj.comments_num = comments
    //                 } else {
    //                     let digtext = body.find('dd .ext-r .nums').text().trim().split('，')
    //                     let browses = digtext[0].slice(0, -2)
    //                     let comments = digtext[1].slice(0, -2)
    //                     feedObj.browses_num = browses
    //                     feedObj.comments_num = comments
    //                 }
    //             } else if (type === '3' || type === '5') {
    //                 let txt = $(v).find('.txt')
    //                 let imgs = $(v).find('.imgs')
    //                 let content = txt.find('.info').text().trim()
    //                 feedObj.content = content
    //                 let feed_imgList = []
    //                 imgs.find('li').each((index, item) => {
    //                     if (index < 3) {
    //                         let img_url = $(item).find('img').attr('src')
    //                         feed_imgList.push(img_url)
    //                     } else {
    //                         let browses = $(item).text().trim().slice(0, -2)
    //                         feedObj.browses_num = browses
    //                     }
    //                 })
    //                 feedObj.img_list = feed_imgList
    //             }
    //         feed_List.push(feedObj)
    //         })
    //     })
        // console.log(JSON.stringify(feed_List))
        
        // console.log(JSON.stringify(gldh))
        // fs.writeFileSync('./mfwtext.js', JSON.stringify(feed_List), { 'flag': 'a' })
    // }, 20000)
    
    // books.each(function(){
    //     const price = $('.price-text',this).text()
    //     mysql.add(price)
    //     console.log(price);
    // })
    // await page.waitFor(2000);
    // await page.type('#login_field', '123456')
    // await page.type('#password', '123456')
    // await page.click('input[type="submit"]')
}

run()
