/*
 * @Author: sylar
 * @Date: 2019-06-24 14:26:37
 * @Last Modified by: sylar
 * @Last Modified time: 2019-10-23 16:49:42
 */
// 全部行业统计数据
window.allData = {
  // 页面各模块title
  titleList: [
    '设备数量统计 ',
    '行业覆盖情况',
    '关键设备覆盖情况',
    '设备实时运行状态分布',
    '实时智能诊断分布',
    '诊断服务专家'
  ],
  // 设备数量统计数据 数据数组data:[1,2,3,4]对应的日期为 [2018H1,2018H2,2019H1,2019H2]
  statOne: [{
    name: '钢铁',
    data: [88, 134, 232, 256]
  },
  {
    name: '水泥',
    data: [45, 113, 268, 322]
  }, {
    name: '石化',
    data: [534, 657, 876, 1064]
  }, {
    name: '其他',
    data: [116, 187, 226, 252]
  }
  ],
  // 行业覆盖情况数据
  statTwo: [{
    value: 256,
    name: '钢铁'
  }, {
    value: 322,
    name: '水泥'
  }, {
    value: 252,
    name: '其他'
  }, {
    value: 1064,
    name: '石化'
  }],
  // 关键设备覆盖情况数据 , 价值以万为单位
  coverTitle: [
    '序号',
    '行业',
    '覆盖设备种类',
    '价值(万)'
  ],
  statCover: [{
    industry: '钢铁',
    amount: 16,
    price: 42000
  },
  {
    industry: '水泥',
    amount: 33,
    price: 36000
  },
  {
    industry: '石化',
    amount: 18,
    price: 26000
  }
  ],
  // 中间统计数据
  statMid: {
    // 设备价值（亿）
    equipmentValue: 21.4,
    // 服务工厂数量（家）
    serviceFactory: 192,
    //服务设备数量（台）
    serviceEquipment: 1894,
    // 传感器数量（只）
    sensorAmount: 10038,
    //诊断报告数量（份）
    diagnosticReport: 6912,
    //故障案例数量（个）
    faultCase: 798,
    //设备模型数量（个）
    deviceModel: 52,
    //算法模型数量（个）
    algorithmicModel: 43
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
    }, {
      name: '槐坎南方水泥',
      value: 0,
      total: 21
    }, {
      name: '上海宝钢',
      value: 0,
      total: 37
    }, {
      name: '沙钢荣盛钢铁',
      value: 0,
      total: 15
    }],
    [
      // 华北工厂
      {
        name: '金隅冀东水泥',
        value: 0,
        total: 130
      }, {
        name: '青州中联',
        value: 0,
        total: 1
      }, {
        name: '泰安中联',
        value: 0,
        total: 7
      }, {
        name: '东营金岭化工',
        value: 0,
        total: 6
      }, {
        name: '德州输油站',
        value: 0,
        total: 4
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
      },
      {
        name: '山西忻州华茂',
        value: 0,
        total: 18
      }
    ],
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
    },
    {
      name: '锦江油化厂',
      value: 0,
      total: 29
    }, {
      name: '英台采油厂',
      value: 0,
      total: 3
    }
    ],
    //西北工厂
    [{
      name: '中煤蒙大',
      value: 0,
      total: 109
    },
    {
      name: '格尔木炼油厂',
      value: 0,
      total: 209
    }, {
      name: '西安惠大化工',
      value: 0,
      total: 8
    }, {
      name: '汉钢钢铁',
      value: 0,
      total: 1
    },
    {
      name: '龙门钢铁',
      value: 0,
      total: 3
    }
    ],
    // 西南工厂
    [{
      name: '资阳输油管',
      value: 0,
      total: 2
    }, {
      name: '西南管道中缅原油',
      value: 0,
      total: 6
    },
    {
      name: '北川中联水泥',
      value: 0,
      total: 2
    },
    {
      name: '武汉有机实业',
      value: 0,
      total: 3
    }, {
      name: '重庆华峰铝业',
      value: 0,
      total: 1
    }
    ]
  ],
  // 设备实时运行状态分布
  statFour: {
    // 设备运行率，请参考statRunning中的设备运行率信息。按当天的日期显示对应的数据

    // 设备告警分布，数据需要按照1,2,3,4,5的顺序来填充
    alarmLevels: [{
      name: '1级',
      value: 30
    }, {
      name: '2级',
      value: 75
    }, {
      name: '3级',
      value: 32
    }, {
      name: '4级',
      value: 92
    }, {
      name: '5级',
      value: 43
    }]
  },
  // 实时智能诊断分布，为保证显示合理，数据以 大小大小的排序为最佳
  statFive: [{
    value: 18,
    name: '不平衡'
  }, {
    value: 13,
    name: '转子不对中'
  },
  {
    value: 67,
    name: '润滑不良'
  },
  {
    value: 2,
    name: '齿轮损伤'
  },
  {
    value: 32,
    name: '滚动轴承损伤'
  },
  {
    value: 8,
    name: '滑动轴承磨损'
  }
  ],
  //诊断服务专家， 数据按排名填充，第一名在最前，最多10个人员，图片宽高比为3:4，并请放入static/images/worker文件夹下。
  // status 为同期对比， -1为下降，0为持平，1为上升
  statExpert: [{
    name: '刘同军',
    img: '/static/images/worker/ltj.jpg',
    caseNum: 20,
    title: '诊断专家',
    status: 0,
    rate: ''
  }, {
    name: '张国荣',
    img: '/static/images/worker/zgr.jpg',
    caseNum: 16,
    title: '诊断专家',
    status: 1,
    rate: ''
  }, {
    name: '郝兆鹏',
    img: '/static/images/worker/hzp.jpg',
    caseNum: 14,
    title: '诊断专家',
    status: 1,
    rate: ''
  }, {
    name: '樊永涛',
    img: '/static/images/worker/fyt.jpg',
    caseNum: 12,
    title: '诊断专家',
    status: -1,
    rate: ''
  }],
  //  设备运行率的数据，每个对应相应的日期。模拟数据为60%~80%之间,最多1位小数。
  statRunning: [67.4, 67.7, 65.6, 75.3, 70.9, 71.9, 77.3, 66.6, 71.9, 74.7, 76.4, 66.1, 60.5, 66, 65.5, 64.9, 69, 68.5, 61.8, 74.2, 75, 65.3, 78, 76.4, 64.9, 65.9, 67.2, 79.1, 70.9, 64.1, 70.7],
  //页面底部告警模块，为保证正常显示，文字描述不要过多，请控制在35个字符之内
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
    desc: '斜拉链/电机驱动端水平/包络峰值',
    level: '高报',
    result: '电机驱动端轴承滚道及滚动体损伤',
    time: ''
  }, {
    desc: '立磨/输入轴驱动端水平/加速度峰值',
    level: '高报',
    result: '输入轴轴承存在磨损',
    time: ''
  }
  ]
}
