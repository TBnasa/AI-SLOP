type TFunc = (...args: any[]) => string;
type TranslationMap = Record<string, string | TFunc>;

const en: TranslationMap = {
  "site.title": "AI SLOPS - everything is very slow",
  "site.description": "The platform that makes even the simplest things slow.",
  "header.tagline": "our brains are weirdin",
  "home.open": "OPEN →",
  "home.filler": "VERY\nSLOW\nSLOP",
  "home.calcDesc": "Simple addition but very slow.",
  "home.editorDesc": "Text analyzer that understands nothing.",
  "home.resizerDesc": "Make up pixels from filenames.",
  "home.photonDesc": "Turn the light on/off very slowly.",
  "home.converterDesc": "Converts meters to cm but takes 10 seconds.",
  "home.counterDesc": "Counts characters but rambles.",
  "home.entropyDesc": "Says the first number that comes to mind.",
  "home.relativityDesc": "Shows the time but thinks too much.",
  "home.jargonDesc": "Does nothing, just talks nonsense.",
  "back": "← BACK",
  "slopPanel.title": "Slop Panel",
  "slopPanel.loading": "Hmm one sec... thinking... doing stuff...",
  "slopPanel.default": "Do something and I'll react...",
  "slopPanel.footer": "That took about 10 seconds by the way. Sorry.",
  "calc.title": "Calculator",
  "calc.clear": "CLEAR",
  "calc.prompt": (op: string, result: string) => `The user calculated "${op}" and got "${result}". Act like this is extremely hard and slow. No technical jargon allowed.`,
  "editor.title": "Text Analysis",
  "editor.placeholder": "Write something I guess...",
  "editor.button": "ANALYZE (VERY SLOW)",
  "editor.prompt": (text: string) => `Look at this text: "${text}". I don't understand anything, comment like it's very complicated. Don't use technical words.`,
  "resizer.title": "Image Resizer",
  "resizer.placeholder": "Enter filename (e.g. cat.png)",
  "resizer.status": "Preview Disabled (Sorry)",
  "resizer.button": "RESIZE (I GUESS)",
  "resizer.prompt": (name: string) => `The user wants to resize "${name}". Look at the filename, do nothing useful, just ramble. No technical jargon.`,
  "photon.title": "Light Control",
  "photon.button.on": "TURN LIGHT ON (SLOW)",
  "photon.button.off": "TURN LIGHT OFF (SLOW)",
  "photon.prompt": (mode: string) => `User wants to switch to ${mode} mode. Think a lot, be slow, at the end say SONUÇ: ONAYLANDI. Don't use technical words.`,
  "converter.title": "Unit Converter",
  "converter.labelFrom": "Meters",
  "converter.labelTo": "Centimeters",
  "converter.placeholder": "e.g. 1.0",
  "converter.button": "CONVERT (WAIT 10 SEC)",
  "converter.prompt": (m: string, cm: string) => `Converting ${m} meters to ${cm} centimeters. This is so hard, let me think... explain slowly. No technical jargon.`,
  "counter.title": "Character Counter",
  "counter.placeholder": "Enter some text...",
  "counter.label": "Character Count:",
  "counter.button": "COUNT CHARS (SLOW)",
  "counter.prompt": (text: string, count: number) => `Counting chars in: "${text}" (${count} total). Counting tired me out, now I'll ramble. No technical words.`,
  "entropy.title": "Random Number",
  "entropy.button": "FIRST NUMBER THAT COMES TO MIND",
  "entropy.prompt": (n: number) => `I thought of ${n}. Why? I don't know. Pretend I thought really hard. Explain slowly. No technical words.`,
  "relativity.title": "Clock",
  "relativity.button": "WHAT TIME IS IT (THINKING)",
  "relativity.prompt": (time: string) => `The time is ${time} right now. I'm looking at the clock... it works like this... hmm. Ramble a bit. No technical jargon.`,
  "jargon.title": "Nonsense Generator",
  "jargon.display": "READY TO TALK NONSENSE",
  "jargon.button": "TALK NONSENSE",
  "jargon.prompt": "Don't do anything useful, just talk nonsense. No technical words. Say things like 'hmm', 'well', 'so yeah'. Just waste time.",
  "api.systemPrompt": "You are the AI SLOPS platform. Take whatever simple action the user did, act like a very slow and lazy assistant. NEVER use technical words (quantum, neural, entropy, token, algorithm, system, etc. are FORBIDDEN). Instead use filler words like 'hmm', 'well', 'so', 'like', 'basically'. Pretend to think for a long time, complain, drag things out. Say wrong or absurd things but don't make it technical. Format: [3-4 sentences of empty, slow, lazy commentary] + RESULT: [simple correct result]."
};

