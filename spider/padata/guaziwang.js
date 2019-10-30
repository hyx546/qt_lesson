const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  // 进入页面
  await page.goto('https://www.dongqiudi.com/');

  await page
  .mainFrame()
  .addScriptTag({
    url: 'https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js'
  })

  // 获取页面标题
  let title = await page.title();
  console.log(title);

  

  // 获取车源列表
  const CAR_LIST_SELECTOR = 'div.data-info';
  const carList = await page.evaluate((sel) => {
    const catBoxs = Array.from($(sel).find('p.data-info-item a'));
    const ctn = catBoxs.map(v => {

      const rank = $(v).find('.rank').text();
      const team = $(v).find('.team').text();
      const img = $(v).find('.team img').attr('src');
      const result = $(v).find('.result').text();
      const goal= $(v).find('.goal').text();
      return {
        rank:rank,
        team:team,
        img:img,
        result:result,
        goal:goal,
      };
    });
    return ctn;
  }, CAR_LIST_SELECTOR);

  console.log(`总共${carList.length}辆汽车数据: `, JSON.stringify(carList, undefined, 1));

  // 将车辆信息写入文件
  writerStream = fs.createWriteStream('car_info_list.json');
  writerStream.write(JSON.stringify(carList, undefined, 2), 'UTF8');
  writerStream.end();

  browser.close();
})();