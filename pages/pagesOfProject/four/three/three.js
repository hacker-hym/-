Page({
  data: {
    swiperOfHomePage: [
      {
        title: "image1",
        imagePath: "http://hymcloud.cn/sqhy/76.jpg"
      },
      {
        title: "image2",
        imagePath: "http://hymcloud.cn/sqhy/77.jpg"
      }
    ],

    NewsList: [
      {
        title: "高能环境",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/News/soil.png",
        introduct: "高能环境：土壤修复龙头实力领先，固废布局完善",
        articlePath: "/pages/NewsPage/News1/News1"
      },
      {
        title: "生态环境部发出重要指示",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/News/discharge.jpg",
        introduct: "生态环境部：今年秋冬季全面达到超低排放的企业不需要停、限产",
        articlePath: "/pages/NewsPage/News2/News2"
      },
      {
        title: "环境部发布最新环境资讯",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/News/zoology.jpg",
        introduct: "生态环境受损续赔偿，各地涉案金额近十亿",
        articlePath: "/pages/NewsPage/News3/News3"
      }
    ]
  },



  onShareAppMessage: function () {
    return {
      title: "诗情环意"
    }
  },
});