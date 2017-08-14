var MSG = {
  lang: "zh-hans",
  catLoadingBlocks: "载入积木",
  update: "update 2016.06.29",
  title: "Webduino Blockly 编辑器",
  gotoTutorials: "教学范例",
  gotoWebSite: "官方网站",
  cleanUpBlocks: "整理积木",
  exportImage: "下载图片",
  userMenuDashboard: "专案管理",
  userMenuTutorials: "教学",
  userMenuStages: "关卡",
  userMenuWebSite: "资讯",
  userMenuLogout: "登出",
  blocks: "积木",
  linkTooltip: "储存并产生连结",
  qrcodeTooltip: "产生即时预览 QR code",
  runTooltip: "执行程式",
  stopRunTooltip: "停止执行",
  badCode: "程式错误：\n%1",
  timeout: "超过最大执行数",
  trashTooltip: "删除所有积木",
  sampleTooltip: "载入范例积木",
  film: "影片",
  helpTooltip: "提示",
  simulatorTooltip: "模拟器区域",
  demoTooltip: "网页互动区域",
  openJsbin: "打开程式编辑",
  checkDeviceOnline: "检查装置状态",
  catLogic: "逻辑",
  catLoops: "迴圈",
  catMath: "数学式",
  catText: "文字",
  catLists: "列表",
  catColour: "颜色",
  catVariables: "变数",
  catFunctions: "流程",
  catExec: "等待",
  catRepeat: "状态切换",
  catBoard: "开发板",
  catPin: "I/O 脚位",
  catLed: "LED 灯",
  catRelay: "继电器",
  catRGBLed: "三色 LED",
  catUltraSonic: "超音波",
  catSmartServo: "智慧伺服马达",
  catDht: "温湿度",
  catButton: "按钮开关",
  catShock: "震动开关",
  catPir: "人体红外线",
  catSound: "声音侦测",
  catBuzzer: "蜂鸣器",
  catServo: "伺服马达",
  listVariable: "列表",
  textVariable: "文字",
  httpRequestError: "命令出现错误。",
  linkAlert: "透过此连结分享您的积木组：\n\n%1",
  hashError: "对不起，「%1」并未对应任何已保存的程式。",
  xmlError: "未能载入您保存的档案。或许它是由其他版本的Blockly创建？",
  badXml: "解析 XML 时出现错误：\n%1\n\n选择'确定'以放弃您的更改，或选择'取消'以进一步编辑 XML。",
  catConsole: "控制台",
  catMathOther: "数值转换",
  catTextLogic: "文字逻辑",
  backIndex: "返回 Webduino 积木教学",
  backStagesIndex: "返回 Webduino 积木关卡",
  demoTitle: "Blockly 范例测试区",
  catTutorials: "教学积木",
  linkToBin: "程式编辑",
  catDatabase: "资料库",
  catFirebase: "Firebase",
  catCarTest: "自走车 (2)",
  catCar: "自走车 (1)",
  catFish: "飞天鱼",
  catBasic: "基本积木",
  catWebduino: "Webduino 积木",
  catMenu1: "元件模组",
  catMenu2: "传感器",
  catMenu3: "玩具应用",
  catSpeech: "语音声控",
  catSpeak: "语音朗读",
  catMobile: "行动装置",
  catTracking: "影像辨识",
  catKeyCode: "键盘行为",
  catPlus: "进阶功能",
  catStandard: "基本功能",
  catMax7219: "LED 点矩阵",
  catPhotocell: "光敏(可变)电阻",
  catSoil: "土壤湿度侦测",
  catIRRecv: "红外线接收",
  catIRLed: "红外线发射",
  catADXL345: "三轴加速度计",
  catHX711: "电子磅秤",
  catBarcode: "条码机",
  catRFID: "RFID",
  catJoystick: "摇杆",
  catDemo: "网页互动",
  catDemoText: "显示文字",
  catDemoLight: "点击灯泡",
  catDemoImage: "控制图片",
  catDemoArea: "颜色调整",
  catDemoButton: "按钮行为",
  catDemoRange: "拉霸操作",
  catDemoYoutube: "YouTube",
  catDemoTracking: "影像追踪",
  catDemoController: "遥控器",
  demoAreaTitle: "网页互动测试",
  demoAreaChoose: "请选择互动方式：",
  demoAreaSelect1: "显示文字",
  demoAreaSelect2: "点击灯泡",
  demoAreaSelect3: "控制图片",
  demoAreaSelect4: "颜色调整",
  demoAreaSelect5: "按钮行为",
  demoAreaSelect6: "拉霸操作",
  demoAreaSelect7: "Youtube",
  demoAreaSelect8: "影像追踪",
  demoAreaSelect9: "遥控器",
  demoAreaColor: "选择颜色：",
  demoAreaBtn1: "按钮 1",
  demoAreaBtn2: "按钮 2",
  demoAreaBtn3: "按钮 3",
  demoAreaBtn4: "按钮 4",
  demoAreaBtn5: "按钮 5",
  demoAreaSlider: "拉霸：",
  demoAreaSliderValue: "数值：",
  demoAreaYoutube1: "YouTube 影片会显示在上方",
  demoAreaYoutube2: "必须另外载入：",
  demoAreaRemoteDisplay: "显示",
  samples1:"基础操作",
  samples1_1:"LED",
  samples1_2:"全彩 LED",
  samples1_3:"蜂鸣器",
  samples1_4:"伺服马达",
  samples1_5:"LED 点矩阵",
  samples2:"传感器应用",
  samples2_1:"超音波侦测距离",
  samples2_2:"侦测环境温湿度",
  samples2_3:"侦测声音",
  samples2_4:"侦测人体红外线",
  samples2_5:"侦测环境光线",
  samples2_6:"侦测土壤湿度",
  samples2_7:"侦测三轴加速度",
  samples2_8:"侦测 RFID 识别码",
  samples3:"I/O 脚位",
  samples3_1:"操控两颗 LED",
  samples3_2:"操控全彩 LED",
  samples4:"Youtube 应用",
  samples4_1:"RFID 切换影片",
  samples4_2:"按钮开关控制播放",
  samples4_3:"超音波控制播放速度",
  samples5:"进阶应用",
  samples5_1:"网页虚拟遥控器",
  samples5_2:"声控电灯",
  samples5_3:"人脸追踪控制电灯",
  samples5_4:"倒车雷达",
  samples5_5:"自走车 ( 键盘 )",
  samples5_6:"自走车 ( 虚拟遥控器 )",
  samples5_7:"资料库记录温湿度",
  samples5_8:"RFID 简易门禁系统",
  samples5_9:"LED 点矩阵显示湿度",
  samples5_10:"闹钟 ( 蜂鸣器 + 点矩阵 )",
  samples6:"开发板连动",
  samples6_1:"土壤湿度 + LED",
  samples6_2:"超音波 + LED 点矩阵"
};
