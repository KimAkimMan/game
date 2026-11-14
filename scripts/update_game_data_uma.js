const fs = require("fs");
const path = require("path");

// Known metadata and lore descriptions for all 85 Uma characters
const DESCRIPTIONS = {
  "Admire Vega": "Gadis pendiam dan dingin yang memikul beban bayangan kembarannya, mengandalkan lonjakan akhir (End Runner) yang tajam.",
  "Agnes Digital": "Otaku Uma Musume sejati yang berlari di lintasan Turf maupun Dirt demi bisa mengagumi sesama Uma Musume dari dekat.",
  "Agnes Tachyon": "Ilmuwan jenius eksentrik yang terobsesi menembus batas kecepatan biologis melalui penelitian dan eksperimen tak terbatas.",
  "Air Groove": "Wakil ketua OSIS yang tegas dan berwibawa, berjuluk 'The Empress' yang mendominasi lintasan dengan langkah anggun dan teratur.",
  "Air Shakur": "Ahli logika dan komputasi cerdas yang percaya setiap balapan dapat dipecahkan melalui perhitungan matematis yang sempurna.",
  "Aston Machan": "Gadis manis dan misterius yang berlari di kategori Sprint agar senyuman dan keberadaannya selalu diingat selamanya.",
  "Bamboo Memory": "Pemimpin klub kendo berdarah panas yang selalu mengobarkan semangat membara dan pantang menyerah di trek Sprint/Mile.",
  "Biko Pegasus": "Pencinta pahlawan super bertubuh mungil yang memimpikan keadilan dan berlari kencang bagai pahlawan penyelamat.",
  "Biwa Hayahide": "Gadis berkepala dingin nan analitis yang selalu membedah lintasan secara rasional untuk memimpin di posisi terdepan.",
  "Copano Rickey": "Gadis ceria ahli Feng Shui yang selalu membawa keberuntungan dan kebahagiaan di lintasan Dirt dengan lari terdepan.",
  "Curren Chan": "Idola media sosial yang memikat hati semua orang dengan pesona manis dan kecepatan sprint secepat kilat.",
  "Daiichi Ruby": "Tuan putri anggun dari garis keturunan bangsawan murni yang berlari di jarak Sprint/Mile demi menjaga martabat klan.",
  "Daitaku Helios": "Gadis gyaru periang penuh energi yang selalu membawa suasana pesta meriah ke setiap balapan di lintasan Mile.",
  "Daiwa Scarlet": "Gadis ambisius bertipe Front Runner yang selalu mengincar posisi nomor satu dan menolak kalah dari siapa pun.",
  "Eishin Flash": "Pelari berdarah Jerman yang sangat disiplin, presisi, dan teliti mengatur jadwal latihan serta ritme larinya.",
  "El Condor Pasa": "Pegulat bertopeng bersemangat tinggi yang memimpikan kejayaan dunia di panggung balap internasional.",
  "Fine Motion": "Putri bangsawan dari Irlandia yang polos dan ramah, datang ke Tracen Academy untuk merasakan indahnya dunia luar dan ramen.",
  "Fuji Kiseki": "Senior karismatik nan menawan yang selalu melindungi juniornya layaknya seorang pangeran di atas panggung balap.",
  "Gold City": "Model profesional berparas menawan yang berjuang keras membuktikan bahwa dirinya bukan sekadar berwajah rupawan di lintasan.",
  "Gold Ship": "Gadis kuda eksentrik penuh kejutan yang berlari dari posisi paling belakang (End Runner) untuk menyapu bersih lawan.",
  "Grass Wonder": "Gadis kalem berbusana tradisional yang menyimpan jiwa pejuang perkasa dan akselerasi mematikan saat menyalip musuh.",
  "Haru Urara": "Bintang pujaan berhati murni yang tak pernah putus asa di lintasan Dirt dan selalu menyebarkan tawa ceria.",
  "Hishi Akebono": "Gadis bertubuh tinggi besar berhati lembut yang suka memasak porsi raksasa untuk menyenangkan semua sahabatnya.",
  "Hishi Amazon": "Pemimpin asrama bergaya preman yang sportif dan protektif, mengandalkan kekuatan murni dari posisi belakang.",
  "Hokko Tarumae": "Duta promosi kota Tomakomai yang selalu mempromosikan kampung halamannya lewat performa gemilang di arena Dirt.",
  "Ikuno Dictus": "Gadis berkacamata yang sangat tenang, tekun, dan tahan banting, dikenal tak pernah cedera dalam jadwal balap yang padat.",
  "Inari One": "Gadis lincah berjiwa ksatria Edo yang selalu bersemangat membakar antusiasme penonton di lintasan Dirt dan Turf.",
  "Ines Fujin": "Kakak teladan yang bekerja keras menafkahi adik-adiknya, menguasai taktik lari terdepan dengan tekad baja.",
  "K.S. Miracle": "Pelari Sprint berjiwa murni yang percaya pada keajaiban dan mendedikasikan larinya untuk membahagiakan orang lain.",
  "Kawakami Princess": "Gadis bertenaga luar biasa yang bercita-cita menjadi putri sejati meski sering kali merusak barang di sekitarnya.",
  "King Halo": "Nona muda berkelas tinggi yang terus bangkit dari kegagalan untuk membuktikan kebanggaan dan keagungannya.",
  "Kitasan Black": "Gadis periang penuh semangat festival yang berlari di barisan depan dengan stamina kokoh tak kenal lelah.",
  "Manhattan Cafe": "Gadis pemalu dan misterius yang kerap berbicara dengan 'sahabat' tak kasat mata di sampingnya saat berlari di jarak jauh.",
  "Maruzensky": "Senior modis bermobil mewah dengan selera retro yang melaju kencang bagai supercar tanpa tertandingi di depan.",
  "Marvelous Sunday": "Gadis enerjik yang ingin mengubah setiap balapan menjadi pertunjukan ajaib penuh sukacita bagi seluruh penonton.",
  "Matikane Fukukitaru": "Gadis penggemar ramalan dan jimat keberuntungan yang selalu berusaha menghadirkan nasib baik ke garis finis.",
  "Matikane Tannhauser": "Gadis pekerja keras yang sedikit ceroboh namun memiliki semangat juang tulus yang selalu didukung semua orang.",
  "Mayano Top Gun": "Gadis lincah bertopi penerbang yang cerdas membaca situasi lomba dan lihai beradaptasi dengan berbagai gaya lari.",
  "Meisho Doto": "Gadis penakut dan ceroboh yang sering kehilangan rasa percaya diri, namun memiliki kekuatan tersembunyi yang luar biasa.",
  "Mejiro Ardan": "Nona bangsawan Mejiro berhati halus nan tegar yang bertanding dengan penuh keberanian meski memiliki kaki yang rapuh.",
  "Mejiro Bright": "Gadis tenang dan bertutur kata lambat yang menyimpan stamina cadangan luar biasa untuk menyusul di putaran akhir.",
  "Mejiro Dober": "Gadis pemalu yang canggung di dekat pria, namun sangat fokus dan garang saat melancarkan akselerasi menyalip.",
  "Mejiro McQueen": "Bintang klan Mejiro yang elegan dan bermartabat, penguasa jarak jauh dengan pengendalian tempo balap sempurna.",
  "Mejiro Palmer": "Gadis riang yang memilih jalan kebebasannya sendiri dengan memimpin pelarian panjang di barisan terdepan.",
  "Mejiro Ryan": "Gadis berotot atletis yang gemar berlatih kebugaran dan memancarkan aura sportivitas yang mengagumkan.",
  "Mihono Bourbon": "Gadis berkepribadian tenang seperti cyborg yang menjalani latihan ekstrem demi mengeksekusi ritme lari sempurna.",
  "Mr. C.B.": "Legenda Triple Crown berjiwa bebas yang memukau dunia dengan gaya lari santai di awal lalu menyapu dari posisi terakhir.",
  "Nakayama Festa": "Petaruh berani yang menyukai sensasi ketegangan hidup dan selalu bertarung habis-habisan di saat-saat paling genting.",
  "Narita Brian": "Sang predator perkasa pemilik Triple Crown berdaya dorong mengerikan yang menatap garis finis tanpa kompromi.",
  "Narita Taishin": "Gadis bertubuh mungil berhati sensitif yang meluapkan emosi dan pembuktian dirinya melalui lesatan tajam di akhir lintasan.",
  "Narita Top Road": "Gadis tulus dan rendah hati yang berlari dengan dukungan penuh para penggemar setia di jarak menengah dan jauh.",
  "Nice Nature": "Gadis bersahaja yang sering merendah tentang kemampuan dirinya namun selalu konsisten finis di barisan teratas.",
  "Nishino Flower": "Gadis cilik yang lembut dan penuh kasih layaknya bunga kecil, melesat manis dan lincah di lintasan Sprint/Mile.",
  "Oguri Cap": "Pahlawan rakyat dari daerah yang rakus makan dan berstamina tak tertandingi di lintasan Dirt maupun Turf.",
  "Rice Shower": "Pahlawan kecil bertopi mawar yang pantang menyerah menundukkan jarak terpanjang demi senyum orang-orang yang dicintainya.",
  "Sakura Bakushin O": "Ketua kelas bertingkah jenaka yang percaya bahwa kecepatan Sprint adalah satu-satunya jawaban untuk segala masalah di dunia.",
  "Sakura Chiyono O": "Gadis sopan yang rajin mencatat buku harian pelatihan demi mengejar jejak idola yang sangat dikaguminya.",
  "Sakura Laurel": "Gadis periang nan optimis yang mengatasi kelemahan fisiknya dengan senyuman dan tekad menaklukkan musim semi.",
  "Satono Diamond": "Nona muda konglomerat Satono yang bertekad mematahkan kutukan keluarga dan mempersembahkan trofi G1 bergengsi.",
  "Seiun Sky": "Pemancing santai yang terlihat malas namun jenius menyusun taktik licik untuk meloloskan diri di barisan depan.",
  "Shinko Windy": "Gadis jahil bergigi taring yang suka menggigit orang lain, namun sangat gesit dan agresif saat bersaing di lintasan Dirt.",
  "Silence Suzuka": "Pelari Front Runner legendaris yang selalu memacu dirinya melesat bebas di depan tanpa membiarkan siapa pun mendekat.",
  "Sirius Symboli": "Serigala penyendiri berjiwa pemberontak yang menjelajahi kancah balap Eropa dengan kebanggaan tinggi.",
  "Smart Falcon": "Idola pop Tracen yang bertekad menjadi bintang nomor satu di panggung balap Dirt dengan tarian dan lari menawan.",
  "Special Week": "Gadis desa periang asal Hokkaido yang berlari dengan segenap jiwa demi impian menjadi Uma Musume terbaik di Jepang.",
  "Super Creek": "Gadis keibuan berhati lembut yang suka memanjakan pelatih dan sesama rekannya, penguasa stamina jarak jauh.",
  "Sweep Tosho": "Gadis penyihir cilik yang keras kepala dan manja, mengandalkan sihir akselerasi kilat di tikungan akhir lintasan.",
  "Symboli Kris S": "Sosok tegap dan pendiam yang memancarkan kewibawaan mutlak dan kedigdayaan fisik di lintasan rumput.",
  "Symboli Rudolf": "Ketua OSIS Tracen bergelar 'Kaisar' yang tak terkalahkan, menjunjung tinggi keadilan, martabat, dan keunggulan balap.",
  "Taiki Shuttle": "Cowgirl ceria asal Amerika Serikat yang menembakkan kecepatan luar biasa di lintasan Mile bagai peluru pistol.",
  "Tamamo Cross": "Gadis petarung bertubuh kecil asal Kansai berjuluk 'Petir Putih' yang berlari sengit demi mengangkat derajat keluarganya.",
  "Tanino Gimlet": "Sosok flamboyan berkacamata yang suka meremukkan pagar dan menuangkan filosofi puitis ke dalam langkah pacunya.",
  "T.M. Opera O": "Raja panggung opera megah yang selalu menganggap setiap balapannya sebagai mahakarya teater termegah.",
  "Tokai Teio": "Gadis ajaib nan ceria yang menari lincah di lintasan dengan langkah 'Teio Step' untuk membuktikan kehebatannya.",
  "Tosen Jordan": "Gadis gyaru modis yang gemar merawat kuku cantiknya namun pantang menyerah bersaing sengit di lintasan rumput.",
  "Tsurumaru Tsuyoshi": "Gadis periang yang tak kenal lelah melawan penyakit fisik demi bisa bersaing di panggung balap tertinggi.",
  "Twin Turbo": "Pelari Front Runner nekat yang selalu tancap gas penuh sejak detik pertama tanpa memedulikan stamina.",
  "Vodka": "Gadis pemberani bertipe Late Runner dengan akselerasi gagah yang memukau penonton di setiap tikungan.",
  "Winning Ticket": "Gadis emosional yang mudah menangis terharu, berlari dengan sepenuh rasa cinta pada Derby dan kejayaan balap.",
  "Yaeno Muteki": "Praktisi seni bela diri yang menganggap lintasan balap sebagai dojo suci untuk mengasah disiplin dan jiwa raga.",
  "Yukino Bijin": "Gadis desa anggun dari Tohoku yang ingin belajar menjadi wanita perkasa dan memesona di ibu kota.",
  "Zenno Rob Roy": "Pecinta buku literatur yang pendiam dan rajin, menemukan keberanian menjadi pahlawan di dunia nyata melalui balapan."
};

