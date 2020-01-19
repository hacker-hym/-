// page/one/index.js
Page({
  data:{
    introductList: [{
      title: "简介",
      introduct: "在人类活动日益频繁的21世纪，我们的许多行为也给地球生态环境造成了许多不可逆转的恶劣影响。",
      imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/title.jpg"
    },
    {
      title: "文化",
      introduct: "当我们看向这个曾经一派和谐的地球村，现在她正在面临着全球气候变暖，臭氧层破坏等环境问题。",
      imagePath: "http://hymcloud.cn/sqhy/imagesOfMine/bottom.jpg"
    },
    {
      title: "地址",
      introduct: "天津市北辰区双口镇河北工业大学",
      imagePath: "http://hymcloud.cn/sqhy/imagesOfHomePage/swiper/swiper4.jpg"
    }
    ],
    open : false
  },
  tap_ch: function(e){
    if(this.data.open){
      this.setData({
        open : false
      });
    }else{
      this.setData({
        open : true
      });
    }
  },

  onShareAppMessage: function () {
    return {
      title: "诗情环意"
    }
  },
})