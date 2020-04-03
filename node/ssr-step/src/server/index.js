import express from 'express';
import { renderToString } from 'react-dom/server';
import Header from '../components/Header';
import render from './render';
/** 
 * 构建在 虚拟 dom之上的 服务端渲染
 * { name: '', age: '' }
 * { tag: '', attribute: , children: [], class: '' }
 * MVVM / dom diff
 * react: react-native
 * vue: weex
*/


const app = new express();
app.get('*',(req,res) => {
  const html = render();
  res.send(html)
})
app.listen(3000,() => {
  console.log('server is running 3000');
})