# 上党中医药中英术语库

## 项目简介

上党中医药中英术语库是一个展示中药材信息的网站，提供中药材的详细介绍、分类浏览和搜索功能。

## 功能特点

- 中药材详细信息展示
- 分类浏览（道地药材、药茶/方剂、药膳、炮制与功效、病症与调理）
- 搜索功能
- 响应式设计，适配不同设备

## 技术栈

- HTML5
- CSS3
- JavaScript
- Express（可选，用于本地服务器）

## 安装与使用

### 方法一：使用Python HTTP服务器

1. 克隆或下载本项目到本地
2. 打开命令行工具，进入项目目录
3. 运行服务器：
   ```bash
   python start_server.py
   ```
4. 在浏览器中访问：http://localhost:3007

### 方法二：使用Node.js服务器

1. 克隆或下载本项目到本地
2. 打开命令行工具，进入项目目录
3. 安装依赖：
   ```bash
   npm install
   ```
4. 启动服务器：
   ```bash
   npm start
   ```
5. 在浏览器中访问：http://localhost:3000

## 项目结构

```
├── index.html          # 网站主页
├── style.css           # 样式文件
├── script.js           # JavaScript文件
├── start_server.py     # Python服务器脚本
├── server.js           # Node.js服务器脚本
├── package.json        # 项目配置文件
├── images/             # 图片文件夹
└── README.md           # 项目说明文件
```

## 如何添加新的中药材

1. 在 `script.js` 文件中，找到 `herbsData` 数组
2. 添加新的中药材对象，包含以下字段：
   - name: 中药材名称
   - pinyin: 拼音
   - description: 描述信息
   - category: 分类
   - image: 图片路径

## 如何修改图片

1. 将图片文件添加到 `images` 文件夹中
2. 在 `script.js` 文件中，修改对应中药材的 `image` 字段为本地图片路径

## 响应式设计

网站采用响应式设计，在不同屏幕尺寸下都能正常显示：
- 桌面端：多列布局
- 平板端：双列布局
- 移动端：单列布局

## 浏览器兼容性

- Chrome
- Firefox
- Safari
- Edge

## 许可证

MIT License