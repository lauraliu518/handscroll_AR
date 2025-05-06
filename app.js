// Copyright (c) 2020 8th Wall, Inc.
//
// app.js
// app.js is the main entry point for your 8th Wall web app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

const artifacts = [
    {
      'id': 'hotspotA',
      'title': '學士 Academician',
      'image': '/hotspot/assets/image9-77wb4v5u9s.png',
      'overview': [
      ],
      'moreInfo': ['The Hanlin Academy in the Ming Dynasty operated through three main divisions. Principal Officials included positions such as Academicians, Readers-in-Waiting, and Lecturers-in-Waiting. They oversaw the Academy and served as close advisors to the emperor. Associate Officials—such as Classics Scholars and Attendant Readers—supported the principal officials and provided literary and political counsel to the emperor. Historians, including Compilers, Editors, and Reviewers, were dedicated to historical writing and record-keeping. After Emperor Yingzongs reign, the Grand Secretariat gradually separated from the Hanlin Academy to become an independent advisory body within the inner court. As a result, the Hanlin Academy shifted more toward historical work, and the status of court historians rose significantly.',
      ],
    },
    {
      'id': 'hotspotF',
      'image': '/hotspot/assets/image4-uy9fkusc2r.jpg',
      'title': 'Tripod incense burner',
      'overview': [
        'Period: Ming dynasty (1368–1644)',
        'Date: 1486',
        'Medium: Copper alloy',
        'Dimensions: H. 15 11/16 in (39.8 cm); W. 11 3/4 in. (29.8 cm); D. 10 1/2 in. (26.7 cm)',
      ],
      'moreInfo': [
        'This censer blends archaic and Ming-era design, featuring a tripod form with elongated handles and a pouch-shaped body. Stylized dragons recall ancient models, while wave motifs reflect later ceramics. An inscription dates its casting to 1486 for the Confucian temple in Zengcheng, now part of Guangzhou.',
      ],
    },
    {
      'id': 'hotspotW',
      'image': '/hotspot/assets/image10-sieejgf04a.jpg',
      'title': '明宣德 景德鎮窯青花貫耳瓶Vase',
      'overview': [
        'Period: Ming dynasty (1368–1644), Xuande mark and period (1426–35)',
        'Medium: Porcelain decorated with cobalt blue under transparent glaze (Jingdezhen ware)',
        'Dimensions: H. 7 3/4 in. (19.7 cm); Diam. 4 in. (10.2 cm); Diam. of rim: 1 7/8 in. (4.8 cm); Diam. of foot: 2 1/2 in. (6.4 cm)',
      ],
      'moreInfo': [
        'During the Yongle and Xuande reigns of the Ming dynasty, large blue-and-white porcelain vessels—such as globular vases and moon flasks—were occasionally produced. These wares were decorated with cobalt-based designs painted directly onto the porcelain body, then covered with a clear glaze and fired at around 1,200°C. Blue-and-white pieces from this period are known for their rich, vivid blue tones and distinctive iron-oxide specks, creating a bold, recognizable style that later served as a key model for Qing dynasty reproductions.',
      ],
    },
    {
      'id': 'hotspotE',
      'image': '/hotspot/assets/image3-dnyr91j6ae.jpg',
      'title': '黑漆灑螺鈿嵌琺瑯面雙龍戲珠紋圓凳Round stool with black lacquer, sprinkled mother-of-pearl inlay, enameled surface, and a double-dragon chasing pearl motif',
      'overview': [
        'Period: Ming dynasty (1368–1644)',
        'Medium: Wood, black lacquer, mother-of-pearl inlay, and enamel.',
        'Dimensions: Height: 41 cm; seat diameter: 42.5 cm.',
      ],
      'moreInfo': [
        'The stool has a round seat with a central panel inlaid with cloisonné enamel depicting two dragons chasing a pearl. Below the seat is a raised edge leading to a waisted section divided into five segments, each with a beveled rectangular openwork panel. Beneath this are decorative aprons and legs with swelling drum-shaped forms, ending in inward-curled cloud-shaped feet resting on a base. The entire surface is finished in black lacquer and densely sprinkled with finely ground mother-of-pearl, giving the piece a shimmering, iridescent appearance.',
      ],
    },
    {
      'id': 'hotspotO',
      'image': '/hotspot/assets/image12-zdpgobau7n.jpg',
      'title': '黃花梨木方背椅Square-back chair made of huanghuali wood',
      'overview': [
        'Period: Ming dynasty (1368–1644)',
        'Medium: Huanhuali wood',
        'Dimensions: Height: 92.5 cm, length: 61.5 cm, width: 47 cm.',
      ],
      'moreInfo': [
        'The backrest, armrests, curved “goose-neck” supports, and side stretchers are all elegantly curved. The S-shaped side stretchers taper from bottom to top, adding a lively sense of movement to the form. Beneath the seat are a humpback stretcher and low footrest, echoing the double stretchers between the legs. The chair’s overall structure is square and dignified, yet softened by graceful curves that lend it a decorative and dynamic character.',
      ],
    },
    {
      'id': 'hotspotM',
      'title': '少傅 Junior Mentor',
      'image': '/hotspot/assets/image2-cf6s8cci1u.png',
      'overview': [
      ],
      'moreInfo': ['The Three Junior Tutors of the Crown Prince in the Ming Dynasty—namely the Junior Preceptor (太子少師), Junior Mentor (太子少傅), and Junior Guardian (太子少保)—were high-ranking officials with the rank of Second Grade(正二品). Originally, they served as senior advisors in the Eastern Palace, responsible for guiding and educating the crown prince through moral example, modeled after the virtues of the Three Dukes. Over time, however, these positions became largely honorary titles without substantive duties.',
      ],
    },
    {
      'id': 'hotspotL',
      'title': '大學士 Grand Academician',
      'image': '/hotspot/assets/image14-s8ptjg6o7n.png',
      'overview': [
      ],
      'moreInfo': [
        'As senior secretarial officials assisting the emperor, the Grand Academician (大學士) rose to prominence in the Ming Dynasty after Emperor Zhu Yuanzhang abolished the position of Chancellor. By the mid-to-late Ming period, the Chief Grand Academician effectively held the powers of a Chancellor, though without the official title. Their primary duty was to review memorials submitted by civil and military officials and draft preliminary responses (known as piao ni) for the emperor’s consideration. The emperor would then decide whether to adopt these suggestions. Vietnam later adopted a similar position modeled on China’s system. In the Qing Dynasty, the Grand Academician continued, but its power was limited by the Council of Princes and High Officials and later by the decision-making mechanisms of the Inner Court, reducing the Academician to a primarily administrative role in forwarding documents.',
      ],
    },
    {
      'id': 'hotspotK',
      'image': '/hotspot/assets/image11-ufi9kuci5i.jpg',
      'title': '明中期 掐絲琺瑯山水人物圖插Table screen with landscape',
      'overview': [
        'Period: Ming dynasty (1368–1644)',
        'Date: second half 15th century',
        'Medium: Cloisonné enamel, wood frame and stand',
        'Dimensions: H. 19 3/8 in. (49.2 cm); W. 19 1/8 in. (48.6 cm)',
      ],
      'moreInfo': [
        'In Ming and Qing China, table screens were commonly found in the studies of affluent households, serving both functional and aesthetic purposes—offering privacy, and shielding from wind or dust. This particular example belongs to a rare group of cloisonné enamel landscape screens produced by the imperial Ming workshop. Its vivid blues and greens recall the golden age of Chinese painting, while the refined use of copper wires to emulate traditional brushwork exemplifies the successful adaptation of Chinese artistic sensibilities to the cloisonné technique, which had been introduced from the West a century earlier.',
      ],
    },
    {
      'id': 'hotspotJ',
      'image': '/hotspot/assets/image5-cvpa8cpu7n.jpg',
      'title': 'Inkstone with Pine Tree and Bird',
      'overview': [
        'Period: Ming dynasty (1368–1644)',
        'Date: 16th century',
        'Medium: Slate',
        'Dimensions: H. 7 in. (17.8 cm); W. 4 15/16 in. (12.5 cm)',
      ],
      'moreInfo': [
        'In the early Ming dynasty, inkstone designs largely continued the Tang and Song tradition of simple, rectangular forms. By the mid-to-late Ming period, however, styles became more diverse, and a new generation of skilled inkstone carvers emerged. Ornamental and artistically crafted inkstones became the mainstream.',
      ],
    },
    {
      'id': 'hotspotI',
      'image': '/hotspot/assets/image6-y5tmnm468v.jpg',
      'title': '明 銅犀牛形水注Water dropper in the shape of a rhinoceros',
      'overview': [
        'Period: Ming dynasty (1368–1644)',
        'Date: 15th century',
        'Medium: Copper alloy',
        'Dimensions: H. 2 1/8 in (5.4 cm); W. 5 in. (12.7 cm); D. 1 7/8 in. (4.8 cm)',
      ],
      'moreInfo': [
        'Water droppers, also known as ink droppers, are essential scholar’s objects used to control the flow of water while grinding ink. Over time, they evolved beyond their practical function to become objects of artistic expression, blending utility with aesthetic appeal. This charming example, shaped as a Javanese rhinoceros with a stout horn and deeply folded hide, captures lifelike detail—suggesting the artist may have studied a real animal, perhaps one from the imperial menagerie.',
      ],
    },
    {
      'id': 'hotspotG',
      'image': '/hotspot/assets/image1-ulvpkuhi9h.jpg',
      'title': 'Brush Rest with Persian Inscription',
      'overview': [
        'Period: Ming dynasty (1368–1644), Zhengde mark and period (1506–21)',
        'Date: early 16th century',
        'Medium: Porcelain painted with cobalt blue under transparent glaze (Jingdezhen ware)',
        'Dimensions: W. 8 3/4 in. (22.2 cm)',
      ],
      'moreInfo': [
        'This porcelain brush rest, shaped in a traditional Chinese form, is adorned with finely hand-painted motifs. Inscribed with the characters for \'pen\' on one side and \'holder\' on the other, it elegantly reflects both function and artistry.',
      ],
    },
    {
      'id': 'hotspotH',
      'image': '/hotspot/assets/image2-w59dm8462r.jpg',
      'title': '明 銅鎏金麒麟形紙鎮Paperweight in the shape of a Qilin',
      'overview': [
        'Period: Ming dynasty (1368–1644)',
        'Date: 15th–16th century',
        'Medium: Copper alloy',
        'Dimensions: W. 2 1/2 in. (6.4 cm); W. 2 1/2 in. (6.4 cm); D. 1 3/4 in. (4.4 cm)',
      ],
      'moreInfo': [
        'In ancient China, scholars often placed small bronzes or jades on their desks for admiration and practical use, such as holding down paper or books. This gave rise to the paperweight. In the Confucian tradition, the qilin is a mythical beast that appears with the rise of a sage ruler. This finely cast bronze qilin likely served both as an auspicious symbol and a functional paperweight in a scholar’s study.',
      ],
    },
    {
      'id': 'hotspotS',
      'image': '/hotspot/assets/image8-9t7d69o625.jpg',
      'title': '明　黃花梨　畫案Painting table',
      'overview': [
        'Period: Ming dynasty (1368–1644)',
        'Date: late 16th–early 17th century',
        'Medium: Wood (huanghuali, Dalbergia odorifera)',
      ],
      'moreInfo': [
        'Made of huanghuali wood, this table features a broad surface, likely intended for use as a painting desk—ideal for laying out either horizontal scrolls or vertical sheets of paper.',
      ],
    },
    {
      'id': 'hotspotQ',
      'title': '大宗伯 The Minister of Rites',
      'image': '/hotspot/assets/image13-fvqwafpu7y.png',
      'overview': [
      ],
      'moreInfo': ['The Minister of Rites(禮部尚書) in the Ming Dynasty was the highest-ranking official in the Ministry of Rites, one of the six central ministries. Also known as the Grand Master of Ceremonies(大宗伯), with the Left and Right Vice Ministers referred to as *Lesser Masters of Ceremonies(少宗伯), this position oversaw national affairs related to rituals, state ceremonies, banquets, civil service examinations, diplomacy, and religious matters. After the capital was moved during the Yongle reign, a parallel Ministry of Rites was established in Nanjing, along with the other five ministries. However, the Nanjing Ministers—including the Minister of Rites—held largely honorary titles by that time. These roles became symbolic or advisory in nature and no longer held real political power within the central government structure.',
      ],
    },
    {
      'id': 'hotspotU',
      'image': '/hotspot/assets/image7-uheekue64a.jpg',
      'title': '明晚期 景德鎮窯青花桶形水指Freshwater jar',
      'overview': [
        'Period: Ming dynasty (1368–1644)',
        'Date: early 17th century',
        'Medium: Porcelain painted with cobalt blue under a transparent glaze (Jingdezhen ware for Japanese market)',
        'Dimensions: H. 10 1/14 in. (26 cm); Diam. of rim 8 1/2 in. (21.6 cm); Diam. of foot 6 3/4 in. (17.1 cm)',
      ],
      'moreInfo': [
        'Used in tea ceremonies, this lidded container holds fresh water and is paired with a ladle to adjust the temperature of boiling water or rinse tea bowls. Like the tea bowl, it is also an object of aesthetic appreciation. During the seventeenth century, as imperial patronage declined, Jingdezhen potters turned to new markets such as Japan, where the tea ceremony drove demand for Chinese ceramics. This porcelain jar, made for that purpose, mimics the form of a rustic wooden bucket—a blend of elegance and simplicity that appealed to Japanese tastes.',
      ],
    },
    {
      'id': 'hotspotT',
      'image': '/hotspot/assets/image9-yyt8nmsc8v.jpg',
      'title': '明成化 景德鎮窯鬥彩雞缸杯Chicken cup',
      'overview': [
        'Period: Ming dynasty (1368–1644), Chenghua mark and period (1465–87)',
        'Medium: Porcelain painted in underglaze cobalt blue and overglaze colored enamel (Jingdezhen ware)',
        'Dimensions: H. 1 5/8 in. (4.1 cm); Diam. of rim 3 1/4 in. (8.3 cm); Diam. of foot 1 1/2 in. (3.8 cm)',
      ],
      'moreInfo': [
        'This small, bowl-shaped vessel from the mid-Ming imperial kiln—known as a “chicken cup”—is celebrated as a pinnacle of Chinese porcelain. Its vibrant decoration involved a two-step process: cobalt blue designs were painted before glazing and high-temperature firing, followed by overglaze enamels and a second, lower-temperature firing. The imagery, featuring hens and chicks, reflects the Chinese value of nurturing the young to ensure the family\'s continuation.',
      ],
    },
    {
      'id': 'hotspotR',
      'image': '/hotspot/assets/image5-y7aknm5u32.jpg',
      'title': '詹事Supervisor of the Household of the Heir Apparent',
      'overview': [
        'The Household of the Heir Apparent (詹事府) was an institution in the Ming Dynasty responsible for assisting and educating the crown prince. It was led by a Supervisor (詹事), assisted by a Vice Supervisor (少詹事), and supported by two Administrators (府丞). The Supervisor oversaw the affairs of the Household, including its offices and departments, ensuring the proper guidance of the crown prince. The Vice Supervisor served as the deputy official. The Household was responsible for instructing the crown prince in texts such as The Book of Documents (尚書), The Spring and Autumn Annals (春秋), Comprehensive Mirror to Aid in Government (資治通鑑), Expanded Meanings of the Great Learning (大學衍義), and Essentials of Governance from the Zhenguan Reign (貞觀政要), along with teachings on state governance.',
      ],
    },
  ]
  
  import './css/index.css'
  
  import {recenterButtonComponent} from './components/recenter.js'
  import {tapHotspotComponent} from './components/tap-hotspot.js'
  import {tapCloseComponent} from './components/tap-close.js'
  
  window.hideAll = () => {
    document.getElementById('container').classList.add('collapsed')
    document.querySelectorAll('a-text').forEach(el => el.setAttribute('visible', false))
    const hotspotChildren = document.querySelectorAll('a-text')
    hotspotChildren.forEach(element => element.setAttribute('visible', false))
    for (const item of artifacts) {
      const {id} = item
      document.getElementById(`${id}-div`).classList.add('hidden')
    }
    const targets = document.querySelectorAll('.currentTarget')
    for (const t of targets) {
      t.classList.remove('currentTarget')
    }
  }
  
  window.showAR = () => {
    const container = document.getElementById('container')
    if (container) {
      container.classList.add('collapsed')
    } else {
      console.log('container not found')
    }
    const currentTarget = document.querySelector('.currentTarget')
    const id = currentTarget.getAttribute('id').split('-')[0]
  
    console.log(`the id is${id}`)
    const armodel = document.getElementById(`${id}-model`)
    armodel.setAttribute('visible', true)
  }
  
  AFRAME.registerComponent('recenter-button', recenterButtonComponent)
  AFRAME.registerComponent('tap-close', tapCloseComponent)
  
  const intervalId = setInterval(() => {
    const app = document.querySelector('#container')
    console.error('vue')
    if (app) {
      clearInterval(intervalId)
      registerVue()
    }
  }, 1000)
  
  function registerVue() {
    window.vueApp = Vue.createApp({
      data() {
        return {
          hotspots: artifacts,
        }
      },
      methods: {
      },
    }).mount('#container')
  }
  AFRAME.registerComponent('tap-hotspot', tapHotspotComponent)
  
  AFRAME.registerComponent('gesture-rotate-z', {
    init() {
      const {el} = this
      let startX = null
  
      el.sceneEl.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          startX = e.touches[0].clientX
        }
      })
  
      el.sceneEl.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && startX !== null) {
          const deltaX = startX - e.touches[0].clientX
          const rotation = el.getAttribute('rotation')
          rotation.z += deltaX * 0.5  // adjust sensitivity
          el.setAttribute('rotation', rotation)
          startX = e.touches[0].clientX
        }
      })
  
      el.sceneEl.addEventListener('touchend', () => {
        startX = null
      })
    },
  })
  
  AFRAME.registerComponent('gesture-rotate-x', {
    init() {
      const {el} = this
      let startY = null
  
      el.sceneEl.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          startY = e.touches[0].clientY
        }
      })
  
      el.sceneEl.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && startY !== null) {
          const deltaY = e.touches[0].clientY - startY
          const rotation = el.getAttribute('rotation')
          rotation.x += deltaY * 0.5  // adjust sensitivity
          el.setAttribute('rotation', rotation)
          startY = e.touches[0].clientY
        }
      })
  
      el.sceneEl.addEventListener('touchend', () => {
        startY = null
      })
    },
  })
  