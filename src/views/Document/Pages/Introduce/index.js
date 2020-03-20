import React from 'react'
import MarkCode from '@/components/MarkCode'
import styles from './index.less'
const Introduce = () => {
  return (
    <div className={styles.page}>
      <div className="block">
        <h1 style={{ fontSize: 26 }}>Wei-Design</h1>
        <p>wei-design 是一个自制个人ui组件库</p>
      </div>
      <div className="block">
        <h1 style={{ fontSize: 26 }}>支持环境</h1>
        <ul>
          <li style={{ listStyleType: 'circle' }}>现代浏览器和 IE11 及以上</li>
        </ul>
      </div>
      <div className="block">
        <h1 style={{ fontSize: 26 }}>版本</h1>
        <ul>
          <li style={{ listStyleType: 'circle' }}>1.0.0</li>
          <li style={{ listStyleType: 'circle' }}>
            git地址：<a href="https://github.com/hello-wuwei/my-ui-library" target="_blank">https://github.com/hello-wuwei/my-ui-library</a>
          </li>
        </ul>
      </div>
      <div className="block">
        <h1 style={{ fontSize: 26 }}>安装</h1>
        <MarkCode source={'```js\nnpm install wei-design\n```'} />
      </div>
      <div className="block">
        <h1 style={{ fontSize: 26 }}>使用</h1>
        <MarkCode source={'```js\nimport { Button } from "wei-design/lib"\n```'} />
        <p>或</p>
        <MarkCode source={'```js\nimport Button from "wei-design/lib/button"\n```'} />
      </div>
    </div>
  )
}

export default Introduce