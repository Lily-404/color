# 颜色调色板

一个现代化的颜色管理工具，支持手动添加颜色和AI生成配色方案。

## 功能特点

- 🎨 手动添加和管理颜色
- 🤖 AI智能生成配色方案
- 💾 本地存储颜色数据
- 📋 一键复制颜色代码
- 🌈 实时颜色预览
- 🎯 3D交互效果

## 预览

### 主页

- 展示所有保存的颜色
- 3D悬浮效果
- 点击复制颜色代码
- 背景渐变动态效果

### 添加颜色页面

- AI配色方案生成
- 可视化颜色选择器
- 实时预览效果

## 安装

```bash
# 克隆项目
git clone https://github.com/Lily-404/color

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 使用说明

### 手动添加颜色

1. 点击主页右下角的"+"按钮
2. 使用颜色选择器或输入十六进制颜色代码
3. 输入颜色名称
4. 点击"添加"保存

### 生成AI配色方案

1. 在添加颜色页面上方输入Moonshot API密钥
2. 输入颜色风格描述（如：温暖的秋季配色）
3. 点击"生成配色方案"
4. 选择保存喜欢的配色

## 技术栈

- React 18
- React Router
- React Colorful
- Vite
- Moonshot AI API
- LocalStorage

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 注意事项

- 使用AI配色功能需要Moonshot API密钥
- 颜色数据保存在浏览器本地存储中
- 支持现代浏览器

## 许可

MIT License
