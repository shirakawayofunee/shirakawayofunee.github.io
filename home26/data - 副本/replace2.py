'''
Author: DCBZ
Date: 2026-10-21 04:50:41
LastEditors: your name
LastEditTime: 2026-10-21 04:51:01
Description: 
FilePath: \shirakawayofunee.github.io\home26\data\replace2.py
'''
import os
import re

def main():
    # 获取当前脚本所在的文件夹路径
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # ==========================================
    # 在这里配置你需要替换的内容（支持多行和标点符号）
    # 格式为: '旧文本': '新文本'
    # ==========================================
    replacements = {
        # 示例：把左侧的 director 头像对话改为右侧
        # 使用 \s* 可以自动兼容不同长度的缩进空格
        'position:\\s*`left`,\\s*avatar:\\s*`img/dh/director\\.png`': 'position: `right`,\n      avatar: `img/dh/director.png`',
        
        # 如果还有其他需要替换的，可以继续在这里添加：
        # '旧的多行文本带标点': '新的多行文本带标点',
    }
    
    if not replacements or 'oldKeyword1' in list(replacements.keys())[0]:
        print("【提示】请先用编辑器打开此脚本，修改代码中要替换的内容（replacements 变量）！")
        input("\n按回车键退出...")
        return

    print(f"开始扫描并替换文件夹: {current_dir}\n")
    
    success_count = 0

    # 递归遍历当前目录及所有子目录
    for root, dirs, files in os.walk(current_dir):
        for file in files:
            if file.endswith('.js') and file != 'replace.py':
                file_path = os.path.join(root, file)
                
                try:
                    # 读取文件内容（使用 utf-8 编码，并统一将换行符转为 \n 避免系统差异）
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read().replace('\r\n', '\n')
                        
                    modified = False
                    for old_pattern, new_content in replacements.items():
                        # 使用正则 re.DOTALL 让点号能够匹配换行符
                        # 使用 re.MULTILINE 确保多行匹配准确
                        if re.search(old_pattern, content, re.DOTALL):
                            content = re.sub(old_pattern, new_content, content, flags=re.DOTALL)
                            modified = True
                    
                    # 如果内容有改动，写回文件
                    if modified:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        print(f"[已更新] {os.path.relpath(file_path, current_dir)}")
                        success_count += 1
                        
                except Exception as e:
                    print(f"[读取错误] {file_path}: {e}")

    print(f"\n================================")
    print(f"批量替换完成！共修改了 {success_count} 个 JS 文件。")
    print(f"================================")
    
    input("\n按回车键退出...")

if __name__ == '__main__':
    main()