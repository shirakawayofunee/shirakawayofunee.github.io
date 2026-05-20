import os

# 1. 限制读取的文件格式（可根据需要增删）
valid_extensions = ('.jfif', '.jpg', '.jpeg', '.png', '.webp', '.gif', 'mp4')

print("==================================================")
print("提示：请直接将你想要处理的【文件夹】拖拽到当前窗口中，然后按下回车。")
print("（你可以拖拽包含多个子文件夹的父目录，也可以直接拖拽单个图片文件夹）")
print("==================================================")

# 2. 接收用户拖拽或输入的路径
raw_path = input("请拖拽文件夹到此处：")

# 清洗路径：去除首尾的空格，并去掉因拖拽自动生成的双引号或单引号
target_directory = raw_path.strip().strip('"').strip("'")

# 检查路径是否有效
if not os.path.isdir(target_directory):
    print(f"\n[错误]：'{target_directory}' 不是一个有效的文件夹路径，请检查后重新运行。")
    input("\n按回车键退出程序...")
    exit()

result_lines = []

# 3. 遍历目标文件夹
for dirpath, dirnames, filenames in os.walk(target_directory):
    # 始终获取当前文件所在的直接父文件夹名称
    # 例如：如果文件在 D:\...\img\402\下，则 folder_name 为 "402"
    folder_name = os.path.basename(dirpath)
    
    for filename in filenames:
        if filename.lower().endswith(valid_extensions):
            # 获取不带后缀的文件名
            name_without_ext, _ = os.path.splitext(filename)
            
            # 格式化拼接
            formatted_string = f'{{ src: "img/{folder_name}/{filename}", alt: "Image", description: "{name_without_ext}" }},'
            result_lines.append(formatted_string)

# 4. 自动在输入文件夹的同级目录下生成输出文件，方便查找
parent_dir = os.path.dirname(target_directory)
if parent_dir:
    output_file_path = os.path.join(parent_dir, "image_list_output.txt")
else:
    output_file_path = "image_list_output.txt"

# 5. 写入结果
try:
    with open(output_file_path, "w", encoding="utf-8") as f:
        for line in result_lines:
            f.write(line + "\n")
    print(f"\n[成功] 处理完成，共找到 {len(result_lines)} 个文件。")
    print(f"结果已保存至：{os.path.abspath(output_file_path)}")
except Exception as e:
    print(f"\n[错误] 写入文件时出错: {e}")

# 防止窗口直接关闭，留给用户查看结果的时间
input("\n按回车键退出程序...")