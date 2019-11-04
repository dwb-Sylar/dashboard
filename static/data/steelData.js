/*
 * @Author: sylar
 * @Date: 2019-06-24 14:25:54
 * @Last Modified by: sylar
 * @Last Modified time: 2019-10-23 10:45:19
 */
// 刚铁行业数据
window.steelData = {
  // 页面各模块title
  titleList: [
    '监测分布 ',
    '关键设备覆盖情况',
    '设备累计总数/价值',
    '设备实时运行状态分布',
    '实时智能诊断分布',
    '诊断服务专家'
  ],
  //监测分布 ,修改数据时，请查看页面图形的显示情况，当出现文字遮挡时，调整数据的顺序实现文字不遮挡。
  statOne: [{
    value: 112,
    name: '棒材'
  },
  {
    value: 4,
    name: '热轧板材'
  }, {
    value: 100,
    name: '冷轧板材'
  },

  {
    value: 38,
    name: '高速线材'
  }
  ],
  // 关键设备覆盖情况
  statTwo: {
    typeData: ['悬臂离心风机', '双支撑风机', '夹送辊', '吐丝机', '精轧机'],
    lastData: {
      name: '上季度',
      data: [9, 10, 15, 24, 43]
    },
    curData: {
      name: '本季度',
      data: [16, 15, 18, 26, 56]
    }
  },
  // 设备总数及价值,数据数组data:[1,2,3,4,5]对应的时间为[2018Q3,2018Q4,2019Q1,2019Q2,2019Q3], 请按顺序填充,
  // 设备价值以万为单位
  statThree: {
    amountStat: {
      name: '设备数量',
      data: [54, 88, 134, 232, 256]
    },
    priceStat: {
      name: '设备价值',
      data: [8000, 14000, 21000, 37000, 42000]
    }
  },
  // 中间统计数据
  statMid: {
    // 设备价值(亿)
    equipmentValue: 4.2,
    // 服务工厂数量(家)
    serviceFactory: 18,
    //服务设备数量(台)
    serviceEquipment: 256,
    // 传感器数量(只)
    sensorAmount: 1894,
    //诊断报告数量(份)
    diagnosticReport: 648,
    //故障案例数量(个)
    faultCase: 21,
    //设备模型数量(个)
    deviceModel: 18,
    //算法模型数量（个）
    algorithmicModel: 13
  },
  // 地图数据，为保证页面最佳展示方案，每个数组为每一个区域，单个区域的工厂数最好>3个，不足的话可以多个区域合为一个数组展示。
  // 如要添加工厂，请在geoCoord.js 文件下，添加工厂对应的坐标系，[Y,X], 经度在前，维度在后，坐标查询网站：http://www.gpsspg.com/maps.htm 。如查不到，可以先在baidu地图查找具体位置，再在此网站找对应的点。
  mapStat: [
    [{
      name: '上海宝钢',
      value: 0,
      total: 37
    }, {
      name: '沙钢荣盛钢铁',
      value: 0,
      total: 15
    }, {
      name: '石横特钢',
      value: 0,
      total: 38
    }, {
      name: '青岛宝井',
      value: 0,
      total: 13
    }, {
      name: '沧州中铁装备',
      value: 0,
      total: 2
    }, {
      name: '山西忻州华茂',
      value: 0,
      total: 18
    }],
    [{
      name: '重庆华峰铝业',
      value: 0,
      total: 1
    }, {
      name: '龙门钢铁',
      value: 0,
      total: 3
    }, {
      name: '汉钢钢铁',
      value: 0,
      total: 1
    }]
  ],
  // 设备实时运行状态分布
  statFour: {

    // 设备运行率，请参考statRunning中的设备运行率信息。按当天的日期显示对应的数据
    // 告警发布数据，(数据按照1,2,3,4,5级顺序来填充)
    alarmLevels: [{
      name: '1级',
      value: 4
    }, {
      name: '2级',
      value: 35
    }, {
      name: '3级',
      value: 5
    }, {
      name: '4级',
      value: 15
    }, {
      name: '5级',
      value: 8
    }]
  },
  // 实时智能诊断分布，为保证显示合理，数据以 大小大小的排序为最佳
  statFive: [{
    name: '转子不对中',
    value: 7
  },
  {
    name: '润滑不良',
    value: 12
  },
  {
    name: '滚动轴承损伤',
    value: 33

  },
  {
    name: '齿轮损伤',
    value: 8
  }
  ],
  //诊断服务专家， 数据按排名填充，第一名在最前，最多10个人员，图片请放入static/images/worker文件夹下。
  statExpert: [{
    name: '刘同军',
    img: '/static/images/worker/ltj.jpg',
    caseNum: 5,
    title: '诊断专家',
    status: 0,
    rate: ''
  }, {
    name: '张国荣',
    img: '/static/images/worker/zgr.jpg',
    caseNum: 4,
    title: '诊断专家',
    status: 1,
    rate: ''
  }, {
    name: '郝兆鹏',
    img: '/static/images/worker/hzp.jpg',
    caseNum: 4,
    title: '诊断专家',
    status: 1,
    rate: ''
  }, {
    name: '樊永涛',
    img: '/static/images/worker/fyt.jpg',
    caseNum: 1,
    title: '诊断专家',
    status: -1,
    rate: ''
  }],
  //  设备运行率的数据，每个对应相应的日期。模拟数据为80%~90%之间,最多1位小数
  statRunning: [82.1, 80.1, 88.6, 89.2, 87.2, 83, 84.1, 81.6, 82.5, 81.8, 81.7, 84.4, 89.2, 82.3, 84.9, 83.5, 86.8, 81.3, 89.8, 87.5, 84.1, 86.7, 88.3, 86.7, 82.1, 81.8, 84.9, 81.1, 82.5, 81.4, 84],
  //页面底部告警模块，为保证正常显示，文字描述不要过多，请控制在35个字符之内
  statAlarm: [{
    desc: '2V/电机驱动端水平/包络峰值',
    level: '高报',
    result: '电机驱动端轴承滚道及滚动体损伤',
    time: ''
  },
  {
    desc: '3H/电机驱动端水平/速度有效值',
    level: '高报',
    result: '联轴器存在磨损或不对中',
    time: ''
  },
  {
    desc: '吐丝机/输入轴驱动端水平/加速度峰值',
    level: '高报',
    result: '输入轴轴承存在磨损',
    time: ''
  }, {
    desc: '1#精轧机/3轴驱动端水平/加速度峰值',
    level: '高报',
    result: '齿轮箱输入伞齿存在剥落点蚀',
    time: ''
  }
  ]
}
