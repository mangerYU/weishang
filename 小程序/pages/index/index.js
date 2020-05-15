//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  quit: function () {
    wx.navigateTo({
      url: '../index/quit/quit'
    })
  }, jubao: function () {
    wx.navigateTo({
      url: '../index/jubao/jubao'
    })
  }, fankui: function () {
    wx.navigateTo({
      url: '../index/fankui/fankui'
    })
  }, dailiup: function () {
    wx.navigateTo({
      url: '../index/dailiup/dailiup'
    })
  }, yunjl: function () {
    wx.navigateTo({
      url: '../index/yunjl/yunjl'
    })
  }, kucun: function () {
    wx.navigateTo({
      url: '../index/kucun/kucun'
    })
  }, invite: function () {
    wx.navigateTo({
      url: '../index/invite/invite'
    })
  }, cxql: function () {
    wx.navigateTo({
      url: '../index/cxql/cxql'
    })
  }, yeji: function () {
    wx.navigateTo({
      url: '../user/yeji/yeji'
    })
  }, audit: function () {
    wx.navigateTo({
      url: '../index/audit/audit'
    })
  }, shouquanmanage: function () {
    wx.navigateTo({
      url: '../index/shouquanmanage/shouquanmanage'
    })
  }, buhuo: function () {
    wx.navigateTo({
      url: '../buhuo/buhuo'
    })
  }, bohuo: function () {
    wx.navigateTo({
      url: '../bohuo/bohuo'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
 
})
