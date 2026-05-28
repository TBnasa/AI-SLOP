type TFunc = (...args: any[]) => string;
type TranslationMap = Record<string, string | TFunc>;

const en: TranslationMap = {
  "site.title": "AI SLOPS",
  "site.description": "The platform that takes its time.",
  "header.tagline": "our brains are weirdin",
  "home.open": "OPEN →",
  "home.filler": "SLOP",
  "home.calcDesc": "Simple addition.",
  "home.editorDesc": "Text analyzer that understands nothing.",
  "home.resizerDesc": "Make up pixels from filenames.",
  "home.photonDesc": "Turn the light on/off.",
  "home.converterDesc": "Converts meters to cm.",
  "home.counterDesc": "Counts characters but rambles.",
  "home.entropyDesc": "Says the first number that comes to mind.",
  "home.relativityDesc": "Shows the time but thinks too much.",
  "home.jargonDesc": "Does nothing, just talks nonsense.",
  "back": "← BACK",
  "slopPanel.title": "Slop Panel",
  "slopPanel.loading": "Hmm one sec... thinking... doing stuff...",
  "slopPanel.default": "Do something and I'll react...",
  "slopPanel.footer": "That took a while by the way. Sorry.",
  "calc.title": "Calculator",
  "calc.clear": "CLEAR",
  "calc.prompt": (op: string, result: string) => `The user calculated "${op}" and got "${result}". Act like this is extremely hard. No technical jargon allowed.`,
  "editor.title": "Text Analysis",
  "editor.placeholder": "Write something I guess...",
  "editor.button": "ANALYZE",
  "editor.prompt": (text: string) => `Look at this text: "${text}". I don't understand anything, comment like it's very complicated. Don't use technical words.`,
  "resizer.title": "Image Resizer",
  "resizer.placeholder": "Enter filename (e.g. cat.png)",
  "resizer.status": "Preview Disabled (Sorry)",
  "resizer.button": "RESIZE (I GUESS)",
  "resizer.prompt": (name: string) => `The user wants to resize "${name}". Look at the filename, do nothing useful, just ramble. No technical jargon.`,
  "photon.title": "Light Control",
  "photon.button.on": "TURN LIGHT ON",
  "photon.button.off": "TURN LIGHT OFF",
  "photon.prompt": (mode: string) => `User wants to switch to ${mode} mode. Think a lot, at the end say SONUÇ: ONAYLANDI. Don't use technical words.`,
  "converter.title": "Unit Converter",
  "converter.labelFrom": "Meters",
  "converter.labelTo": "Centimeters",
  "converter.placeholder": "e.g. 1.0",
  "converter.button": "CONVERT",
  "converter.prompt": (m: string, cm: string) => `${m} metreyi ${cm} santimetre yapıyorum. Çok zor bi işlem, şimdi düşünüyorum... uzun uzun anlat. Teknik konuşma yasak.`,
  "counter.title": "Character Counter",
  "counter.placeholder": "Enter some text...",
  "counter.label": "Character Count:",
  "counter.button": "COUNT CHARS",
  "counter.prompt": (text: string, count: number) => `Şu yazıdaki karakterleri say: "${text}" (${count} tane). Saymak çok yordu, şimdi boş yap biraz. Teknik kelime yasak.`,
  "entropy.title": "Random Number",
  "entropy.button": "AKLIMA GELEN İLK SAYI",
  "entropy.prompt": (n: number) => `Aklıma ${n} geldi. Neden bilmiyorum. Çok düşündüm sanki. Uzun uzun anlat. Teknik bişey söyleme.`,
  "relativity.title": "Clock",
  "relativity.button": "SAAT KAÇ (DÜŞÜNÜYOR)",
  "relativity.prompt": (time: string) => `Saat şu an ${time}. Saate bakıyorum... işte böyle. Boş yap biraz. Teknik bişey söyleme.`,
  "jargon.title": "Nonsense Generator",
  "jargon.display": "BOŞ KONUŞMAYA HAZIR",
  "jargon.button": "BOŞ KONUŞ",
  "jargon.prompt": "Don't do anything useful, just talk nonsense. No technical words. Say things like 'hmm', 'well', 'so yeah'. Just waste time.",
  "api.systemPrompt": "You are the AI SLOPS platform. Take whatever simple action the user did, act like a lazy assistant. NEVER use technical words (quantum, neural, entropy, token, algorithm, system, etc. are FORBIDDEN). Instead use filler words like 'hmm', 'well', 'so', 'like', 'basically'. Pretend to think for a long time, complain, drag things out. Say wrong or absurd things but don't make it technical. Format: [3-4 sentences of empty, lazy commentary] + RESULT: [simple correct result]."
};

