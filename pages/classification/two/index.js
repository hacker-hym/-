// page/one/index.js
Page({
  data:{
    productList: [{
      name: "卧龙动物保护区",
      introduct: "特色动物：大熊猫，斑羚，猕猴",
      imagePath: "http://hymcloud.cn/sqhy/26.jpg",
      url: "/pages/pagesOfProject/two/one/one"
    },
    {
      name: "长白山自然保护区",
      introduct: "特色动物：西伯利亚虎，梅花鹿，金钱豹",
      imagePath: "http://hymcloud.cn/sqhy/47.jpg",
      url: "/pages/pagesOfProject/two/two/two"
    },
    {
      name: "西双版纳自然保护区",
      introduct: "特色动物：亚洲象，白颊长臂猿，白腹黑啄木鸟",
      imagePath: "http://hymcloud.cn/sqhy/58.jpg",
      url: "/pages/pagesOfProject/two/three/three"
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