// Supplement aptitudes for the 15 characters lacking dump data
const SUPPLEMENT_APTITUDES = {
  "Biko Pegasus": { surface: ["turf"], distance: ["sprint"], style: ["late"] },
  "Daiichi Ruby": { surface: ["turf"], distance: ["sprint", "mile"], style: ["late"] },
  "Hokko Tarumae": { surface: ["dirt"], distance: ["mile", "medium"], style: ["front", "pace"] },
  "Ikuno Dictus": { surface: ["turf"], distance: ["mile", "medium"], style: ["late"] },
  "K.S. Miracle": { surface: ["turf"], distance: ["sprint", "mile"], style: ["front", "pace"] },
  "Marvelous Sunday": { surface: ["turf"], distance: ["medium", "long"], style: ["late"] },
  "Mr. C.B.": { surface: ["turf"], distance: ["medium", "long"], style: ["end"] },
  "Narita Top Road": { surface: ["turf"], distance: ["medium", "long"], style: ["pace"] },
  "Sakura Laurel": { surface: ["turf"], distance: ["medium", "long"], style: ["late"] },
  "Shinko Windy": { surface: ["dirt", "turf"], distance: ["sprint", "mile"], style: ["front", "pace"] },
  "Sirius Symboli": { surface: ["turf"], distance: ["medium", "long"], style: ["pace"] },
  "Symboli Kris S": { surface: ["turf"], distance: ["medium", "long"], style: ["late"] },
  "Tanino Gimlet": { surface: ["turf"], distance: ["mile", "medium"], style: ["late"] },
  "Tsurumaru Tsuyoshi": { surface: ["turf"], distance: ["medium"], style: ["pace", "late"] },
  "Twin Turbo": { surface: ["turf"], distance: ["mile", "medium"], style: ["front"] }
};

