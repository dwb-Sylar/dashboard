/*
 * @Author: sylar
 * @Date: 2019-06-24 14:28:18
 * @Last Modified by: sylar
 * @Last Modified time: 2019-10-23 10:45:09
 */
// 石化行业数据
window.petroleumData = {
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
    value: 260,
    name: '东北'
  }, {
    value: 100,
    name: '华东'
  }, {
    name: '西南',
    value: 16
  }, {
    name: '华北',
    value: 20
  }, {
    name: '华中',
    value: 6
  }, {
    value: 652,
    name: '西北'
  }],
  // 关键设备覆盖情况
  statTwo: {
    typeData: ['悬臂离心泵', '双支撑泵', '高速泵', '立式泵', '多级泵'],
    lastData: {
      name: '上季度',
      data: [201, 89, 45, 123, 18]
    },
    curData: {
      name: '本季度',
      data: [282, 102, 54, 133, 18]
    }
  },
  // 设备总数及价值
  statThree: {
    amountStat: {
      name: '设备数量',
      data: [467, 534, 657, 867, 1064]
    },
    priceStat: {
      name: '设备价值',
      data: [11000, 13000, 16000, 22000, 26000]
    }
  },
  // 中间统计数据
  statMid: {
    // 设备价值
    equipmentValue: 2.6,
    // 服务工厂数量
    serviceFactory: 38,
    //服务设备数量
    serviceEquipment: 1064,
    // 传感器数量
    sensorAmount: 3510,
    //诊断报告数量
    diagnosticReport: 1368,
    //故障案例数量
    faultCase: 425,
    //设备模型数量
    deviceModel: 23,
    //算法模型数量
    algorithmicModel: 26
  },
  // 地图数据，为保证页面最佳展示方案，每个数组为每一个区域，单个区域的工厂数最好>3个，不足的话可以多个区域合为一个数组展示。
  // 如要添加工厂，请在geoCoord.js 文件下，添加工厂对应的坐标系，[Y,X], 经度在前，维度在后，坐标查询网站：http://www.gpsspg.com/maps.htm 。如查不到，可以先在baidu地图查找具体位置，再在此网站找对应的点。
  mapStat: [
    // 华东工厂
    [{
      name: '亚东石化',
      value: 0,
      total: 45
    }, {
      name: '张家港索尔维化工',
      value: 0,
      total: 2
    }, {
      name: '东华能源新材料',
      value: 0,
      total: 2
    }, {
      name: '中石化仪征化纤',
      value: 0,
      total: 6
    }],
    // 东北工厂
    [{
      name: '哈尔滨石化',
      value: 0,
      total: 12
    },
    {
      name: '大庆炼化',
      value: 0,
      total: 69
    }, {
      name: '大连正大',
      value: 0,
      total: 17
    }, {
      name: '锦江油化厂',
      value: 0,
      total: 29
    }, {
      name: '英台采油厂',
      value: 0,
      total: 3
    }
    ],
    // 西北、西南
    [{
      name: '中煤蒙大',
      value: 0,
      total: 109
    }, {
      name: '格尔木炼油厂',
      value: 0,
      total: 209
    }, {
      name: '西安惠大化工',
      value: 0,
      total: 8
    }, {
      name: '资阳输油管',
      value: 0,
      total: 2
    }, {
      name: '西南管道中缅原油',
      value: 0,
      total: 6
    }],
    // 华北、华中
    [{
      name: '东营金岭化工',
      value: 0,
      total: 6
    }, {
      name: '德州输油站',
      value: 0,
      total: 4
    }, {
      name: '武汉有机实业',
      value: 0,
      total: 3
    }]
  ],
  // 设备实时运行状态分布
  statFour: {

    // 设备运行率，请参考statRunning中的设备运行率信息。按当天的日期显示对应的数据
    // 告警发布数据，(数据按照1,2,3,4,5级顺序来填充)
    alarmLevels: [{
      name: '1级',
      value: 9
    }, {
      name: '2级',
      value: 61
    }, {
      name: '3级',
      value: 12
    }, {
      name: '4级',
      value: 31
    }, {
      name: '5级',
      value: 16
    }]
  },
  // 实时智能诊断分布
  statFive: [{
    name: '不平衡',
    value: 9
  }, {
    name: '转子不对中',
    value: 7
  },
  {
    name: '润滑不良',
    value: 33
  },
  {
    name: '齿轮损伤',
    value: 2
  },
  {
    name: '滚动轴承损伤',
    value: 76
  },
  {
    value: 4,
    name: '滑动轴承磨损'
  }
  ],
  //诊断服务专家， 数据按排名填充，第一名在最前，图片请放入static/images/worker文件夹下
  statExpert: [{
    name: '樊永涛',
    img: '/static/images/worker/fyt.jpg',
    caseNum: 13,
    title: '诊断专家',
    status: -1,
    rate: ''
  },
  {
    name: '水龙',
    img: '/static/images/worker/shuilong.jpg',
    caseNum: 11,
    title: '诊断专家',
    status: 1,
    rate: ''
  }, {
    name: '秦少锋',
    img: '/static/images/worker/qsf.jpg',
    caseNum: 8,
    title: '诊断专家',
    status: -1,
    rate: ''
  }, {
    name: '王鹏飞',
    img: '/static/images/worker/wpf.jpg',
    caseNum: 2,
    title: '诊断专家',
    status: 0,
    rate: ''
  }, {
    name: '郝兆鹏',
    img: '/static/images/worker/hzp.jpg',
    caseNum: 2,
    title: '诊断专家',
    status: 0,
    rate: ''
  }
  ],
  //  设备运行率的数据，每个对应相应的日期。模拟数据为55%~65%之间,最多1位小数
  statRunning: [57.7, 61.8, 60.8, 55.7, 59.7, 60, 62.9, 61.9, 58.2, 56.2, 56.5, 57.1, 55.3, 57.7, 62.7, 64.2, 61.3, 64.1, 56.2, 58.9, 58.6, 62.3, 63.3, 55.2, 55.6, 55.7, 58.6, 62, 57.9, 62, 60.6],
  //页面底部告警模块
  statAlarm: [{
    desc: '锦江油化厂，液化气产品泵P310B/电机驱动端水平/包络峰值',
    level: '高报',
    result: '电机驱动端轴承滚道及滚动体损伤',
    time: ''
  },
  {
    desc: '锦江油化厂，碳四原料泵P-101B/电机驱动端水平/包络峰值',
    level: '高报',
    result: '电机驱动端轴承滚道或滚动体损伤，润滑不良',
    time: ''
  },
  {
    desc: '锦江油化厂，导热油泵P-212B/泵驱动端水平/速度有效值',
    level: '高报',
    result: '泵驱动端支撑刚性不足',
    time: ''
  }, {
    desc: '锦江油化厂，导热油炉风机G201/电机驱动端水平/速度有效值',
    level: '高报',
    result: '风机叶片存在不平衡，由于风机叶片结垢或损伤',
    time: ''
  }
  ]
}
