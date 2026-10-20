import os

def main():
    # 获取当前脚本所在的文件夹路径
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # ==========================================
    # 在这里配置你需要替换的关键词
    # 格式为: '旧关键词': '新关键词'
    # ==========================================
    replacements = {
        '      {
        name: `Chris`,
        name2: `<ruby>未来の名探<rt></rt></ruby>偵（自称）`,
        avatar: `img/dh/pc2.png`,
        note: `19歳、警察学校の一年生`,
        basicStats: `憧れの「<ruby>シャーローム<rt>上庭の執行人</rt></ruby>姉さん」に頼まれて、「GARDEN」が引き起こした連続殺人事件を調査中。`,
        profile: `危険度：B級
        能力：相信正義`, 
      },': '      {
        name0: `未来の名<ruby>探<rt>自称</rt>偵</ruby>`,
        name: `CHRIS`,
        name2: `クリス`,
        avatar: `img/dh/pc2.png`,
        note: `警察学校の一年生、19歳`,
        basicStats: `憧れの「<ruby>シャーローム<rt>上庭の執行人</rt></ruby>姉さん」に頼まれて、「花園」が引き起こした連続殺人事件を調査中。`,
      profile: `危険度：B級
        能力：相信正義
`, 
      },',
        '{
        name: `Doyle`,
        name2: `ドイル`,
        avatar: `img/dh/doyle.jpg`,
        note: `支局の刑事`,
        basicStats: `「GARDEN」による一連の暗殺事件を担当してるよ。生真面目で粗暴な一面もあるけど、悪い人じゃない気がする。`,
        profile: `所属：新城治安局`
      },': '      {
        name: `DOYLE`,
        name2: `ドイル`,
        avatar: `img/dh/doyle.jpg`,
        note: `支局の刑事`,
        basicStats: `「花園」による一連の暗殺事件を担当してるよ。生真面目で粗暴な一面もあるけど、悪い人じゃない気がする。`,
        profile: `所属：新城治安局`
      },
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
            if file.endswith('.js'):
                # 排除脚本自身（以防万一脚本也是 .js 的话，虽然这里是 .py）
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
    
    # 运行结束后暂停，防止窗口秒关
    input("\n按回车键退出...")

if __name__ == '__main__':
    main()