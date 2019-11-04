window.DBConfig = {
  header: {
    logo: '/static/images/custom/logo.png',
    title: '工业互联网数据分析平台', // 页面title,为避免显示问题，title过长时，请同时修改字体大小，以适应页面的展示
    fontSize: 32 //页面title 字体大小
  },
  refreshTime: 20000,
  // 诊断服务专家 滚动配置
  slickExpert: {
    autoplay: true, // 自动滚动
    autoplaySpeed: 30000, //滚动时间间隔
    arrows: false, // 是否显示箭头
    draggable: false,
    pauseOnHover: false, // 鼠标悬浮是否停止滚动
    touchMove: false,
    cssEase: 'linear', // 滚动的动画斜率
    speed: 1000, // 每次滚动时长，滚动动画的时间
    vertical: true // 是否为纵向滚动
    // Any other options that can be got from plugin documentation
  },
  // 页面底部告警滚动配置
  slickFooter: {
    slidesToShow: 1.5,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    centerMode: true,
    arrows: false,
    cssEase: 'linear',
    speed: 40000
  }
}