// Style mapping to full names
const STYLE_MAP = {
  front: "front-runner",
  pace: "pace-runner",
  late: "late-runner",
  end: "end-runner"
};

// Read uma_characters.ts
const content = fs.readFileSync(path.join(__dirname, "../umaout/uma_characters.ts"), "utf8");
const lines = content.split("\n");
const rawItems = [];

for (const line of lines) {
  if (line.trim().startsWith("{ name:")) {
    try {
      const fn = new Function("return " + line.trim().replace(/,$/, ""));
      rawItems.push(fn());
    } catch (e) {
      console.error("Error parsing:", line);
    }
  }
}

console.log("Read raw items:", rawItems.length);

const finalCharacters = rawItems.map((item) => {
  let surface = item.surface || [];
  let distance = item.distance || [];
  let style = item.style || [];

  if (SUPPLEMENT_APTITUDES[item.name]) {
    const supp = SUPPLEMENT_APTITUDES[item.name];
    surface = supp.surface;
    distance = supp.distance;
    style = supp.style;
  }

  const mappedStyles = style.map(s => STYLE_MAP[s] || s);
  const categories = [...surface, ...distance, ...mappedStyles];
  const categoryStr = categories.join(", ");

  const desc = DESCRIPTIONS[item.name] || `${item.name} adalah pelari tangguh dari Tracen Academy dengan keahlian di lintasan ${surface.join("/") || "Turf"}.`;

  // Deterministic realistic stats based on style & distance
  let speed = 82;
  let stamina = 78;
  let power = 78;
  let guts = 76;
  let wit = 78;

  if (mappedStyles.includes("front-runner")) {
    speed += 8;
    wit += 4;
  }
  if (mappedStyles.includes("pace-runner")) {
    speed += 4;
    stamina += 4;
    wit += 4;
  }
  if (mappedStyles.includes("late-runner")) {
    power += 8;
    speed += 4;
    guts += 4;
  }
  if (mappedStyles.includes("end-runner")) {
    power += 12;
    stamina += 6;
    guts += 8;
    wit -= 4;
  }

  if (distance.includes("sprint")) {
    speed += 6;
    power += 4;
    stamina -= 8;
  }
  if (distance.includes("long")) {
    stamina += 12;
    guts += 6;
    speed -= 4;
  }
  if (surface.includes("dirt")) {
    power += 4;
    guts += 4;
  }

  // Name hash for slight variation (1-4)
  const hash = item.name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % 5;
  speed = Math.min(98, Math.max(70, speed + hash - 2));
  stamina = Math.min(98, Math.max(68, stamina + (hash % 3) - 1));
  power = Math.min(98, Math.max(68, power + ((hash + 1) % 3) - 1));
  guts = Math.min(98, Math.max(68, guts + ((hash + 2) % 3) - 1));
  wit = Math.min(98, Math.max(68, wit + hash - 2));

  return {
    category: categoryStr,
    image: item.image,
    name: item.name,
    feedback: desc,
    stats: { speed, stamina, power, guts, wit }
  };
});

