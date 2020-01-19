Page({
  data: {
    progress: 0,
    disabled: false,
    files: []
    //base64url:[]
  },

  chooseImage: function(e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
      
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



  aifunction:function (imgFile) {
    var request_url;
    var access_token;
    var headers;
    var params;

    request_url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/animal";
    access_token = '24.f55ff639f3de9df1a3a8f4e5b2423610.2592000.1581661604.282335-17701940';
    request_url = request_url + "?access_token=" + access_token;
    headers = {'content-type': 'application/x-www-form-urlencoded'}

        let base64 = wx.getFileSystemManager().readFileSync(this.data.files[0], 'base64') 
        console.log(base64)
     
    params = {"image":base64}
    
    networkpost(request_url,headers,params);

},
  
});



//post请求 url：请求路径，请求header，params请求参数，app全局变量
function networkpost(url, headers, params, app) {
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      header: headers,
      data: params,
      method: 'POST',
      success: function (res) {
        //自行处理返回结果
        console.log('返回结果：')
        console.log(res.data)


        wx.showModal({
          title: '识别结果：',
          content:JSON.stringify(res.data.result[0].name),
          confirmText: "回到首页",
          cancelText: "继续识别",
          success: function(res) {
            console.log(res);
            if (res.confirm) {
              wx.reLaunch({
                url: '/pages/homePage/homePage',
              })
            } else {
              that.data.files[0]=null;
              this.setData({
                files: null
              });
              wx.navigateTo({
                url: '/pages/showimg/Upload/Upload',
              })
            }
          }
        })

        resolve();
      }

    
    })
});
return promise;
}







//get请求
function networkget(url, headers, params, app) {
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      header: headers,
      data: params,
      method: 'GET',
      success: function (res) {
        //返回结果自行处理
        console.log('返回结果：')
        console.log(res.data)
        app.netWorkData.result = res.data
        resolve();

      }
    })
  });
  return promise;
}    


function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
  var dataURL = canvas.toDataURL("image/" + ext);
  return dataURL;

}

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','),
  mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]),
  n = bstr.length,
  u8arr = new Uint8Array(n);
  while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {
      type: mime
  });
}