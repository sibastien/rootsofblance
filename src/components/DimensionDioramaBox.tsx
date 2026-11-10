'use client';

import Image from 'next/image';

/* ─────────────────────────────────────────────────────────────────────────────
   DIMENSION EDITORIAL DIORAMA (Section 3 Context)
   High-resolution cinematic editorial photography for each dimension:
   • Emotional: Calm, pristine morning waters in mist
   • Mental: Pure highland breeze & luminous horizon
   • Physical: Ancient Mediterranean olive tree trunk & grounded roots
   • Spiritual: Sacred golden morning light filtering through the canopy
───────────────────────────────────────────────────────────────────────────── */

interface Props {
  dimensionId: string;
}

const DIMENSION_DATA: Record<
  string,
  {
    image: string;
    alt: string;
    labelAr: string;
    labelEn: string;
    elementAr: string;
    elementEn: string;
  }
> = {
  emotional: {
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Calm water surface in stillness',
    labelAr: 'سكون وانسياب المشاعر دون أحكام',
    labelEn: 'Still waters and gentle emotional awareness',
    elementAr: 'عنصر الماء • التدفق والمرونة',
    elementEn: 'Water Element • Flow & Receptivity',
  },
  mental: {
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Mountain morning air and clarity',
    labelAr: 'صفاء الذهن والتحرر من ضجيج الأفكار',
    labelEn: 'Clarity of mind and cognitive spaciousness',
    elementAr: 'عنصر الهواء • الوضوح والسكينة',
    elementEn: 'Air Element • Clarity & Presence',
  },
  physical: {
    image:
      'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Ancient olive tree trunk and roots',
    labelAr: 'حيوية الجذور وتناغم الجهاز العصبي',
    labelEn: 'Root vitality and somatic nervous regulation',
    elementAr: 'عنصر الأرض • التجذر والقوة',
    elementEn: 'Earth Element • Grounding & Embodiment',
  },
  spiritual: {
    image:
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=80',
    alt: 'Golden morning light filtering through canopy',
    labelAr: 'الاتصال بالمعنى والسكينة الداخلية',
    labelEn: 'Inner sacred connection and reverence',
    elementAr: 'عنصر الأثير • النور والوعي',
    elementEn: 'Ether Element • Purpose & Wholeness',
  },
};

export default function DimensionDioramaBox({ dimensionId }: Props) {
  const data = DIMENSION_DATA[dimensionId] || DIMENSION_DATA.emotional;

  return (
    <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-sand-300 shadow-soft bg-sand-100 group">
      {/* High-Resolution Cinematic Image */}
      <Image
        key={dimensionId}
        src={data.image}
        alt={data.alt}
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.92]"
      />

      {/* Editorial Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-earth-950/25 to-transparent" />

      {/* Subtle Brand Logo Watermark */}
      <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 w-10 h-10 opacity-25 invert pointer-events-none">
        <Image src="/images/logo.png" alt="" width={40} height={40} className="object-contain" />
      </div>

      {/* Editorial Caption Bar */}
      <div className="absolute bottom-3.5 left-4 right-4 text-left rtl:text-right text-white">
        <span className="text-[10px] uppercase tracking-widest text-sand-300 font-semibold block mb-1">
          {data.elementAr}
        </span>
        <p className="font-serif text-sm text-sand-50 font-normal leading-snug">
          {data.labelAr}
        </p>
      </div>
    </div>
  );
}
