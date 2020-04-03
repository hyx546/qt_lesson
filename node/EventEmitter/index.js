const Event = require('events');
const request = require('request');
const inquirer = require('inquirer');
const fs = require('fs')
const ev = new Event();
ev.on('choose',function(songs,keywords) {
    inquirer.prompt([{
        type:'list',
        name:'song',
        message:`共${songs.length}首，回车选择`,
        choices:songs.map((s,i)=>{
            return `${i}:${s.name}`
        })
    }]).then(choices => {
        // { song: '2:海阔天空' }
        console.log(choices)
        const {song} = choices;
        const index = parseInt(song.split(':')[0]);
        const selected = songs[index];
        console.log(selected);
        const {id} = selected;
        request({
            url:`http://neteasecloudmusicapi.zhaoboy.com/song/url?id=${id}`,
            json:true
        },(err,res,body)=>{
            console.log(body)
            const {url} = body.data[0];
            if(!url){
                console.log('没头找到该歌曲');
                return;
            }
            request(url).pipe(fs.createWriteStream(`${decodeURIComponent(keywords)}.mp3`))
        })

    })
})
ev.on('search',function(keywords) {
    // 请求 搜索结果 下一步 选择
    keywords = encodeURIComponent(keywords);  //对keywords编码
    //wd=原生%20js
    // console.log(keywords)
    request({
        url:`http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${keywords}`,
        json:true   //请求回来的数据转换为json
    },(err,res,body)=>{
        console.log('请求信息',err)
        // console.log(res)
        // console.log(body)

        if(body.result && body.result.songs){
            ev.emit('choose',body.result.songs,keywords)

        }else {
            console.log(`没有${keywords}的信息`)
        }
    })
})
function main() {
    const argv = process.argv.slice(2);
    const keywords = argv[0];
    // console.log(keywords)

    //搜索 选择 播放
    ev.emit('search',keywords);

}
main();