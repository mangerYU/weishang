var app = getApp()
Page({
  data: {
    navbar: ['升级审核', '补货审核'],
    currentTab: 0,
    idx: '',
    // hidden:false
  },
  xiangqing:function(){
      wx.navigateTo({
        url: './sqxq/sqxq',
      })


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