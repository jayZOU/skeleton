Component({
	properties: {
		selector: {
			type: String,
			value: 'skeleton'
		}
	},
	data: {
		systemInfo: {},
		skeletonRectLists: [],
		skeletonCircleLists: []
	},
	attached: function () {
		//默认的首屏宽高，防止内容闪现
		const systemInfo = wx.getSystemInfoSync();
		this.setData({
			systemInfo: {
				width: systemInfo.windowWidth,
				height: systemInfo.windowHeight,
			}
		})

	},
	ready: function () {
		const that = this;

		//绘制背景
		wx.createSelectorQuery().selectAll(`.${this.data.selector}`).boundingClientRect().exec(function(res){
			console.log(res);
			that.setData({
				systemInfo: res[0][0]
			})
		});

		//绘制矩形
		this.rectHandle();

		//绘制圆形
		this.radius();

	},
	methods: {
		rectHandle: function () {
			const that = this;

			wx.createSelectorQuery().selectAll(`.${this.data.selector}-rect`).boundingClientRect().exec(function(res){
				console.log(res);
				that.setData({
					skeletonRectLists: res[0]
				})
			});
		},
		radius: function () {
			const that = this;

			wx.createSelectorQuery().selectAll(`.${this.data.selector}-radius`).boundingClientRect().exec(function(res){
				console.log(res);
				that.setData({
					skeletonCircleLists: res[0]
				})

				console.log(that.data);
			});
		}
	}

})