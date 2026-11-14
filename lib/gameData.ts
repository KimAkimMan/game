// Auto-generated data file from nyoba_web.html

export interface CharacterItem {
  category: string;
  image: string;
  name: string;
  feedback: string;
}

export interface FilterOption {
  id: string;
  label: string;
}

export interface GameSectionData {
  id: string;
  title: string;
  filters: FilterOption[];
  characters: CharacterItem[];
}

export interface GalleryEvent {
  eventKey: string;
  eventTitle: string;
  images: string[];
}

export const GAME_SECTIONS: Record<string, GameSectionData> = {
  genshin: {
    id: "genshin",
    title: "Genshin Impact",
    filters: [
  {
    "id": "all",
    "label": "All"
  },
  {
    "id": "preview",
    "label": "Preview"
  },
  {
    "id": "mondstadt",
    "label": "Mondstadt"
  },
  {
    "id": "liyue",
    "label": "Liyue"
  },
  {
    "id": "inazuma",
    "label": "Inazuma"
  },
  {
    "id": "sumeru",
    "label": "Sumeru"
  },
  {
    "id": "fontaine",
    "label": "Fontaine"
  },
  {
    "id": "natlan",
    "label": "Natlan"
  },
  {
    "id": "snezhnaya",
    "label": "Snezhnaya"
  }
],
    characters: [
  {
    "category": "preview",
    "image": "/iseng/monstad.jpg",
    "name": "Mondstadt",
    "feedback": "Kota kebebasan yang terletak di bagian timur laut Teyvat, berdiri dengan megah di atas pulau di tengah-tengah danau. Angin berhembus melewati pegunungan dan lahan-lahan luas, sambil membawa harum aroma dari benih-benih dandelion — berkat dari Dewa Anemo, Barbatos — yang berterbangan dari Cider Lake sampai ke Mondstadt, guna mencari tempat untuk menanamkan akarnya."
  },
  {
    "category": "preview",
    "image": "/iseng/liyue.jpg",
    "name": "Liyue",
    "feedback": "Pelabuhan yang terletak di bagian Teyvat Timur. Gunung-gunung berdiri dengan gagah di sekeliling sehamparan hutan batu, mendampingi sebuah lahan luas dan sungai yang penuh kehidupan, membuat keindahan pemandangan yang asri dan alami di Liyue, dilukiskan dengan warna yang berbeda-beda seiring bergantinya musim. Ada berapa banyak kira-kira berkat yang diberikan oleh Dewa Geo di antara bebatuan pegunungan Liyue?"
  },
  {
    "category": "preview",
    "image": "/iseng/inazuma.jpg",
    "name": "Inazuma",
    "feedback": "Kepulauan Tertutup Jauh di Timur Teyvat Hadapilah badai petir yang tiada henti, dan jejakkan kaki di pulau yang bergelimang maple merah dan sakura. Di pesisir pantai yang berliku, di tebing yang menjulang tinggi, di hutan dan gunung yang penuh dengan rahasia, saksikanlah Keabadian yang dikejar oleh Yang Mulia — sang Narukami Ogosho Yang Mahakuasa."
  },
  {
    "category": "preview",
    "image": "/iseng/sumeru.jpg",
    "name": "Sumeru",
    "feedback": "Kota universitas yang terletak di tengah sisi barat Teyvat.Sebuah bangsa eksotis di mana terdapat hutan hujan yang rimbun dan gurun pasir yang tandus. Buah kebijaksanaan yang tak terhitung jumlahnya berakar, berkembang, dan layu di sini. Setiap Traveler yang datang ke sini dapat memperoleh pengetahuan yang berharga dengan melewati hutan, mendaki tangga pengetahuan, atau mengungkap reruntuhan kuno di gurun pasir."
  },
  {
    "category": "preview",
    "image": "/iseng/fontaine.jpg",
    "name": "Fontaine",
    "feedback": "Cerita yang belum pernah didengar dan legenda yang sudah lama terlupakan layaknya kerajaan yang menghilang di bawah air sedang mendambakan datangnya sesosok wisatawan. Setelah mengikuti arah berasalnya air, melintasi alam liar, hutan belantara serta lautan berpasir, sampailah juga kamu di sumber sistem perairan bangsa ini. Di puncak air terjun dan di kedalaman laut yang ada di atas dataran tinggi, babak baru dari sebuah petualangan sedang dimulai dengan tenang."
  },
  {
    "category": "preview",
    "image": "/iseng/natlan.jpg",
    "name": "Natlan",
    "feedback": "Natlan is located beyond the west side of Sumeru's desert region, the Great Red Sand, from the Desert of Hadramaveth. It is also home to natural hot springs created from volcanic activity.[3][4] Its people are grouped into tribes, and each tribe follows different rules.[5] During Tenoch's era 500 years ago, there were at least six major tribes in Natlan, of which all are extant by the time the Traveler arrives there.[6]"
  },
  {
    "category": "mondstadt",
    "image": "/iseng/eula.png",
    "name": "Eula",
    "feedback": "Sang Spindrift Knight, keturunan keluarga bangsawan dan Kapten dari Pasukan Gerilya Knights of Favonius. Alasan kenapa seorang keturunan bangsawan kuno ingin bergabung dengan para Knight masih menjadi misteri di Mondstadt sampai saat ini."
  },
  {
    "category": "mondstadt",
    "image": "/iseng/jean.png",
    "name": "Jean",
    "feedback": "Dandelion Knight yang menjunjung tinggi keadilan dan kebenaran. Menjabat sebagai Grand Master Knights of Favonius di Mondstadt."
  },
  {
    "category": "mondstadt",
    "image": "/iseng/klee.png",
    "name": "Klee",
    "feedback": "Seorang ahli peledak yang sudah menjadi langganan di ruang tahanan Knights of Favonius. Juga dikenal dengan nama Fleeing Sunlight."
  },
  {
    "category": "mondstadt",
    "image": "/iseng/lisa.png",
    "name": "Lisa",
    "feedback": "Pustakawan Knights of Favonius yang sangat malas namun berwawasan sangat luas, pernah dinyatakan oleh Sumeru Academia sebagai siswi kelulusan terbaik 2 abad terakhir."
  },
  {
    "category": "mondstadt",
    "image": "/iseng/fischl.png",
    "name": "Fischl",
    "feedback": "Seorang gadis misterius yang menyebut dirinya sendiri \"Prinzessin der Verurteilung\", dia selalu terlihat bersama dengan seekor gagak hitam yang bernama Oz."
  },
  {
    "category": "mondstadt",
    "image": "/iseng/barbara.png",
    "name": "Barbara",
    "feedback": "Setiap penduduk Mondstadt mendambakan Barbara. Tetapi kata \"idola\" yang melekat padanya, dia hanya melihatnya dari majalah."
  },
  {
    "category": "mondstadt",
    "image": "/iseng/mona.png",
    "name": "Mona",
    "feedback": "Seorang astrolog yang menyebut dirinya sendiri sebagai \"Astrologist Mona Megistus\", dan memiliki kemampuan yang sesuai dengan julukannya. Kepandaiannya setara dengan keangkuhannya."
  },
  {
    "category": "mondstadt",
    "image": "/iseng/sucrose.png",
    "name": "Sucrose",
    "feedback": "Seorang alkemis dipenuhi dengan rasa ingin tahu tentang semua hal. Dia meneliti bio-alkimia."
  },
  {
    "category": "liyue",
    "image": "/iseng/xianyun.png",
    "name": "Xianyun",
    "feedback": "Salah satu Adeptus yang agung dan mulia dari Jueyun, \"Cloud Retainer\". Ahli segala jenis mekanika, yang hatinya kini berpaling kepada dunia fana. \"Xianyun\" Adalah nama yang digunakannya setelah turun gunung."
  },
  {
    "category": "liyue",
    "image": "/iseng/ganyu.png",
    "name": "Ganyu",
    "feedback": "Seorang sekretaris di Yuehai Pavilion. Darah hewan pusaka Qilin mengalir di dalam tubuhnya."
  },
  {
    "category": "liyue",
    "image": "/iseng/yelan.png",
    "name": "Yelan",
    "feedback": "Orang misterius yang mengaku bekerja di Bagian Urusan Sipil, tetapi \"tidak terdaftar\" di data Bagian Urusan Sipil."
  },
  {
    "category": "liyue",
    "image": "/iseng/hutao.png",
    "name": "Hutao",
    "feedback": "Master ke-77 Wangsheng Funeral Parlor. Dia mengambil alih bisnis ini di umur yang cukup muda."
  },
  {
    "category": "liyue",
    "image": "/iseng/shenhe.png",
    "name": "Shenhe",
    "feedback": "Seorang murid Adeptus dengan temperamen yang sedikit unik. Karena sudah lama hidup terisolasi di pegunungan Liyue, sifatnya juga menjadi acuh tak acuh dan menjaga jarak seperti para Adeptus."
  },
  {
    "category": "liyue",
    "image": "/iseng/keqing.png",
    "name": "Keqing",
    "feedback": "Yuheng dari Liyue Qixing, dia punya banyak hal yang ingin dikatakan mengenai Rex Lapis yang memerintah Liyue- dan pada kenyataannya, para Dewa mengagumi orang-orang sepertinya."
  },
  {
    "category": "inazuma",
    "image": "/iseng/ei.png",
    "name": "Ei",
    "feedback": "Yang Mulia, Sang Narukami Ogosho Yang Mahakuasa. Dia menjanjikan para penduduk Inazuma keabadian yang tidak akan pernah berubah."
  },
  {
    "category": "inazuma",
    "image": "/iseng/yaemiko.png",
    "name": "Yae Miko",
    "feedback": "Lady Guuji dari Kuil Agung Narukami juga menjabat sebagai pemimpin redaksi Yae Publishing House. Kecerdasan dan kelicikan yang tidak dapat dibayangkan tersembunyi di balik penampilannya yang cantik."
  },
  {
    "category": "inazuma",
    "image": "/iseng/ayaka.png",
    "name": "Kamisato Ayaka",
    "feedback": "Putri dari Klan Kamisato di Yashiro Commission. Bermartabat dan elegan, cerdas dan tangguh."
  },
  {
    "category": "inazuma",
    "image": "/iseng/yoimiya.png",
    "name": "Yoimiya",
    "feedback": "Pemilik Naganohara Fireworks. Juga dikenal sebagai \"Ratu Festival Musim Panas\", dia mahir membuat kembang api yang melambangkan harapan dan impian semua orang."
  },
  {
    "category": "inazuma",
    "image": "/iseng/kokomi.png",
    "name": "Sangonomiya Kokomi",
    "feedback": "Sang Pemimpin Suci di Pulau Watatsumi. Segala urusan yang terjadi di pulau tersebut ada dalam genggaman nona muda ini."
  },
  {
    "category": "sumeru",
    "image": "/iseng/nilor.png",
    "name": "Nilou",
    "feedback": "Penari terkenal di Teater Zubayr. Tariannya elegan dan gemulai, pembawaannya ramah dan polos."
  },
  {
    "category": "sumeru",
    "image": "/iseng/nahida.png",
    "name": "Nahida",
    "feedback": "Seorang gadis yang dikurung bak burung di dalam sangkar Sanctuary of Surasthana, hanya bisa melihat dunia dari dalam mimpi."
  },
  {
    "category": "sumeru",
    "image": "/iseng/collei.png",
    "name": "Collei",
    "feedback": "Seorang Penjaga Hutan Pemula yang aktif di Hutan Avidya. Tutur kata dan perbuatannya sangat lembut, namun kepribadiannya sedikit tertutup."
  },
  {
    "category": "sumeru",
    "image": "/iseng/faruzan.png",
    "name": "Faruzan",
    "feedback": "Peneliti dari \"seratus tahun lalu\". Dia suka mengaku diri sebagai seniornya semua orang dan punya pengetahuan yang luas tentang berbagai naskah kuno dan segala jenis mesin."
  },
  {
    "category": "sumeru",
    "image": "/iseng/dehya.png",
    "name": "Dehya",
    "feedback": "Seorang anggota Eremite, sebuah organisasi tentara bayaran di Sumeru. Dia berani, kuat, dan sudah sangat terkenal di kalangan Eremite."
  },
  {
    "category": "sumeru",
    "image": "/iseng/candace.png",
    "name": "Candace",
    "feedback": "Keturunan Raja Deshret yang memiliki mata kiri berwarna kuning keemasan. Pelindung Desa Aaru."
  },
  {
    "category": "fontaine",
    "image": "/iseng/lynette.png",
    "name": "Lynette",
    "feedback": "Asisten pesulap yang tidak banyak bicara. Emosinya sulit ditebak, persis seperti kucing."
  },
  {
    "category": "fontaine",
    "image": "/iseng/charlotte.png",
    "name": "Charlotte",
    "feedback": "Seorang reporter dari The Steambird yang selalu terlihat sangat bersemangat. Ia tidak pernah berhenti berlari ke sana kemari untuk mencari \"kebenaran\"."
  },
  {
    "category": "fontaine",
    "image": "/iseng/furina.png",
    "name": "Furina",
    "feedback": "Pusat perhatian utama panggung pengadilan, hingga tepuk-tangan di penghujung acara terdengar."
  },
  {
    "category": "fontaine",
    "image": "/iseng/navia.png",
    "name": "Navia",
    "feedback": "Ketua Spina di Rosula, bos yang cantik, baik, dan bertanggung jawab."
  },
  {
    "category": "fontaine",
    "image": "/iseng/chiori.png",
    "name": "Chiori",
    "feedback": "Pemilik Chioriya Boutique. Penjahit yang namanya sangat terkenal di Fontaine."
  },
  {
    "category": "fontaine",
    "image": "/iseng/arlecchino.png",
    "name": "Arlecchino",
    "feedback": "Fatui Harbinger ke-4 \"The Knave\". Diplomat yang tenang dan kejam. Dikenal sebagai \"Ayah\" yang dihormati dan dapat diandalkan oleh anak-anak di House of the Hearth."
  },
  {
    "category": "fontaine",
    "image": "/iseng/clorinde.png",
    "name": "Clorinde",
    "feedback": "Petarung Juara tak terkalahkan. Dengan pedang di tangannya, dia mempertahankan keadilan di Court of Fontaine."
  },
  {
    "category": "natlan",
    "image": "/iseng/citlali.png",
    "name": "Citlali",
    "feedback": "Shaman Agung dari Penguasa Angin Malam, Nenek Itztli yang dihormati oleh orang dari semua suku."
  },
  {
    "category": "natlan",
    "image": "/iseng/mavuika.png",
    "name": "Mavuika",
    "feedback": "Seorang pemimpin Natlan yang mewarisi Marga Kuno \"Kiongozi\". Dia bersumpah untuk menerangi masa depan bangsa peperangan dengan Api Keramat."
  },
  {
    "category": "natlan",
    "image": "/iseng/mualani.png",
    "name": "Mualani",
    "feedback": "Pemandu yang sudah terkenal di seantero Natlan, merupakan pemilik toko olahraga air, merupakan ahli dalam berbagai jenis berselancar ombak."
  },
  {
    "category": "natlan",
    "image": "/iseng/kachina.png",
    "name": "Kachina",
    "feedback": "Pejuang muda Nanatzcayan yang menyandang Marga Kuno \"Uthabiti\". Baik hati dan pantang menyerah, dia tumbuh lebih kuat acap kali berhasil melewati rintangan yang menghadang."
  },
  {
    "category": "natlan",
    "image": "/iseng/xilonen.png",
    "name": "Xilonen",
    "feedback": "Seorang Pengukir Marga Nanatzcayan yang sangat terampil dalam mencari keseimbangan antara beban kerja yang berat dan hidup dengan nyaman."
  },
  {
    "category": "natlan",
    "image": "/iseng/chasca.png",
    "name": "Chasca",
    "feedback": "\"Penengah\" Tlalocan yang sudah berhasil mengakhiri perselisihan yang tak terhitung jumlahnya."
  },
  {
    "category": "snezhnaya",
    "image": "/iseng/#",
    "name": "?",
    "feedback": "COMING SOON"
  }
]
  },
  zenles: {
    id: "zenles",
    title: "Zenles Zone Zero",
    filters: [
  {
    "id": "all",
    "label": "All"
  },
  {
    "id": "preview",
    "label": "Preview"
  },
  {
    "id": "Cunning",
    "label": "Cunning Hares"
  },
  {
    "id": "Sons",
    "label": "Sons Of Calydon"
  },
  {
    "id": "Victoria",
    "label": "Victoria HouseKeeping"
  },
  {
    "id": "belobog",
    "label": "Belobog Heavy Industries"
  },
  {
    "id": "section6",
    "label": "Section 6"
  },
  {
    "id": "srt",
    "label": "Spesial Response Team"
  },
  {
    "id": "stars",
    "label": "Stars of Lyra"
  },
  {
    "id": "obol",
    "label": "Obol Squad"
  }
],
    characters: [
  {
    "category": "preview",
    "image": "/iseng/cunning_hares.723b32a.png",
    "name": "Cunning Hares",
    "feedback": "The Cunning Hares are always available for the right price!"
  },
  {
    "category": "preview",
    "image": "/iseng/sons.png",
    "name": "Sons Of Calydon",
    "feedback": "1 come, I sen, I crasht"
  },
  {
    "category": "preview",
    "image": "/iseng/victoria.png",
    "name": "Victoria HouseKeeping",
    "feedback": "Thank you for using Victoria Housekeeping. Your wish is our command."
  },
  {
    "category": "preview",
    "image": "/iseng/belobog.png",
    "name": "Belobog Heavy Industries",
    "feedback": "Our goal is not to build a house, but a home."
  },
  {
    "category": "preview",
    "image": "/iseng/section6.png",
    "name": "Section 6",
    "feedback": "Eradicate all evil we decide for ourselves what \"evil\" is."
  },
  {
    "category": "preview",
    "image": "/iseng/srt.png",
    "name": "Spesial Response Team",
    "feedback": "If you encounter any trouble, please contact New Eridu Public Security."
  },
  {
    "category": "preview",
    "image": "/iseng/stars.jpeg",
    "name": "Stars Of Lyra",
    "feedback": "\"My Queen! Here, over here! Wait... This lady is so pretty... Is she a celebrity as well?\""
  },
  {
    "category": "preview",
    "image": "/iseng/obol.png",
    "name": "Obol Squad",
    "feedback": "\"What a beautiful harmonica melody... Wait, there's no one here? C-Could it be a ghost?!\""
  },
  {
    "category": "Cunning",
    "image": "/iseng/anbi.jpg",
    "name": "Anby",
    "feedback": "Target confirmed. Commencing the operation"
  },
  {
    "category": "Cunning",
    "image": "/iseng/nicole.jpg",
    "name": "Nicole",
    "feedback": "A wise choice! But I should warn you, my services don't come cheap!"
  },
  {
    "category": "Cunning",
    "image": "/iseng/nekomata.jpg",
    "name": "Nekomata",
    "feedback": "The best mackerel is always the one you haven't eaten yet~"
  },
  {
    "category": "Sons",
    "image": "/iseng/caesar.jpg",
    "name": "Caesar King",
    "feedback": "I'm Caesar herself, the leader of Sons of Calydon."
  },
  {
    "category": "Sons",
    "image": "/iseng/burnice.jpg",
    "name": "Burnice",
    "feedback": "You don't seem too fired up. Need a little spark~?"
  },
  {
    "category": "Sons",
    "image": "/iseng/viper.jpg",
    "name": "Piper Wheel",
    "feedback": "Need a lift? Don't forget to buckle up."
  },
  {
    "category": "Sons",
    "image": "/iseng/luzy.jpg",
    "name": "Lucy",
    "feedback": "An honored guest just arrived. Allow me, Lady Lucy, to entertain you!"
  },
  {
    "category": "Victoria",
    "image": "/iseng/rina.jpg",
    "name": "Alexadriana",
    "feedback": "Are you the new master? Rina from Victoria Housekeeping, at your service"
  },
  {
    "category": "Victoria",
    "image": "/iseng/ellen.jpg",
    "name": "Ellen Joe",
    "feedback": "Ah, another annoying commission... I should've taken a different shift."
  },
  {
    "category": "Victoria",
    "image": "/iseng/corin.jpg",
    "name": "Corin Wickes",
    "feedback": "Can someone like me really manage?"
  },
  {
    "category": "belobog",
    "image": "/iseng/koleda.jpg",
    "name": "Koleda Belobog",
    "feedback": "I'm Belobog Heavy Industries' president, Koleda."
  },
  {
    "category": "belobog",
    "image": "/iseng/grace.jpg",
    "name": "Grace Howard",
    "feedback": "Such sharp and strong lines, truly beautiful... I can't help but want to open it up and take a look."
  },
  {
    "category": "section6",
    "image": "/iseng/miyabi.jpg",
    "name": "Hoshimi Miyabi",
    "feedback": "Order cannot be broken."
  },
  {
    "category": "section6",
    "image": "/iseng/yanagi.jpg",
    "name": "Tsukishiro yanagi",
    "feedback": "Hello, I'm Tsukishiro Yanagi, Deputy Chief of Section 6."
  },
  {
    "category": "section6",
    "image": "/iseng/soukaku.jpg",
    "name": "Soukaku",
    "feedback": "I'm happy as long as I can always eat my fill-"
  },
  {
    "category": "srt",
    "image": "/iseng/zhuyuan.jpg",
    "name": "Zhu Yuan",
    "feedback": "Leader of Public Security's Criminal Investigation team, Zhu Yuan, standing by."
  },
  {
    "category": "srt",
    "image": "/iseng/jane.jpg",
    "name": "Jane Doe",
    "feedback": "Well, last time was last time! This time, I'm telling the truth. Trust me~"
  },
  {
    "category": "srt",
    "image": "/iseng/qingyi.jpg",
    "name": "Qingyi",
    "feedback": "A chance encounter, just as I had hoped."
  },
  {
    "category": "stars",
    "image": "/iseng/astrayao.jpg",
    "name": "Astra Yao",
    "feedback": "This next song is dedicated to the world!"
  },
  {
    "category": "stars",
    "image": "/iseng/evelyn.png",
    "name": "Evelyn",
    "feedback": "\"Miss Yao is currently enjoying her private time and will not be taking any interviews.\""
  },
  {
    "category": "obol",
    "image": "/iseng/soldier11.jpg",
    "name": "Soldier 11",
    "feedback": "I don't care where you've been, but whatever the case, I await my orders."
  }
]
  },
  bluearchive: {
    id: "bluearchive",
    title: "Blue Archive",
    filters: [
  {
    "id": "all",
    "label": "All"
  },
  {
    "id": "preview",
    "label": "preview"
  },
  {
    "id": "abydos",
    "label": "Abydos"
  },
  {
    "id": "gehenna",
    "label": "Gehenna"
  },
  {
    "id": "millennium",
    "label": "Millennium"
  },
  {
    "id": "trinity",
    "label": "Trinity"
  },
  {
    "id": "hyakkiyako",
    "label": "Hyakkiyako"
  },
  {
    "id": "shanhaijing",
    "label": "Shanhaijing"
  },
  {
    "id": "redwinter",
    "label": "Red Winter"
  },
  {
    "id": "valkyrie",
    "label": "Valkyrie"
  },
  {
    "id": "srt",
    "label": "SRT"
  },
  {
    "id": "arius",
    "label": "Arius"
  }
],
    characters: [
  {
    "category": "preview",
    "image": "/iseng/abydos.jpg",
    "name": "Abydos High School",
    "feedback": "The longest running school in Kivotos, formerly thriving and boasting incredible financial and military power, before the unnatural and unfortunate desertification struck."
  },
  {
    "category": "preview",
    "image": "/iseng/gehenna.jpg",
    "name": "Gehenna Academy",
    "feedback": "Freedom, chaos, and trouble! That is the word for Gehenna Academy. \"I don't care about the rules, it's already hard because there are a lot of illegal circles!\" Because it is such a school, there are many students who are good or bad.However, because of that, the reputation from other schools is ..."
  },
  {
    "category": "preview",
    "image": "/iseng/millenium.jpg",
    "name": "Millennium Science School",
    "feedback": "Millennium Science School, a huge school specializing in science and technology! Although its history is still short, it is highly regarded for its cutting-edge science and technology that is unrivaled by other schools,"
  },
  {
    "category": "preview",
    "image": "/iseng/trinity.jpg",
    "name": "Trinity General School",
    "feedback": "Trinity General School, one of the largest schools in Kivotos with a large chapel! They're on bad terms with Gehenna Academy, probably because there are many graceful and good students who use Bunburyodo as a model."
  },
  {
    "category": "preview",
    "image": "/iseng/hyakkiyako.jpg",
    "name": "Hyakkiyako Alliance Academy",
    "feedback": "Hyakkiyako Alliance Academy is a school of tourism, with gourmet food, hot springs, festivals and more! The academy is a coalition of clubs and committees, each with their own rules and regulations, so there is no formal student council."
  },
  {
    "category": "preview",
    "image": "/iseng/shanhaijing.jpg",
    "name": "Shanhaijing Senior Secondary School",
    "feedback": "Shanhaijing Senior Secondary School (山海経高級中学校) or Shanhaijing Secondary School on Global, is one of the many schools in Kivotos."
  },
  {
    "category": "preview",
    "image": "/iseng/redwinter.jpg",
    "name": "Red Winter Federal Academy",
    "feedback": "Red Winter Federal Academy (レッドウィンター連邦学園) is one of the many schools in Kivotos."
  },
  {
    "category": "preview",
    "image": "/iseng/valkyrie.jpg",
    "name": "Valkyrie Police Academy",
    "feedback": "Valkyrie Police Academy (ヴァルキューレ警察学校) or Valkyrie Police School on Global, also known as the Kivotos Student Police Department (KSPD), is one of the many schools in Kivotos."
  },
  {
    "category": "preview",
    "image": "/iseng/srtba.jpg",
    "name": "SRT Special Academy",
    "feedback": "SRT Special Academy (SRT特殊学園) was one of the many schools in Kivotos."
  },
  {
    "category": "preview",
    "image": "/iseng/arius.jpg",
    "name": "Arius Branch School",
    "feedback": "An exiled branch of Trinity, now living hidden underground filled with anger and hatred, waiting to one day seek revenge and pass judgement onto the school that brought all those suffering upon them."
  },
  {
    "category": "abydos",
    "image": "/iseng/01_m_shiroko.png",
    "name": "Sunaookami Shiroko",
    "feedback": "The sports-loving field captain of the Countermeasures Committee of the Abydos High School. Shiroko is a girl of few words and shows little emotions alike. She may seem aloof with her appearance, but deeply cares about Abydos High School the most."
  },
  {
    "category": "abydos",
    "image": "/iseng/02_l_hoshino.png",
    "name": "Takanashi Hoshino",
    "feedback": "Takanashi Hoshino is the president of the Abydos Student Council and the only third-year of Abydos High School, and the current chairwoman for the Countermeasures Commitee."
  },
  {
    "category": "abydos",
    "image": "/iseng/03_l_serika.png",
    "name": "Kuromi Serika",
    "feedback": "A Treasurer working for the task force at the Countermeasure Committee for Abydos High."
  },
  {
    "category": "abydos",
    "image": "/iseng/04_l_nonomi.png",
    "name": "Izayoi Nonomi",
    "feedback": "A member of the task force of the Countermeasure Committee at Abydos High."
  },
  {
    "category": "abydos",
    "image": "/iseng/ayane.jpg",
    "name": "Okusora Ayane",
    "feedback": "A serious secretary of Abydos' Countermeasures Committee. The type of girl who values principles and rules, she's doing her earnest to restore Abydos High."
  },
  {
    "category": "gehenna",
    "image": "/iseng/05_m_hina.png",
    "name": "Sorasaki Hina",
    "feedback": "She is a 3rd year student and the current chairwoman of Gehenna's Prefect Team, who is rightfully feared by every student in the academy, if not all of Kivotos."
  },
  {
    "category": "gehenna",
    "image": "/iseng/06_m_iori.png",
    "name": "Shiromi Iori",
    "feedback": "A 2nd year student and a cold-blooded specialist of the feared Prefect Team. As the field captain of its assault corps, she immediately punishes students who violate the rules with overwhelming force whenever and wherever she finds them."
  },
  {
    "category": "gehenna",
    "image": "/iseng/07_m_aru.png",
    "name": "Rikuhachima Aru",
    "feedback": "The self-proclaimed “Boss” (i.e. president) of Club Problem Solver 68, Aru is a 2nd year student at Gehenna Academy. She conducts her illegal business however she pleases."
  },
  {
    "category": "gehenna",
    "image": "/iseng/08_m_mutsuki.png",
    "name": "Asagi Mutsuki",
    "feedback": "A 2nd year student at Gehenna Academy, Mutsuki holds the title of \"Chief of staff\" and is the assault activist and go-getter of Problem Solver 68."
  },
  {
    "category": "gehenna",
    "image": "/iseng/makoto.jpg",
    "name": "Hanuma Makoto",
    "feedback": "Chairman of the Gehenna Academy Student Council \"Pandemonium Society\". In other words, she is Gehenna's president."
  },
  {
    "category": "gehenna",
    "image": "/iseng/iroha.jpg",
    "name": "Natsume Iroha",
    "feedback": "A member of Pandemonium Society who often views everything as a pain. Not surprising, considering her boss is always stirring up trouble and the chaotic nature of Gehenna itself."
  },
  {
    "category": "gehenna",
    "image": "/iseng/ibuki.jpg",
    "name": "Tanga Ibuki",
    "feedback": "Ibuki is the energetic mascot girl and the councilor of the Pandemonium Society. She is a well-behaved girl who works hard today so as not to be a nuisance to her seniors! Her fellow club members like to dote on her and will do anything to punish whoever makes her sad."
  },
  {
    "category": "gehenna",
    "image": "/iseng/ako.jpg",
    "name": "Amau Ako",
    "feedback": "Ako, an administrative officer of the Disciplinary Committee, belonging to Gehenna Academy!"
  },
  {
    "category": "gehenna",
    "image": "/iseng/chinatsu.jpg",
    "name": "HinomiyaChinatsu",
    "feedback": "Enrolled at Gehenna Academy, Chinatsu is a 1st year student in charge of medical aid for the Prefect Team."
  },
  {
    "category": "gehenna",
    "image": "/iseng/kayoko.jpg",
    "name": "Onikata Kayoko",
    "feedback": "The \"Section chief\" of Problem Solver 68 and a 3rd year student at Gehenna Academy."
  },
  {
    "category": "gehenna",
    "image": "/iseng/haruka.jpg",
    "name": "Igusa Haruka",
    "feedback": "An \"entry-level employee\" of Problem Solver 68 and 1st year student at Gehenna Academy. Despite being shy and possessing cripplingly low self-esteem, her ideas and determination to commit any act makes her the scariest and most dangerous amongst the already erratic fixers."
  },
  {
    "category": "gehenna",
    "image": "/iseng/haruna.jpg",
    "name": "Kurodate Haruna",
    "feedback": "The president of the Gourmet Research Society and 3rd year student enrolled at Gehenna Academy."
  },
  {
    "category": "gehenna",
    "image": "/iseng/junko.jpg",
    "name": "Akashi Junko",
    "feedback": "She is a 1st year student and a prim yet ravenous eater in Gehenna's Gourmet Research Society."
  },
  {
    "category": "gehenna",
    "image": "/iseng/izumi.jpg",
    "name": "Shishido Izumi",
    "feedback": "A gluttonous 2nd year student who belongs to Gehenna's Gourmet Research Society."
  },
  {
    "category": "gehenna",
    "image": "/iseng/akari.jpg",
    "name": "Wanibuchi Akari",
    "feedback": "A 3rd year student and member of the Gourmet Research Society enrolled at Gehenna Academy. While fundamentally a calm and good-natured girl, like anyone else at Gehenna, she will occasionally cause great trouble for others."
  },
  {
    "category": "millennium",
    "image": "/iseng/09_m_yuuka.png",
    "name": "Hayase Yuuka",
    "feedback": "The treasurer of the Millennium Academy Student Council, \"Seminar\". She is strict about money and often quarrels with other club activities from her standpoint."
  },
  {
    "category": "millennium",
    "image": "/iseng/10_m_neru.png",
    "name": "MikamoNeru",
    "feedback": "The Leader of the Millennium's secret organization, Cleaning&Clearing C&C."
  },
  {
    "category": "millennium",
    "image": "/iseng/11_m_karin.png",
    "name": "Kakudate Karin",
    "feedback": "She is an agent of the Millennium's secret organization, C&C. Her codename is \"zero-two,\" and she is responsible for providing strong fire support from the backlines.Personality"
  },
  {
    "category": "millennium",
    "image": "/iseng/12_m_akane.png",
    "name": "Murokasa Akane",
    "feedback": "An agent of the Millennium's secret organization, C&C. Her codename is \"zero-three\", an essential employee at \"cleaning up\"."
  },
  {
    "category": "millennium",
    "image": "/iseng/rio.jpg",
    "name": "Tsukatsuki Rio",
    "feedback": "Rio is the student council president of Millennium. Cold and calculating, she cares more about objective facts than emotions. She is at odds with Himari due to their contrasting personalities."
  },
  {
    "category": "millennium",
    "image": "/iseng/noa.jpg",
    "name": "Ushio Noa",
    "feedback": "Noa is the secretary of the student council \"Seminar\" at Millennium Science School. She has a very good memory and can memorize almost everything she sees or hears once, including decisions made at the \"Seminar\" and records of the contents of meetings."
  },
  {
    "category": "millennium",
    "image": "/iseng/chihiro.jpg",
    "name": "Kagami Chihiro",
    "feedback": "Chihiro is the deputy director of the hacker group Veritas! Although she has outstanding abilities, she tries not to abuse them, and seems to be the conscience of Veritas, which is said to be full of mischievous children..."
  },
  {
    "category": "millennium",
    "image": "/iseng/maki.jpg",
    "name": "Konuri Maki",
    "feedback": "An artistic member of the hacker group \"Veritas\" at Millennium Science School."
  },
  {
    "category": "millennium",
    "image": "/iseng/hare.jpg",
    "name": "Omogari Hare",
    "feedback": "The Engineer for a group of hackers \"Veritas\" at Millennium Science School. She's friendly to the other students and a good listener."
  },
  {
    "category": "millennium",
    "image": "/iseng/kotama.jpg",
    "name": "Otose Kotama",
    "feedback": "A Comm. leader for a group of hackers \"Veritas\" at Millennium Science School.She is a skilled eavesdropper and likes to snoop on anyone's secret conversations."
  },
  {
    "category": "millennium",
    "image": "/iseng/asuna.jpg",
    "name": "Ichinose Asuna",
    "feedback": "An agent of the Millennium's secret organization, C&C. Her codename is \"zero-one\" and a veteran of overcoming many challenges with her brutal instinct and intuition and super luck."
  },
  {
    "category": "millennium",
    "image": "/iseng/toki.jpg",
    "name": "Asuma Toki",
    "feedback": "Toki is the mysterious fifth member of C&C with the codename \"04\" (Zero-Four) in Millennium. Unlike the rest of C&C members, she is assigned as Rio's personal bodyguard at Seminar. As such, she is equipped with special armaments designed by Rio."
  },
  {
    "category": "millennium",
    "image": "/iseng/himari.jpg",
    "name": "Akeboshi Himari",
    "feedback": "Himari is a genius hacker. She was the former head of Veritas and the current head of the Paranormal Affairs Department."
  },
  {
    "category": "millennium",
    "image": "/iseng/eimi.jpg",
    "name": "Izumimoto Eimi",
    "feedback": "A member of the Paranormal Affairs Department of Millennium Academy. She's a quiet girl and others have trouble with what she's thinking."
  },
  {
    "category": "trinity",
    "image": "/iseng/13_m_hihumi.png",
    "name": "Ajitani Hifumi",
    "feedback": "An emotional and sensitive girl in the Supplementary Lessons Department of Trinity General School."
  },
  {
    "category": "trinity",
    "image": "/iseng/14_m_tsurugi.png",
    "name": "Kenjaki Tsurugi",
    "feedback": "While enrolled as a student of Trinity and chairman of the Justice Realization Committee, Tsurugi is also the Trinity's strategic weapon."
  },
  {
    "category": "trinity",
    "image": "/iseng/15_m_hasumi.png",
    "name": "Hanekawa Hasumi",
    "feedback": "The No. 2 on Trinity's Justice Realization Committee. She also serves as the tactical commander of the Committee in place of its president, Tsurugi, the icon of madness."
  },
  {
    "category": "trinity",
    "image": "/iseng/hanako.jpg",
    "name": "Urawa Hanako",
    "feedback": "The problem child of the Supplementary Lessons Department. Despite her appearance, she's a student who only says naughty things when she talks, and her members always seem to be nervous..."
  },
  {
    "category": "trinity",
    "image": "/iseng/kazusa.jpg",
    "name": "Kyoyama Kazusa",
    "feedback": "A quiet and easy-going member of the After-School Sweets Club. Kazusa is always getting dragged into whatever strange antics the other club members are up to, but deep down in her kind heart she cherishes those moments."
  },
  {
    "category": "trinity",
    "image": "/iseng/azusa.jpg",
    "name": "Shirasu Azusa",
    "feedback": "An ice queen who belongs to Trinity's Supplementary Lessons Department."
  },
  {
    "category": "trinity",
    "image": "/iseng/shimiko.jpg",
    "name": "Endo Shimiko",
    "feedback": "A book worm and librarian of Library Committee of Trinity General School. She is one of the few students who has read the through the entire book collection in Trinity's Library."
  },
  {
    "category": "trinity",
    "image": "/iseng/hanae.jpg",
    "name": "Asagao Hanae",
    "feedback": "A lively and cheerful freshwoman enrolled as a Knights Hospitaller for Order of the Relief at Trinity School."
  },
  {
    "category": "trinity",
    "image": "/iseng/mari.jpg",
    "name": "Iochi Mari",
    "feedback": "A sincere girl of the Sisterhood who manages the cathedral of Trinity General School. She has a cute impression, but is much calmer than her age and has a lot of character. She has a dream to become the best Sister of Trinity in the future."
  },
  {
    "category": "trinity",
    "image": "/iseng/sakurako.jpg",
    "name": "Utazumi Sakurako",
    "feedback": "The leader of the Sisterhood, Sakurako. As a sister, she's very helpful and is willing to listen to anyone. However, she mostly spends her time in the cathedral, not knowing of the current trends outside."
  },
  {
    "category": "trinity",
    "image": "/iseng/mika.jpg",
    "name": "Misono Mika",
    "feedback": "A member of Trinity's student council, Tea Party, and one of its three student council presidents. She is the childhood friend of Nagisa and has known her for ten years. She calls her Nagi-chan. Unlike the other two presidents of the Tea Party, she isn't particularly bright when it comes to politics, but her strength is not to be underestimated."
  },
  {
    "category": "trinity",
    "image": "/iseng/nagisa.jpg",
    "name": "Kirifuji Nagisa",
    "feedback": "One of the three presidents of the Tea Party, Trinity's student council, and the leader of the Filius Faction. Nagisa is also Mika's childhood friend. In contrast to Mika, Nagisa thinks first before acting, sometimes thinking a bit too much to the point where she causes problems for others who are uninvolved or are supposed to be considered innocent."
  },
  {
    "category": "trinity",
    "image": "/iseng/koharu.jpg",
    "name": "Shimoe Koharu",
    "feedback": "Member of the Supplementary Lesson Department of Trinity General Academy."
  },
  {
    "category": "hyakkiyako",
    "image": "/iseng/kaho.jpg",
    "name": "Kuwakami Kaho",
    "feedback": "Vice president of the Hyakkiyako Academy and the Lead Strategist for the Tourism and Culture Public Relations Support Team. A member of the Yin-Yang Club, she is in charge of Hyakkiyako's public relations and marketing."
  },
  {
    "category": "hyakkiyako",
    "image": "/iseng/chise.jpg",
    "name": "Waraku Chise",
    "feedback": "Chise is a friendly, nerdy and airhead schoolgirl in the Yin-Yang Club at Hyakkiyako Academy. She joined the club because of her interest in traditional culture such as haiku."
  },
  {
    "category": "hyakkiyako",
    "image": "/iseng/kikyo.jpg",
    "name": "Kiryuu Kikyo",
    "feedback": "Kikyou is the operational strategist of the Hyakkaryouran Conflict Resolution Council. She values common sense, logic, and reason."
  },
  {
    "category": "hyakkiyako",
    "image": "/iseng/shizuko.jpg",
    "name": "Kawawa Shizuko",
    "feedback": "The president of the Festival Management Committee, owner and poster girl of the coffee shop of the classic-style cafe, Momoyo Hall."
  },
  {
    "category": "hyakkiyako",
    "image": "/iseng/tsubaki.jpg",
    "name": "Kasuga Tsubaki",
    "feedback": "Enrolled at Hyakkiyako Alliance Academy, Tsubaki is president of the Etiquette Training Society."
  },
  {
    "category": "hyakkiyako",
    "image": "/iseng/kaede.jpg",
    "name": "Isami Kaede",
    "feedback": "Kaede is the energetic spirit of Etiquette Training Society. Originally a country girl, she met the two members of the Etiquette Training Society by chance, and admiring their appearance, she decided to join the club."
  },
  {
    "category": "hyakkiyako",
    "image": "/iseng/izuna.jpg",
    "name": "Kuda Izuna",
    "feedback": "A 1st year student and member of the Ninjutsu Research Club of the Allied Hyakkiyako Academy, Izuna is a bright and bubbly girl who dreams of one day becoming \"the best ninja of Kivotos\"."
  },
  {
    "category": "hyakkiyako",
    "image": "/iseng/michiru.jpg",
    "name": "Chidori Michiru",
    "feedback": "Michiru is the club president of the Ninjutsu Research Department. Every day, she works hard with her fellow club members in uploading videos and doing all sorts of other activities in order to show everyone in Kivotos how cool ninjas are!"
  },
  {
    "category": "hyakkiyako",
    "image": "/iseng/tsukuyo.jpg",
    "name": "Oono Tsukuyo",
    "feedback": "Tsukuyo is a member of the Ninjutsu Research Department! She's very sensitive about her large size and often worries about being too big."
  },
  {
    "category": "hyakkiyako",
    "image": "/iseng/wakamo.jpg",
    "name": "Kosaka Wakamo",
    "feedback": "Wakamo is a suspended student from Hyakkiyako Alliance Academy and one of the \"Seven Prisoners\" who escaped from the Federal Corrections Bureau."
  },
  {
    "category": "shanhaijing",
    "image": "/iseng/kisaki.jpg",
    "name": "Ryuuge Kisaki",
    "feedback": "Kisaki is the head of the Xuanlong Office and the student council president of Shanhaijing. She is called the Master (門主様) by the students of the school."
  },
  {
    "category": "shanhaijing",
    "image": "/iseng/mina.jpg",
    "name": "Konoe Mina",
    "feedback": "Mina is the executive director of the student council \"Xuanlong Office\" and the bodyguard of the student council president."
  },
  {
    "category": "shanhaijing",
    "image": "/iseng/rumi.jpg",
    "name": "Akeshiro Rumi",
    "feedback": "Rumi is the president of Xuanwu Merchant Association of the Gourmet District. She seems to be an enemy of the student council of Xuanlong Office, which is wary of the growth of its own power."
  },
  {
    "category": "shanhaijing",
    "image": "/iseng/reijo.jpg",
    "name": "Kayama Reijo",
    "feedback": "The bodyguard of the Xuanwu Merchant Association, tasked to protect the place from any bad students. As sharp as she can be, one talk about kung fu though and she can go on and on, catching her off guard..."
  },
  {
    "category": "shanhaijing",
    "image": "/iseng/kaguya.jpg",
    "name": "Urushibara Kaguya",
    "feedback": "The head of the Peking Opera Club, a club focused on preserving the popular Peking Opera dance as part of Shanhaijing's traditions and history."
  },
  {
    "category": "shanhaijing",
    "image": "/iseng/saya.jpg",
    "name": "Yakushi Saya",
    "feedback": "Genius inventor at Shanhaijing Senior Secondary School."
  },
  {
    "category": "shanhaijing",
    "image": "/iseng/shun.jpg",
    "name": "Shunohara Shun",
    "feedback": "Instructor of the Training Support Department \"Plum Blossom Garden\" of Shanhaijing Senior Secondary School."
  },
  {
    "category": "shanhaijing",
    "image": "/iseng/kokona.jpg",
    "name": "Shunohara Kokona",
    "feedback": "The younger sister of Sunohara Shun and, like her, is also an instructor at Plum Blossom Garden."
  },
  {
    "category": "shanhaijing",
    "image": "/iseng/kai.jpg",
    "name": "Shintani Kai",
    "feedback": "Kai was a student at Shanhaijing that was exiled for her involvement in smuggling secret medicines. She operates under the alias of the Five Dust Macaque (五塵の彌猴)."
  },
  {
    "category": "redwinter",
    "image": "/iseng/cherino.jpg",
    "name": "Renkawa Cherino",
    "feedback": "Despite her small stature, Cherino is the student council president of Red Winter Federal Academy. She always wears a fake moustache as she believes it's a symbol of authority."
  },
  {
    "category": "redwinter",
    "image": "/iseng/tomoe.jpg",
    "name": "Sashiro Tomoe",
    "feedback": "She's extremely obsessed with Cherino to the point of knowing virtually everything about her. In short, she's a walking Cherino encyclopedia."
  },
  {
    "category": "redwinter",
    "image": "/iseng/marina.jpg",
    "name": "Ikekura Marina",
    "feedback": "Marina is the chairperson of the security committee in charge of maintaining security in Red Winter. Whenever there is a problem in Red Winter, she is the first to go out, but as a result, she often gets lost..."
  },
  {
    "category": "redwinter",
    "image": "/iseng/minori.jpg",
    "name": "Yasumori Minori",
    "feedback": "Minori is the head of the Public Works Department at Red Winter. She is a skilled worker, but she is notorious among her employers for striking and demonstrating over trivial matters..."
  },
  {
    "category": "redwinter",
    "image": "/iseng/meru.jpg",
    "name": "Himeki Meru",
    "feedback": "One of the members of the Knowledge Liberation Front of Red Winter Federal Academy. She likes GL works between women and is passionate about drawing with her own hands with her pen name being Meruly."
  },
  {
    "category": "redwinter",
    "image": "/iseng/momiji.jpg",
    "name": "Akiizumi Momiji",
    "feedback": "One of the members of the Knowledge Liberation Front. She is a literary girl fighting for the library's collection."
  },
  {
    "category": "redwinter",
    "image": "/iseng/nodoka.jpg",
    "name": "Amami Nodoka",
    "feedback": "A student who belongs to the Red Winter Federal Academy, but is currently suspended in the old school building No. 227 special class. The reason for the suspension is \"stalking with a telescope\"."
  },
  {
    "category": "redwinter",
    "image": "/iseng/shigure.jpg",
    "name": "Mayoi Shigure",
    "feedback": "Red Winter's problem child. She is under house arrest in \"No. 227 Special Class\" after being suspended from school. The reason for the suspension is said to be \"mixing vodka in her ration kompot (a drink made by soaking fruits in sugar)\""
  },
  {
    "category": "valkyrie",
    "image": "/iseng/kanna.jpg",
    "name": "Ogata Kanna",
    "feedback": "The captain of Valkyrie's Public Security Bureau. She is an expert at interrogation through the usage of carrot and stick and is good at extracting information out of people."
  },
  {
    "category": "valkyrie",
    "image": "/iseng/kirino.jpg",
    "name": "Nakatsukasa Kirino",
    "feedback": "This is Kirino, a hot-blooded student from the Valkyrie Police Academy! She was assigned to the Community Safety Bureau because of her fatal shooting skills, but she never gave up and continues to strive to become a police officer who can brilliantly subdue criminals!"
  },
  {
    "category": "valkyrie",
    "image": "/iseng/fubuki.jpg",
    "name": "Nemugaki Fubuki",
    "feedback": "A lazy student in the Public Safety Bureau of the Valkyrie Police Academy. She entered the Valkyrie Police Academy because she yearned for the carefree life of a civil servant."
  },
  {
    "category": "srt",
    "image": "/iseng/myu.jpg",
    "name": "Kasumizawa Miyu",
    "feedback": "Miyu, a member of the RABBIT platoon, entered SRT because she was recognized for her talent as a sniper. Now that the school is closed, she spends her days living in a park with other members of the platoon."
  },
  {
    "category": "srt",
    "image": "/iseng/meru.jpg",
    "name": "Kazekura Meru",
    "feedback": "A member of the RABBIT Platoon of SRT Special School. She is a dangerous girl who gets a thrill out of unleashing massive firepower without regards to any short or/and long term consequences."
  },
  {
    "category": "srt",
    "image": "/iseng/saki.jpg",
    "name": "Sorai Saki",
    "feedback": "Saki is a member of the RABBIT platoon, in charge of the \"point man\" who leads and scouts the unit. She is the type of student who always carries an instructional manual with SRT tactics written on it and emphasizes following the principles of the school."
  },
  {
    "category": "srt",
    "image": "/iseng/miyako.jpg",
    "name": "Tsukiyuki Miyako",
    "feedback": "Miyako is a member of SRT Special Academy and the leader of the RABBIT Platoon. Her facial expressions rarely change and she rarely shows her emotions."
  },
  {
    "category": "arius",
    "image": "/iseng/saori.jpg",
    "name": "Joumae Saori",
    "feedback": "An unparalleled expert in guerilla tactics, Saori can stay calm under pressure and doesn't hesitate to use whatever means necessary to accomplish her objective."
  },
  {
    "category": "arius",
    "image": "/iseng/atsuko.jpg",
    "name": "Hakari Atsuko",
    "feedback": "One of the four members of Arius Branch School's elite Arius Squad. She's silent and always communicates through sign language, but perhaps there's more to this than meets the eye."
  },
  {
    "category": "arius",
    "image": "/iseng/misaki.jpg",
    "name": "Imasino Misaki",
    "feedback": "One of the four members of Arius Branch School's elite Arius Squad. Misaki is a girl that gives off the impression of being an unsociable girl with little words."
  },
  {
    "category": "arius",
    "image": "/iseng/hiyori.jpg",
    "name": "Tsuchinaga Hiyori",
    "feedback": "One of the four members of Arius Branch School's elite Arius Squad. She is a cowardly student that gives off a gloomy impression. She appears to have a fear of pain and suffering, whether it be upon herself or even others."
  }
]
  },
  honkai: {
    id: "honkai",
    title: "Honkai Star-Rail",
    filters: [
  {
    "id": "all",
    "label": "All"
  },
  {
    "id": "preview",
    "label": "Preview"
  },
  {
    "id": "astral",
    "label": "Astral Express"
  },
  {
    "id": "stelaron",
    "label": "Stelaron Hunter"
  },
  {
    "id": "hertaspace",
    "label": "Herta Space"
  },
  {
    "id": "jario",
    "label": "Jario-VI"
  },
  {
    "id": "xianzhou",
    "label": "Xianzhou"
  },
  {
    "id": "penacony",
    "label": "Penacony"
  },
  {
    "id": "cosmic",
    "label": "Cosmic"
  },
  {
    "id": "ipc",
    "label": "IPC"
  },
  {
    "id": "amphoreus",
    "label": "Amphoreus"
  }
],
    characters: [
  {
    "category": "preview",
    "image": "/iseng/astral express.png",
    "name": "The Astral Express",
    "feedback": "The Astral Express, also called by the Xianzhou Alliance as the Chromatic Echelon,[1] is a large train that serves as one of the main settings of Honkai: Star Rail. It was created by Akivili, the Aeon of Trailblaze,"
  },
  {
    "category": "preview",
    "image": "/iseng/stelaron.png",
    "name": "Stellaron Hunters",
    "feedback": "The Stellaron Hunters are a faction in Honkai: Star Rail. Founded and led by Elio, they are a mysterious organization that collect Stellarons and are followers of the Finality.[1][2] They are said to work against the Interastral Peace Corporation[3]"
  },
  {
    "category": "preview",
    "image": "/iseng/herta space.png",
    "name": "Herta Space Station",
    "feedback": "Not content with the laws of the common world, the Genius Society's Herta set her sights on the unexplained existences of the galaxy, expecting those distant mysteries to satisfy her curiosity. To this end, Herta led the establishment of a museum-like starship and launched it towards the orbit, starting the research work to seal all strange existences among the stars. And the famous Herta Space Station was born."
  },
  {
    "category": "preview",
    "image": "/iseng/jariovi.png",
    "name": "Jario-VI",
    "feedback": "Traversing across the snow plains, you can get a full view of Belobog, the only spot on the ice-cold world of Jarilo-VI that barely fits the definition of \"a warm place.\" As the only remaining city with human civilization. Belobog has been given many grandiose titles: the last bastion of mankind against the Eternal Freeze, the land blessed by Qlipoth..."
  },
  {
    "category": "preview",
    "image": "/iseng/xianzhou.png",
    "name": "Xianzhou Alliance",
    "feedback": "The Xianzhou Luofu is one of the six flagships of the Xianzhou Alliance. It sails in the endless ocean of stars like a one-way arrow, shooting toward the Lord of the Hunt's destined enemy."
  },
  {
    "category": "preview",
    "image": "/iseng/penacony.png",
    "name": "Penacony",
    "feedback": "A colossal structure located in the Asdana system, with the soaring hotel \"The Reverie\" as its iconic landmark. Once a frontier prison belonging to the IPC, The Family had modeled it to serve as an interstellar transportation hub and the gateway to the Sweetdream Paradise."
  },
  {
    "category": "preview",
    "image": "/iseng/ipc.png",
    "name": "Interastral Peace Corporation",
    "feedback": "The Interastral Peace Corporation, abbreviated as the IPC, is an intergalactic mega corporation responsible for the economy of the entire cosmos.[1]"
  },
  {
    "category": "preview",
    "image": "/iseng/cosmic.png",
    "name": "Cosmic",
    "feedback": "The Galaxy Rangers is a voluntarily formed group that travels around the cosmos to uphold justice for the locals out of the belief that benevolence and justice must be upheld by personal action."
  },
  {
    "category": "preview",
    "image": "/iseng/amphoreus.png",
    "name": "Amphoreus",
    "feedback": "Amphoreus, The Eternal Land is a segmentum hidden deep in the cosmos. It is severed from the outside and hard to detect or be encountered. It's hard to navigate to a place you can scarcely perceive, let alone pass through or arrive at the place itself"
  },
  {
    "category": "astral",
    "image": "/iseng/himeko.jpg",
    "name": "Himeko",
    "feedback": "Orang yang memperbaiki Astral Express. Demi menyaksikan langit berbintang yang luas, dia memutuskan untuk bertualang dengan Astral Express. Hobi dia adalah meracik kopi sendiri."
  },
  {
    "category": "astral",
    "image": "/iseng/march7.jpg",
    "name": "March 7",
    "feedback": "Gadis yang sempat tertidur dalam es abadi dan tidak mengetahui masa lalunya. Dia memilih untuk bertualang dengan Astral Express demi mencari kebenaran asal-usulnya. Sampai saat ini dia sudah menyiapkan hampir 67 versi \"kisah hidupnya\"."
  },
  {
    "category": "stelaron",
    "image": "/iseng/kafka.jpg",
    "name": "Kafka",
    "feedback": "Anggota \"Stellaron Hunter\". Seorang profesional cantik yang tenang dan santai. Dia memanfaatkan keajaiban kata-kata untuk membuat Trailblazer menyerap Stellaron. Hobinya adalah berbelanja dan merapikan mantel."
  },
  {
    "category": "stelaron",
    "image": "/iseng/sw.jpg",
    "name": "Silver Woof",
    "feedback": "Peretas hebat yang menganggap alam semesta sebagai permainan. Sistem pertahanan serumit apa pun dapat dipecahkan Silver Wolf dengan mudah. Pertarungan serangan peretasan dan pertahanan antara dia dan Screwllum dari \"Genius Society\" telah menjadi legenda di dunia peretas. Berapa banyak lagi level yang harus dikalahkan di alam semesta? Silver Wolf sangat menantikannya."
  },
  {
    "category": "stelaron",
    "image": "/iseng/firefly.jpg",
    "name": "Firefly",
    "feedback": "Anggota Stellaron Hunter yang bertempur mengenakan zirah mekanis \"SAM\". Dia setia pada misinya dan pantang menyerah. Terlahir sebagai senjata untuk mengalahkan Swarm, kecepatan pertumbuhannya jauh di atas rata-rata, tetapi umur hidupnya sangat singkat. Dia bergabung dengan Stellaron Hunter demi menemukan peluang untuk \"hidup\" dan menemukan cara untuk melawan takdir."
  },
  {
    "category": "hertaspace",
    "image": "/iseng/theherta.jpg",
    "name": "The Herta",
    "feedback": "\"Genius Society\" #83 yang terhormat, manusia, perempuan, muda, cantik, imut. Konon dia mengasingkan diri di perbatasan galaksi, nyaris tidak pernah melangkah keluar dari sana. Jadi kemunculannya kali ini .... Pasti karena ada masalah yang harus dia tangani sendiri, bukan?"
  },
  {
    "category": "hertaspace",
    "image": "/iseng/ruanmei.jpg",
    "name": "Ruan Mei",
    "feedback": "Seorang anggota Genius Society dan ahli bidang ilmu kehidupan. Dia bekerja sama dengan Herta dan timnya untuk mengembangkan Simulated Universe."
  },
  {
    "category": "hertaspace",
    "image": "/iseng/asta.jpg",
    "name": "Asta",
    "feedback": "Kepala Peneliti di Stasiun Luar Angkasa \"Herta\", juga nona besar dari keluarga aristokrat.Seorang astronom yang penuh dengan rasa ingin tahu, sangat pandai dalam menangani peneliti Stasiun Luar Angkasa ahli dalam mengatur staf yang berbeda-beda pendapat."
  },
  {
    "category": "jario",
    "image": "/iseng/bronya.jpg",
    "name": "Bronya",
    "feedback": "Penerus dari \"Supreme Guardian\" Belobog.Memiliki arogansi seorang putri dan integritas seorang prajurit"
  },
  {
    "category": "jario",
    "image": "/iseng/seele.jpg",
    "name": "Seele",
    "feedback": "Tulang punggung kelompok pemberontak bawah tanah \"Wildfire\" yang punya nama alias \"Babochka\".Sifatnya blak-blakan, tapi memiliki hati yang sensitif dan peka."
  },
  {
    "category": "jario",
    "image": "/iseng/serval.jpg",
    "name": "Serval",
    "feedback": "Mekanik Belobog, pernah menjadi peneliti Divisi Teknologi Architect. Dia adalah kakak perempuan Gepard Landau, tapi sifatnya sangat berbeda dengan adiknya. Dia sangat menyukai seni musik kuno yang ada sebelum Kebekuan Abadi yang dikenal dengan \"Rock\"."
  },
  {
    "category": "jario",
    "image": "/iseng/natasha.jpg",
    "name": "Natasha",
    "feedback": "Seorang dokter dari Underworld, sekaligus pengasuh anak-anak. Selain kebaikan dan perhatiannya, dia juga memiliki sisi berbahaya yang tersembunyi."
  },
  {
    "category": "jario",
    "image": "/iseng/pela.png",
    "name": "Pela",
    "feedback": "Petugas sekretaris untuk Silvermane Guard. Dia memiliki kepribadian yang serius dan dihormati oleh para anggota Silvermane Guard lainnya."
  },
  {
    "category": "jario",
    "image": "/iseng/clara.png",
    "name": "Clara",
    "feedback": "Gadis gelandangan yang hidup dengan robot. Pemalu, lembut dan polos. Dia berharap semua orang Underworld dapat menjadi keluarga."
  },
  {
    "category": "jario",
    "image": "/iseng/hook.png",
    "name": "Hook",
    "feedback": "Bos (mengesahkan diri sendiri) tim petualangan bawah tanah \"The Moles\". Dia mencintai kebebasan, dan melihat kehidupan sebagai serangkaian petualangan."
  },
  {
    "category": "jario",
    "image": "/iseng/linx.jpg",
    "name": "Linx",
    "feedback": "Penjelajah dataran salju dari Belobog, adik terkecil dari Landau bersaudara. Tenang dan sangat berenergi. Sering pergi menjelajahi dataran salju sendirian."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/fugue.jpg",
    "name": "Fugue",
    "feedback": "Gadis Foxian yang cerdik dan serba bisa. Penampilan, nama, dan identitasnya semua telah dirampas oleh orang lain. Takdir meninggalkannya secercah harapan untuk bertahan hidup, namun tanda jejak \"Destruction\" masih bergejolak di dalam dirinya."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/fexiao.jpg",
    "name": "Fexiao",
    "feedback": "Merlin's Claw dari Xianzhou \"Yaoqing\" dan salah satu dari Tujuh Jenderal Arbiter. Dia adalah individu yang unik dan berjiwa bebas, serta lugas dan menawan."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/lingsha.jpg",
    "name": "Lingsha",
    "feedback": "Master Tungku baru di Alchemy Commission Xianzhou \"Luofu\". Seorang dokter Vidyadhara yang cerdik dan bijaksana."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/yunli.jpg",
    "name": "Yunli",
    "feedback": "Seorang pemburu pedang dari Xianzhou \"Zhuming\" dan cucu perempuan kesayangan \"Flaming Heart\", Jenderal Huaiyan. Memiliki kepribadian yang jujur dan terus terang."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/xueyi.jpg",
    "name": "Xueyi",
    "feedback": "Hakim dari \"Ten-Lords Commission\" yang mengawasi hidup dan mati di \"Luofu\". Bertahun-tahun setelah kematiannya, dia kembali ke dunia untuk memenuhi misinya dengan \"tubuh boneka\"."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/hanya.png",
    "name": "Hanya",
    "feedback": "Salah satu hakim dari Ten-Lords Commission Xianzhou \"Luofu\". Menerima perintah dari Ten-Lords, mengendalikan kuas ramalan, membaca jenis-jenis dosa manusia, serta memberikan hukuman penebusan karma."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/huohuo.jpg",
    "name": "Huohuo",
    "feedback": "Hakim magang Ten-Lords Commission dari Xianzhou Luofu, seorang gadis Foxian yang dirasuki oleh Heliobus. Dia adalah seorang gadis pemalu dan lemah yang takut pada segala macam hal-hal aneh, tapi bertanggung jawab untuk menarik dan menaklukkan roh jahat."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/guinafen.jpg",
    "name": "Guinafen",
    "feedback": "Pendatang asing yang tinggal di Xianzhou secara kebetulan. Kini dia adalah seniman jalanan yang penuh semangat."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/jinshi.jpg",
    "name": "Jingliu",
    "feedback": "\"Bagi siapa yang hendak mempelajari ilmu pedangku, aku akan mengajarinya.\" Salah satu dari \"Lima Petinggi Cloud\" yang legendaris, dengan gelar \"Transcendent Flash\"."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/fuxuan.jpg",
    "name": "Fuxuan",
    "feedback": "Kepala Divination Commission Xianzhou \"Luofu\". Orang yang menggunakan mata ketiga dan Matrix of Prescience untuk meramalkan rute Xianzhou serta hasil dari berbagai peristiwa."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/yukong.jpg",
    "name": "Yukung",
    "feedback": "Pemimpin Sky-Faring Commission dari Xianzhou \"Luofu\". Yukong adalah seorang pilot berpengalaman dan seorang penembak jitu. Sekarang dia terkubur di bawah tumpukan dokumen yang membosankan dan sulit untuk keluar."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/sushang.png",
    "name": "Sushang",
    "feedback": "Utusan Sky-Faring Commission dari Xianzhou \"Luofu\". Dia bepergian dengan delegasi bisnis, menjalin hubungan perdagangan dan aliansi dengan banyak dunia."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/qinque.png",
    "name": "Qingque",
    "feedback": "Peramal dari Divination Commission di Xianzhou \"Luofu\", dan juga seorang pengelola perpustakaan."
  },
  {
    "category": "xianzhou",
    "image": "/iseng/bailu.png",
    "name": "Bailu",
    "feedback": "Tetua Tertinggi Vidyadhara yang juga dikenal sebagai \"Wanita Penyembuh\" di Xianzhou \"Luofu\"."
  },
  {
    "category": "penacony",
    "image": "/iseng/robin.jpg",
    "name": "Robin",
    "feedback": "Gadis yang anggun ini adalah penyanyi Halovian yang lahir di Penacony dan terkenal di seluruh penjuru alam semesta. Kali ini dia diundang oleh Family untuk kembali ke kampung halamannya dan mempersembahkan sebuah lagu di \"Festival Charmony\"."
  },
  {
    "category": "cosmic",
    "image": "/iseng/acheron.jpg",
    "name": "Acheron",
    "feedback": "Seorang pengelana yang mengaku dirinya adalah \"Galaxy Ranger\". Nama aslinya tidak diketahui. Dia mengenakan sebilah pedang panjang, dan dia menelusuri alam semesta seorang diri."
  },
  {
    "category": "cosmic",
    "image": "/iseng/blackswan.jpg",
    "name": "Black Swan",
    "feedback": "Memokeeper dari \"Garden of Recollection\", peramal yang misterius dan elegan. Dia selalu tersenyum dengan lembut, mendengarkan ucapan orang lain dengan sabar, dan memanfaatkannya untuk masuk ke dalam \"memori\" dan menguasai seluruh informasi."
  },
  {
    "category": "cosmic",
    "image": "/iseng/sparkle.jpg",
    "name": "Sparkle",
    "feedback": "Salah satu anggota \"Masked Fool\" yang sulit diprediksi dan selalu menghalalkan segala cara untuk mencapai tujuannya."
  },
  {
    "category": "cosmic",
    "image": "/iseng/rappa.jpg",
    "name": "Rappa",
    "feedback": "Seorang gadis ajaib yang muncul di Penacony bagaikan granat setrum di kegelapan dini hari. Dia menganggap dirinya seorang ninja, dan mengaitkan segala sesuatu di dunia ini dengan \"teknik ninja\"."
  },
  {
    "category": "ipc",
    "image": "/iseng/topaz.jpg",
    "name": "Topaz",
    "feedback": "Salah satu manajer tingkat tinggi \"Departemen Investasi Strategis\" di bawah Interastral Peace Corporation, dan juga pemimpin dari Tim Piket Utang Khusus."
  },
  {
    "category": "ipc",
    "image": "/iseng/jade.jpg",
    "name": "Jade",
    "feedback": "Manajer tingkat tinggi di \"Departemen Investasi Strategis\" IPC. Salah satu dari \"Sepuluh Orang Berhati Batu\", Batu Landasannya adalah \"Jade - Pemberi Pinjaman\". Seorang pemberi pinjaman yang dingin, anggun, ahli dalam membaca pikiran, dan memiliki hobi yang disebut dengan \"Pegadaian Bonajade\"."
  },
  {
    "category": "amphoreus",
    "image": "/iseng/aglaea.jpg",
    "name": "Aglaea",
    "feedback": "Di kota suci yang bermandikan cahaya fajar itu, sang penenun membelai benang emas dan menjalin takdir. Aglaea sang \"Penenun Emas\", Keturunan Chrysos yang membawa benih api \"Romansa\"... K"
  }
]
  }
};

