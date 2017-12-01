//index.js
//获取应用实例
const app = getApp()
const country = require('../../utils/country.js')
const province = require('../../utils/province.js')
Page({
  data: {
    country:'',
    country_now:''
  },
  selectcountry:function(e){
    var id= e.currentTarget.dataset.id*1+1
    var istrue = e.currentTarget.dataset.istrue
    var provincelist=[];
    for(var item in province.province[id]){
      if(province.province[id][item].n){
        provincelist.push(province.province[id][item])
      }
    }
    if(provincelist.length){
      wx.navigateTo({
      url:'../province/province?id='+id+'&istrue='+istrue
    })
    }else{
      var citylist= []
      for(var item in province.province[id][0]){
        if(province.province[id][0][item].n){
           citylist.push(province.province[id][0][item])
        }
      }
      if(citylist.length){
        wx.navigateTo({
      url:'../city/city?id='+id+'&cityid='+0+'&istrue='+istrue
    })
      }
    }
    
  },
  onLoad: function () {
   this.setData({
  country:country.country,
  country_now:app.globalData.country
})
  }
})