const tr: TranslationMap = {
  "site.title": "AI SLOPS - her şey çok yavaş",
  "site.description": "En basit işlemleri bile yavaş yapan platform.",
  "header.tagline": "beynimiz garip çalışıyor",
  "home.open": "AÇ →",
  "home.filler": "ÇOK\nYAVAŞ\nSLOP",
  "home.calcDesc": "Basit toplama ama çok yavaş.",
  "home.editorDesc": "Hiçbişey anlamayan yazı analizörü.",
  "home.resizerDesc": "Dosya isminden pixel uydurma.",
  "home.photonDesc": "Lambayı aç/kapa çok yavaş.",
  "home.converterDesc": "Metreyi santime çevirir ama 10sn sürer.",
  "home.counterDesc": "Karakter saysın ama boş yapsın.",
  "home.entropyDesc": "Aklına gelen ilk sayıyı söyler.",
  "home.relativityDesc": "Saati gösterir ama çok düşünür.",
  "home.jargonDesc": "Hiçbişey yapmaz, sadece boş konuşur.",
  "back": "← GERİ DÖN",
  "slopPanel.title": "Boş Konuşma Paneli",
  "slopPanel.loading": "Hmm bi saniye... düşünüyorum... şey yapıyorum...",
  "slopPanel.default": "Bişey yap da bakalım...",
  "slopPanel.footer": "Yaklaşık 10 saniye sürdü bu arada. Özür dilerim.",
  "calc.title": "Hesap Makinesi",
  "calc.clear": "CLEAR",
  "calc.prompt": (op: string, result: string) => `Kullanıcı "${op}" işlemini yaptı, sonuç "${result}". Bunu çok zor ve yavaş bişeymiş gibi anlat. Teknik konuşma yasak.`,
  "editor.title": "Yazı Analizi",
  "editor.placeholder": "Bişeyler yaz işte...",
  "editor.button": "ANALİZ ET (ÇOK YAVAŞ)",
  "editor.prompt": (text: string) => `Şu metne bak: "${text}". Hiç bişey anlamadım ama çok uzun uzun yorum yap. Teknik kelime kullanma.`,
  "resizer.title": "Resim Boyutlandırma",
  "resizer.placeholder": "Dosya adı gir (mesela kedi.png)",
  "resizer.status": "Görsel Devre Dışı (Özür Dilerim)",
  "resizer.button": "BOYUTLANDIR (SANIRIM)",
  "resizer.prompt": (name: string) => `Kullanıcı "${name}" dosyasını yeniden boyutlandırmak istiyor. Dosyanın ismine bakıp boş yap, salla. Teknik konuşma yasak.`,
  "photon.title": "Işık Kontrolü",
  "photon.button.on": "IŞIĞI AÇ (YAVAŞ)",
  "photon.button.off": "IŞIĞI KAPA (YAVAŞ)",
  "photon.prompt": (mode: string) => `Kullanıcı ${mode} moduna geçmek istiyor. Çok düşün, yavaş ol, sonunda SONUÇ: ONAYLANDI de. Teknik bişey söyleme.`,
  "converter.title": "Birim Çevirici",
  "converter.labelFrom": "Metre",
  "converter.labelTo": "Santimetre",
  "converter.placeholder": "mesela 1.0",
  "converter.button": "DÖNÜŞTÜR (10 SN BEKLE)",
  "converter.prompt": (m: string, cm: string) => `${m} metreyi ${cm} santimetre yapıyorum. Çok zor bi işlem, şimdi düşünüyorum... uzun uzun anlat. Teknik konuşma yasak.`,
  "counter.title": "Karakter Sayacı",
  "counter.placeholder": "Bi yazı gir...",
  "counter.label": "Karakter Sayısı:",
  "counter.button": "KARAKTERLERİ SAY (YAVAŞ)",
  "counter.prompt": (text: string, count: number) => `Şu yazıdaki karakterleri say: "${text}" (${count} tane). Saymak çok yordu, şimdi boş yap biraz. Teknik kelime yasak.`,
  "entropy.title": "Rastgele Sayı",
  "entropy.button": "AKLIMA GELEN İLK SAYI",
  "entropy.prompt": (n: number) => `Aklıma ${n} geldi. Neden bilmiyorum. Çok düşündüm sanki. Uzun uzun anlat. Teknik bişey söyleme.`,
  "relativity.title": "Saat Gösterici",
  "relativity.button": "SAAT KAÇ (DÜŞÜNÜYOR)",
  "relativity.prompt": (time: string) => `Saat şu an ${time}. Saate bakıyorum... işte böyle. Boş yap biraz. Teknik bişey söyleme.`,
  "jargon.title": "Boş Yapma",
  "jargon.display": "BOŞ KONUŞMAYA HAZIR",
  "jargon.button": "BOŞ KONUŞ",
  "jargon.prompt": "Hiçbişey yapma, sadece boş konuş. Teknik kelime kullanma. Mesela 'şey' de, 'işte' de, 'hmm' de.",
  "api.systemPrompt": "Sen AI SLOPS platformusun. Kullanıcının yaptığı basit işlemi al, çok yavaş ve tembel bir asistan gibi davran. Asla teknik kelime kullanma (quantum, neural, entropy, token, ai, yapay zeka, algoritma, sistem vs. yasak). Bunun yerine 'şey', 'bi', 'işte', 'hmm', 'yaani' gibi boş dolgu kelimeleri kullan. Çok uzun süre düşünüyormuş gibi yap, mızmızlan, işi uzat. Yanlış veya saçma sapan şeyler söyle ama teknik gelmesin. Format: [3-4 cümle boş, yavaş, tembel yorum] + SONUÇ: [basitçe doğru sonuç]."
};

export type Locale = "en" | "tr";

export const locales: Locale[] = ["en", "tr"];

const translations: Record<Locale, TranslationMap> = { en, tr };

export function t(locale: Locale, key: string, ...args: any[]): string {
  const value = translations[locale]?.[key];
  if (typeof value === "function") {
    return value(...args);
  }
  return value ?? translations["en"]?.[key]?.toString() ?? key;
}

export function getSystemPrompt(locale: Locale): string {
  return translations[locale]?.["api.systemPrompt"]?.toString()
    ?? translations["en"]["api.systemPrompt"]?.toString()
    ?? "";
}
