//index.js
//获取应用实例
const app = getApp()

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
		},
		showSkeleton: true
	},
	onLoad: function () {
		const that = this
		setTimeout(() => {
			that.setData({
				'region.header': false
			})
		}, 2000)
		setTimeout(() => {
			that.setData({
				'region.lists': false
			})
		}, 3000)
	}
})