export const ZZZ_BACKGROUNDS: Record<string, string> = {
  cunning: "/iseng/cunningsquad.png",
  sons: "/iseng/sonss.png",
  victoria: "/iseng/victoriaa.png",
  belobog: "/iseng/belobogg.png",
  section6: "/iseng/s6.png",
  srt: "/iseng/lucy.png",
  stars: "/iseng/starsof.jpeg",
  obol: "/iseng/obols.png",
  preview: "/iseng/previeww.png",
  all: "/iseng/all.png"
};

export const GENSHIN_BACKGROUNDS: Record<string, string> = {
  all: "/gi/all.png",
  preview: "/gi/all.png",
  mondstadt: "/gi/monstad.jpg",
  liyue: "/gi/liyue.png",
  inazuma: "/gi/inazuma.jpg",
  sumeru: "/gi/sumeru.jpg",
  fontaine: "/gi/fontaine.png",
  natlan: "/gi/natlan.png",
  snezhnaya: "/gi/snezhaya.png"
};

export const BLUE_ARCHIVE_BACKGROUNDS: Record<string, string> = {
  all: "/ba/1286129.png",
  preview: "/ba/1287499.png",
  abydos: "/ba/1137852.png",
  gehenna: "/ba/1196917.png",
  millennium: "/ba/1226538.jpg",
  trinity: "/ba/1236608.jpg",
  hyakkiyako: "/ba/1289296.jpg",
  shanhaijing: "/ba/1299543.jpg",
  redwinter: "/ba/1305706.png",
  valkyrie: "/ba/1312905.jpg",
  srt: "/ba/1315236.png",
  arius: "/ba/1358198.png",
  default: "/ba/1359968.png"
};

