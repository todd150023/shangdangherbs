import os
import re
import urllib.request

# 药茶/方剂图片URL
formula_images = [
    ("补气方", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20formula%20Qi-Tonifying%20Formula%2C%20traditional%20Chinese%20medicine%20decoction%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square"),
    ("清热方", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20formula%20Heat-Clearing%20Formula%2C%20traditional%20Chinese%20medicine%20decoction%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square"),
    ("润肺方", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20formula%20Lung-Moistening%20Formula%2C%20traditional%20Chinese%20medicine%20decoction%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square"),
    ("健脾方", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20formula%20Spleen-Strengthening%20Formula%2C%20traditional%20Chinese%20medicine%20decoction%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square"),
    ("潞党参茶", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Luzhou%20Dangshen%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square"),
    ("连翘茶", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Forsythia%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square"),
    ("黄芪茶", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Astragalus%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square"),
    ("酸枣仁茶", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Spine%20Date%20Seed%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square"),
    ("金银花茶", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Honeysuckle%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square"),
    ("菊花茶", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chrysanthemum%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square")
]

# 确保images文件夹存在
os.makedirs('images', exist_ok=True)

# 下载每个图片
for name, image_url in formula_images:
    filename = f'images/{name}.jpg'

    print(f'下载 {name} 的图片...')
    try:
        urllib.request.urlretrieve(image_url, filename)
        print(f'已保存到: {filename}')
    except Exception as e:
        print(f'下载失败: {e}')

print('图片下载完成！')