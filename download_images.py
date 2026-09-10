import os
import re
import urllib.request

# 读取script.js文件内容
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取中药材数据
match = re.search(r'const herbsData = \[(.*?)\];', content, re.DOTALL)
if not match:
    print('无法找到中药材数据')
    exit()

herbs_data = match.group(1)

# 提取每个中药材的名称和图片URL
herbs = re.findall(r'\{[^}]*name: "([^"]*)",[^}]*image: "([^"]*)",[^}]*\}', herbs_data)

# 手动添加剩余的中药材图片
additional_herbs = [
    ("赤芍", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herb%20Chi%20Shao%20(Paeonia%20veitchii)%20plant%2C%20traditional%20Chinese%20medicine%2C%20natural%20herb%2C%20detailed%20close-up&image_size=square"),
    ("金银花", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herb%20Jin%20Yin%20Hua%20(Lonicera%20japonica)%20plant%2C%20traditional%20Chinese%20medicine%2C%20natural%20herb%2C%20detailed%20close-up&image_size=square"),
    ("菊花", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herb%20Ju%20Hua%20(Chrysanthemum%20morifolium)%20plant%2C%20traditional%20Chinese%20medicine%2C%20natural%20herb%2C%20detailed%20close-up&image_size=square")
]

herbs.extend(additional_herbs)

# 确保images文件夹存在
os.makedirs('images', exist_ok=True)

# 下载每个图片
for name, image_url in herbs:
    # 跳过本地图片
    if image_url.startswith('images/'):
        print(f'跳过本地图片: {image_url}')
        continue
    
    # 生成本地文件名
    filename = f'images/{name.replace(" ", "_").lower()}.jpg'
    
    print(f'下载 {name} 的图片...')
    try:
        urllib.request.urlretrieve(image_url, filename)
        print(f'已保存到: {filename}')
    except Exception as e:
        print(f'下载失败: {e}')

print('图片下载完成！')