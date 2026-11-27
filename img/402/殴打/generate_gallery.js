const fs = require('fs');
const path = require('path');

// ==================== 配置区 ====================
const CONFIG = {
    srcPrefix: "img/402/构图/",              // 路径前缀（可在命令行通过 --prefix 覆盖）
    useFilenameAsDescription: true,  // true = 用文件名（去掉后缀）当 description
    altPrefix: "IDEA ",      // alt 文字前缀
    recursive: false,                 // true = 递归扫描子文件夹
    startAltIndex: 1,                 // alt 编号起始值
    outputFilename: "gallery_output.txt" // 导出的 txt 文件名
};
// ================================================

// 解析命令行参数
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
    if (args[i] === '--prefix' && args[i + 1]) {
        CONFIG.srcPrefix = args[i + 1];
        i++;
    } else if (args[i] === '--recursive') {
        CONFIG.recursive = true;
    } else if (args[i] === '--desc') {
        CONFIG.useFilenameAsDescription = true;
    } else if (args[i] === '--start' && args[i + 1]) {
        CONFIG.startAltIndex = parseInt(args[i + 1], 10);
        i++;
    }
}

// 支持的图片格式
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.mp4'];

/**
 * 递归获取目录下所有图片文件
 */
function getImages(dir, baseDir = dir) {
    let results = [];
    if (!fs.existsSync(dir)) {
        console.error(`错误: 目录 "${dir}" 不存在！`);
        return results;
    }

    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            if (CONFIG.recursive) {
                results = results.concat(getImages(filePath, baseDir));
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (SUPPORTED_EXTENSIONS.includes(ext)) {
                // 计算相对路径（用于处理子文件夹）
                const relativePath = path.relative(baseDir, filePath).replace(/\\/g, '/');
                results.push({
                    filename: file,
                    nameWithoutExt: path.basename(file, ext),
                    relativePath: relativePath
                });
            }
        }
    });

    return results;
}

// 自然排序（确保 X1, X2, X10 顺序正确）
function naturalSort(a, b) {
    return a.filename.localeCompare(b.filename, undefined, { numeric: true, sensitivity: 'base' });
}

// 执行扫描
const currentDir = process.cwd();
let imageFiles = getImages(currentDir);
imageFiles.sort(naturalSort);

// 生成整洁的单行对象数组
let altCounter = CONFIG.startAltIndex;
const formattedLines = imageFiles.map(img => {
    // 拼接最终的 src 路径
    const src = `${CONFIG.srcPrefix.endsWith('/') ? CONFIG.srcPrefix : CONFIG.srcPrefix + '/'}${img.relativePath}`;
    
    // 生成 alt
    const alt = `${CONFIG.altPrefix}${altCounter++}`;

    // 生成 description
    let description = "";
    if (CONFIG.useFilenameAsDescription) {
        description = img.nameWithoutExt;
    } else if (img.filename.includes('_backstory')) {
        const prefix = img.nameWithoutExt.replace('_backstory', '');
        description = `${prefix}_生い立ち`;
    }

    // 拼接为单行格式（前面带 8 个空格缩进，可根据需要调整）
    return `        { src: "${src}", alt: "${alt}", description: "${description}" },`;
});

// 组合所有行
const finalOutput = formattedLines.join('\n');

// 1. 终端打印
console.log(finalOutput);

// 2. 自动写入 txt 文件
fs.writeFileSync(CONFIG.outputFilename, finalOutput, 'utf-8');
console.log(`\n✨ 成功！规整的数组内容已自动导出到当前目录下的: ${CONFIG.outputFilename}`);