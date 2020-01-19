Page({
  data: {
    swiperOfHomePage: [{
        title: "image1",
        imagePath: "/images/imageOfDynamic/dynamic1.jpg"
      },
      {
        title: "image2",
        imagePath: "/images/imageOfDynamic/dynamic2.jpg"
      }
    ]

  },
  openConfirm: function() {
    wx.showModal({
      title: '评论成功',
      content: '评论成功，如需继续评论，请点击继续评论，如评论完成，请点击返回首页',
      confirmText: "返回首页",
      cancelText: "继续评论",
      success: function(res) {
        console.log(res);
        if (res.confirm) {
          wx.reLaunch({
            url: '/pages/homePage/homePage',
          })
        } else {
          wx.reLaunch({
            url: '/pages/comment/comment',
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