console.log("Processed", finalCharacters.length, "characters.");

// Now replace in lib/gameData.ts
const gameDataPath = path.join(__dirname, "../lib/gameData.ts");
let gameData = fs.readFileSync(gameDataPath, "utf8");

// Locate GAME_SECTIONS.uma.characters array
const startMarker = 'uma: {';
const charactersMarker = 'characters: [';

const umaIndex = gameData.indexOf(startMarker);
if (umaIndex === -1) {
  console.error("Could not find uma: { in gameData.ts");
  process.exit(1);
}

const charIndex = gameData.indexOf(charactersMarker, umaIndex);
if (charIndex === -1) {
  console.error("Could not find characters: [ under uma");
  process.exit(1);
}

// Find closing of characters array: match brackets
let bracketCount = 0;
let endIndex = -1;
for (let i = charIndex + charactersMarker.length - 1; i < gameData.length; i++) {
  if (gameData[i] === '[') bracketCount++;
  else if (gameData[i] === ']') {
    bracketCount--;
    if (bracketCount === 0) {
      endIndex = i;
      break;
    }
  }
}

if (endIndex === -1) {
  console.error("Could not find closing bracket of characters");
  process.exit(1);
}

const formattedCharactersJson = JSON.stringify(finalCharacters, null, 6)
  .split("\n")
  .map(l => "    " + l)
  .join("\n")
  .trim();

const newGameData = gameData.slice(0, charIndex + "characters: ".length) +
  formattedCharactersJson +
  gameData.slice(endIndex + 1);

fs.writeFileSync(gameDataPath, newGameData, "utf8");
console.log("Successfully updated lib/gameData.ts with", finalCharacters.length, "Uma Musume characters!");
