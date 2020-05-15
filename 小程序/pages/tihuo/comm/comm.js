// pages/tihuo/comm/comm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      index:"", 
      title: '园艺大师抗皱精华露',
      image: '../../image/cart/sp1.jpg',
      pro_name: "30ml",
      num:0,
      price: 180,
      selected: false
  },
  /**
    * 绑定加数量事件
    */
  btn_add(e) {
    // 获取商品数量
    let num = this.data.num;
    // 点击递增
    num = num + 1;
    this.data.num = num;
    console.log(num);
    this.setData({
      num: num
    });
    // 计算金额方法
    // this.count_price();
  },
  /**
 * 绑定减数量事件
 */
  btn_minus(e) {
    // 获取商品数量
    let num = this.data.num;
    if (num>0){
      // 点击递增
      num = num - 1;
      this.data.num = num;
      console.log(num);
      this.setData({
        num: num
      });

    }else{
      console.log("不能再减了");
      this.data.num=0;

    }
   
    // 调用计算金额方法
    // this.count_price();
  },

})