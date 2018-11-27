//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		motto: 'Hello World',
		userInfo: {
			avatarUrl: 'https://sfault-image.b0.upaiyun.com/117/579/1175792133-5b63fce811636_articlex',
			nickName: 'jayzou'
		},
		lists: [
			'aslkdnoakjbsnfkajbfk',
			'qwrwfhbfdvndgndghndeghsdfh',
			'qweqwtefhfhgmjfgjdfghaefdhsdfgdfh',
		],
		showSkeleton: true
	},
	onLoad: function () {
		const that = this;
		setTimeout(() => {
			that.setData({
				showSkeleton: false
			})
		}, 2000)
	}
})
