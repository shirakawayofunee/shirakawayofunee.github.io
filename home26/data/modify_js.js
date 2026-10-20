const fs = require('fs');
const path = require('path');
const vm = require('vm');

// =================配置区域=================
const TARGET_DIR = __dirname; // 扫描当前目录
const EXTENSION = '.js';

// 这里定义你想把 glossary 替换成什么样
const NEW_GLOSSARY_TEMPLATE = [
    {
        term: "上庭",
        desc: "人類文明の最高統治機関、その意思決定の中枢は、科学者によって設立された組織「<span>Edge</span>」であり、\n    現在は再編を経て7人のメンバーによって構成されている。"
    },
    {
        term: "福音地",
        desc: "工事中"
    },
    {
        term: "GARDEN",
        desc: "工事中"
    }
];

// 这里定义你想把 characters 替换成什么样
const NEW_CHARACTERS_TEMPLATE = [
    {
        name: "工事中",
        avatar: "img/dh/",
        note: "工事中"
    },
    {
        name: "工事中",
        avatar: "img/dh/",
        note: "工事中"
    }
];
// =========================================

/**
 * 对象转字符串函数 (保持反引号格式)
 */
function toJSString(obj, indentLevel = 1) {
    const indent = '  '.repeat(indentLevel);
    const prevIndent = '  '.repeat(indentLevel - 1);

    if (obj === null) return 'null';

    // 1. 字符串：使用反引号
    if (typeof obj === 'string') {
        let safeStr = obj.replace(/`/g, '\\`'); // 转义内部反引号
        // 处理换行符，使其在编辑器中看起来是物理换行
        if (safeStr.includes('\n')) {
             return '`' + safeStr + '`';
        }
        return '`' + safeStr + '`';
    }

    // 2. 数组
    if (Array.isArray(obj)) {
        if (obj.length === 0) return '[]';
        const items = obj.map(item => toJSString(item, indentLevel + 1));
        return `[\n${indent}${items.join(',\n' + indent)}\n${prevIndent}]`;
    }

    // 3. 对象
    if (typeof obj === 'object') {
        const keys = Object.keys(obj);
        if (keys.length === 0) return '{}';

        const props = keys.map(key => {
            const value = obj[key];
            // 简单判断 Key 是否需要引号
            const keyStr = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
            return `${indent}${keyStr}: ${toJSString(value, indentLevel + 1)}`;
        });

        return `{\n${props.join(',\n')}\n${prevIndent}}`;
    }

    return String(obj);
}

// 主程序
fs.readdir(TARGET_DIR, (err, files) => {
    if (err) {
        console.error('读取目录失败:', err);
        return;
    }

    // 排除掉脚本自己，防止自己读自己报错
    const jsFiles = files.filter(file => 
        path.extname(file).toLowerCase() === EXTENSION && 
        file !== 'modify_js.js' && 
        file !== 'convert.js'
    );

    if (jsFiles.length === 0) {
        console.log('没有找到 .js 数据文件。');
        return;
    }

    console.log(`找到 ${jsFiles.length} 个 JS 文件，开始批量修改...`);

    jsFiles.forEach(file => {
        const filePath = path.join(TARGET_DIR, file);

        try {
            // 1. 读取文件内容
            let fileContent = fs.readFileSync(filePath, 'utf8');

            // 2. 解析 JS 对象
            // 去掉 'export default' 以便解析
            const codeToRun = fileContent.replace(/^\s*export\s+default\s*/, '');
            
            // 使用 VM 沙箱安全地执行代码获取对象
            const sandbox = {};
            const script = new vm.Script(`result = ${codeToRun}`);
            const context = new vm.createContext(sandbox);
            script.runInContext(context);
            
            const data = sandbox.result;

            // 3. 修改数据逻辑
            if (data.infoPanel) {
                // (1) 删除 relatedLink
                if (data.infoPanel.relatedLink) {
                    delete data.infoPanel.relatedLink;
                }

                // (2) 替换 glossary
                // 注意：这里使用 JSON.parse(JSON.stringify(...)) 是为了深拷贝，防止所有文件共用同一个内存引用
                data.infoPanel.glossary = JSON.parse(JSON.stringify(NEW_GLOSSARY_TEMPLATE));

                // (3) 替换 characters
                data.infoPanel.characters = JSON.parse(JSON.stringify(NEW_CHARACTERS_TEMPLATE));
                
                // (4) 这里的 synopsis 保持原样，如果你也想改为 '工事中'，取消下面注释
                // data.infoPanel.synopsis = "工事中";
            }

            // 4. 重新生成文件内容
            const newContent = `export default ${toJSString(data)};\n`;

            // 5. 写入原文件 (覆盖)
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`✅ 已修改: ${file}`);

        } catch (e) {
            console.error(`❌ 修改失败: ${file}`, e.message);
        }
    });
});