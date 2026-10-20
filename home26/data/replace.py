'''
Author: DCBZ
Date: 2026-10-21 04:18:07
LastEditors: your name
LastEditTime: 2026-10-21 06:10:30
Description: 
FilePath: \shirakawayofunee.github.io\home26\data\replace.py
'''
import os

def main():
    # 获取当前脚本所在的文件夹路径
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # ==========================================
    # 在这里配置你需要替换的关键词
    # 格式为: '旧关键词': '新关键词'
    # ==========================================
    replacements = {
        'hekate.png': 'hecate.png',
        'タン': 'ドナルド',
    }
    
    if not replacements or list(replacements.keys())[0] == 'oldKeyword1':
        print("【提示】请先用编辑器打开此脚本，修改代码中要替换的关键词（replacements 变量）！")
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
                    # 读取文件内容（使用 utf-8 编码）
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    modified = False
                    for old_word, new_word in replacements.items():
                        if old_word in content:
                            content = content.replace(old_word, new_word)
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