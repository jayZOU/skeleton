# miniprogram-skeleton

绘制小程序骨架屏，轻量、方便、快捷

## Use

### 一、安装和引入

#### 1.安装组件： 

```
npm install --save miniprogram-skeleton
```
#### 2.引入skeleton自定义组件

```json
{
  "usingComponents": {
    "skeleton": "../miniprogram_npm/miniprogram-skeleton"
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
<skeleton wx:if="{{showSkeleton}}"></skeleton>

<!--index.wxml-->
<!--给页面根节点class添加skeleton, 用于获取当前页面尺寸，没有的话就默认使用屏幕尺寸-->
<view class="container skeleton">
    <view class="userinfo">
        <block>
	        <!--skeleton-radius 绘制圆形-->
            <image class="userinfo-avatar skeleton-radius" src="{{userInfo.avatarUrl}}"
                   mode="cover"></image>
             <!--skeleton-rect 绘制矩形-->
            <text class="userinfo-nickname skeleton-rect">{{userInfo.nickName}}</text>
        </block>
    </view>
    <view style="margin: 20px 0">
        <view wx:for="{{lists}}" class="lists">
            <icon type="success" size="20" class="list skeleton-radius"/>
            <text class="skeleton-rect">{{item}}</text>
        </view>
    </view>

    <view class="usermotto">
        <text class="user-motto skeleton-rect">{{motto}}</text>
    </view>

    <view style="margin-top: 200px;">
        aaaaaaaaaaa
    </view>
</view>
```

#### 2.在js页面需要用到的地方使用，如下：

```javascript
//index.js
//初始化默认的数据，用于撑开页面结构，让骨架屏可以获取到整体的页面结构
Page({
	data: {
		motto: 'Hello World',
		userInfo: {
			avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/SYiaiba5faeraYBoQCWdsBX4hSjFKiawzhIpnXjejDtjmiaFqMqhIlRBqR7IVdbKE51npeF6X1cXxtDQD2bzehgqMA/132',
			nickName: 'jayzou'
		},
		lists: [
			'aslkdnoakjbsnfkajbfk',
			'qwrwfhbfdvndgndghndeghsdfh',
			'qweqwtefhfhgmjfgjdfghaefdhsdfgdfh',
		],
		showSkeleton: true   //骨架屏显示隐藏
	},
	onLoad: function () {
		const that = this;
		setTimeout(() => {     //3S后隐藏骨架屏
			that.setData({
				showSkeleton: false
			})
		}, 3000)
	}
})
```

## API

| Options | Type   | Required | Default         | Description                                                  |
| ------- | ------ | --------- | --------------- | ------------------------------------------------------------ |
| selector | String | No        | skelton | 渲染节点的标识前缀，比如```selector="skeleton"```，那么页面根节点就是```class="skeleton"```绘制矩形就是```class="skeleton-rect"```，圆形就是```class="skeleton-radius"```|
| loading | String | No        | spin            | 骨架屏渲染时的动画，有`spin`和`chiaroscuro` |
| bgcolor | String  | No        | \#FFF            | 骨架屏背景 |

## Note
业务侧可以自行判断数据是否加载完成，进而隐藏骨架屏，比如
`<skeleton selector="skeleton" wx:if="{{showSkeleton}}"></skeleton>`

以最小节点原则添加相应的class，比如
`<view class="box skeleton-rect">这是有margin和padding属性的文案</view>`
这里不要给view添加class，不然绘制区域会大很多，应该改成这样
`<view class="box"><text class="skeleton-rect">这是有margin和padding属性的文案</text></view>`
