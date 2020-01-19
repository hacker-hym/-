Page({
  data: {
    swiperOfHomePage: [
      {
        title: "image1",
        imagePath: "http://hymcloud.cn/sqhy/imageOfDynamic/dynamic1.jpg"
      },
      {
        title: "image2",
        imagePath: "http://hymcloud.cn/sqhy/imageOfDynamic/dynamic2.jpg"
      }
    ]

  },



  onShareAppMessage: function () {
    return {
      title: "诗情环意"
    }
  },
});