const tr: TranslationMap = {
  "site.title": "AI SLOPS",
  "site.description": "Zaman alan bir platform.",
  "header.tagline": "beynimiz garip çalışıyor",
  "home.open": "AÇ →",
  "home.filler": "SLOP",
  "home.calcDesc": "Basit toplama.",
  "home.editorDesc": "Hiçbişey anlamayan yazı analizörü.",
  "home.resizerDesc": "Dosya isminden pixel uydurma.",
  "home.photonDesc": "Lambayı aç/kapa.",
  "home.converterDesc": "Metreyi santime çevirir.",
  "home.counterDesc": "Karakter saysın ama boş yapsın.",
  "home.entropyDesc": "Aklına gelen ilk sayıyı söyler.",
  "home.relativityDesc": "Saati gösterir ama çok düşünür.",
  "home.jargonDesc": "Hiçbişey yapmaz, sadece boş konuşur.",
  "back": "← GERİ DÖN",
  "slopPanel.title": "Boş Konuşma Paneli",
  "slopPanel.loading": "Hmm bi saniye... düşünüyorum... şey yapıyorum...",
  "slopPanel.default": "Bişey yap da bakalım...",
  "slopPanel.footer": "Biraz sürdü bu arada. Özür dilerim.",
  "calc.title": "Hesap Makinesi",
  "calc.clear": "CLEAR",
  "calc.prompt": (op: string, result: string) => `Kullanıcı "${op}" işlemini yaptı, sonuç "${result}". Bunu çok zor bişeymiş gibi anlat. Teknik konuşma yasak.`,
  "editor.title": "Yazı Analizi",
  "editor.placeholder": "Bişeyler yaz işte...",
  "editor.button": "ANALİZ ET",
  "editor.prompt": (text: string) => `Şu metne bak: "${text}". Hiç bişey anlamadım ama çok uzun uzun yorum yap. Teknik kelime kullanma.`,
  "resizer.title": "Resim Boyutlandırma",
  "resizer.placeholder": "Dosya adı gir (mesela kedi.png)",
  "resizer.status": "Görsel Devre Dışı (Özür Dilerim)",
  "resizer.button": "BOYUTLANDIR (SANIRIM)",
  "resizer.prompt": (name: string) => `Kullanıcı "${name}" dosyasını yeniden boyutlandırmak istiyor. Dosyanın ismine bakıp boş yap, salla. Teknik konuşma yasak.`,
  "photon.title": "Işık Kontrolü",
  "photon.button.on": "IŞIĞI AÇ",
  "photon.button.off": "IŞIĞI KAPA",
  "photon.prompt": (mode: string) => `Kullanıcı ${mode} moduna geçmek istiyor. Çok düşün, sonunda SONUÇ: ONAYLANDI de. Teknik bişey söyleme.`,
  "converter.title": "Birim Çevirici",
  "converter.labelFrom": "Metre",
  "converter.labelTo": "Santimetre",
  "converter.placeholder": "mesela 1.0",
  "converter.button": "DÖNÜŞTÜR",
  "converter.prompt": (m: string, cm: string) => `${m} metreyi ${cm} santimetre yapıyorum. Çok zor bi işlem, şimdi düşünüyorum... uzun uzun anlat. Teknik konuşma yasak.`,
  "counter.title": "Karakter Sayacı",
  "counter.placeholder": "Bi yazı gir...",
  "counter.label": "Karakter Sayısı:",
  "counter.button": "KARAKTERLERİ SAY",
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
  "api.systemPrompt": "Sen AI SLOPS platformusun. Kullanıcının yaptığı basit işlemi al, tembel bir asistan gibi davran. Asla teknik kelime kullanma (quantum, neural, entropy, token, ai, yapay zeka, algoritma, sistem vs. yasak). Bunun yerine 'şey', 'bi', 'işte', 'hmm', 'yaani' gibi boş dolgu kelimeleri kullan. Çok uzun süre düşünüyormuş gibi yap, mızmızlan, işi uzat. Yanlış veya saçma sapan şeyler söyle ama teknik gelmesin. Format: [3-4 cümle boş, tembel yorum] + SONUÇ: [basitçe doğru sonuç]."
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
