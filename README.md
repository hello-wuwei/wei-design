## 组件库名称
[wei-design](http://47.108.142.67:9000/we-design)

## node版本
v12.12.0

## 项目详情
### 运行项目
```js
 npm start
```
### 打包文档
```js
 npm run build
```
### 打包组件库 --> 发布组件库
```js
 npm run build:lib
 npm publish
```
会生成lib目录，即可发布到npm

### 项目安装we-design
```js
 npm install wei-design --save-dev
```
### 项目使用we-design
```js
 import { Button } from 'wei-design/lib'
```
或
```js
 import Button from 'wei-design/lib/button'
```
