const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 静态文件服务
app.use(express.static(__dirname));

// 根路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});