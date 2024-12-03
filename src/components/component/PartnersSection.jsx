// src/components/PartnersSection.jsx
import Image from 'next/image';

export function PartnersSection() {
  const partners = [
    { id: 1, name: 'Partner 1', logo: '/pictures/DC_Donates_logo_inverted.png', link: 'https://www.datacamp.com/donates' },
    { id: 2, name: 'Partner 2', logo: '/pictures/adei.png', link: 'https://www.onda.ma/' },

  ];

  return (
    <section className="bg-background m-10  py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-6">
          Our Partners
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          We proudly collaborate with leading organizations to achieve our mission.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center justify-center">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center hover:scale-105 transition-transform"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={100}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
