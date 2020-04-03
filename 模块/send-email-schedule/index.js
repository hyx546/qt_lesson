const nodeMailer = require('nodemailer');
const fs = require('fs');
const juice = require('juice');
const ejs = require('ejs');


const transporter = nodeMailer.createTransport({
    service: 'qq',
    port:465, //smtp
    secureConnection:true,
    auth: {
        user: 'love.1179612384@qq.com',
        pass: 'gswimwjxoretfjai'
    }

});
const html = fs
.readFileSync('./template/index.ejs', 'utf8');
const template = ejs.compile(html);
const afterHtml = template({
  userName: 'userName'
})
const css = fs
.readFileSync('./template/index.css', 'utf8');
// const afterWithInCss = juice(afterHtml);
const afterWithInCss = juice
.inlineContent(afterHtml, css);
transporter.sendMail({
    to: 'love.1179612384@qq.com',
    html: `<style></style><h1 style="">你好呀！</h1>`,
    from: 'love.1179612384@qq.com',
    subject: '吼吼吼'
},(err,info) => {
    if(err) {
        console.log('邮件出错了',err);
    }
})