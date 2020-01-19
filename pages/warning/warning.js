Page({
  data: {
    swiperOfHomePage: [{
        title: "image1",
      imagePath: "http://hymcloud.cn/sqhy/imageOfDynamic/dynamic1.jpg"
      },
      {
        title: "image2",
        imagePath: "http://hymcloud.cn/sqhy/imageOfDynamic/dynamic2.jpg"
      }
    ]

  },
  openConfirm: function() {
    wx.showModal({
      title: '提交成功',
      content: '您的举报已提交成功，我们将在审核后给您回复，如需提交其他原因，请点击重新修改，如无其他原因，请点击返回首页',
      confirmText: "返回首页",
      cancelText: "重新修改",
      success: function(res) {
        console.log(res);
        if (res.confirm) {
          wx.reLaunch({
            url: '/pages/homePage/homePage',
          })
        } else {
          wx.reLaunch({
            url: '/pages/warning/warning',
          })
        }
      }
    });
  },



  onShareAppMessage: function() {
    return {
      title: "诗情环意"
    }
  },
});