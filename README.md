# skeleton
绘制小程序骨架屏，轻量、方便、快捷

## 快速上手
  
引入骨架屏组件
```html
//index.json  
  
{
  "usingComponents": {
    "skeleton": "/component/skeleton/skeleton"
  }
}
  
//index.wml  
  

<skeleton selector="skeleton"></skeleton>

```

添加节点
```html
<view class="skeleton">
	这是绘制矩形骨架屏
</view>
<view class="skeleton-radius">
	这是绘制圆形骨架屏
</view>
```

## API

### selector   
`<skeleton selector="skeleton"></skeleton>`     


渲染节点的标识前缀，比如```selector="skeleton"```，那么绘制矩形就是```class="skeleton"```，圆形就是```class="skeleton-radius"```

## Note
业务侧可以自行判断数据是否加载完成，进而隐藏骨架屏，比如  
`<skeleton selector="skeleton" wx:if="{{showSkeleton}}"></skeleton>`