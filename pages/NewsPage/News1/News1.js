Page({
  data: {
    swiperOfHomePage: [
      {
        title: "image1",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/swiper/swiper1.jpg"
      },
      {
        title: "image2",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/swiper/swiper2.jpg"
      },
      {
        title: "image3",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/swiper/swiper3.jpg"
      },
      {
        title: "image4",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/swiper/swiper4.jpg"
      },
      {
        title: "image5",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/swiper/swiper5.jpg"
      }
    ],

    NewsList: [
      {
        title: "高能环境",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/News/soil.png",
        introduct: "高能环境：土壤修复龙头实力领先，固废布局完善"
      },
      {
        title: "生态环境部发出重要指示",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/News/discharge.jpg",
        introduct: "生态环境部：今年秋冬季全面达到超低排放的企业不需要停、限产"
      },
      {
        title: "环境部发布最新环境资讯",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/News/zoology.jpg",
        introduct: "生态环境受损续赔偿，各地涉案金额近十亿"
      }
    ]
  },



  onShareAppMessage: function () {
    return {
      title: "诗情环意"
    }
  },




  // clickMe: function () {
  //   var fso, ts, s;
  //   var ForReading = 1;
  //   fso = new ActiveXObject("Scripting.FileSystemObject");
  //   // 打开文件 
  //   ts = fso.OpenTextFile("images/hym.txt", ForReading);
  //   // 读取文件一行内容到字符串 
  //   s = ts.ReadLine();
  //   // 显示字符串信息 
  //   //alert("File contents = '" + s + "'");
  //   // 关闭文件 
  //   ts.Close();
  //   this.setData({ msg: s })
  // },
});