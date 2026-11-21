// Add projects in display order. Image paths are relative to public/.
export const profile = {
  name: 'Ahmet Can SARAÇ',
  intro: 'Son sınıf YBS öğrencisi olarak web siteleri ve uygulamaları geliştiriyorum.',
  location: 'Antalya, Türkiye',
  about: [
    'Akdeniz Üniversitesi Yönetim Bilişim Sistemleri Bölümünde son sınıf öğrencisiyim. Bir uygulama geliştirirken hem onu kullanacak kişilerin hem de işi yürüten ekibin ihtiyaçlarını düşünüyorum.',
    'Full-stack web geliştirmeye odaklanıyorum. Long Beach için geliştirdiğim misafir uygulamasında otel rehberini ve günlük etkinlikleri tek yerde topladım. Özellikle müşteri ilişkileri yönetimi (CRM), iş süreçlerini iyileştirme ve kullanıcı deneyimiyle ilgileniyorum.'
  ],
  github: 'https://github.com/crsnc',
  linkedin: 'https://www.linkedin.com/in/caansarac/',
  email: 'caansarac@gmail.com'
};

export const skills = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'] },
  { group: 'Backend', items: ['ASP.NET', 'C#', 'SQL', 'PostgreSQL', 'Neo4j', 'REST API'] },
  { group: 'İlgi alanları', items: ['CRM sistemleri', 'İş süreci optimizasyonu', 'UX tasarımı', 'n8n'] }
];

export const projects = [
  {
    name: 'Long Beach Resorts', category: 'Web sitesi', image: 'work/resort.webp',
    detailImage: 'work/resort-detail.webp', detailAlt: 'Alanya oda seçkisi',
    alt: 'Long Beach Resorts web sitesinin ana ekranı', format: 'desktop',
    summary: 'Alanya ve Didim’deki iki tesisi, odalarını ve deneyimlerini keşfetmek için çok dilli bir web sitesi.',
    features: 'Oda galerileri, tesis tanıtımları ve dil bazında düzenlenebilen içerikler.',
    technologies: ['React', 'Supabase'], url: 'https://longbeach.com.tr/'
  },
  {
    name: 'Long Beach Web App', category: 'Misafir uygulaması', image: 'work/guest.webp',
    detailImage: 'work/guest-detail.webp', detailAlt: 'Misafir rehberinde sık sorulan sorular',
    alt: 'Long Beach misafir uygulamasının Alanya ana ekranı', format: 'mobile',
    summary: 'Konaklama sırasında günlük etkinlikleri, otel hizmetlerini ve misafir rehberini telefondan takip etmeye yarayan web uygulaması.',
    features: 'Tesise göre değişen rehber, etkinlik takvimi ve hizmet listeleri.',
    technologies: ['React', 'ASP.NET'], url: 'https://webapp.lbresorts.com/'
  },
  {
    name: 'MTN Mühendislik & İnşaat', category: 'Kurumsal web sitesi', image: 'work/mtn.webp',
    detailImage: 'work/mtn-detail.webp', detailAlt: 'İletişim ve teklif talep formu',
    alt: 'MTN ana sayfasında şantiye fotoğrafı üzerinde “Geleceği İnşa Ediyoruz” başlığı', format: 'desktop',
    summary: 'Antalya merkezli mühendislik firmasının hizmetlerini ve projelerini tanıtan kurumsal web sitesi.',
    features: 'Ziyaretçiler altyapı, konut ve ticari projeleri inceleyip teklif talebi oluşturabiliyor.',
    technologies: ['React', 'ASP.NET', 'MySQL']
  }
];
