// page/one/index.js
Page({
  data: {
    diaryList: [{
        title: "环保骑行马拉松",
      introduct: "“低碳环保骑行”迷你马拉松活动在太原举行。50位高校学子骑着鲜艳的小黄车穿梭于城市之间，吸引了众多市民的目光。 ",
      imagePath: "http://hymcloud.cn/sqhy/imagesOfClassify/universal/universal1.jpg",
      url: "/pages/pagesOfProject/four/one/one"
      },
      {
        title: "捡垃圾挑战赛",
        introduct: "Trashtag challenge是鼓励网友们清理一个充满垃圾的地方，然后整理干净之后再与之前脏乱的前后对比图发到社交平台上。",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfClassify/universal/universal2.jpg",
        url: "/pages/pagesOfProject/four/two/two"
      },
      {
        title: "全民低碳行动",
        introduct: "低碳生活，就是指在生活中要利用低碳的科技创新减少所消耗的能量，特别是二氧化碳的排放量。",
        imagePath: "http://hymcloud.cn/sqhy/imagesOfClassify/universal/universal3.jpg",
        url: "/pages/pagesOfProject/four/three/three"
      }
    ],
    open: false
  },
  tap_ch: function(e) {
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