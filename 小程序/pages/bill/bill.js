var app = getApp()
Page({
  data: {
    navbar: ['我的消息', '系统公告'],
    currentTab: 0,
    idx: '',
    // hidden:false
  },
  navbarTap: function (e) {
    let idx = e.currentTarget.dataset.idx;
    console.log("idx:" + idx);
    this.setData({
      currentTab: idx,
      idx: idx
    })
    console.log("idx22:" + this.data.idx);
  },

  onLoad: function (options) {
    console.log("optionsid:" + options.id);
    this.setData({
      idx: options.id,
      currentTab: options.id,
    })
    console.log(this.data.idx + ".." + this.data.currentTab);
  }

})