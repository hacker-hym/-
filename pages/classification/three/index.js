// page/one/index.js
Page({
  data:{
    doctorList: [{
      title: "环保布袋",
      introduct: "环保布袋可重复使用，保护环境",
      imagePath: "http://hymcloud.cn/sqhy/10.jpg",
      url: "/pages/pagesOfProject/three/one/one"
    },
    {
      title: "聚乳酸吸管",
      introduct: "更易分解，可用于热饮，保护人体和环境",
      imagePath: "http://hymcloud.cn/sqhy/17.jpg",
      url: "/pages/pagesOfProject/three/two/two"
    },
    {
      title: "伸缩便携性筷子",
      introduct: "体积小，方便，可随身携带，可减少一次性筷子的使用，保护树木。",
      imagePath: "http://hymcloud.cn/sqhy/24.jpg",
      url: "/pages/pagesOfProject/three/three/three"
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