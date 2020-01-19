// page/one/index.js
Page({
  data: {
    servicesList: [{
        title: "光盘行动",
        introduct: "“光盘行动”倡导厉行节约，反对铺张浪费，带动大家珍惜粮食、吃光盘子中的食物。",
      imagePath: "http://hymcloud.cn/sqhy/fiveFunction/environmentalProtectionAlong/clearYourPlate.jpg",
      url: "/pages/pagesOfProject/one/one/one"
      },
      {
        title: "对塑料吸管说不",
        introduct: "你知道吗？美国人每天扔掉的吸管足以绕地球两圈。塑料吸管是世界第六大常见垃圾，而且还是十大海洋垃圾之一。",
        imagePath: "http://hymcloud.cn/sqhy/fiveFunction/environmentalProtectionAlong/sayNoToStraws.jpg",
        url: "/pages/pagesOfProject/one/two/two"
      },
      {
        title: "今天购物用布袋",
        introduct: "现在的超市的塑料袋虽然是可降解的，但是终究还是对环境有一定影响的",
        imagePath: "http://hymcloud.cn/sqhy/fiveFunction/environmentalProtectionAlong/useBag.jpg",
        url: "/pages/pagesOfProject/one/three/three"
      }
    ],

    open: false
  },
  tap_ch: function(e) {
    console.log(e);
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  },

  onShareAppMessage: function() {
    return {
      title: "诗情环意"
    }
  },
})