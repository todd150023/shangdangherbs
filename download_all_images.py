import os
import urllib.request

os.makedirs('images', exist_ok=True)

image_urls = {
    # 药茶/方剂
    '补气方.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20formula%20Qi-Tonifying%20Formula%2C%20traditional%20Chinese%20medicine%20decoction%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square',
    '清热方.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20formula%20Heat-Clearing%20Formula%2C%20traditional%20Chinese%20medicine%20decoction%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square',
    '润肺方.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20formula%20Lung-Moistening%20Formula%2C%20traditional%20Chinese%20medicine%20decoction%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square',
    '健脾方.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20formula%20Spleen-Strengthening%20Formula%2C%20traditional%20Chinese%20medicine%20decoction%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square',
    '潞党参茶.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Luzhou%20Dangshen%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square',
    '连翘茶.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Forsythia%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square',
    '黄芪茶.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Astragalus%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square',
    '酸枣仁茶.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Spine%20Date%20Seed%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square',
    '金银花茶.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Honeysuckle%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square',
    '菊花茶.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chrysanthemum%20Tea%2C%20Chinese%20herbal%20tea%2C%20traditional%20Chinese%20medicine%20tea%2C%20natural%20herbs%2C%20detailed%20close-up&image_size=square',
    # 炮制与功效
    '炮制.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20medicine%20processing%2C%20traditional%20Chinese%20medicine%20preparation%2C%20herbs%20being%20cleaned%20and%20processed%2C%20detailed%20close-up&image_size=square',
    '晒干.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sun-drying%20Chinese%20herbs%2C%20herbs%20dried%20in%20sunlight%2C%20traditional%20Chinese%20medicine%20processing%2C%20detailed%20close-up&image_size=square',
    '切片.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Slicing%20Chinese%20herbs%2C%20herbs%20cut%20into%20pieces%2C%20traditional%20Chinese%20medicine%20processing%2C%20detailed%20close-up&image_size=square',
    '炒制.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Stir-frying%20Chinese%20herbs%2C%20herbs%20fried%20in%20pot%2C%20traditional%20Chinese%20medicine%20processing%2C%20detailed%20close-up&image_size=square',
    '蜜炙.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Honey-processed%20Chinese%20herbs%2C%20herbs%20coated%20with%20honey%2C%20traditional%20Chinese%20medicine%20processing%2C%20detailed%20close-up&image_size=square',
    '性味.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20nature%20and%20flavor%2C%20herbs%20with%20different%20properties%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square',
    '归经.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Meridian%20entry%20Chinese%20herbs%2C%20acupuncture%20meridians%20diagram%2C%20traditional%20Chinese%20medicine%20theory%2C%20detailed%20close-up&image_size=square',
    '功效.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20efficacy%2C%20herbs%20with%20healing%20properties%2C%20traditional%20Chinese%20medicine%20benefits%2C%20detailed%20close-up&image_size=square',
    '主治.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20herbal%20indications%2C%20herbs%20for%20treating%20symptoms%2C%20traditional%20Chinese%20medicine%20treatment%2C%20detailed%20close-up&image_size=square',
    '补中益气.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tonify%20Middle-Jiao%20and%20Benefit%20Qi%2C%20Chinese%20herbs%20for%20energy%20tonifying%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square',
    '健脾益肺.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Strengthen%20Spleen%20and%20Benefit%20Lung%2C%20Chinese%20herbs%20for%20digestion%20and%20lung%20health%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square',
    '清热解毒.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Clear%20Heat%20and%20Detoxify%2C%20Chinese%20herbs%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square',
    '润肺止咳.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Moisten%20Lung%20and%20Stop%20Cough%2C%20Chinese%20herbs%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square',
    '安神助眠.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Calm%20Spirit%20and%20Improve%20Sleep%2C%20Chinese%20herbs%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square',
    '祛风散寒.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dispel%20Wind%20and%20Disperse%20Cold%2C%20Chinese%20herbs%2C%20traditional%20Chinese%20medicine%2C%20detailed%20close-up&image_size=square',
    # 病症与调理
    '气虚.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qi%20Deficiency%20condition%2C%20traditional%20Chinese%20medicine%2C%20fatigue%20and%20weakness%2C%20detailed%20close-up&image_size=square',
    '脾虚.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Spleen%20Deficiency%20condition%2C%20traditional%20Chinese%20medicine%2C%20digestive%20issues%2C%20detailed%20close-up&image_size=square',
    '肺热.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lung%20Heat%20condition%2C%20traditional%20Chinese%20medicine%2C%20respiratory%20issues%2C%20detailed%20close-up&image_size=square',
    '失眠.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Insomnia%20condition%2C%20traditional%20Chinese%20medicine%2C%20sleep%20disorders%2C%20detailed%20close-up&image_size=square',
    '疲劳.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fatigue%20condition%2C%20traditional%20Chinese%20medicine%2C%20exhaustion%2C%20detailed%20close-up&image_size=square',
    '免疫力低.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Low%20Immunity%20condition%2C%20traditional%20Chinese%20medicine%2C%20weak%20resistance%2C%20detailed%20close-up&image_size=square',
    '感冒.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cold%20condition%2C%20traditional%20Chinese%20medicine%2C%20common%20cold%2C%20detailed%20close-up&image_size=square',
    '咳嗽.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cough%20condition%2C%20traditional%20Chinese%20medicine%2C%20respiratory%20symptoms%2C%20detailed%20close-up&image_size=square',
    '上火.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Internal%20Heat%20condition%2C%20traditional%20Chinese%20medicine%2C%20heat%20excess%2C%20detailed%20close-up&image_size=square',
    '亚健康.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sub-health%20condition%2C%20traditional%20Chinese%20medicine%2C%20general%20discomfort%2C%20detailed%20close-up&image_size=square',
    # 药膳
    '党参炖鸡.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dangshen%20Stewed%20Chicken%2C%20traditional%20Chinese%20medicinal%20diet%2C%20chicken%20with%20herbs%2C%20detailed%20close-up&image_size=square',
    '黄芪排骨汤.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Astragalus%20Pork%20Rib%20Soup%2C%20traditional%20Chinese%20medicinal%20diet%2C%20pork%20ribs%20with%20herbs%2C%20detailed%20close-up&image_size=square',
    '山药粥.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20Yam%20Porridge%2C%20traditional%20Chinese%20medicinal%20diet%2C%20yam%20porridge%2C%20detailed%20close-up&image_size=square',
    '红枣粥.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Red%20Date%20Porridge%2C%20traditional%20Chinese%20medicinal%20diet%2C%20red%20dates%20porridge%2C%20detailed%20close-up&image_size=square',
    '百合粥.jpg': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lily%20Bulb%20Porridge%2C%20traditional%20Chinese%20medicinal%20diet%2C%20lily%20bulb%20porridge%2C%20detailed%20close-up&image_size=square',
}

for filename, url in image_urls.items():
    filepath = os.path.join('images', filename)
    if not os.path.exists(filepath):
        try:
            print(f'下载: {filename}')
            urllib.request.urlretrieve(url, filepath)
            print(f'已保存到: {filepath}')
        except Exception as e:
            print(f'下载失败 {filename}: {e}')
    else:
        print(f'已存在: {filename}')

print('图片下载完成！')