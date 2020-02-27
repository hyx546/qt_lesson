import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'), //异步加载的新的语法
  loading() {
    return <div>正在加载</div>
  }
});

export default () =>  <LoadableComponent/>

