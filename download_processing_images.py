import os
import urllib.request

# 炮制与功效图片URL
processing_images = [
    ("炮制", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20medicine%20processing%2C%20traditional%20Chinese%20medicine%20preparation%2C%20herbs%20being%20cleaned%20and%20processed%2C%20detailed%20close-up&image_size=square"),
    ("晒干", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sun-drying%20Chinese%20herbs%2C%20herbs%20dried%20in%20sunlight%2C%20traditional%20Chinese%20medicine%20processing%2C%20detailed%20close-up&image_size=square"),
    ("切片", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Slicing%20Chinese%20herbs%2C%20herbs%20cut%20into%20pieces%2C%20traditional%20Chinese%20medicine%20processing%2C%20detailed%20close-up&image_size=square"),
    ("炒制", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Stir-frying%20Chinese%20herbs%2C%20herbs%20fried%20in%20pot%2C%20traditional%20Chinese%20medicine%20processing%2C%20detailed%20close-up&image_size=square"),
    ("蜜炙", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Honey-processed%20Chinese%20herbs%2C%20herbs%20coated%20with%20honey%2C%20traditional%20Chinese%20medicine%20processing%2C%20detailed%20close-up&image_size=square"),
    ("性味", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20nature%20and%20flavor%2C%20herbs%20with%20different%20properties%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square"),
    ("归经", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Meridian%20entry%20Chinese%20herbs%2C%20acupuncture%20meridians%20diagram%2C%20traditional%20Chinese%20medicine%20theory%2C%20detailed%20close-up&image_size=square"),
    ("功效", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20efficacy%2C%20herbs%20with%20healing%20properties%2C%20traditional%20Chinese%20medicine%20benefits%2C%20detailed%20close-up&image_size=square"),
    ("主治", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20indications%2C%20herbs%20for%20treating%20symptoms%2C%20traditional%20Chinese%20medicine%20treatment%2C%20detailed%20close-up&image_size=square"),
    ("补中益气", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tonify%20Middle-Jiao%20and%20Benefit%20Qi%2C%20Chinese%20herbs%20for%20energy%20tonifying%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square"),
    ("健脾益肺", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Strengthen%20Spleen%20and%20Benefit%20Lung%2C%20Chinese%20herbs%20for%20digestion%20and%20lung%20health%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square"),
    ("清热解毒", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Clear%20Heat%20and%20Detoxify%2C%20Chinese%20herbs%20for%20clearing%20heat%20and%20toxins%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square"),
    ("润肺止咳", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Moisten%20Lung%20and%20Stop%20Cough%2C%20Chinese%20herbs%20for%20lung%20moistening%20and%20cough%20relief%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square"),
    ("安神助眠", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Calm%20Spirit%20and%20Improve%20Sleep%2C%20Chinese%20herbs%20for%20calming%20and%20sleep%20aid%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square"),
    ("祛风散寒", "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dispel%20Wind%20and%20Disperse%20Cold%2C%20Chinese%20herbs%20for%20wind%20and%20cold%20relief%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square")
]

# 确保images文件夹存在
os.makedirs('images', exist_ok=True)

# 下载每个图片
for name, image_url in processing_images:
    filename = f'images/{name}.jpg'

    print(f'下载 {name} 的图片...')
    try:
        urllib.request.urlretrieve(image_url, filename)
        print(f'已保存到: {filename}')
    except Exception as e:
        print(f'下载失败: {e}')

print('图片下载完成！')