export const HSR_BACKGROUND = "/iseng/hsrbg.jpg";

export const GALLERY_EVENTS: GalleryEvent[] = [
  {
    "eventKey": "honkai",
    "eventTitle": "Event Honkai Impact 3rd",
    "images": [
      "/iseng/h3.1.jpeg",
      "/iseng/h3.2.jpeg",
      "/iseng/h3.3.jpeg",
      "/iseng/h3.4.jpeg",
      "/iseng/h3.5.jpeg",
      "/iseng/h3.6.jpeg"
    ]
  },
  {
    "eventKey": "genshin",
    "eventTitle": "Event Genshin Impact",
    "images": [
      "/iseng/gi1.jpeg",
      "/iseng/gi2.jpeg",
      "/iseng/gi3.jpeg",
      "/iseng/gi4.jpeg",
      "/iseng/gi5.jpeg",
      "/iseng/gi6.jpeg"
    ]
  },
  {
    "eventKey": "hsr",
    "eventTitle": "Event Honkai Star-Rail",
    "images": [
      "/iseng/hsr1.jpeg",
      "/iseng/hsr2.jpeg",
      "/iseng/hsr3.jpeg",
      "/iseng/hsr4.jpeg",
      "/iseng/hsr5.jpeg",
      "/iseng/hsr6.jpeg"
    ]
  },
  {
    "eventKey": "zzz",
    "eventTitle": "Event Zenles Zone Zero",
    "images": [
      "/iseng/zzz1.jpeg",
      "/iseng/zzz2.jpeg",
      "/iseng/zzz3.jpeg",
      "/iseng/zzz4.jpeg",
      "/iseng/zzz5.jpeg",
      "/iseng/zzz6.jpeg"
    ]
  },
  {
    "eventKey": "blue-archive",
    "eventTitle": "Event Blue Archive",
    "images": [
      "/iseng/ba1.jpeg",
      "/iseng/ba2.jpeg",
      "/iseng/ba3.jpeg",
      "/iseng/ba4.jpeg",
      "/iseng/ba5.jpeg",
      "/iseng/ba6.jpeg"
    ]
  },
  {
    "eventKey": "wuthering-waves",
    "eventTitle": "Event Wuthering Waves",
    "images": [
      "/iseng/ww1.jpeg",
      "/iseng/ww2.jpeg",
      "/iseng/ww3.jpeg",
      "/iseng/ww4.jpeg",
      "/iseng/ww5.jpeg",
      "/iseng/ww6.jpeg"
    ]
  }
];
