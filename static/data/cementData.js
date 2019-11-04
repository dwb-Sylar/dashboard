/*
 * @Author: sylar
 * @Date: 2019-06-24 14:27:25
 * @Last Modified by: sylar
 * @Last Modified time: 2019-10-23 10:45:02
 */
// 水泥行业数据
window.cementData = {
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
    value: 42,
    name: '华东'
  }, {
    value: 4,
    name: '西南'
  }, {
    value: 276,
    name: '华北'
  }],
  // 关键设备覆盖情况
  statTwo: {
    typeData: ['立磨', '斗提', '锟压机', '双支撑风机', '回转窑'],
    lastData: {
      name: '上季度',
      data: [18, 16, 13, 30, 10]
    },
    curData: {
      name: '本季度',
      data: [20, 18, 15, 35, 13]
    }

  },
  // 设备总数及价值
  statThree: {
    amountStat: {
      name: '设备数量',
      data: [18, 45, 113, 268, 322]
    },
    priceStat: {
      name: '设备价值',
      data: [1600, 4900, 12000, 29000, 36000]
    }
  },
  // 中间统计数据
  statMid: {
    // 设备价值
    equipmentValue: 3.6,
    // 服务工厂数量
    serviceFactory: 12,
    //服务设备数量
    serviceEquipment: 322,
    // 传感器数量
    sensorAmount: 2104,
    //诊断报告数量
    diagnosticReport: 1592,
    //故障案例数量
    faultCase: 28,
    //设备模型数量
    deviceModel: 33,
    //算法模型数量
    algorithmicModel: 16
  },
  // 地图数据，为保证页面最佳展示方案，每个数组为每一个区域，单个区域的工厂数最好>3个，不足的话可以多个区域合为一个数组展示。
  // 如要添加工厂，请在geoCoord.js 文件下，添加工厂对应的坐标系，[Y,X], 经度在前，维度在后，坐标查询网站：http://www.gpsspg.com/maps.htm 。如查不到，可以先在baidu地图查找具体位置，再在此网站找对应的点。
  mapStat: [
    // 所有区域工厂
    [{
      name: '金隅冀东水泥',
      value: 0,
      total: 130
    }, {
      name: '槐坎南方水泥',
      value: 0,
      total: 21
    }, {
      name: '北川中联水泥',
      value: 0,
      total: 2
    }, {
      name: '泰安中联',
      value: 0,
      total: 7
    }, {
      name: '青州中联',
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
      value: 2
    }, {
      name: '2级',
      value: 16
    }, {
      name: '3级',
      value: 3
    }, {
      name: '4级',
      value: 9
    }, {
      name: '5级',
      value: 4
    }]
  },
  // 实时智能诊断分布
  statFive: [{
    value: 6,
    name: '转子不对中'
  },
  {
    value: 12,
    name: '润滑不良'
  },
  {
    value: 28,
    name: '滚动轴承损伤'
  },
  {
    value: 8,
    name: '齿轮损伤'
  }
  ],
  //  设备运行率的数据，每个对应相应的日期。模拟数据为60%~75%之间,最多1位小数
  statRunning: [60.8, 67.4, 69.5, 73.3, 67.9, 60.6, 60.3, 72.7, 74.3, 69.2, 63.6, 64.7, 63.3, 69.7, 69.8, 66, 68.5, 66.3, 71.7, 71.5, 64.5, 74.7, 69.5, 73.1, 63.7, 69.2, 72.2, 60.7, 70.6, 66.9, 62.4],
  //诊断服务专家， 数据按排名填充，第一名在最前，图片请放入static/images/worker文件夹下
  statExpert: [{
    name: '王鹏飞',
    img: '/static/images/worker/wpf.jpg',
    caseNum: 4,
    title: '诊断专家',
    status: 0,
    rate: ''
  }, {
    name: '秦少锋',
    img: '/static/images/worker/qsf.jpg',
    caseNum: 4,
    title: '诊断专家',
    status: 1,
    rate: ''
  }, {
    name: '郝兆鹏',
    img: '/static/images/worker/hzp.jpg',
    caseNum: 4,
    title: '诊断专家',
    status: -1,
    rate: ''
  }, {
    name: '樊永涛',
    img: '/static/images/worker/fyt.jpg',
    caseNum: 1,
    title: '诊断专家',
    status: -1,
    rate: ''
  }],
  //页面底部告警模块
  statAlarm: [{
    desc: '斜拉链/电机驱动端水平/包络峰值',
    level: '高报',
    result: '电机驱动端轴承滚道及滚动体损伤',
    time: ''
  },
  {
    desc: '入窑斗提/电机驱动端水平/速度有效值',
    level: '高报',
    result: '联轴器存在磨损或不对中',
    time: ''
  },
  {
    desc: '立磨/输入轴驱动端水平/加速度峰值',
    level: '高报',
    result: '输入轴轴承存在磨损',
    time: ''
  }, {
    desc: '斜拉链/3轴驱动端水平/加速度峰值',
    level: '高报',
    result: '齿轮箱3轴齿轮存在剥落点蚀',
    time: ''
  },
  {
    desc: '立磨/输入轴驱动端水平/加速度峰值',
    level: '高报',
    result: '输入轴轴承存在磨损',
    time: ''
  }
  ]

}
