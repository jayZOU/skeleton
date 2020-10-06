# miniprogram-skeleton

绘制小程序骨架屏，轻量、方便、快捷

## 特性
1. 运行时渲染，支持动态生成骨架屏
2. 支持分块渲染，渐进式展示页面
3. 支持多种骨架屏动画
4. 支持npm

## 示例
![skeleton](https://image-static.segmentfault.com/218/832/2188326444-5f7c145a9cf9a_articlex)

## Use

### 一、安装和引入

#### 1.安装组件： 

```
npm i @best-components/miniprogram-skeleton
```
#### 2.引入skeleton自定义组件

```json
{
  "usingComponents": {
    "skeleton": "@best-components/miniprogram-skeleton"
  }
}
```

**小程序中npm的配置及使用：**
- 在微信开发者工具中，设置 —> 项目设置—> 勾选使用npm模块。
- 在微信开发者工具中，工具 —> 构建npm，构建完成会生成 `miniprogram_npm` 文件夹，项目用到的npm包都在这里。
- 按照页面的使用路径，从 `miniprogram_npm` 引入需要的包。

### 二、使用骨架屏组件

#### 1.在wxml页面需要用到的地方使用，如下：
```html
<!--引入骨架屏模版 -->
<skeleton selector="sk"
          unit="px"
          region="{{region}}"></skeleton>

<!--index.wxml-->
<!--给页面根节点class添加skeleton, 用于获取当前页面尺寸，没有的话就默认使用屏幕尺寸-->
<view class="box sk">
    <view class="logo">
        <image class="img sk-header-radius" src="{{header.logo}}"></image>
    </view>
    <view class="title">
        <text class="sk-header-rect">{{header.title}}</text>
    </view>
    <parent feature="{{feature}}"></parent>
    <view class="item">
        <view class="title_sub">非骨架屏生成区域</view>
        <view>这是一块没有骨架屏遮盖区域</view>
    </view>
</view>
```

#### 2.在js页面需要用到的地方使用，如下：

```javascript
//index.js
//初始化默认的数据，用于撑开页面结构，让骨架屏可以获取到整体的页面结构
Page({
	data: {
		region: {		//骨架屏区域
			header: true,
			lists: true
		},
		header: {
			logo: '../../images/logo.png',
			title: 'skeleton'
		},
		feature: {
			title: '特性',
			lists: [
				'1.运行时渲染，支持动态生成骨架屏',
				'2.支持分块渲染，渐进式展示页面',
				'3.支持多种骨架屏动画',
				'4.支持npm',
			]
		}
	},
	onLoad: function () {
    //隐藏header区域的骨架屏
		setTimeout(() => {
			that.setData({
				'region.header': false
			})
		}, 2000)
    //隐藏lists区域的骨架屏
		setTimeout(() => {
			that.setData({
				'region.lists': false
			})
		}, 3000)
	}
})
```

## API

| Options | Type   | Required | Default         | Description                                                  |
| ------- | ------ | --------- | --------------- | ------------------------------------------------------------ |
| selector | String | No        | skelton | 渲染节点的标识前缀，比如```selector="sk"```，那么页面根节点就是```class="sk"```绘制矩形就是```class="sk-region-rect"```，圆形就是```class="sk-region-radius"``` |
| unit | String | No        | px          | 骨架屏单位，默认px |
| region | Object | Yes      |             | 骨架屏渲染区域，可按需分块展示/隐藏骨架屏 |

## Note
以最小节点原则添加相应的class，比如
`<view class="box skeleton-rect">这是有margin和padding属性的文案</view>`
这里不要给view添加class，不然绘制区域会大很多，应该改成这样
`<view class="box"><text class="skeleton-rect">这是有margin和padding属性的文案</text></view>`