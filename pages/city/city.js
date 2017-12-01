//index.js
//获取应用实例
const app = getApp()
const province = require('../../utils/province.js')

Page({
  data: {
    city:'',
    city_now:'',
    istrue:false
  },
  onLoad: function (options) {
  	var id = options.id
  	var cityid = options.cityid
   this.setData({
   	city_now:app.globalData.city,
  city:province.province[id][cityid],
  istrue:options.istrue
})
  }
})
