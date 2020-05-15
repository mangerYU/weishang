
Page({
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }, userinfo:function(){
wx.navigateTo({
  url: './wsinfo/wsinfo',
})
  }, address: function () {
    wx.navigateTo({
      url: './address/address',
    })
  }, yeji: function () {
    wx.navigateTo({
      url: './yeji/yeji',
    })
  }, shouquan: function () {
    wx.navigateTo({
      url: './shouquan/shouquan',
    })
  }, tuandui: function () {
    wx.navigateTo({
      url: './tuandui/tuandui',
    })
  }, shouyi: function () {
    wx.navigateTo({
      url: './shouyi/shouyi',
    })
  }, xiaji: function () {
    wx.navigateTo({
      url: './xiaji/xiaji',
    })
  }, tihuo: function () {
    wx.navigateTo({
      url: '../tihuo/tihuo',
    })
  },


  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})