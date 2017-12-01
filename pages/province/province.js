//index.js
//获取应用实例
const app = getApp()
const province = require('../../utils/province.js')

Page({
  data: {
    province:'',
    id:'',
    province_now:'',
    istrue:false
  },
  selectcity:function(e){
     var cityid= e.currentTarget.dataset.cityid
     var istrue = this.data.istrue
     var id = this.data.id
      var citylist= []
      for(var item in province.province[id][cityid]){
        if(province.province[id][cityid][item].n){
           citylist.push(province.province[id][cityid][item])
        }
      }
      if(citylist.length){
	     wx.navigateTo({
	      url:'../city/city?id='+id+'&cityid='+cityid+'&istrue='+istrue
	    })
      }
  },
  onLoad: function (options) {
  	var id = options.id
   this.setData({
   	id : id,
   	istrue:options.istrue,
   	province_now:app.globalData.province,
    province:province.province[id]
})
  }
})
