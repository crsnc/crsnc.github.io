// Add projects in display order. Image paths are relative to public/.
export const profile = {
  name: 'Ahmet Can SARAÇ',
  intro: 'Son sınıf YBS öğrencisi olarak web siteleri ve uygulamaları geliştiriyorum.',
  location: 'Antalya, Türkiye',
  about: [
    'Akdeniz Üniversitesi Yönetim Bilişim Sistemleri Bölümünde son sınıf öğrencisiyim. Bir uygulama geliştirirken hem onu kullanacak kişilerin hem de işi yürüten ekibin ihtiyaçlarını düşünüyorum.',
    'Full-stack web geliştirmeye odaklanıyorum. Long Beach için geliştirdiğim misafir uygulamasında otel rehberini ve günlük etkinlikleri tek yerde topladım. Özellikle müşteri ilişkileri yönetimi (CRM), iş süreçlerini iyileştirme ve kullanıcı deneyimiyle ilgileniyorum.'
  ],
  en: {
    intro: 'I’m a final-year MIS student building websites and web apps.',
    location: 'Antalya, Türkiye',
    about: [
      'I’m in my final year studying Management Information Systems at Akdeniz University. When I build an app, I think about the people who use it and the team that runs it.',
      'I focus on full-stack web development. For Long Beach, I built a guest app that brings the hotel guide and daily activities together. I’m particularly interested in CRM, improving business processes, and user experience.'
    ]
  },
  github: 'https://github.com/crsnc',
  linkedin: 'https://www.linkedin.com/in/caansarac/',
  email: 'caansarac@gmail.com'
};

export const skills = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'] },
  { group: 'Backend', items: ['ASP.NET', 'C#', 'SQL', 'PostgreSQL', 'Neo4j', 'REST API'] },
  { group: 'İlgi alanları', en: { group: 'Interests', items: ['CRM systems', 'Business process optimization', 'UX design', 'n8n'] }, items: ['CRM sistemleri', 'İş süreci optimizasyonu', 'UX tasarımı', 'n8n'] }
];

export const projects = [
  {
    name: 'Long Beach Resorts', category: 'Web sitesi', image: 'work/resort.webp',
    en: { category: 'Website', detailAlt: 'Room selection at Long Beach Alanya', alt: 'Long Beach Resorts homepage',
      summary: 'A multilingual website for exploring two resorts in Alanya and Didim, their rooms, and the experiences on offer.',
      features: 'Room galleries, resort overviews, and content that editors can update separately for each language.' },
    detailImage: 'work/resort-detail.webp', detailAlt: 'Alanya oda seçkisi',
    alt: 'Long Beach Resorts web sitesinin ana ekranı', format: 'desktop',
    summary: 'Alanya ve Didim’deki iki tesisi, odalarını ve deneyimlerini keşfetmek için çok dilli bir web sitesi.',
    features: 'Oda galerileri, tesis tanıtımları ve dil bazında düzenlenebilen içerikler.',
    technologies: ['React', 'Supabase'], url: 'https://longbeach.com.tr/'
  },
  {
    name: 'Long Beach Web App', category: 'Misafir uygulaması', image: 'work/guest.webp',
    en: { category: 'Guest app', detailAlt: 'Frequently asked questions in the guest guide', alt: 'Alanya home screen in the Long Beach guest app',
      summary: 'A mobile web app that helps guests find daily activities, hotel services, and practical information during their stay.',
      features: 'A guest guide, event calendar, and service directory tailored to each resort.' },
    detailImage: 'work/guest-detail.webp', detailAlt: 'Misafir rehberinde sık sorulan sorular',
    alt: 'Long Beach misafir uygulamasının Alanya ana ekranı', format: 'mobile',
    summary: 'Konaklama sırasında günlük etkinlikleri, otel hizmetlerini ve misafir rehberini telefondan takip etmeye yarayan web uygulaması.',
    features: 'Tesise göre değişen rehber, etkinlik takvimi ve hizmet listeleri.',
    technologies: ['React', 'ASP.NET'], url: 'https://webapp.lbresorts.com/'
  },
  {
    name: 'MTN Mühendislik & İnşaat', category: 'Kurumsal web sitesi', image: 'work/mtn.webp',
    en: { category: 'Corporate website', detailAlt: 'Contact and quote request form', alt: 'Construction site on the MTN homepage',
      summary: 'A website showcasing the services and projects of an engineering firm based in Antalya.',
      features: 'Visitors can browse infrastructure, residential, and commercial projects and request a quote.' },
    detailImage: 'work/mtn-detail.webp', detailAlt: 'İletişim ve teklif talep formu',
    alt: 'MTN ana sayfasında şantiye fotoğrafı üzerinde “Geleceği İnşa Ediyoruz” başlığı', format: 'desktop',
    summary: 'Antalya merkezli mühendislik firmasının hizmetlerini ve projelerini tanıtan kurumsal web sitesi.',
    features: 'Ziyaretçiler altyapı, konut ve ticari projeleri inceleyip teklif talebi oluşturabiliyor.',
    technologies: ['React', 'ASP.NET', 'MySQL']
  }
];
