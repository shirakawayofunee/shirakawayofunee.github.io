/*
 * @Author: DCBZ
 * @Date: 2025-12-31 06:16:15
 * @LastEditors: your name
 * @LastEditTime: 2025-12-31 06:16:38
 * @Description: 
 * @FilePath: \shirakawayofunee.github.io\home\data\json - 副本\新建文本文档.js
 */
const fs = require('fs');
const path = require('path');

// 配置项
const TARGET_DIR = __dirname; // 默认扫描当前脚本所在的目录
const EXTENSION = '.json';

/**
 * 自定义对象转字符串函数
 * 用于生成带有反引号 ` 的 JS 对象格式
 */
function toJSString(obj, indentLevel = 1) {
    const indent = '  '.repeat(indentLevel);
    const prevIndent = '  '.repeat(indentLevel - 1);

    if (obj === null) return 'null';

    // 1. 处理字符串：核心逻辑，用反引号包裹
    if (typeof obj === 'string') {
        // 防止字符串里本身就有反引号导致报错，进行转义
        let safeStr = obj.replace(/`/g, '\\`');
        // 将 \n 转为真正的换行符，实现"直接换行"
        // 如果 JSON 里原本是 "\n"，这里会变成编辑器里的物理换行
        return '`' + safeStr + '`'; 
    }

    // 2. 处理数组
    if (Array.isArray(obj)) {
        if (obj.length === 0) return '[]';
        const items = obj.map(item => toJSString(item, indentLevel + 1));
        return `[\n${indent}${items.join(',\n' + indent)}\n${prevIndent}]`;
    }

    // 3. 处理对象
    if (typeof obj === 'object') {
        const keys = Object.keys(obj);
        if (keys.length === 0) return '{}';

        const props = keys.map(key => {
            const value = obj[key];
            // 判断 Key 是否需要加引号（如果是合法的变量名则不加，如 meta；否则加引号，如 "full-name"）
            const keyStr = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
            return `${indent}${keyStr}: ${toJSString(value, indentLevel + 1)}`;
        });

        return `{\n${props.join(',\n')}\n${prevIndent}}`;
    }

    // 4. 处理数字、布尔值等其他类型
    return String(obj);
}

// 主逻辑
fs.readdir(TARGET_DIR, (err, files) => {
    if (err) {
        console.error('无法读取目录:', err);
        return;
    }

    // 过滤出 .json 文件
    const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === EXTENSION);

    if (jsonFiles.length === 0) {
        console.log('当前目录下没有找到 .json 文件。');
        return;
    }

    console.log(`找到 ${jsonFiles.length} 个文件，开始转换...`);

    jsonFiles.forEach(file => {
        const filePath = path.join(TARGET_DIR, file);
        const fileNameNoExt = path.basename(file, EXTENSION);
        const newFilePath = path.join(TARGET_DIR, `${fileNameNoExt}.js`);

        try {
            // 读取文件
            const rawData = fs.readFileSync(filePath, 'utf8');
            
            // 解析 JSON (确保源文件格式正确)
            const jsonData = JSON.parse(rawData);

            // 转换为 JS 格式字符串
            const jsObjectStr = toJSString(jsonData);

            // 拼接 export default
            const finalContent = `export default ${jsObjectStr};\n`;

            // 写入新文件
            fs.writeFileSync(newFilePath, finalContent, 'utf8');
            
            console.log(`✅ 转换成功: ${file} -> ${fileNameNoExt}.js`);

        } catch (e) {
            console.error(`❌ 转换失败: ${file}`, e.message);
        }
    });
});