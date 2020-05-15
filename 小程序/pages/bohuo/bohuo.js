
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView: true,
    index: "",
    title: '园艺大师抗皱精华露',
    image: '../../image/cart/sp1.jpg',
    pro_name: "30ml",
    num: 0,
    price: 180,
    selected: false,
    
    show: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['1', '2', '3'], //下拉列表的数据
    index: 0, //选择的下拉列 表下标,
  }, 
  selectTap() {
    this.setData({
      show: !this.data.show,
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  show: function () {
    let that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  // 通过点击“conts”区域里右上角的关闭按钮来关闭整个“conts”，当然了，你可以把该事件作用于“conts”上，此时点击“conts”  
  // 的任意一个地方，都会使得这个“conts”关闭  
  close: function () {
    let that = this;
    that.setData({
      showView: (!that.data.showView)
    })
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
    if (num > 0) {
      // 点击递增
      num = num - 1;
      this.data.num = num;
      console.log(num);
      this.setData({
        num: num
      });

    } else {
      console.log("不能再减了");
      this.data.num = 0;

    }

    // 调用计算金额方法
    // this.count_price();
  },

})