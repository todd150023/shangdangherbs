import os
import urllib.request

os.makedirs('images/medicinal_diet', exist_ok=True)

medicinal_diet_images = [
    ("党参炖鸡", "Dangshen%20Stewed%20Chicken%2C%20traditional%20Chinese%20medicinal%20diet%2C%20chicken%20with%20herbs%2C%20detailed%20close-up"),
    ("黄芪排骨汤", "Astragalus%20Pork%20Rib%20Soup%2C%20traditional%20Chinese%20medicinal%20diet%2C%20pork%20ribs%20with%20herbs%2C%20detailed%20close-up"),
    ("山药粥", "Chinese%20Yam%20Porridge%2C%20traditional%20Chinese%20medicinal%20diet%2C%20yam%20porridge%2C%20detailed%20close-up"),
    ("红枣粥", "Red%20Date%20Porridge%2C%20traditional%20Chinese%20medicinal%20diet%2C%20red%20dates%20porridge%2C%20detailed%20close-up"),
    ("百合粥", "Lily%20Bulb%20Porridge%2C%20traditional%20Chinese%20medicinal%20diet%2C%20lily%20bulb%20porridge%2C%20detailed%20close-up")
]

for name, prompt in medicinal_diet_images:
    filename = f"images/medicinal_diet/{name}.jpg"
    url = f"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt={prompt}&image_size=square"

    if os.path.exists(filename):
        print(f'已存在: {filename}')
        continue

    try:
        urllib.request.urlretrieve(url, filename)
        print(f'已保存到: {filename}')
    except Exception as e:
        print(f'下载失败 {filename}: {e}')

print('药膳图片下载完成！')