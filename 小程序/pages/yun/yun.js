// pages/yun/yun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  }, jhbill:function(){
      wx.navigateTo({
        url: './jhbill/jhbill',
      })

  }, xjjh: function () {
    wx.navigateTo({
      url: './xjjh/xjjh',
    })

  }, ku: function () {
    wx.navigateTo({
      url: './ku/ku',
    })

  }, thbill: function () {
    wx.navigateTo({
      url: './thbill/thbill',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }, onPullDownRefresh: function () {
    // Do something when pull down.
    console.log('刷新');
  },

  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log('circle 下一页');
  }

})