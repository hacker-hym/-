// page/one/index.js
Page({
  data: {
    positionList: [{
      position: "雾霾讨论",
      introduct: "雾霾，是雾和霾的组合词。雾霾常见于城市。",
      imagePath: "http://hymcloud.cn/sqhy/83.jpg",
      url: "/pages/pagesOfProject/five/one/one"
    },
    {
      position: "水质讨论",
      introduct: "水质（water quality ）水体质量的简称。",
      imagePath: "http://hymcloud.cn/sqhy/82.jpg",
      url: "/pages/pagesOfProject/five/two/two"
    },
    {
      position: "社区环境讨论",
      introduct: "社区成立了社区环境卫生工作委员会和社区志愿者保洁队伍。",
      imagePath: "http://hymcloud.cn/sqhy/85.jpg",
      url: "/pages/pagesOfProject/five/three/three"
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