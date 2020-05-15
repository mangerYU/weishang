var app = getApp()
Page({
  data: {
    navbar: ['未审核', '已审核'],
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
  xq:function(){
    wx.navigateTo({
      url: './xq/xq',
    })
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