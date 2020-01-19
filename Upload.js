function _next() {



  var that = this;
  if (this.data.progress >= 100) {
    this.setData({
      disabled: false
    });
    return true;
  }
  this.setData({
    progress: ++this.data.progress
  });
  setTimeout(function() {
    _next.call(that);
  }, 20);

  setTimeout(function() {
    _next.call(
      wx.showModal({
        title: '图片上传完毕',
        content: '图片上传完毕，如需继续上传，请点击“继续上传”，如不需要继续上传，请点击回到首页',
        confirmText: "回到首页",
        cancelText: "继续上传",
        success: function(res) {
          console.log(res);
          if (res.confirm) {
            wx.reLaunch({
              url: '/pages/homePage/homePage',
            })
          } else {
            wx.reLaunch({
              url: '/pages/classification/Upload/Upload',
            })
          }
        }
      }),



    );
  }, 2800);



}






Page({
  data: {
    progress: 0,
    disabled: false,
    files: []
  },

  openConfirm: function() {
    wx.showModal({
      title: '弹窗标题',
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      confirmText: "主操作",
      cancelText: "辅助操作",
      success: function(res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击主操作')
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  },





  chooseImage: function(e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function(e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },



  upload: function() {
    if (this.data.disabled) return;

    this.setData({
      progress: 0,
      disabled: true
    });
    _next.call(this);
  },


  onShareAppMessage: function () {
    return {
      title: "诗情环意"
    }
  },
});